import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { Client, Databases, Query } from "appwrite";
import { PROJECT_ID, APPWRITE_URL, DB_NAME, COLLECTIONS } from "../Config/Config"; 
import "./ProductList.css";

const client = new Client()
  .setEndpoint(APPWRITE_URL)
  .setProject(PROJECT_ID);

const databases = new Databases(client);

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();  
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await databases.listDocuments(DB_NAME, COLLECTIONS.PRODUCT, [Query.limit(20)]);
    console.log("fetch product: ", response.documents);
      setProducts(response.documents);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const filteredProducts = products.filter((product) =>
    product.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="product-list-container">
      <input
        type="text"
        className="search-bar"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <div key={item.$id} className="product-card">
              <img src={item.image_path} alt={item.name} className="product-image" />
              <h3 className="product-name">{item.name}</h3>
              <p className="product-price">Rs. {item.unit_price}</p>
              <button className="view-more" onClick={() => navigate(`/product/${item.$id}`)}>
                View More
              </button>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
