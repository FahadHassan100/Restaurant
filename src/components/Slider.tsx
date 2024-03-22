import React, { useState, useEffect } from "react";

import img1 from "../images/img1.png";
import img2 from "../images/img22.png";

const slidesData = [
  {
    imageUrl: img1,
    heading: "Slide 1 Heading",
    description: "Slide 1 Description",
    buttonText: "Button 1",
    buttonLink: "#",
  },
  {
    imageUrl: img2,
    heading: "Slide 2 Heading",
    description: "Slide 2 Description",
    buttonText: "Button 2",
    buttonLink: "#",
  },
  // Add more slides as needed
];

export const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const goToNextSlide = () => {
    setShowContent(false);
    setTimeout(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slidesData.length - 1 ? 0 : prevSlide + 1
      );
      setShowContent(true);
    }, 500); // Wait for fadeOut animation duration
  };
  const goToPrevSlide = () => {
    setShowContent(false);
    setTimeout(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? slidesData.length - 1 : prevSlide - 1
      );
      setShowContent(true);
    }, 500); // Wait for fadeOut animation duration
  };

  return (
    <div>
      <div className="slider-container">
        {slidesData.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.imageUrl})` }}
          >
            {index === currentSlide && (
              <div className={`sliderContent ${showContent ? "fade-in" : ""}`}>
                <h2>{slide.heading}</h2>
                <p>{slide.description}</p>
                <a href={slide.buttonLink} className="button">
                  {slide.buttonText}
                </a>
              </div>
            )}
          </div>
        ))}
        <button className="prev" onClick={goToPrevSlide}>
          &#10094;
        </button>
        <button className="next" onClick={goToNextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
};
