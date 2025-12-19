import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const styles = {
    sectionBg: '#F9F8F4',
    accentColor: '#C9A227', // Golden Yellow
    secondaryColor: '#4A5D23', // Paddy Green
    iconCircle: {
        width: '80px',
        height: '80px',
        backgroundColor: '#fff',
        border: '2px solid #C9A227',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        margin: '0 auto 20px',
        fontSize: '2rem'
    },
    textSage: {
        color: "#567043"
    }
};

const ProductFeatures = () => {
    return (
        <div style={{ backgroundColor: styles.sectionBg, fontFamily: 'serif' }} id="about">

            {/* SECTION 1: RICE QUALITIES */}
            <section className="py-5 container">
                <div className="text-center mb-5">
                    <h6 className="text-uppercase fw-bold" style={{ color: styles.accentColor, letterSpacing: '2px' }}>The Grain Standard</h6>
                    <h2 className="display-5 fw-bold" style={{ color: styles.secondaryColor }}>Uncompromising Quality</h2>
                    <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
                        Not all rice is created equal. We focus on the three pillars of a perfect harvest: Aroma, Texture, and Purity.
                    </p>
                </div>

                <div className="row g-4 text-center">
                    <div className="col-md-4">
                        <div style={styles.iconCircle}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={styles.textSage}>
                                <path d="M7 20h10"></path>
                                <path d="M10 20c5.5-2.5.8-6.4 3-10"></path>
                                <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"></path>
                                <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"></path>
                            </svg>
                        </div>
                        <h4 className="fw-bold">Sustainably Sourced</h4>
                        <p className="text-muted">We partner with eco-conscious farmers who use sustainable practices to grow our premium rice.</p>
                    </div>
                    <div className="col-md-4">
                        <div style={styles.iconCircle} className="">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="48"
                                height="48"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                style={styles.textSage}
                            >
                                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                            </svg>

                        </div>

                        <h4 className="fw-bold">Nutritious & Healthy</h4>
                        <p className="text-muted">Our rice varieties retain their natural nutrients, providing wholesome nutrition for your family.</p>
                    </div>
                    <div className="col-md-4">
                        <div style={styles.iconCircle}>🌿</div>
                        <h4 className="fw-bold">Purity Guaranteed</h4>
                        <p className="text-muted">Zero adulteration. We use laser-sorting technology to ensure every bag contains 100% pure heirloom grains with no broken pieces.</p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ProductFeatures;