import React from 'react';
import './OurProduct.css';
const fruits = "https://cloud.appwrite.io/v1/storage/buckets/6723636300050d7a50f2/files/675fd8c700106da5d7dd/view?project=66efac960005a73d7247&project=66efac960005a73d7247&mode=admin";
const vegetables ="https://cloud.appwrite.io/v1/storage/buckets/6723636300050d7a50f2/files/6723662300222e5a858a/view?project=66efac960005a73d7247&project=66efac960005a73d7247&mode=admin";
const cerealGrains = "https://cloud.appwrite.io/v1/storage/buckets/6723636300050d7a50f2/files/6771278f0019cc562636/view?project=66efac960005a73d7247&project=66efac960005a73d7247&mode=admin";
const OurProduct = () => {
  const products = [
    { id: 1, image: fruits, heading: 'Seasonal Fruits', description: 'Enjoy the freshest, juiciest fruits handpicked at their peak ripeness. Packed with natural sweetness and nutrients, they are the perfect way to celebrate every season.' },
    { id: 2, image: vegetables, heading: ' Seasonal Vegetables', description: 'Freshly harvested seasonal vegetables bring unbeatable flavor and nutrition to your meals. Discover the joy of eating naturally with every bite.' },
    { id: 3, image: cerealGrains, heading: 'Cereal Grains', description: 'Our premium cereal grains are a wholesome and versatile pantry staple. Perfect for hearty meals, they deliver nutrition and taste in every serving.' },
  ];

  return (
    <div className="container">
      <h1 className="mainHeading">Our Products</h1>
      <div className="productContainer">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`product ${index % 2 === 0 ? 'left' : 'right'}`}
          >
            <img src={product.image} alt={product.heading} className="image" />
            <div className="textContainer">
              <h2 className="heading1">{product.heading}</h2>
              <p className="description">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProduct;
