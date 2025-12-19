import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const styles = {
  cardBorder: {
    border: '1px solid #e0e0e0',
    borderRadius: '12px',
    overflow: 'hidden'
  },
  priceText: {
    color: '#4A5D23', // Your brand green
    fontWeight: 'bold',
    fontSize: '1.4rem'
  },
  propertyLabel: {
    fontWeight: '600',
    color: '#6c757d',
    fontSize: '0.9rem',
    textTransform: 'uppercase'
  },
  accentBtn: {
    backgroundColor: '#C9A227', // Your brand gold
    borderColor: '#C9A227',
    fontWeight: 'bold'
  }
};

const ProductDescription = ({ product, handleAddToCart }) => {
  // Fallback data if no product is passed
  const item = product || {
    id: 'basmati-01',
    name: "Royal Aged Basmati Rice",
    price: "$14.00",
    weight: "2lb Bag",
    description: "Sourced from the mineral-rich soils of the Himalayan foothills and aged for 12 months to enhance fragrance and fluffiness.",
    properties: {
      aroma: "Exotic Nutty Fragrance",
      texture: "Long, Slender & Non-Sticky",
      grain: "Extra Long Grain (8.2mm)",
      origin: "Himalayas, India"
    },
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=1470&auto=format&fit=crop"
  };

  return (
    <div className="container my-5">
      <div className="card shadow-sm" style={styles.cardBorder}>
        <div className="row g-0">
          {/* Product Image */}
          <div className="col-md-5">
            <img 
              src={item.image} 
              alt={item.name} 
              className="img-fluid h-100" 
              style={{ objectFit: 'cover', minHeight: '300px' }} 
            />
          </div>

          {/* Product Details */}
          <div className="col-md-7">
            <div className="card-body p-4">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h2 className="card-title fw-bold mb-1" style={{ fontFamily: 'Georgia, serif' }}>{item.name}</h2>
                  <span className="badge bg-success mb-3">Premium Quality</span>
                </div>
                <div className="text-end">
                  <div style={styles.priceText}>{item.price}</div>
                  <small className="text-muted">{item.weight}</small>
                </div>
              </div>

              <p className="card-text text-secondary mb-4">
                {item.description}
              </p>

              <hr />

              {/* Rice Properties Grid */}
              <div className="row g-3 mb-4">
                <div className="col-6">
                  <div style={styles.propertyLabel}>Aroma</div>
                  <div className="fw-medium">{item.properties.aroma}</div>
                </div>
                <div className="col-6">
                  <div style={styles.propertyLabel}>Texture</div>
                  <div className="fw-medium">{item.properties.texture}</div>
                </div>
                <div className="col-6">
                  <div style={styles.propertyLabel}>Grain Length</div>
                  <div className="fw-medium">{item.properties.grain}</div>
                </div>
                <div className="col-6">
                  <div style={styles.propertyLabel}>Origin</div>
                  <div className="fw-medium">{item.properties.origin}</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button 
                  className="btn btn-primary btn-lg px-5 text-white" 
                  style={styles.accentBtn}
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart
                </button>
                <button className="btn btn-outline-secondary btn-lg px-4">
                  Save to Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;