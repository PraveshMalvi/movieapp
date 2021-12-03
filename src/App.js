import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route
              exact
              path="http://PraveshMalvi.github.io/movieapp"
              component={Home}
            />
            <Route
              exact
              path="http://PraveshMalvi.github.io/movieapp/:imdbID"
              component={MovieDetail}
            />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
