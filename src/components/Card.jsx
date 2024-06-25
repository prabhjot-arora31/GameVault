import React from "react";

const Card = ({ ele, setIsDetailedPage, onDataSend, darkMode }) => {
  return (
    <div
      className="card"
      style={{
        width: "300PX",
        padding: "0.4rem",
        border: "2px solid black",
        borderColor: darkMode ? "white" : "black",
      }}
    >
      {ele.name.length > 20 ? (
        <h2 style={{ color: darkMode ? "white" : "black" }}>
          {" "}
          {ele.name.slice(0, 20)}...
        </h2>
      ) : (
        <h2 style={{ color: darkMode ? "white" : "black" }}>{ele.name}</h2>
      )}
      <div style={{ width: "300px" }}>
        <img src={`${ele.background_image}`} style={{ width: "100%" }} alt="" />
      </div>
      <button
        onClick={() => {
          setIsDetailedPage(true);
          onDataSend(ele);
          window.scrollTo(0, 0);
        }}
        style={{
          backgroundColor: "purple",
          color: "white",
          padding: "0.6rem",
          borderRadius: "0.6rem",
        }}
      >
        View
      </button>
    </div>
  );
};

export default Card;
