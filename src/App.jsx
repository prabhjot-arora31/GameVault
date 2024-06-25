import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import Card from "./components/Card";
import GameDetail from "./components/GameDetail";
import LoadingIcon from "../src/assets/Loading_icon.gif";

function App() {
  const [data, setdata] = useState();
  const [individualData, setIndividualData] = useState();
  const [searchInput, setsearchInput] = useState("");
  const [isLoading, setisLoading] = useState(true);
  const [darkMode, setdarkMode] = useState(false);
  const handleDataFromChild = (childrendata) => {
    setIndividualData(childrendata);
  };
  async function searchGame() {
    setisLoading(true);
    const { data } = await axios.get(
      "https://api.rawg.io/api/games?key=ade6baffb598415a9e79d4ca7acfa74f&search=" +
        searchInput
    );
    setisLoading(false);
    setdata(data.results);
    // alert(data.results.length);
  }
  const [isDetailedPage, setIsDetailedPage] = useState(false);
  async function callAPI() {
    const { data } = await axios.get(
      "https://api.rawg.io/api/games?key=ade6baffb598415a9e79d4ca7acfa74f"
    );
    console.log(data);
    setdata(data.results);
    setisLoading(false);
  }
  useEffect(() => {
    callAPI();
  }, []);
  return (
    <>
      {isDetailedPage == false ? (
        <div
          style={{ backgroundColor: darkMode ? "black" : "white", margin: 0 }}
        >
          <h1
            style={{
              margin: 0,
              paddingTop: "1.7rem",
              marginBottom: "1.8rem",
              fontSize: "2rem",
              color: darkMode ? "white" : "black",
            }}
          >
            GameVault
          </h1>

          <div style={{ marginBottom: "70px" }}>
            <input
              type="text"
              value={searchInput}
              style={{ padding: "0.6rem", fontSize: "15px", maxWidth: "200px" }}
              onChange={(val) => {
                setsearchInput(val.target.value);
              }}
              placeholder="Enter any game...."
            />
            &nbsp; &nbsp;
            <button
              onClick={() => {
                searchGame();
              }}
              style={{
                backgroundColor: "purple",
                color: "white",
                padding: "0.6rem",
                borderRadius: "0.6rem",
              }}
            >
              Search
            </button>
            {/* https://api.rawg.io/api/games?key=ade6baffb598415a9e79d4ca7acfa74f&search=gta */}
          </div>
          {/* Theme changer */}
          <div
            className="themeChanger"
            style={{ position: "relative", top: "-40px" }}
          >
            <button
              style={{
                backgroundColor: darkMode ? "black" : " white",
                color: darkMode ? "white" : "black",
                borderColor: darkMode ? "white" : "black",
              }}
              onClick={() => {
                if (darkMode == false) {
                  setdarkMode(true);
                } else {
                  setdarkMode(false);
                }
              }}
            >
              {darkMode ? "Switch to light mode" : "Switch to dark mode"}
            </button>
          </div>

          {isLoading ? (
            <img src={LoadingIcon} alt="" />
          ) : (
            <div className="main">
              {data.length != 0 ? (
                data.map((ele) => {
                  return (
                    <Card
                      ele={ele}
                      setIsDetailedPage={setIsDetailedPage}
                      onDataSend={handleDataFromChild}
                      darkMode={darkMode}
                    />
                  );
                })
              ) : (
                <div style={{ color: "red", fontWeight: "bold" }}>
                  No Game Found
                  <br />
                  Please try searching with different keyword.
                </div>
              )}
            </div>
          )}
        </div>
      ) : (
        <div>
          <GameDetail
            darkMode={darkMode}
            individualData={individualData}
            setIsDetailedPage={setIsDetailedPage}
          />
        </div>
      )}
    </>
  );
}

export default App;
