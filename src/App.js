import React, { Component } from "react";
import "./App.css";
import "./components/layouts/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
//react router import
import { Switch, Route } from "react-router-dom";
//import pages
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import About from "./components/pages/About";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/products" component={Products} />
        <Route path="/Login" component={Login} />
        <Route path="/Signup" component={Signup} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
