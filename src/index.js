import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import BooksReadApp from "./App";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <BooksReadApp />
  </BrowserRouter>,
  document.getElementById("root")
);
