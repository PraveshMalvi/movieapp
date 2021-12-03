import "./App.scss";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
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
            <Route exact path="/movieapp" component={Home} />
            <Route path="/movieapp/movie/:imdbID" component={MovieDetail} />
            <Redirect to="/movieapp" />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
