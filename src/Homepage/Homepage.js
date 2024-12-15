import React, { useEffect, useState } from 'react';
import "./Homepage.css"
function Homepage() {
  const [homepageDetails, setHomepageDetails] = useState(null);

  useEffect(() => {
    const fetchHomepageDetails = async () => {
      try {
        const response = await fetch('http://localhost:5000/homepage');
        const data = await response.json();
        setHomepageDetails(data);
      } catch (error) {
        console.error('Error fetching homepage details:', error);
      }
    };

    fetchHomepageDetails();
  }, []);

  return (
    <>
    <div >
      <h1>Homepage Details</h1>
      {homepageDetails && (
        <ul >
          <div className='fruits'>
          <li>Seasonal Fruits:</li>
          <ul>
            {homepageDetails.downSections[0].data.map((fruit) => (
  <li key={fruit.id} className='fruit-item' style={{ backgroundColor: fruit.color_hex_code }}>
  
<img src={`http://localhost:5000${fruit.image_path}`} alt={fruit.name} />
<h2>{fruit.name}</h2>
</li>
))}
          </ul>
          </div>
<div className='vegetables'>
          <li>Seasonal Vegetables:</li>
          <ul>
            {homepageDetails.downSections[1].data.map((vegetable) => (
  <li key={vegetable.id}  className="vegetable-item" style={{ backgroundColor: vegetable.color_hex_code }}>
<img src={`http://localhost:5000${vegetable.image_path}`} alt={vegetable.name} />
<h2>{vegetable.name}</h2>
</li>
))}
          </ul>
          </div>
        </ul>
      )}
    </div>
    </>
  );
}

export default Homepage;