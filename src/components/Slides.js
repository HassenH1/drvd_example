import React, { Component } from "react";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";

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
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">Slide 1</div>
          <div class="swiper-slide">Slide 2</div>
          <div class="swiper-slide">Slide 3</div>
          <div class="swiper-slide">Slide 4</div>
          <div class="swiper-slide">Slide 5</div>
          <div class="swiper-slide">Slide 6</div>
          <div class="swiper-slide">Slide 7</div>
          <div class="swiper-slide">Slide 8</div>
          <div class="swiper-slide">Slide 9</div>
          <div class="swiper-slide">Slide 10</div>
        </div>
        {/* <!-- Add Arrows --> */}
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        {/* <!-- Add Pagination --> */}
        <div class="swiper-pagination"></div>
      </div>
    );
  }
}
