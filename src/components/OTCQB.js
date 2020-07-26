import React from "react";
import { Typography, Button } from "@material-ui/core";

function OTCQB() {
  return (
    <>
      <Typography component="div" style={{ height: "38vh" }}>
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
              top: "38%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              height: "5rem",
              // zIndex: "1",
            }}
          >
            <h1 style={{ fontSize: "55px", marginTop: "0" }}>OTCQB: DRVD</h1>
          </div>
          <div
            style={{
              position: "absolute",
              top: "60%",
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
              top: "80%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              width: "32%",
              zIndex: "1",
            }}
          >
            <Button
              variant="contained"
              fullWidth={true}
              style={{ fontSize: "18px", background: "black", color: "white" }}
            >
              INVEST IN THE FUTURE OF CANNABIS
            </Button>
          </div>
        </div>
      </Typography>
    </>
  );
}

export default OTCQB;
