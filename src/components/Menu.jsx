import React from 'react';
import SubMenu from './data/SubMenu';

const Menu = () => {
  const menuItems = [
    {
      name: 'Food Menu Item 1',
      image: 'https://i.postimg.cc/wTLMsvSQ/food-menu1.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quae.',
      price: 200,
    },
    {
      name: 'Food Menu Item 2',
      image: 'https://i.postimg.cc/sgzXPzzd/food-menu2.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quae.',
      price: 150,
    },
    {
      name: 'Food Menu Item 3',
      image: 'https://i.postimg.cc/8zbCtYkF/food-menu3.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quae.',
      price: 250,
    },
    {
      name: 'Food Menu Item 4',
      image: 'https://i.postimg.cc/Yq98p5Z7/food-menu4.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quae.',
      price: 150,
    },
    {
      name: 'Food Menu Item 5',
      image: 'https://i.postimg.cc/KYnDqxkP/food-menu5.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quae.',
      price: 250,
    },
    {
      name: 'Food Menu Item 6',
      image: 'https://i.postimg.cc/Jnxc8xQt/food-menu6.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quae.',
      price: 350,
    }
  ];

  return (
    <div>
      <SubMenu menuItems={menuItems} />
    </div>
  );
};

export default Menu;