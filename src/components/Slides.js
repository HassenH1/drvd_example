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
        <div style={{ background: "black" }}>1</div>
        <div style={{ background: "white" }}>2</div>
        <div style={{ background: "lightgreen" }}>3</div>
        <div style={{ background: "#00DDDD" }}>4</div>
      </AutoplaySlider>
    </div>
  );
}

export default Slides;
