import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import Table from './Table'
const title = "F1 Team & Driver";
ReactDOM.render(
  <div>
    {title}

    <div className="mx-auto container">
      <Table></Table>
    </div>
  </div>,
  document.getElementById("app")
);
