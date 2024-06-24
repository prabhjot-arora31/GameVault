import React from "react";

const Card = ({ ele, setIsDetailedPage, onDataSend }) => {
  return (
    <div
      className="card"
      style={{
        width: "300PX",
        padding: "0.4rem",
        border: "2px solid black",
      }}
    >
      {ele.name.length > 20 ? (
        <h2>{ele.name.slice(0, 20)}...</h2>
      ) : (
        <h2>{ele.name}</h2>
      )}
      <div style={{ width: "300px" }}>
        <img src={`${ele.background_image}`} style={{ width: "100%" }} alt="" />
      </div>
      <button
        onClick={() => {
          setIsDetailedPage(true);
          onDataSend(ele);
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
