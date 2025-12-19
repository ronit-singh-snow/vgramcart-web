import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AnotherLandingPage.css';

function AnotherLandingPage() {
    return (
        <div className="App">

            {/* Feature Section */}
            <section className="features-section">
                {/* <div className="container">
          <div className="row">
            <div className="col-md-4 feature-item">
              <div className="feature-icon">🌱</div>
              <h3>Natural Farming</h3>
              <p>Grown using sustainable farming practices without harmful chemicals.</p>
            </div>
            <div className="col-md-4 feature-item">
              <div className="feature-icon">⭐</div>
              <h3>Premium Quality</h3>
              <p>Each grain is carefully selected to ensure the highest quality standards.</p>
            </div>
            <div className="col-md-4 feature-item">
              <div className="feature-icon">🚚</div>
              <h3>Fast Delivery</h3>
              <p>Freshly packed and delivered to your doorstep within 24 hours.</p>
            </div>
          </div>
        </div> */}
                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="max-w-3xl mx-auto text-center">
                        <span className="inline-block px-4 py-2 rounded-full bg-golden/20 text-golden-light text-sm font-medium mb-6 backdrop-blur-sm border border-golden/30" style={{opacity: 1, transform: 'none'}}>Premium Quality Rice Since 1985</span>
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold text-primary-foreground mb-6 leading-tight"
                            style={{opacity: 1, transform: 'none'}}>Nature's Finest<span className="block text-golden">Rice Grains</span></h1>
                        <p className="text-lg sm:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed" style={{opacity: 1, transform: 'none'}}>Sourced directly from sustainable farms, we deliver the finest quality rice to your table. Experience the authentic taste of tradition.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center" style={{ opacity: 1, transform: 'none' }}>
                            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-body ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-golden text-primary-foreground font-semibold shadow-lg hover:bg-golden/90 hover:shadow-elevated hover:-translate-y-0.5 h-14 rounded-lg px-10 text-base">
                                Explore Products
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-arrow-right ml-2 h-5 w-5"
                                >
                                    <path d="M5 12h14"></path>
                                    <path d="m12 5 7 7-7 7"></path>
                                </svg>
                            </button>

                            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium font-body ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border-2 border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground backdrop-blur-sm hover:bg-primary-foreground/20 hover:border-primary-foreground/50 h-14 rounded-lg px-10 text-base">
                                Our Story
                            </button>
                        </div>
                    </div>
                    <div className="mt-16 flex flex-wrap justify-center gap-6 sm:gap-10" style={{ opacity: 1, transform: 'none' }}>
                        <div className="flex items-center gap-2 text-primary-foreground/80">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-leaf h-5 w-5 text-golden"
                            >
                                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                            </svg>
                            <span className="text-sm font-medium">100% Organic</span>
                        </div>

                        <div className="flex items-center gap-2 text-primary-foreground/80">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-award h-5 w-5 text-golden"
                            >
                                <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                                <circle cx="12" cy="8" r="6"></circle>
                            </svg>
                            <span className="text-sm font-medium">Premium Quality</span>
                        </div>

                        <div className="flex items-center gap-2 text-primary-foreground/80">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-truck h-5 w-5 text-golden"
                            >
                                <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                                <path d="M15 18H9"></path>
                                <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                                <circle cx="17" cy="18" r="2"></circle>
                                <circle cx="7" cy="18" r="2"></circle>
                            </svg>
                            <span className="text-sm font-medium">Free Delivery</span>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    );
}

export default AnotherLandingPage;