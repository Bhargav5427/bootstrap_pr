import React from 'react';

const SubCategory = ({ foodItems }) => {
  return (
    <section id="food">
      <h2>Types of food</h2>
      <div className="food-container container">
        {foodItems.map((item, index) => (
          <div key={index} className={`food-type ${item.type}`}>
            <div className="img-container">
              <img src={item.image} alt="error" />
              <div className="img-content">
                <h3>{item.name}</h3>
                <a href={item.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer" >
                  learn more
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SubCategory;
