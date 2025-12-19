import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';

const styles = {
    sectionBg: '#F9F8F4',
    accentColor: '#C9A227', // Golden Yellow
    secondaryColor: 'rgb(194 206 198)', // Paddy Green
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

function OurServices() {
    return (
            <section className="py-5" style={{ backgroundColor: styles.secondaryColor }} id="services">
                <div className="container text-black">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6">
                            <h2 className="display-6 fw-bold mb-4">Our Service Promise</h2>

                            <div className="d-flex mb-4">
                                <div className="me-3 fs-3 text-warning">🚚</div>
                                <div>
                                    <h5 className="fw-bold">Climate-Controlled Shipping</h5>
                                    <p className="opacity-75">We ship in moisture-barrier packaging to ensure your rice arrives as fresh as the day it was milled.</p>
                                </div>
                            </div>

                            <div className="d-flex mb-4">
                                <div className="me-3 fs-3 text-warning">🚜</div>
                                <div>
                                    <h5 className="fw-bold">Direct-from-Farm Sourcing</h5>
                                    <p className="opacity-75">By skipping 4+ middlemen, we pay our farmers 20% more while keeping premium rice affordable for you.</p>
                                </div>
                            </div>

                            <div className="d-flex">
                                <div className="me-3 fs-3 text-warning">🔄</div>
                                <div>
                                    <h5 className="fw-bold">Subscription Ease</h5>
                                    <p className="opacity-75">Never run out. Set your delivery frequency and save 15% on every order with our Grain Club.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="bg-white p-4 rounded shadow text-dark">
                                <h4 className="fw-bold mb-3 border-bottom pb-2">Why Sourcing Matters</h4>
                                <p className="small">To understand our quality, one must look at the anatomy of the grain. Our milling process preserves the essential nutrients while ensuring the perfect cook.</p>
                                <p className="fw-bold text-center mt-3">Rice Grain Anatomy & Quality</p>
                                {/* Strategic Diagram Placeholder */}


                                [Image of anatomy of a rice grain]

                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
}

export default OurServices;