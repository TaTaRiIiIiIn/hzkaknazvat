import "./App.css";
import React from "react";
import DropDownLogin from "./components/DropDownLogin/DropDownLogin";
import Tables from "./components/TransportList/TransportList";
import Header from "./components/header/header";
import Chec from "./components/TransportList/Check";
import Anomaly from "./components/TransportList/Anomaly";
import Graph from "./components/TransportList/Graph";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App__content">
        <div className="Tables">
          <Tables />
          <Graph />
        </div>
        <Anomaly />
      </div>
    </div>
  );
}

export default App;
