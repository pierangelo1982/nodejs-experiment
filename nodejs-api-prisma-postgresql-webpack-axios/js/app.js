import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";

import Table from "./Table";
const title = "F1 Team & Driver";
ReactDOM.render(
  <div>
    <div className="container mx-auto text-2xl text-center">{title}</div>

    <div className="mx-auto container">
      <Table />
    </div>
  </div>,
  document.getElementById("app")
);
