import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

function DrivenB() {
  return (
    <>
      {/* <CssBaseline /> */}
      <Container maxWidth="lg">
        <Typography
          component="div"
          style={{
            backgroundColor: "#ffffff",
            height: "50vh",
            textAlign: "center",
          }}
        >
          <h1 style={{ fontWeight: "lighter", fontSize: "36px" }}>
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
            }}
          >
            <div>
              <img
                src="https://cdn0.iconfinder.com/data/icons/trees-19/50/11-512.png"
                alt="icon"
                style={{ height: "165px", width: "185px" }}
              />
              <p>driven</p>
            </div>
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Eo_circle_light-green_letter-b.svg/1024px-Eo_circle_light-green_letter-b.svg.png"
                alt="icon"
                style={{ height: "165px", width: "185px" }}
              />
              <p>driven</p>
            </div>
            <div>
              <img
                src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/exercise-circle-orange-512.png"
                alt="icon"
                style={{ height: "165px", width: "185px" }}
              />
              <p>driven</p>
            </div>
            <div>
              <img
                src="https://image.flaticon.com/icons/png/512/380/380953.png"
                alt="icon"
                style={{ height: "165px", width: "185px" }}
              />
              <p>driven</p>
            </div>
          </Typography>
        </Typography>
      </Container>
    </>
  );
}

export default DrivenB;
