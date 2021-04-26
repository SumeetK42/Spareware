import React from "react";
import "./App.css";
import Homepage from "./Homepage";
import Resultpage from "./Resultpage";
import Menuresult from "./Menuresult";
import Checkout from "./Checkout";
import Login from "./Login";
import Signup from "./Signup";
import Address from "./Address";
import Profile from "./Profile";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/Resultpage" component={Resultpage}></Route>
        <Route exact path="/Menuresult">
          <Menuresult />
        </Route>
        <Route exact path="/Checkout" component={Checkout}></Route>
        <Route exact path="/Address" component={Address}></Route>
        <Route exact path="/Login" component={Login}></Route>
        <Route exact path="/Signup" component={Signup}></Route>
        <Route exact path="/Profile" component={Profile}></Route>
        <Redirect exact path="/" component={Homepage}></Redirect>
      </Switch>
    </Router>
  );
}

export default App;
