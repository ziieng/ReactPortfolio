import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopNav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import NoMatch from "./pages/NoMatch";
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";

function App() {
  return (
    <div className="container-fluid px-0 mx-0 d-flex">
      <Router>
        <TopNav />
        <Switch>
          <Route exact path={["/", "/index"]}>
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
          <Route>
            <NoMatch />
          </Route>

        </Switch>
      </Router>
      <Footer />
    </div>
  );
}


export default App;
