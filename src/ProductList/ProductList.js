import React, { useState, useEffect } from 'react';
import { getProducts } from '../Utils/Appwrite/DatabaseService';

import "./ProductList.css";

const ProductList = () => {
    const [products, setProducts] = useState([]);  
    const [loading, setLoading] = useState(true);  
    const [error, setError] = useState(null);      
    const [searchTerm, setSearchTerm] = useState('');  

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await getProducts();  
                if (response && response.total > 0) {
                    setProducts(response.documents);  
                } else {
                    throw new Error("No data present");  
                }
            } catch (err) {
                setError(err.message);  
            } finally {
                setLoading(false);  
            }
        };

        fetchProducts();  
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );


    return (
       <>
 
 <div className='MainContainer'>
      <div className='navbar-brand'>
        <strong>Vgram CART</strong>
      </div>
      <div className="search-container">
        <h1>Freshness delivered to your doorstep</h1>
        <div className="search-bar">
          <input className="search-field" type="text" placeholder="Explore fresh ingredients for your next meal..."
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
      </div>
      </div>

        <div>
            <h1>Available Products</h1>
            <ul className="product-list">
                {filteredProducts.map((product) => (
                    <a key={product.$id} className="product-item" style={{ backgroundColor: product.color_hex_code }} href={`/product/${product.$id}`}>
                        <img src={product.image_path} alt={product.name} />
                        <h2>{product.name} - ₹{product.unit_price}</h2>
                    </a>
                ))}
            </ul>
        </div>
        </>
    );
};

export default ProductList;
