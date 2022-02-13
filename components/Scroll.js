import * as FiIcons from "react-icons/fi";
import React, { useState } from "react";

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <FiIcons.FiArrowUp
      className="  text-white bg-[#1E5128] rounded-xl p-1 h-10 w-10 fixed bottom-5 right-5 z-50 cursor-pointer animation fade-in 0.3s transition opacity-75 hover:scale-105"
      onClick={scrollTop}
      style={{ height: 40, display: showScroll ? "flex" : "none" }}
    />
  );
};

export default ScrollToTop;
