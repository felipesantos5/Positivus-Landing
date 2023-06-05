import React, {useState } from "react";
import greenStar from "../../public/img/testimonials/greenStar.svg";
import whiteStar from "../../public/img/testimonials/whiteStar.svg";
import lGreyArrow from "../../public/img/testimonials/lGreyArrow.svg";
import lWhiteArrow from "../../public/img/testimonials/lWhiteArrow.svg";
import rGreyArrow from "../../public/img/testimonials/greenStar.svg";
import rWhiteArrow from "../../public/img/testimonials/rWhiteArrow.svg";

export const CardTestimonials= () => {
   const [currentSlide, setCurrentSlide] = useState(0);

   const slides = [
      {
        text: `"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."`,
        name: "John Smith",
        role: "Marketing Director at XYZ Corp",
      },
      {
        text: `"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."`,
        name: "John Smith",
        role: "Marketing Director at XYZ Corp",
      },
      {
        text: `"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."`,
        name: "John Smith",
        role: "Marketing Director at XYZ Corp",
      },
      {
        text: `"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."`,
        name: "John Smith",
        role: "Marketing Director at XYZ Corp",
      },
      {
        text: `"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."`,
        name: "John Smith",
        role: "Marketing Director at XYZ Corp",
      },
    ];
 
   const handlePrevSlide = () => {
     setCurrentSlide((prevSlide) => (prevSlide === 0 ? 4 : prevSlide - 1));
   };
 
   const handleNextSlide = () => {
     setCurrentSlide((prevSlide) => (prevSlide === 4 ? 0 : prevSlide + 1));
   };
 
   const handleSlideSelect = (index) => {
     setCurrentSlide(index);
   };
 
  return (
    <div className="flex flex-col">
      <div className="slide flex gap-12">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`square ${index === currentSlide ? "active" : ""} border border-solid border-green rounded-cardRadius px-12 py-12 w-606`}>
            <h1 className="w-500 text-white font-normal text-18">{slide.text}</h1>
            <div>
               <p className="text-green font-medium text-20">{slide.name}</p>
               <p className="text-white font-medium text-20">{slide.role}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="">
        <div className="" onClick={handlePrevSlide}>
          <img src={lWhiteArrow} alt="lWhiteArrow" />
        </div>
        <div className="dots">
          {slides.map((slide, index) => (
            <img
              key={index}
              src={index === currentSlide ? {greenStar} : {whiteStar}}
              alt={`Dot ${index + 1}`}
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => handleSlideSelect(index)}
            />
          ))}
        </div>
        <div className="arrow right" onClick={handleNextSlide}>
          <img src={rWhiteArrow} alt="rWhiteArrow" />
        </div>
      </div>
    </div>
  );
 };