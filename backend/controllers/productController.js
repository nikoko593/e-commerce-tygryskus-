import { v2 as cloudinary } from "cloudinary"
import productModel from "../models/productModel.js"

// Function for add product
const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, subCategory, sizes, bestseller } = req.body;

        // Check if required fields are present
        if (!name || !description || !price || !category || !subCategory || !sizes) {
            return res.status(400).json({ success: false, message: "Missing required fields" });
        }

        // Handle image uploads
        const images = [];
        if (req.files) {
            console.log(req.files); // Log the files received

            // Safely access each image field
            const image1 = req.files.image1 ? req.files.image1[0] : null;
            const image2 = req.files.image2 ? req.files.image2[0] : null;
            const image3 = req.files.image3 ? req.files.image3[0] : null;
            const image4 = req.files.image4 ? req.files.image4[0] : null;

            // Filter out null images
            const validImages = [image1, image2, image3, image4].filter((item) => item !== null);

            // Upload images to Cloudinary
            const imagesUrl = await Promise.all(
                validImages.map(async (item) => {
                    console.log(item.path); // Log the file path being uploaded
                    const result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' });
                    console.log(result.secure_url); // Log the secure URL
                    return result.secure_url; // Return the URL of the uploaded image
                })
            );

            images.push(...imagesUrl); // Add uploaded image URLs to the images array
        }

        // Prepare product data
        const productData = {
            name,
            description,
            category,
            price: Number(price),
            subCategory,
            bestseller: bestseller === "true", // Convert to boolean
            sizes: JSON.parse(sizes), // Parse sizes from string to array/object
            image: images, // Add uploaded image URLs
            date: Date.now(),
        };

        console.log(productData); // Log the final product data

        // Create and save the product
        const product = new productModel(productData);
        await product.save();

        // Send success response
        res.status(201).json({ success: true, message: "Product Added", product });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// Function for list product
const listProducts = async (req, res) => {
    try {
      // Fetch all products from the database
      const products = await productModel.find({});
  
      // Log the products to the terminal
      console.log('Products fetched from the database:');
      console.log(products);
  
      // Send the products as a JSON response
      res.json({ success: true, products });
    } catch (error) {
      // Log the error to the terminal
      console.error('Error fetching products:', error);
  
      // Send an error response
      res.status(500).json({ success: false, message: error.message });
    }
  };

// Function for removing product
const removeProduct = async (req,res) => {
    try {
        
        await productModel.findByIdAndDelete(req.body.id)
        res.json({success:true,message:"Product Removed"})

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
}

// Function for single product information
const singleProduct = async (req,res) => {
    try {
        
        const { productId } = req.body
        const product = await productModel.findById(productId)
        res.json({success:true,product})

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
}

export { listProducts, addProduct, removeProduct, singleProduct }