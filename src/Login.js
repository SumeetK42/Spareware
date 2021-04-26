import { Button } from "@material-ui/core";
import React, { useState } from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PolicyIcon from "@material-ui/icons/Policy";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import SettingsIcon from "@material-ui/icons/Settings";
import InfoIcon from "@material-ui/icons/Info";
import GroupIcon from "@material-ui/icons/Group";
import HelpIcon from "@material-ui/icons/Help";
import VisibilityIcon from "@material-ui/icons/Visibility";
import $ from "jquery";
import logo from "./logo.png"
import avatar from "./avatar1.png";
import "./cr.css";
import { Link ,useHistory} from "react-router-dom";
import axios from "axios";
const Login = () => {
  var history= useHistory();
  function GH() {
    $(".option3").css({ "z-index": "2", visibility: "visible" });
    $(".tk").css("z-index", "-1");
  }
  function LK() {
    $(".option3").css("z-index", "-1");
    $(".tk").css("z-index", "2");
  }
  function toggle() {
    var pass = $("#password");
    var pass1 = pass.attr("type");
    if (pass.val() != "") {
      if (pass1 == "password") {
        $(".Ol").toggleClass("main");
        pass.attr("type", "text");
      } else {
        $(".Ol").toggleClass("main");
        pass.attr("type", "password");
      }
    } else {
      alert("please enter correct passsword");
    }
  }
  const [det, setDet] = useState({
    username: "",
    password: ""
  });
  function sub(event) {
    event.preventDefault();
    axios({
      method: "POST",
      url: "https://swbkend.herokuapp.com/users/api/login/",
      headers: { "Content-Type": "application/json" },
      data: JSON.stringify(det)
    })
      .then((response) => {
        if (response.status === 200) 
        {
          history.push("/");
        }
      })
      .catch((err) => {
        console.log(err.response);
        alert("Invalid credentials .please login again");
      });
  }
  return (
    <>
      <script src="https://kit.fontawesome.com/a076d05399.js"></script>
      <div class="pagemargin1">
        <input type="checkbox" id="check"></input>
        <label for="check">
          <div>
            <MenuIcon
              style={{ fontSize: 50, left: 100, top: 10, position: "relative" }}
              onMouseOver={GH}
            />
          </div>
        </label>
        <div class="option3" onMouseOver={GH}>
          <ul>
            <li>
              <Link to="/Profile">
                <AccountCircleIcon />
                My Account
              </Link>
            </li>
            <li>
              <a href="#">
                <ShoppingCartIcon /> My Cart
              </a>
            </li>
            <li>
              <a href="#">
                <SettingsIcon /> Settings
              </a>
            </li>
            <li>
              <a href="#">
                <InfoIcon /> About
              </a>
            </li>
            <li>
              <a href="#">
                <GroupIcon />
                Services
              </a>
            </li>
            <li>
              <a href="#">
                <ContactSupportIcon /> Contact
              </a>
            </li>
            <li>
              <a href="#">
                <PolicyIcon /> Privacy Policy
              </a>
            </li>
            <li>
              <a href="#">
                <ExitToAppIcon />
                Log out
              </a>
            </li>
          </ul>
        </div>

        <div class="search">
        <Link to="/"> <img src={logo} style={{height:"2cm",width:"4cm",marginBottom:30}}></img></Link>
          <input
            type="text"
            style={{marginLeft:40}}
            class="searchTerm"
            placeholder="What are you looking for?"
          ></input>
          <input type="submit" class="searchButton" value="search"></input>
          <Button class="option1">
            ADD TO CART <ShoppingCartIcon style={{ fontSize: 17 }} />
          </Button>
          <Button class="option2">
            HELP <HelpIcon style={{ fontSize: 17 }} />{" "}
          </Button>
        </div>
      </div>
      <div class="menu-bar">
        <ul>
          <li onMouseOver={LK}>
            <Link to="/Menuresult">Boards</Link>
            <div class="sub-menu">
              <ul>
                <Link to="/Menuresult">
                  <li>Raspberry pi</li>
                </Link>

                <Link to="/Menuresult">
                  <li>Arduino</li>
                </Link>
                <Link to="/Menuresult">
                  <li>Programmers </li>
                </Link>
                <Link to="/Menuresult">
                  <li>Devlopment boards</li>
                </Link>
              </ul>
            </div>
          </li>

          <li>
            <Link to="/Menuresult">Sensors and modules</Link>

            <div class="sub-menu">
              <ul class="drop-down1">
                <Link to="/Menuresult">
                  <li>Sensors</li>
                </Link>
                <Link to="/Menuresult">
                  <li>Modules</li>
                </Link>
                <Link to="/Menuresult">
                  <li>Led</li>
                </Link>
                <Link to="/Menuresult">
                  <li>Display Devices</li>
                </Link>
              </ul>
            </div>
          </li>
          <li>
            <Link to="/Menuresult">Electronic components</Link>
            <div class="sub-menu">
              <ul>
                <Link to="/Menuresult">
                  <li>IC'S</li>
                </Link>
                <Link to="/Menuresult">
                  <li>Microcontrollers</li>
                </Link>
                <Link to="/Menuresult">
                  <li>Small components</li>
                </Link>
                <Link to="/Menuresult">
                  <li> PCB & SMD component</li>
                </Link>
              </ul>
            </div>
          </li>
          <li>
            <Link to="/Menuresult">Mechanical components</Link>
            <div class="sub-menu">
              <ul class="drop-down1">
                <Link to="/Menuresult">
                  <li>Wheels</li>
                </Link>
                <Link to="/Menuresult">
                  <li>Belts and Bearings</li>
                </Link>
                <Link to="/Menuresult">
                  <li>Chains and Coupling</li>
                </Link>
                <Link to="/Menuresult">
                  <li>Springs and Solenoids</li>
                </Link>
              </ul>
            </div>
          </li>
          <li>
            <Link to="/Menuresult">Robotics</Link>
            <div class="sub-menu">
              <ul class="drop-down1">
                <Link to="/Menuresult">
                  <li>Motors</li>
                </Link>
                <Link to="/Menuresult">
                  <li>Actuators</li>
                </Link>
                <Link to="/Menuresult">
                  <li>Robotics part</li>
                </Link>
                <Link to="/Menuresult">
                  <li> Batteries</li>
                </Link>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      <div class="loginbox">
        <img src={avatar} className="avatar"></img>
        <h1>LOGIN</h1>
        <form onSubmit={sub}>
          <p>Username</p>
          <input
            type="text"
            name="user"
            placeholder="Enter Username"
            onChange={(e) => setDet({ ...det, username: e.target.value })}
            required
          ></input>
          <p>Password</p>
          <input
            type="password"
            id="password"
            name="pass"
            placeholder="Enter Password"
            onChange={(e) => setDet({ ...det, password: e.target.value })}
            required
          ></input>
          <VisibilityIcon onClick={toggle} className="Ol" />

          <input type="submit" name="" value="Login"></input>
          <p>
            <a href="#">forgot password?</a>
            <br />
          </p>
          <p>
            Don't have an account?<Link to="/Signup">Register</Link>
          </p>
        </form>
      </div>
      <div class="pagemargin2">
        <h2>VERSION 1.1.0</h2>
        <h3>
          Follow us on :-{" "}
          <a href="#">
            <InstagramIcon />
          </a>{" "}
          <a href="#">
            <FacebookIcon />
          </a>{" "}
          <a href="#">
            <LinkedInIcon />
          </a>{" "}
          <a href="#">
            <GitHubIcon />
          </a>
        </h3>
      </div>
    </>
  );
};
export default Login;
