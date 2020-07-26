import React from "react";
import { Container } from "@material-ui/core";

function Footer() {
  return (
    <div style={{ backgroundColor: "rgba(23, 188, 191, 1)", height: "35vh" }}>
      <Container maxWidth="md">
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            textAlign: "center",
          }}
        >
          <div>
            <h3>CONTACT</h3>
            <p>For General Inquiries:</p>
            <span style={{ color: "white" }}>email@email.com</span>
            <p>For partner inquiries:</p>
            <span style={{ color: "white" }}>email@email.com</span>
            <p>For investor inquiries:</p>
            <span style={{ color: "white" }}>email@email.com</span>
          </div>
          <div>
            <h3>CONNECT</h3>
            <p>Blog</p>
            <p>Career</p>
            <p>Press</p>
            <p>Weedwaves</p>
          </div>
          <div>
            <h3>CANNABIS</h3>
            <p>For Brand</p>
            <p>For People</p>
            <p>For Investors</p>
            <p>About</p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
