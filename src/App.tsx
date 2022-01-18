import React from "react";
import "./App.css";
import Example from "./Example";
import Canvas from "@antv/f2-react";
import Chart from "@antv/f2-react";
import Interval from "@antv/f2-react";

function App() {
  const data = [
    { genre: "Sports", sold: 275 },
    { genre: "Strategy", sold: 115 },
    { genre: "Action", sold: 120 },
    { genre: "Shooter", sold: 350 },
    { genre: "Other", sold: 150 },
  ];
  return (
    <div className="App">
      <Example />
      <Canvas>
        <Chart data={data}>
          <Interval x="genre" y="sold" />
        </Chart>
      </Canvas>
    </div>
  );
}

export default App;
