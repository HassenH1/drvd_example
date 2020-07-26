import React from "react";

function ImageSection() {
  return (
    <section style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          height: "10rem",
          width: "40rem",
          minHeight: "350px",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1561377718-ebad6e79bc4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1936&q=80"
          alt="train-track"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div
        style={{
          height: "10rem",
          width: "40rem",
          minHeight: "350px",
          background: "black",
          color: "white",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "1.5em",
            lineHeight: "1.35em",
            fontWeight: "bold",
            marginTop: "2em",
          }}
        >
          <span>brand, product & people driven</span>
        </h2>
        <div style={{ padding: "1em 5em" }}>
          <p>
            Driven is an all-in-one technology and logistics solution built for
            brands to brings their products directly to consumers' doors through
            a comfortable, trusted and professional experience. Based in
            Southern California, but always looking toward the horizon, we
            strive to bring movement to the world’s legal cannabis market.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ImageSection;
