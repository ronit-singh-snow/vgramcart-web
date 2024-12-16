import React from 'react';
import './Main.css'; 

function Main() {
    const vegImage ="https://cloud.appwrite.io/v1/storage/buckets/6723636300050d7a50f2/files/675fd8c700106da5d7dd/view?project=66efac960005a73d7247&project=66efac960005a73d7247&mode=admin";
  return (
    <div className="main-content">
      <div className="text-content">
        <h1>Welcome to VGram Cart</h1>
        <p>Freshness delivered to your doorstep</p>
        <button className="shop-button">ORDER NOW</button>
      </div>
      <div className="image-content">
        <img
          src={vegImage}
          alt="Grocery Bags"
          className="grocery-image"
        />
      </div>
    </div>
  );
}

export default Main;
