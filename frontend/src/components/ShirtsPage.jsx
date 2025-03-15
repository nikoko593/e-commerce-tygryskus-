import React from 'react';

// Import shirt images
import shirt1 from "../assets/shirt1.jpg";
import shirt2 from "../assets/shirt2.jpg";
import shirt3 from "../assets/shirt3.jpg";

const ShirtsPage = () => {
  const shirtImages = [shirt1, shirt2, shirt3, shirt1, shirt2, shirt3, shirt1, shirt2, shirt3];

  return (
    <div className="shirts-page">
      <h1>Shirts Collection</h1>
      <div className="shirt-grid">
        {shirtImages.map((image, index) => (
          <div key={index} className="shirt-item">
            <img src={image} alt={`Shirt ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShirtsPage;