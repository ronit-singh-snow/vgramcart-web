import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AnotherLandingPage.css';

function HeroSection() {
    return (
        <section className="hero-section min-h-screen bg-background">
            <div className="container">
                <div className="row align-items-center text-center">
                    <div className="col-lg-12 hero-content">
                        <h5 className="premium-text">Premium Quality Rice</h5>
                        <h1 className="hero-title">Nature's Finest <span className="highlight">Rice Grains</span></h1>
                        <p className="hero-subtitle">Sourced directly from sustainable farms, we deliver the finest quality rice to your table. Experience the authentic taste of tradition.</p>

                        <div className="mt-4">
                            <button className="btn btn-primary btn-explore">Explore Products</button>
                            <button className="btn btn-outline-light btn-story">Our story</button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default HeroSection;