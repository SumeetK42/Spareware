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
import logo from "./logo.png";
import "./reg.css";
import avatar2 from "./Avatar3.jpg";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
const Signup = (props) => {
  var history = useHistory();
  const [reg, setReg] = useState({
    first_name: "sampel",
    last_name: "saple",
    username: "",
    email: "",
    mobile_number: "",
    password: ""
  });

  function toggle() {
    var pass = $(".password");
    var pass1 = pass.attr("type");
    if (pass.val() != "") {
      if (pass1 == "password") {
        $(".Op").toggleClass("main1");
        pass.attr("type", "text");
      } else {
        $(".Op").toggleClass("main1");
        pass.attr("type", "password");
      }
    } else {
      alert("please enter correct passsword");
    }
  }
  function toggle1() {
    var pass = $(".password1");
    var pass1 = pass.attr("type");
    if (pass.val() != "") {
      if (pass1 == "password") {
        $(".Ox").toggleClass("main1");
        pass.attr("type", "text");
      } else {
        $(".Ox").toggleClass("main1");
        pass.attr("type", "password");
      }
    } else {
      alert("please enter correct passsword");
    }
  }

  function GH() {
    $(".option3").css({ "z-index": "2", visibility: "visible" });
    $(".tk").css("z-index", "-1");
  }
  function LK() {
    $(".option3").css("z-index", "-1");
    $(".tk").css("z-index", "2");
  }
  function submit(event) {
    event.preventDefault();
    axios({
      method: "POST",
      url: "https://swbkend.herokuapp.com/users/api/register_buyer/",
      headers: { "Content-Type": "application/json" },
      data: JSON.stringify(reg)
    })
      .then((response) => {
        console.log(response);
        console.log(response.status);
        if (response.status === 200) {
          history.push("/Login");
          alert("You have succesfully registered!!");
        }
      })
      .catch((err) => {
        alert(
          err.response.data.username[0] + "Registration failed please try again"
        );
      });
    console.log(JSON.stringify(reg));
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
          <Link to="/">
            {" "}
            <img
              src={logo}
              style={{ height: "2cm", width: "4cm", marginBottom: 30 }}
            ></img>
          </Link>
          <input
            type="text"
            style={{ marginLeft: 40 }}
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
      <div class="loginbox2">
        <img src={avatar2} className="avatar2"></img>
        <h1>SIGN IN</h1>
        <form onSubmit={submit}>
          <p>Username</p>
          <input
            type="text"
            name="user"
            placeholder="Enter Username"
            onChange={(e) => setReg({ ...reg, username: e.target.value })}
            value={reg.username}
            required
          ></input>
          <p>Email id</p>
          <input
            type="email"
            name="emailid"
            placeholder="Enter your email id"
            onChange={(e) => setReg({ ...reg, email: e.target.value })}
            value={reg.email}
            required
          ></input>
          <p>Mobile number</p>
          <input
            type="text"
            name="mobile_number"
            placeholder="Enter your mobile number"
            onChange={(e) => setReg({ ...reg, mobile_number: e.target.value })}
            value={reg.mobile_number}
            maxLength="10"
            required
          ></input>
          <p>Password</p>
          <input
            type="password"
            name="pass"
            className="password"
            placeholder="Enter Password"
            onChange={(e) => setReg({ ...reg, password: e.target.value })}
            value={reg.password}
            required
          ></input>
          <VisibilityIcon onClick={toggle} className="Op" />
          <p>Confirm Password</p>
          <input
            type="password"
            name="pass1"
            className="password1"
            placeholder="Enter Password"
            required
          ></input>
          <VisibilityIcon onClick={toggle1} className="Ox" />

          <input type="submit" name="" value="Register"></input>
          <p>
            Already have an account?<Link to="/Login">Login</Link>
          </p>
        </form>
      </div>
      <div class="pagemargin3">
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
export default Signup;
