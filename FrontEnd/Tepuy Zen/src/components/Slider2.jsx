import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import img0 from '../assets/img/hotel0.jpg.png';
import img1 from "../assets/img/hotel1.png";
import img2 from "../assets/img/hotel2.png";
import img3 from "../assets/img/hotel3.png";
import img4 from "../assets/img/hotel4.png";

const slideDescriptions = [
  "Areas Comunes",
  "Baños",
  "Buffet",
  "Areas Sociales",
  "Salon de Entretenimiento"
];

export default function Slider() {
  const slides = [
    {
      url: img0
    },
    {
      url: img1
    },
    {
      url: img2
    },
    {
      url: img3
    },
    {
      url: img4
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[1200px] h-[350px] w-full py-1 px-4 relative mt-5 mb-5 group m-auto">
      <div className="relative w-full h-full rounded-2xl bg-center bg-cover duration-500">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        ></div>

        {/* Flecha derecha */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>

        {/* Flecha izquierda */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>

        {/* Puntos para deslizar */}
        <div className="absolute top-0 left-0 right-0 flex justify-center py-2 text-white">
          {slides.map((slide, slideIndex) => (
            <div key={slideIndex}>
              <div
                className={`text-xl cursor-pointer ${currentIndex === slideIndex ? "text-white" : "text-gray-400"}`}
              >
                <RxDotFilled />
              </div>
            </div>
          ))}
        </div>

        {/* Texto de descripción */}
        <div>
        <div className="text-black amatic-sc-regular rounded-bl-[10px] rounded-br-[10px] tracking-wider absolute bottom-0 text-center left-0 right-0 px-4 py-2 text-3xl" style={{ background: '#BFD8BD' }}>
          {slideDescriptions[currentIndex]}
        </div>
        </div>
      </div>
    </div>
  );
}