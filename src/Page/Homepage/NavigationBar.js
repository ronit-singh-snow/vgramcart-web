import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./AnotherLandingPage.css";

function NavigationBar() {

    return <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container flex-row p-0">
            <a className="navbar-brand" href="#">
                <span className="brand-text">
                    V-GRAM
                    <span>CART</span>
                </span>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#products">Products</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#services">Services</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
}

export default NavigationBar;