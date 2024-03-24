import React from 'react';
import MenuItem from './item/MenuItems';

const SubMenu = ({ menuItems }) => {
  return (
    <section id="food-menu">
      <h2 className="food-menu-heading">Food Menu</h2>
      <div className="food-menu-container container">
        {menuItems.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default SubMenu;