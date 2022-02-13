import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import * as FiIcons from "react-icons/fi";
import { gql, request } from "graphql-request";

const style = {
  wrapper: `relative`,
  container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[{pic}] before:bg-cover before:bg-center before:opacity-30 before:blur`,
  contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,
  copyContainer: `w-1/2`,
  title: `relative text-white text-[46px] font-semibold`,
  description: `text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
  ctaContainer: `flex`,
  accentedButton: ` text-gray-900 relative text-lg font-semibold px-12 py-4 bg-[white] rounded-lg mr-5  hover:bg-gray-200 cursor-pointer`,
  button: ` text-gray-900 relative text-lg font-semibold px-12 py-4 bg-[white] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer`,
  cardContainer: `rounded-[3rem]`,
  infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white`,
  author: `flex flex-col justify-center ml-4`,
  name: ``,
  infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
};
let count = 0;
let slideInterval;
function Hero() {
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
    }, 5604400);
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
    <div className={style.wrapper}>
      <div className="before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[#191A19] before:bg-cover before:bg-center before:opacity-100 before:blur">
        <div className={style.contentWrapper}>
          <div className={style.copyContainer}>
            <div className="aspect-w-16 aspect-h-9">
              {images.length > 0 && (
                <img
                  src={images[1]}
                  alt="alt"
                  className="rounded-xl object-cover"
                />
              )}
            </div>
            <div className={style.title}>Discover, collect, and sell</div>

            <div className={style.description}>
              Buy and Sell NFTs to support endangered species
            </div>
            <div className={style.ctaContainer}>
              <Link href="/showcase" passHref>
                <button className={style.accentedButton}>Explore</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
