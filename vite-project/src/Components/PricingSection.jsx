import React from 'react';
import "../styles/PricingSection.css"

const PriceCard = ({ 
  plan, 
  description, 
  price, 
  originalPrice, 
  duration, 
  features, 
  isPopular 
}) => (
  <div className={`price-card ${isPopular ? 'popular' : ''}`}>
    <div className="flash-sale">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="flash-icon">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
      Flash Sale
    </div>

    <h3 className="plan-name">{plan}</h3>
    <p className="plan-description">{description}</p>

    <div className="price-section">
      <span className="currency">₹</span>
      <span className="price">{price}</span>
      <span className="original-price">₹{originalPrice}</span>
    </div>
    <div className="duration">For {duration} Month</div>

    <div className={`features-list ${isPopular ? 'popular-features' : ''}`}>
      {features.map((feature, index) => (
        <div key={index} className="feature-item">
          <span>{feature}</span>
        </div>
      ))}
    </div>

    <div className="timer">
      Ends in: 3d : 12h : 57m : 58s
    </div>
    <button className={`subscribe-button ${isPopular ? 'popular-button' : ''}`}>
      Subscribe
    </button>
  </div>
);

const PricingSection = () => {
  const plans = [
    {
      plan: "Starter Boost",
      description: "Perfect for those looking for a quick career jumpstart.",
      price: "3499",
      originalPrice: "3999",
      duration: "1",
      features: [
        "Access to all services",
        "1 mock interview",
        "Hands-on experience with 1 project",
        "Placement assistance with 1 job opportunity"
      ]
    },
    {
      plan: "Pro Growth",
      description: "Ideal for those wanting more in-depth preparation and support.",
      price: "9499",
      originalPrice: "10499",
      duration: "3",
      features: [
        "Access to all services",
        "2 mock interview",
        "Hands-on experience with 1 project",
        "Placement assistance with 3 job opportunity"
      ]
    },
    {
      plan: "Career Accelerator",
      description: "Designed for individuals aiming for substantial growth and industry exposure.",
      price: "16999",
      originalPrice: "21000",
      duration: "6",
      features: [
        "All features of the 3 months plan",
        "4 mock interview",
        "Hands-on experience with 2 project",
        "Placement assistance with 5 job opportunity"
      ],
      isPopular: true
    },
    {
      plan: "Ultimate Success",
      description: "The complete package for mastering skills and maximising job opportunities.",
      price: "32499",
      originalPrice: "44999",
      duration: "12",
      features: [
        "All features of the 6 months plan",
        "6 mock interview",
        "Hands-on experience with 4 project",
        "Placement assistance with 10 job opportunity"
      ]
    }
  ];

  return (
    <div className="pricing-container">
        <h2 className="pricing-title">
        Choose The <span className="highlight">Perfect Plan</span>
        <br />For You
      </h2>
      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <PriceCard key={index} {...plan} />
        ))}
      </div>
    </div>
  );
};

export default PricingSection;