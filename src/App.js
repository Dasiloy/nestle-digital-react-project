import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Error } from "./pages/Error";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
