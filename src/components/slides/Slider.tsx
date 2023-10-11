import React, { useState, useEffect } from "react";
import SlideShow1 from "./s1/SlideShow1"; // Import your SlideShow components
import SlideShow2 from "./s2/SlideShow2";
import SlideShow3 from "./s3/SlideShow3";
import SlideShow4 from "./s4/SlideShow4";
import "./style.css"; // Import your CSS for styling

const Slider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // Use 0-based indexing
  const slides = [
    <SlideShow1 />,
    <SlideShow2 />,
    <SlideShow3 />,
    <SlideShow4 />,
  ];
  const totalSlides = slides.length;

  useEffect(() => {
    // Automatically change the slide every 5 seconds (5000 milliseconds)
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === totalSlides - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [totalSlides]);

  const handleDotClick = (slideIndex: any) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <div className="slider-container">
      <div
        className="slider"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
          transition: "transform 0.5s ease-in-out", // Add smooth sliding animation
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            {slide}
          </div>
        ))}
      </div>

      <div className="dot-container">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentSlide === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
