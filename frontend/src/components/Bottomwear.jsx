import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from './Title';
import ProductItem from './ProductItem';
import { useParams } from 'react-router-dom';

const Bottomwear = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState(['Bottomwear']); 
  const [sortType, setSortType] = useState('relevant');
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);

  const { collectionType } = useParams();

  // Debug logging for products
  useEffect(() => {
    console.log('All Products:', products);
    console.log('Total Products Count:', products.length);
    
    const bottomwearProducts = products.filter(item => item.subCategory === 'Bottomwear');
    console.log('Bottomwear Products:', bottomwearProducts);
    console.log('Bottomwear Products Count:', bottomwearProducts.length);
  }, [products]);

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleColor = (color) => {
    if (selectedColors.includes(color)) {
      setSelectedColors((prev) => prev.filter((item) => item !== color));
    } else {
      setSelectedColors((prev) => [...prev, color]);
    }
  };

  const toggleBrand = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands((prev) => prev.filter((item) => item !== brand));
    } else {
      setSelectedBrands((prev) => [...prev, brand]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    // Always filter for Bottomwear
    productsCopy = productsCopy.filter((item) => item.subCategory === 'Bottomwear');

    // Apply search filter
    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Apply category filter
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) => category.includes(item.category));
    }

    // Apply subcategory filter
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) => subCategory.includes(item.subCategory));
    }

    // Apply color filter
    if (selectedColors.length > 0) {
      productsCopy = productsCopy.filter((item) => selectedColors.includes(item.color));
    }

    // Apply brand filter
    if (selectedBrands.length > 0) {
      productsCopy = productsCopy.filter((item) => selectedBrands.includes(item.brand));
    }

    console.log('Filtered Products:', productsCopy);
    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;

      case 'high-low':
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [products, category, subCategory, search, showSearch, selectedColors, selectedBrands]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter options */}
      <div className='min-w-60'>
        <p
          onClick={() => setShowFilter(!showFilter)}
          className='my-2 text-xl flex items-center cursor-pointer gap-2'
        >
          FILTERS
          <img
            className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}
            src={assets.dropdown_icon}
            alt=''
          />
        </p>

        {/* Rest of the component remains the same */}
        {/* ... (previous filter and rendering code) ... */}

        {/* Products display with error handling */}
        <div className='flex-1'>
          <div className='flex justify-between text-base sm:text-2xl mb-4'>
            <Title text1={'BOTTOMWEAR'} text2={'COLLECTION'} />
            <select
              onChange={(e) => setSortType(e.target.value)}
              className='border-2 border-gray-300 text-sm px-2'
            >
              <option value='relevant'>Sort by: Relevant</option>
              <option value='low-high'>Sort by: Low to High</option>
              <option value='high-low'>Sort by: High to Low</option>
            </select>
          </div>

          {filterProducts.length === 0 ? (
            <div className='text-center text-xl text-gray-500'>
              No bottomwear products found. 
              <br />
              Check if products are loaded correctly.
            </div>
          ) : (
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
              {filterProducts.map((item, index) => (
                <ProductItem 
                  key={index} 
                  name={item.name} 
                  id={item._id} 
                  price={item.price} 
                  image={item.image} 
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Bottomwear;