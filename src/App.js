import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Components/Home/Home/Home";
export default function App() {
  return (
    <Router>
     

        <Switch>
          <Route path="/about">
            
          </Route>
          <Route path="/topics">
            
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      
    </Router>
  );
}
