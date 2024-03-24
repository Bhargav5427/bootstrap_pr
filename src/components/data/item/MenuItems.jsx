import React from 'react';

const MenuItem = ({ item }) => {
  return (
    <div className="food-menu-item">
      <div className="food-img">
        <img src={item.image} alt="" />
      </div>
      <div className="food-description">
        <h2 className="food-titile">{item.name}</h2>
        <p>{item.description}</p>
        <p className="food-price">Price: &#8377; {item.price}</p>
      </div>
    </div>
  );
};

export default MenuItem;
