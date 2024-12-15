import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./AdminLogin.css";
import { loginWithEmail } from '../Utils/Appwrite/AccountService';

const AdminLogin = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle login logic here, e.g., send data to a backend server
        console.log(formData);
        loginWithEmail(formData.email, formData.password).then((response) => {
            navigate("/productlist");
        }, (error) => {
            console.log(error); // Failure
        });
    };

    return (
        <div className="container">
            <div className="form-box">
                <div className="header-form">
                    <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{ fontSize: "110px" }}></i></h4>
                    <div className="image">
                    </div>
                </div>
                <div className="body-form">
                    <form>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fa fa-user"></i></span>
                            </div>
                            <input type="text" className="form-control" name="email" onChange={handleChange} placeholder="Email-ID" />
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fa fa-lock"></i></span>
                            </div>
                            <input type="text" className="form-control" name="password" onChange={handleChange} placeholder="Password" />
                        </div>
                        <button type="button" className="btn btn-secondary btn-block" onClick={handleSubmit}>LOGIN</button>
                        <div className="message">
                            <div><input type="checkbox" /> Remember ME</div>
                            <div><a href="#">Forgot your password</a></div>
                        </div>
                    </form>
                    <div className="social">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-twitter-square"></i></a>
                        <a href="#"><i className="fab fa-google"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin;