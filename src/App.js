import React, { useEffect } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { Error } from "./pages/Error";
import { UseGlobalContext } from "./context/Context";
export default function App() {
  const { navIndex } = UseGlobalContext();

  useEffect(() => {
    localStorage.setItem(
      "navIndex",
      JSON.stringify(navIndex)
    );
  }, [navIndex]);
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
