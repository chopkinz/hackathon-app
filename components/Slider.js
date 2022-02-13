import React, { useState, useEffect, useRef } from "react";
import * as FiIcons from "react-icons/fi";
import { gql, request } from "graphql-request";

let count = 0;
let slideInterval;

export default function Slider() {
  const [dataLoading, setDataLoading] = useState(true);
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    slideRef.current?.addEventListener("animationend", removeAnimation);
    slideRef.current?.addEventListener("mouseenter", pauseSlider);
    slideRef.current?.addEventListener("mouseleave", startSlider);

    startSlider();
    return () => {
      pauseSlider();
    };
    // eslint-disable-next-line
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 300000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleOnNextClick = () => {
    setCurrentIndex((count) => count + 1);
    slideRef.current.classList.add("fade-anim");
  };
  const handleOnPrevClick = () => {
    const productsLength = images.length;
    setCurrentIndex((count) => count - 1);

    slideRef.current.classList.add("fade-anim");
  };
  useEffect(() => {
    const getImages = async () => {
      setDataLoading(true);
      const response = await request(
        "/api/graphql",
        gql`
          query {
            animalImages
          }
        `
      );
      setImages(response.animalImages);
      setDataLoading(false);
    };
    getImages();
  }, []);
  console.log(images);

  if (dataLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div
      ref={slideRef}
      className="max-w-4xl mx-auto select-none relative w-full overflow-hidden"
    >
      <div id="slider" className="aspect-w-16 aspect-h-9">
        {images.length > 0 && (
          <img
            src={images[currentIndex]}
            alt="alt"
            layout="fill"
            width="40"
            height="40"
            objectFit="cover"
            className="rounded-xl"
          />
        )}
      </div>

      <div className="relative flex w-full my-8  transform -translate-y-1/2 px-3 justify-between items-center ">
        <button onClick={handleOnPrevClick} className=" slider-btn">
          <FiIcons.FiChevronLeft />
        </button>
        <button onClick={handleOnNextClick} className=" slider-btn">
          <FiIcons.FiChevronRight />
        </button>
      </div>
    </div>
  );
}
