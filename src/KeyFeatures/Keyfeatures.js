import React, { useState } from "react";
import "./Keyfeatures.css";

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const features = [
    {
      title: "Fresh Delivery",
      description: "Experience the joy of receiving fruits and vegetables at their freshest. We ensure quick delivery straight from the farm to your kitchen",
    },
    {
      title: "Return Policy",
      description: "Your satisfaction is our priority. Our easy return policy guarantees a seamless process if you're not happy with your purchase",
    },
    {
      title: "Women Empowerment",
      description: "By choosing us, you support women entrepreneurs and workers who form the backbone of our supply chain",
    },
   
    {
      title: "Affordable Pricing",
      description: "Enjoy premium products at the best prices. Great value for your money, every time",
    },
    {
title: "Unbeatable Quality",
description: "We source our produce directly from local farms and select only the ripest, most delicious options",
    },
    {
title: "Convenience Redefined",
description: " Order anytime, anywhere, and have your groceries delivered at your convenience. No more crowded markets or long queues",
    },
    {
title: "Wide Selection",
description: "Explore a vast variety of fruits and vegetables, from seasonal favorites to exotic finds",
    },
    {
title: "Easy Ordering",
description: "Our user-friendly app makes browsing and ordering a breeze",
    },
    {
title: "Support Local Farmers",
description: "By choosing [App Name], you support local farmers and contribute to a sustainable food system",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % features.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  const visibleFeatures = [
    features[currentIndex],
    features[(currentIndex + 1) % features.length],
    features[(currentIndex + 2) % features.length],
  ];

  return (
    <div className="carousel-container">
      <h2 className="heading">Key Features</h2>

      <div className="carousel">
        <button className="arrow left" onClick={handlePrev}>
          &#8592;
        </button>

        <div className="carousel-boxes">
          {visibleFeatures.map((feature, index) => (
            <div className="carousel-box" key={index}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>

        <button className="arrow right" onClick={handleNext}>
          &#8594;
        </button>
      </div>

      <div className="dots">
        {features.map((_, index) => (
          <span
            key={index}
            className={`dot ${
              index === currentIndex ? "active" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default App;
