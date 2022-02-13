import React from "react";
import pic from "../assets/pic2.jpg";
import Slider from "../components/Slider";

const style = {
  wrapper: `relative`,
  container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[{pic}] before:bg-cover before:bg-center before:opacity-30 before:blur`,
  contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,
  copyContainer: `w-1/2`,
  title: `relative text-white text-[46px] font-semibold`,
  description: `text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
  ctaContainer: `flex`,
  accentedButton: ` text-gray-900 relative text-lg font-semibold px-12 py-4 bg-[white] rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer`,
  button: ` text-gray-900 relative text-lg font-semibold px-12 py-4 bg-[white] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer`,
  cardContainer: `rounded-[3rem]`,
  infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white`,
  author: `flex flex-col justify-center ml-4`,
  name: ``,
  infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
};

function Hero() {
  return (
    <div className={style.wrapper}>
      <div className="before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[#191A19] before:bg-cover before:bg-center before:opacity-100 before:blur">
        <div className={style.contentWrapper}>
          <div className={style.copyContainer}>
            <div className={style.title}>Discover, collect, and sell</div>
            <Slider />
            <div className={style.description}>
              Buy and Sell NFTs to support endangered species
            </div>
            <div className={style.ctaContainer}>
              <button className={style.accentedButton}>Explore</button>
              <button className={style.button}>Create</button>
            </div>
          </div>
          <div className={style.cardContainer}>
            <div className={style.infoContainer}>
              img
              <div className={style.author}>
                <div className={style.name}>Random Animal</div>
                <a
                  className="text-[#1868b7]"
                  href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/2324922113504035910649522729980423429926362207300810036887725141691069366277"
                >
                  animal description
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
