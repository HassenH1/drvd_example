import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "../App.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

function Slides() {
  return (
    <div style={{ paddingBottom: "5rem", background: "#ffffff" }}>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={6000}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </AutoplaySlider>
    </div>
  );
}

export default Slides;
