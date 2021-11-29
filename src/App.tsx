import React from "react";
import "./App.css";

import gacc from "../src/assets/gacc.png";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import Landing from "./pages/Landing/Landing";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
