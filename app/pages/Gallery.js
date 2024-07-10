"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 4, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const sliderImageUrl = [
  {
    url: "/Assets/img/Pongal-Vizha-2024-15.jpeg",
  },
  {
    url: "/Assets/img/BIT02368.jpeg",
  },
  {
    url: "/Assets/img/BIT02076.jpeg",
  },
  {
    url: "/Assets/img/BIT02103.jpeg",
  },
  {
    url: "/Assets/img/BIT02124.jpeg",
  },
  {
    url: "/Assets/img/BIT04564.jpeg",
  },
  {
    url: "/Assets/img/BIT09988.jpeg",
  },
];

const Gallery = () => {
  return (
    <div className="container mx-auto min-h-[70vh] py-1" id="gallery">
      <h1 className="text-4xl font-bold text-center mb-8">காட்சிக்கூடம்</h1>

      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
        containerClass="carousel-container"
      >
        {sliderImageUrl.map((imageUrl, index) => (
          <div className="slider mx-3" key={index}>
            {imageUrl.url ? (
              <img
                src={imageUrl.url}
                alt={`slider-image-${index}`}
                className="rounded-lg shadow-md"
              />
            ) : (
              <div className="bg-gray-200 h-48 flex items-center justify-center rounded-lg shadow-md">
                <span className="text-gray-500">No Image</span>
              </div>
            )}
          </div>
        ))}
      </Carousel>

      <style jsx>{`
       .carousel-container {
          padding: 2rem;
          background-color: #f7f7f7;
          border-radius: 1rem;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

       .slider {
          transition: transform 0.3s ease-in-out;
        }

       .slider:hover {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default Gallery;