import React, { useState, useEffect } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

export const BackToTop = () => {
  const [isShow, setIsShow] = useState(false);

  const ScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const checkScroll = () => {
    if (!isShow && window.pageYOffset > 1000) {
      setIsShow(true);
    } else if (isShow && window.pageYOffset < 1000) {
      setIsShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  });

  return (
    <button
      type='btn'
      className={`${isShow && "show"}  back-to-top btn-top`}
      onClick={ScrollTop}>
      <FaAngleDoubleUp className='icon' />
    </button>
  );
};
