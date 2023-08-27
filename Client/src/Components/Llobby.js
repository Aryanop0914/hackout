import React from "react";

const Llobby = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden", // Prevents scrollbars
        position: "relative", // Ensures the iframe covers the entire viewport
      }}
    >
      <iframe
        src="/lobby.html" // Adjust the path based on your project structure
        title="Embedded Page"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      ></iframe>
    </div>
  );
};

export default Llobby;
