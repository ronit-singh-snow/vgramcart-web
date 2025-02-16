import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./ProductDetails.css";
import { getProductById } from '../Utils/Appwrite/DatabaseService';

const ProductDetails = () => {
    const { id } = useParams();  
    const [product, setProduct] = useState(null); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await getProductById(id);
                console.log(response);
                if (response.total && response.total > 0) {
                    setProduct(response.documents[0]);  
                } else {
                    throw new Error("Product not found.");
                }
            } catch (err) {
                setError(err.message);  
            } finally {
                setLoading(false);  
            }
        };

        fetchProductDetails();  
    }, [id]);

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleSave = async () => {
        console.log(product); 

        try {
            const response = await axios.put(`http://localhost:5000/fruit/${id}`, product);
            if (response.status === 200) {
                alert('Product updated successfully!');
            } else {
                throw new Error('Failed to save product.');
            }
        } catch (err) {
            alert('Error updating product: ' + err.message);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!product) return <p>Product not found.</p>;

    return (
        <div className='container'>
            <div className='rightContainer'>
                <img src={`http://localhost:5000${product.image_path}`} alt={product.name} />
            </div>
            <div className='leftContainer'>
                <h1>Name:
                    <input 
                        type="text" 
                        name="name" 
                        value={product.name} 
                        onChange={handleChange} 
                        placeholder="Enter Name"
                    />
                </h1>
                <p>Price: ₹
                    <input 
                        className='product-input-text'
                        type="text" 
                        name="unit_price" 
                        value={product.unit_price} 
                        onChange={handleChange} 
                        placeholder="Enter Price"
                    />
                </p>
                <p>Unit: 
                    <input 
                        className='product-input-text'
                        type="text" 
                        name="unit" 
                        value={product.unit} 
                        onChange={handleChange} 
                        placeholder="Enter Unit"
                    />
                </p>
                <p>Description: 
                    <textarea 
                        name="description" 
                        value={product.description} 
                        onChange={handleChange} 
                        placeholder="Description"
                    />
                </p>
                <p>Benefits: 
                    <textarea 
                        className='product-input-text'
                        name="benefits" 
                        value={product.benefits} 
                        onChange={handleChange} 
                        placeholder="benefits"
                    />
                </p>
                <p>Category: 
                    <input 
                        className='product-input-text'
                        type="text" 
                        name="category" 
                        value={product.category} 
                        onChange={handleChange} 
                        placeholder=" Enter Category "
                    />
                </p>
                <p>SubCategory: 
                    <input 
                        className='product-input-text'
                        type="text" 
                        name="sub_category" 
                        value={product.sub_category} 
                        onChange={handleChange} 
                        placeholder=" Enter subcategory "
                    />
                </p>
                <button onClick={handleSave}>SAVE</button>
            </div>
        </div>
    );
};

export default ProductDetails;
