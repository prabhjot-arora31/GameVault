import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import Card from "./components/Card";
import GameDetail from "./components/GameDetail";

function App() {
  const [data, setdata] = useState();
  const [individualData, setIndividualData] = useState();
  const [searchInput, setsearchInput] = useState("");
  const handleDataFromChild = (childrendata) => {
    setIndividualData(childrendata);
  };
  async function searchGame() {
    const { data } = await axios.get(
      "https://api.rawg.io/api/games?key=ade6baffb598415a9e79d4ca7acfa74f&search=" +
        searchInput
    );
    setdata(data.results);
  }
  const [isDetailedPage, setIsDetailedPage] = useState(false);
  async function callAPI() {
    const { data } = await axios.get(
      "https://api.rawg.io/api/games?key=ade6baffb598415a9e79d4ca7acfa74f"
    );
    console.log(data);
    setdata(data.results);
  }
  useEffect(() => {
    callAPI();
  }, []);
  return (
    <>
      {isDetailedPage == false ? (
        <div>
          <h1 style={{ margin: 0, marginBottom: "0.8rem", fontSize: "2rem" }}>
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
          <div className="main">
            {data &&
              data.map((ele) => {
                return (
                  <Card
                    ele={ele}
                    setIsDetailedPage={setIsDetailedPage}
                    onDataSend={handleDataFromChild}
                  />
                );
              })}
          </div>
        </div>
      ) : (
        <div>
          <GameDetail
            individualData={individualData}
            setIsDetailedPage={setIsDetailedPage}
          />
        </div>
      )}
    </>
  );
}

export default App;
