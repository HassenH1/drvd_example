import React from "react";
import Typography from "@material-ui/core/Typography";

function OTCQB() {
  return (
    <Typography
      component="div"
      style={{
        height: "32vh",
        textAlign: "center",
        // display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ margin: "0 16em" }}>
        <h2
          style={{
            fontSize: "38px",
            fontWeight: "lighter",
            fontFamily: "Arial",
          }}
        >
          YOUR BRAND COULD BE DIRECT TO CONSUMER WITH
        </h2>
      </div>

      <div>
        <h2 style={{ fontSize: "60px", margin: "0" }}>
          <span style={{ color: "purple" }}>Brand</span>
          <span style={{ color: "lightgreen" }}>Budee</span>
        </h2>
      </div>
    </Typography>
  );
}

export default OTCQB;
