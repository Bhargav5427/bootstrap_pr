import React from 'react';

const SubTestimonial = ({ testimonials }) => {
  return (
    <section id="testimonials">
      <h2 className="testimonial-title">What Our Customers Say</h2>
      <div className="testimonial-container container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-box">
            <div className="customer-detail">
              <div className="customer-photo">
                <img src={testimonial.photo} alt="" />
                <p className="customer-name">{testimonial.name}</p>
              </div>
            </div>
            <div className="star-rating">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i} className="fa fa-star checked"></span>
              ))}
            </div>
            <p className="testimonial-text">
              {testimonial.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SubTestimonial;
