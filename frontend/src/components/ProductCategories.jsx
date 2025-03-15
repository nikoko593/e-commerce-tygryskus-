import React from 'react';
import { Link } from 'react-router-dom';

// Import images for shirts and pants
import shirt1 from "../assets/shirt1.jpg";
import shirt2 from "../assets/shirt2.jpg";
import shirt3 from "../assets/shirt3.jpg";
import pants1 from "../assets/pants1.jpg";
import pants2 from "../assets/pants2.jpg";
import pants3 from "../assets/pants3.jpg";

// Import the RotatingCube component
import RotatingCube from './RotatingCube';

const ProductCategories = () => {
  // Reduce image repetition
  const shirtImages = [shirt1, shirt2, shirt3];
  const pantsImages = [pants1, pants2, pants3];

  // Function to repeat images
  const repeatImages = (images, count = 9) => {
    const repeatedImages = [];
    while (repeatedImages.length < count) {
      repeatedImages.push(...images);
    }
    return repeatedImages.slice(0, count);
  };

  return (
    <div className="container flex justify-between items-center">
      {/* Left Big Box - Shirts */}
      <Link to="/categories/shirts" className="big-box-link w-1/4"> 
        <div className="big-box">
          <h2 className="box-title">Shirts</h2>
          <div className="small-box-container grid grid-cols-3 gap-2">
            {repeatImages(shirtImages).map((image, index) => (
              <div key={index} className="small-box">
                <img 
                  src={image} 
                  alt={`Shirt ${index + 1}`} 
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </Link>

      {/* Rotating Cube in the Middle */}
      <div className="w-1/2 flex justify-center">
        <RotatingCube />
      </div>

      {/* Right Big Box - Pants */}
      <Link to="/categories/pants" className="big-box-link w-1/4"> 
        <div className="big-box">
          <h2 className="box-title">Pants</h2>
          <div className="small-box-container grid grid-cols-3 gap-2">
            {repeatImages(pantsImages).map((image, index) => (
              <div key={index} className="small-box">
                <img 
                  src={image} 
                  alt={`Pants ${index + 1}`} 
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCategories;