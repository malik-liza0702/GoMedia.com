import React from "react";
import "./Testimonials.css";
import face from "../../assets/face.png"

const testimonials = [
  {
    id: 1,
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
    name: "Chris",
    title: "President and CEO, PrintReach, USA",
    image:"hi",
    rating: 4.5, 
  },
  {
    id: 2,
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
    name: "Chris",
    title: "President and CEO, PrintReach, USA",
    image:"hi",
    rating: 4.5, 
  },
  {
    id: 3,
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
    name: "Chris",
    title: "President and CEO, PrintReach, USA",
    image:"hi",
    rating: 4.5, 
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2 className="testimonials__heading">What Others think about GoMedia?</h2>
      <p className="testii">
      Clients and users often praise GoMedia for its innovative solutions, exceptional customer service, and ability to deliver customized, future-ready digital platforms. Many appreciate the seamless user experiences, modern designs, and effective marketing strategies that help businesses grow. GoMedia is recognized as a trusted partner for driving digital transformation across various industries.
      </p>
      <div className="testimonials__container">
        {testimonials.map((testimonial) => (
          <div className="testimonial" key={testimonial.id}>
            <div className="star-div">
              <div className="testimonial__quote">
                <i class="fa-solid fa-quote-left"></i>
              </div>
              <div className="testimonial__rating">★★★★★</div>
            </div>

            <p className="testimonial__content">{testimonial.content}</p>
            <div className="testimonial__profile">
              <img
                src={face}
                alt={testimonial.name}
                className="testimonial__image"
              />
              <div>
                <h3 className="testimonial__name">{testimonial.name}</h3>
                <p className="testimonial__title">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;