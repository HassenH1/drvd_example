import React, { Component } from "react";
import Swiper from "swiper";
// import "swiper/css/swiper.min.css";

export default class Slides extends Component {
  componentDidMount() {
    this.swiper = new Swiper(".swiper-container", {
      cssMode: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      mousewheel: true,
      keyboard: true,
    });
  }

  render() {
    return (
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">Slide 1</div>
          <div className="swiper-slide">Slide 2</div>
          <div className="swiper-slide">Slide 3</div>
          <div className="swiper-slide">Slide 4</div>
          <div className="swiper-slide">Slide 5</div>
          <div className="swiper-slide">Slide 6</div>
          <div className="swiper-slide">Slide 7</div>
          <div className="swiper-slide">Slide 8</div>
          <div className="swiper-slide">Slide 9</div>
          <div className="swiper-slide">Slide 10</div>
        </div>
        {/* <!-- Add Arrows --> */}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
        {/* <!-- Add Pagination --> */}
        <div className="swiper-pagination"></div>
      </div>
    );
  }
}
