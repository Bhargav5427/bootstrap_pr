import React from 'react';
import SubCategory from './data/SubCategory';

const Category = () => {
  const foodItems = [
    {
      name: 'Fruit',
      type: 'fruite',
      image: 'https://i.postimg.cc/yxThVPXk/food1.jpg',
      link: 'https://en.wikipedia.org/wiki/Fruit',
    },
    {
      name: 'Vegetable',
      type: 'vegetable',
      image: 'https://i.postimg.cc/Nffm6Rkk/food2.jpg',
      link: 'https://en.wikipedia.org/wiki/Vegetable',
    },
    {
      name: 'Grain',
      type: 'grin',
      image: 'https://i.postimg.cc/76ZwsPsd/food3.jpg',
      link: 'https://en.wikipedia.org/wiki/Grain',
    },
  ];

  return (
    <div>
      <SubCategory foodItems={foodItems} />
    </div>
  );
}

export default Category;