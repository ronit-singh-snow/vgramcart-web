import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
// import { FiShoppingCart, FiArrowRight } from 'react-icons/fi';

const styles = {
    sectionBg: '#F9F8F4',
    accentColor: '#C9A227', // Golden Yellow
    secondaryColor: 'rgb(15 199 80)', // Paddy Green
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
const Products = () => {
    const products = [
        {
            id: 1,
            name: "Premium Jasmine Rice",
            desc: "Fragrant long-grain rice with a delicate floral aroma, perfect for everyday meals.",
            price: "24.99",
            rating: 5.0,
            badge: "Best Seller",
            img: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=1470"
        },
        {
            id: 2,
            name: "Golden Basmati Rice",
            desc: "Aged aromatic rice with extra-long grains, ideal for biryanis and special occasions.",
            price: "29.99",
            rating: 5.0,
            img: "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&q=80&w=1374"
        },
        {
            id: 3,
            name: "Organic Sticky Rice",
            desc: "Traditional glutinous rice with a naturally sweet taste, perfect for Thai cuisine.",
            price: "19.99",
            rating: 4.0,
            badge: "Organic",
            img: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&q=80&w=1470"
        }
    ];

    return (
        <div>
            {/* Product Section */}
            <section className="py-5 products-section" id="products">
                <Container className="py-5">
                    <div className="text-center mb-5">
                        <h6 className="text-uppercase fw-bold" style={{ color: styles.accentColor, letterSpacing: '2px' }}> Our Products</h6>
                        <h2 className="display-5 fw-bold" style={{ color: styles.secondaryColor }}>Uncompromising Quality</h2>
                        <p style={{ maxWidth: '700px', color: "rgb(226 232 237 / 75%)" }}>
                            Not all rice is created equal. We focus on the three pillars of a perfect harvest: Aroma, Texture, and Purity.
                        </p>
                    </div>
                    <Row className="g-4">
                        {products.map(product => (
                            <Col lg={4} md={6} key={product.id}>
                                <Card className="product-card h-100 p-3">
                                    <div className="position-relative overflow-hidden rounded-4 mb-3">
                                        <Card.Img variant="top" src={product.img} style={{ height: '240px', objectFit: 'cover' }} />
                                        {product.badge && <Badge className="badge-best-seller py-2 px-3">{product.badge}</Badge>}
                                    </div>
                                    <Card.Body className="p-0 mt-2">
                                        <div className="text-warning mb-2 small">
                                            {"★".repeat(Math.floor(product.rating))}
                                            <span className="text-muted ms-2">({product.rating.toFixed(1)})</span>
                                        </div>
                                        <Card.Title className="serif-font fs-4 mb-2">{product.name}</Card.Title>
                                        <Card.Text className="text-muted small mb-4">{product.desc}</Card.Text>
                                        <div className="d-flex justify-content-between align-items-center mt-auto">
                                            <span className="fs-4 fw-bold serif-font">${product.price}</span>
                                            <Button className="btn-golden d-flex align-items-center">
                                                Add to Cart
                                            </Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    <div className="text-center mt-5">
                        <a href="#" className="btn btn-primary btn-explore">View All Products </a>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default Products;