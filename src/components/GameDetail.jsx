import React from "react";
import img1 from "../assets/rating-removebg-preview.png";
const GameDetail = ({ individualData, setIsDetailedPage }) => {
  return (
    <div>
      <button
        onClick={() => {
          setIsDetailedPage(false);
        }}
        style={{
          backgroundColor: "purple",
          color: "white",
          padding: "0.6rem",
          borderRadius: "0.6rem",
        }}
      >
        Home
      </button>
      <h3 style={{ marginBottom: "4px" }}>{individualData.name}</h3>
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: "0.7rem",
        }}
      >
        {individualData.genres.map((ele) => {
          return (
            <h5
              style={{
                margin: 0,
                padding: "0.3rem",
                borderRadius: "0.6rem",
                backgroundColor: "#525252",
                color: "white",
              }}
            >
              {ele.name}
            </h5>
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          gap: "17.5px",
          marginBottom: "8.7px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div style={{ width: "550px" }}>
          <img
            src={`${individualData.background_image}`}
            style={{ width: "100%" }}
          />
        </div>
        <div>
          <h4>Released: {individualData.released}</h4>
          <h4>
            <i class="fa-solid fa-star"></i> &nbsp;
            {individualData.rating} ({individualData.ratings_count})
          </h4>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "9px",
                flexWrap: "wrap",
              }}
            >
              {individualData.ratings.map((ele) => {
                return (
                  <div
                    style={{
                      backgroundColor: "#545454",
                      padding: "0.6rem",
                      margin: "0.4rem",
                    }}
                  >
                    <i class="fa-solid fa-user" style={{ color: "white" }}></i>
                    <h5 style={{ margin: 0, color: "white" }}>{ele.title}</h5>
                  </div>
                );
              })}
            </div>
          </div>
          <h4>Tags</h4>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "0.4rem",
              flexWrap: "wrap",
              width: "350px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {individualData.tags.map((ele) => {
              return (
                <h5
                  style={{
                    backgroundColor: "#545454",
                    padding: "0.5rem",
                    borderRadius: "0.6rem",
                    color: "white",
                    margin: 0,
                  }}
                >
                  {ele.name}
                </h5>
              );
            })}
          </div>
        </div>
      </div>

      <div>
        <h3>Available in following stores:</h3>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "9px",
            justifyContent: "center",
          }}
        >
          {individualData.stores &&
            individualData.stores.map((ele) => {
              if (individualData.stores != null) {
                return (
                  <div
                    className="storeBox"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",

                      border: "2px solid black",
                      padding: "0.8rem",
                    }}
                  >
                    <h4
                      style={{
                        textDecoration: "underline",
                        margin: 0,
                        marginBottom: "0.32rem",
                      }}
                    >
                      {ele.store.name}
                    </h4>
                    <h4 style={{ margin: 0, marginBottom: "0.32rem" }}>
                      Domain: {ele.store.domain}
                    </h4>
                    <h4 style={{ margin: 0, marginBottom: "0.32rem" }}>
                      {" "}
                      Total Games: {ele.store.games_count}
                    </h4>
                    <div style={{ width: "120px" }}>
                      <img
                        style={{ width: "100%" }}
                        src={`${ele.store.image_background}`}
                        alt=""
                      />
                    </div>
                  </div>
                );
              } else {
                return <h4> No Data Found</h4>;
              }
            })}
        </div>
      </div>

      <div style={{ marginTop: "0.6rem" }}>
        <h4>Screenshots</h4>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          {individualData.short_screenshots.map((ele) => {
            return (
              <div style={{ width: "275px" }}>
                <img src={`${ele.image}`} style={{ width: "100%" }} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GameDetail;
