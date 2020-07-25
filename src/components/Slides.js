import React, { useEffect } from "react";
import Swiper from "swiper";

export default function Slides() {
  useEffect(() => {
    var swiper = new Swiper(".swiper-container", {
      slidesPerView: 6,
      spaceBetween: 3,
      slidesPerGroup: 2,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);

  return <div>Slides stuff here</div>;
}
