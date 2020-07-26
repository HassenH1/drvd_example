import React from "react";
import Typography from "@material-ui/core/Typography";

function DrivenB() {
  return (
    <>
      {/* <CssBaseline /> */}
      {/* <Container maxWidth="lg"> */}
      <Typography
        component="div"
        style={{
          backgroundColor: "#ffffff",
          height: "80vh",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontWeight: "lighter", fontSize: "36px", marginTop: "0" }}>
          DRIVE BUSINESS UNITS
        </h1>

        <Typography
          component="div"
          style={{
            backgroundColor: "#ffffff",
            height: "22vh",
            textAlign: "center",
            display: "flex",
            justifyContent: "space-evenly",
            marginBottom: "4em",
            marginLeft: "7rem",
            marginRight: "7rem",
          }}
        >
          <div>
            <img
              src="https://cdn0.iconfinder.com/data/icons/trees-19/50/11-512.png"
              alt="icon"
              style={{ height: "165px", width: "185px" }}
            />
            <div style={{ width: "12rem", fontWeight: "lighter" }}>
              <p style={{ fontWeight: "lighter", fontSize: "15px" }}>
                largest online cannabis retailer in California
              </p>
            </div>
          </div>
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Eo_circle_light-green_letter-b.svg/1024px-Eo_circle_light-green_letter-b.svg.png"
              alt="icon"
              style={{ height: "165px", width: "185px" }}
            />
            <div style={{ width: "12rem", fontWeight: "lighter" }}>
              <p style={{ fontWeight: "lighter", fontSize: "15px" }}>
                same day & next day scheduled delivery
              </p>
            </div>
          </div>
          <div>
            <img
              src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/exercise-circle-orange-512.png"
              alt="icon"
              style={{ height: "165px", width: "185px" }}
            />
            <div style={{ width: "12rem", fontWeight: "lighter" }}>
              <p style={{ fontWeight: "lighter", fontSize: "15px" }}>
                same day express delivery
              </p>
            </div>
          </div>
          <div>
            <img
              src="https://image.flaticon.com/icons/png/512/380/380953.png"
              alt="icon"
              style={{ height: "165px", width: "185px" }}
            />
            <div style={{ width: "12rem", fontWeight: "lighter" }}>
              <p style={{ fontWeight: "lighter", fontSize: "15px" }}>
                app-based community for cannabis enthusiasts
              </p>
            </div>
          </div>
        </Typography>

        <br />

        <Typography
          component="div"
          style={{
            height: "32vh",
            textAlign: "center",
            // display: "flex",
            // justifyContent: "center",
            marginLeft: "7rem",
            marginRight: "7rem",
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
      </Typography>
      {/* </Container> */}
    </>
  );
}

export default DrivenB;
