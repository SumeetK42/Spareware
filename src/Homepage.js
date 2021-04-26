import { Button } from "@material-ui/core";
import React, { useState } from "react";
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
import "./homepage.css";
import logo from "./logo.png";
import sale from "./sale.jpg";
import buy from "./buy.jpg";
import two from "./2.jpg";
import $ from "jquery";
import App from "./Topproducts";
import App2 from "./Featured";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const Homepage = () => {
  var history = useHistory();
  function GH() {
    $(".option3").css({
      "z-index": "2",
      visibility: "visible",
      position: "fixed",
      top: "2cm"
    });
    $(".tk").css("z-index", "-1");
  }
  function LK() {
    $(".option3").css("z-index", "-1");
    $(".tk").css("z-index", "2");
  }
  $("#s1").css("background-image", logo);
  const [query, setQuery] = useState();
  const [result, setResult] = useState([]);

  const queryChange = (e) => {
    setQuery(e.target.value);
  };
  const sun = (e) => {
    e.preventDefault();
    const url = `https://edi-sample1.herokuapp.com/?q=${query}`;
    axios({
      method: "GET",
      url: url
    })
      .then((res) => {
        console.log(res.status);
        setResult(res.data[1].item_name);
        if (res.status === 200) {
          if (result.length !== 0) {
            console.log(url);
            history.push({
              pathname: "/Menuresult",
              search: `?query=${query}`,
              state: res.data
            });
          }
        }
      })

      .catch((err) => {
        console.log(err);
        alert("Query not Supported");
      });
  };
  return (
    <>
      <script src="https://kit.fontawesome.com/a076d05399.js"></script>
      <body>
        <div class="pagemargin1">
          <input type="checkbox" id="check"></input>
          <label for="check">
            <div>
              <MenuIcon
                style={{
                  fontSize: 50,
                  left: 100,
                  top: 10,
                  position: "relative"
                }}
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
              class="searchTerm"
              placeholder="What are you looking for?"
              onChange={queryChange}
              style={{ marginLeft: 40 }}
            ></input>{" "}
            <button type="submit" class="searchButton" onClick={sun}>
              {" "}
              Search{" "}
            </button>
            <Button class="option1">
              Add to Cart <ShoppingCartIcon style={{ fontSize: 17 }} />
            </Button>
            <Link to="/Login">
              <Button class="option2">
                Login <HelpIcon style={{ fontSize: 17 }} />{" "}
              </Button>
            </Link>
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
        <div class="offer">
          <div class="slidershow middle">
            <div class="slides">
              <input type="radio" name="r" id="r1" checked></input>
              <input type="radio" name="r" id="r2" checked></input>
              <input type="radio" name="r" id="r3" checked></input>
              <input type="radio" name="r" id="r4" checked></input>
              <input type="radio" name="r" id="r5" checked></input>
              <div class="slide s1" id="s1">
                <img src={logo}></img>
              </div>
              <div class="slide " id="s2">
                <img src={sale} style={{ width: "15cm" }}></img>
              </div>
              <div class="slide" id="s3">
                <img src={buy} style={{ width: "15cm" }}></img>
              </div>
              <div class="slide" id="s4">
                <img src={two}></img>
              </div>
              <div class="slide" id="s5">
                <img src={sale} style={{ width: "15cm" }}></img>
              </div>
            </div>
            <div class="navigation">
              <label
                for="r1"
                class="bar"
                style={{ borderColor: "black" }}
              ></label>
              <label
                for="r2"
                class="bar"
                style={{ borderColor: "black" }}
              ></label>
              <label
                for="r3"
                class="bar"
                style={{ borderColor: "black" }}
              ></label>
              <label
                for="r4"
                class="bar"
                style={{ borderColor: "black" }}
              ></label>
              <label
                for="r5"
                class="bar"
                style={{ borderColor: "black" }}
              ></label>
            </div>
          </div>
        </div>
        <div className="grid-continer"></div>
        <div className="results-will-be-here">
          <h1 style={{ marginBottom: "20px" }} className="head">
            {" "}
            Our Top Products
          </h1>
          <App />
        </div>

        <div style={{ transform: "translate(0cm,13cm)" }}>
          <h1 style={{ marginBottom: "20px" }} className="head">
            {" "}
            Our Feautred Products
          </h1>
          <div
            style={{ boxSizing: "border-box", transform: "translate(0cm,0cm)" }}
          >
            <App2 />
          </div>
        </div>
        <div class="About" style={{ marginTop: "2cm" }}>
          <div class="contact">
            <ul>
              <p class="abot-lab"> Help and Support </p>
              <li>022-30495867</li>
              <li>+918790678900</li>
              <li>+918556667809</li>
              <li>"care@spareware.com"</li>
            </ul>
          </div>

          <div class="acc-cust">
            <ul>
              <p class="abot-lab"> My Account </p>
              <a href="#">
                <li> My Account</li>
              </a>
              <a href="#">
                <li>Order History</li>
              </a>
              <a href="#">
                <li> Contact us</li>
              </a>
            </ul>
          </div>
          <div class="infor">
            <ul>
              <p class="abot-lab"> Information </p>
              <a href="#">
                <li>About us</li>
              </a>
              <a href="#">
                <li>Payment ,shipping ,return and refund</li>
              </a>
              <a href="#">
                <li>Privacy policy</li>
              </a>
              <a href="#">
                <li>terms and condition</li>
              </a>
            </ul>
          </div>
          <div class="office">
            <ul>
              <p class="abot-lab">Office Address</p>
              <h1>
                Spareware private limited, Vishwakarma institute of Technology,
                Upper Indira nagar, Katraj, Pune
              </h1>
              <h2>Pincode: 411037 </h2>
              <h3>Maharashtra, India</h3>
              <h4>Telephone: 8888888888 </h4>
            </ul>
          </div>
        </div>
      </body>
    </>
  );
};
export default Homepage;

//<div style={{ boxSizing:"border-box", transform:"translate(0cm,11cm)"}}><App/></div>
