import React from 'react';
import SubTestimonial from './data/SubTestimonial';

const Testimonial = () => {
  const testimonials = [
    {
      name: 'Ross Lee',
      photo: 'https://i.postimg.cc/5Nrw360Y/male-photo1.jpg',
      rating: 5,
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit voluptas cupiditate aspernatur odit doloribus non.',
    },
    {
      name: 'Amelia Watson',
      photo: 'https://i.postimg.cc/sxd2xCD2/female-photo1.jpg',
      rating: 4,
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit voluptas cupiditate aspernatur odit doloribus non.',
    },
    {
      name: 'Ben Roy',
      photo: 'https://i.postimg.cc/fy90qvkV/male-photo3.jpg',
      rating: 5,
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit voluptas cupiditate aspernatur odit doloribus non.',
    }
  ];

  return (
    <div>
      <SubTestimonial testimonials={testimonials} />
    </div>
  );
}

export default Testimonial;