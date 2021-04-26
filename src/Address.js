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
import $ from "jquery";
import logo from "./logo.png";
import { Link, useHistory, useLocation } from "react-router-dom";
import "./check.css";
import ARD from "./ARD.jpg";
const Address = () => {
  function GH() {
    $(".option3").css({ "z-index": "2", visibility: "visible" });
    $(".tk").css("z-index", "-1");
  }
  function LK() {
    $(".option3").css("z-index", "-1");
    $(".tk").css("z-index", "2");
  }

  $(".card1").css("display", "none");
  $(".pk").on("click", function () {
    $(".card1").slideDown();
  });

  $("input[name=radio]").on("change", function () {
    $("#bt1").css("color", "yellow");
  });
  let history = useHistory();
  let location = useLocation();
  const [product, setProduct] = useState({
    Name: "",
    Email: "",
    Phone_Number: "",
    Product: "",
    Price: "",
    Quantity: "",
    Total_Price: "",
    Address: "",
    Pincode: "",
    Date_of_Purchase: ""
  });
  $(document).ready(function () {
    $(".add-pro").text(x);
    $(".add-price").text(y);
  });
  const prod = location.state;
  var x = prod.Product;
  var y = prod.Price;
  var z = prod.Quantity;
  var pic2 = prod.Pic1;
  var t = y.match(/(\d+\.?\d*)/);

  var total = t[0] * z;
  $(document).ready(function () {
    $(".add-pro").text(x);
    $(".add-price").text(y);
    $(".add-qua").text(z);
    $(".my-img img").attr("src", pic2);
    $(".add-total").text("Rs.₹" + total + "inc. GST");
  });

  const proceedCheck = (e) => {
    e.preventDefault();
    var currentdate = new Date();
    var datetime =
      currentdate.getDate() +
      "/" +
      (currentdate.getMonth() + 1) +
      "/" +
      currentdate.getFullYear() +
      " @ " +
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes();
    var t = y.match(/(\d+\.?\d*)/);
    var total = t[0] * z;
    var total2 = "Rs.₹" + total + " inc. GST";

    setProduct({
      ...product,
      Product: x,
      Quantity: z,
      Price: y,
      Total_Price: total2,
      Date_of_Purchase: datetime
    });
    console.log(product.Product.length);
    if (product.Product.length > 0) {
      console.log(product);
      history.push({
        pathname: "/Checkout",
        state: product
      });
    }
  };
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
                <ShoppingCartIcon /> My Cart{" "}
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
      <div className="ck">
        <h1 className="head2">
          <p style={{ marginLeft: "7cm" }}>
            Product summary & Delivery Address:{" "}
          </p>
        </h1>
        <form onSubmit={proceedCheck}>
          <table>
            <tr>
              <td>
                <h3>Your Product</h3>
                <div class="my-pro">
                  <div class="my-img">
                    <img src={ARD} alt="imga"></img>
                  </div>
                  <div class="my-det">
                    <div class="grid-container">
                      <div class="grid-item" style={{ fontSize: 18 }}>
                        <b className="add-pro">xx</b>
                      </div>
                      <div class="grid-item">
                        <p style={{ fontSize: 18 }}>
                          Availability: <b>In stock</b>
                        </p>
                      </div>
                      <div class="grid-item" style={{ fontSize: 18 }}>
                        <p>
                          Quantity:<b className="add-qua"></b>
                        </p>
                      </div>
                      <div class="grid-item" style={{ fontSize: "0.5cm" }}>
                        <i class="add-price"> Rs.456 </i> *{" "}
                        <i className="add-qua"> </i> ={" "}
                        <b
                          className="add-total"
                          style={{ fontSize: "0.8cm" }}
                        ></b>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <h3>Personal details</h3>
                <div className="my-per">
                  <label>
                    <strong>Name *</strong>
                  </label>
                  <input
                    type="text"
                    style={{ marginLeft: 100 }}
                    onChange={(e) =>
                      setProduct({ ...product, Name: e.target.value })
                    }
                    value={product.Name}
                  ></input>
                  <br />
                  <label>
                    {" "}
                    <strong>Email *</strong>
                  </label>
                  <input
                    type="text"
                    style={{ marginLeft: 100 }}
                    onChange={(e) =>
                      setProduct({ ...product, Email: e.target.value })
                    }
                    value={product.Email}
                  ></input>
                  <br />
                  <label>
                    {" "}
                    <strong>Phone_Number *</strong>
                  </label>
                  <input
                    type="text"
                    style={{ marginLeft: 13 }}
                    onChange={(e) =>
                      setProduct({ ...product, Phone_Number: e.target.value })
                    }
                    value={product.Phone_Number}
                  ></input>
                  <br />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <h3>Address</h3>
                <p class="my-add">
                  <label>
                    {" "}
                    <strong>Address *</strong>
                  </label>
                  <br />
                  <textarea
                    name="Address"
                    style={{
                      height: "5cm",
                      width: 550,
                      border: "3px outset grey",
                      fontsize: "1cm",
                      marginTop: 15,
                      marginLeft: 20
                    }}
                    onChange={(e) =>
                      setProduct({ ...product, Address: e.target.value })
                    }
                    value={product.Address}
                    required
                  />
                  <br />
                  <label>
                    {" "}
                    <strong>Pincode *</strong>
                  </label>
                  <input
                    type="text"
                    style={{
                      width: 300,
                      marginTop: 15,
                      marginLeft: 20,
                      marginBottom: 10
                    }}
                    onChange={(e) =>
                      setProduct({ ...product, Pincode: e.target.value })
                    }
                    value={product.Pincode}
                    required
                  ></input>
                </p>
              </td>
            </tr>

            <button
              className="button"
              type="submit"
              id="btn"
              style={{
                backgroundColor: "red",
                color: "white",
                width: 300,
                marginTop: 10,
                marginLeft: 10,
                textDecoration: "none"
              }}
            >
              {" "}
              Proceed to Checkout{" "}
            </button>
          </table>
        </form>
      </div>

      <div class="pagemargin4" style={{ marginTop: 900 }}>
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
export default Address;
