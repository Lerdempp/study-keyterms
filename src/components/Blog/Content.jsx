import React from "react";
import BlogRow from "./BlogRow";
import BlogRow2 from "./BlogRow2";
import BlogRow3 from "./BlogRow3";

const Content = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "18px",
        alignSelf: "stretch",
        width: "956px",
        height: "1017px", // Inspect'teki yükseklik
        boxSizing: "border-box", // Border ve padding dahil
      }}
    >
      {/* İlk Child */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "24px",
          alignSelf: "stretch",
          boxSizing: "border-box", // Border ve padding dahil
        }}
      >
        {/* BlogRow'u çağırıyoruz */}
        <BlogRow />
        <BlogRow2 />
        <BlogRow />


      </div>
      {/* İlk Child */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "24px",
          alignSelf: "stretch",
        }}
      >
        <BlogRow3 />

      </div>
    </div>
  );
};

export default Content;
