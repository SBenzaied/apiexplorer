import './index.css';
import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "./Route";
const App = () => (
  <Router>
    <div>
      <Route />
    </div>
  </Router>
);
render(<App />, document.getElementById("root"));


