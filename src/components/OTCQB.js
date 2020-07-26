import React from "react";
import { Typography, Button } from "@material-ui/core";

function OTCQB() {
  return (
    <>
      <Typography component="div">
        <div
          style={{
            width: "100%",
            height: "100%",
            textAlign: "center",
            position: "relative",
          }}
        >
          <img
            src="https://static.wixstatic.com/media/cfd4c6_abf8386a5f5d469b90ad14d66498c1e2~mv2_d_2500_1667_s_2.jpg/v1/fill/w_2500,h_499,al_c,q_85/cfd4c6_abf8386a5f5d469b90ad14d66498c1e2~mv2_d_2500_1667_s_2.webp"
            alt="imge"
            height="100%"
            width="100%"
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              // zIndex: "1",
            }}
          >
            <h1 style={{ fontSize: "55px" }}>OTCQB: DRVD</h1>
          </div>
          <div
            style={{
              position: "absolute",
              top: "72%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              // zIndex: "1",
            }}
          >
            Seize the opportunity to invest in a multi-billion dollar industry
            that's only just getting started. Invest in our future (& yours)
            through driven.
          </div>

          <div
            style={{
              position: "absolute",
              top: "90%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              width: "50%",
              zIndex: "1",
            }}
          >
            <Button color="primary" fullWidth="true">
              CLick here to Begin
            </Button>
          </div>
        </div>
      </Typography>
    </>
  );
}

export default OTCQB;
