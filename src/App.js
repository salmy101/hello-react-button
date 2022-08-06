import React, { Component } from "react";
import "./index.css";
import Nav from "./components/Nav";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Redirect,
} from "react-router-dom";

//pages
import MainPage from "./pages/index";
import About from "./pages/about";
import Search from "./pages/search";
import Match from "./pages/match";
import Login from "./pages/login";

class App extends Component {
  render() {
    return (
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/match" element={<Match />}></Route>
          <Route path="/login" element={<Login />}></Route>

        </Routes>
      </Router>
    );
  }
}

export default App;
