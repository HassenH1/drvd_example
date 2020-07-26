import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "../App.css";
import { Button } from "@material-ui/core";

const AutoplaySlider = withAutoplay(AwesomeSlider);

function Slides() {
  return (
    <div style={{ paddingBottom: "5rem", background: "#ffffff" }}>
      <AutoplaySlider
        play={false}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={6000}
      >
        <div
          style={{ background: "black", color: "white", textAlign: "center" }}
        >
          <div style={{ margin: "0 auto", fontSize: "36px" }}>
            <h1>we are driven.</h1>
          </div>
          <div style={{ padding: "0 32rem", fontSize: "17px" }}>
            <p>
              Driven is the largest online cannabis retailer in the state of
              California, covering 92% and growing.
            </p>
          </div>
          <div>
            <Button color="primary">LEARN MORE ABOUT US</Button>
          </div>
        </div>
        <div style={{ background: "white" }}>2</div>
        <div style={{ background: "lightgreen" }}>3</div>
        <div style={{ background: "#00DDDD" }}>4</div>
      </AutoplaySlider>
    </div>
  );
}

export default Slides;
