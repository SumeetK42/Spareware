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
import StarRatings from "react-star-ratings";
import $ from "jquery";
import logo from "./logo.png";
import "./result.css";
import { Link, useHistory, useLocation } from "react-router-dom";
import App3 from "./Recommended";
import App4 from "./Recent";
import ARD from "./ARD.jpg";

const Resultpage = () => {
  function ok() {
    $(".content .radio_content-radio_2").hide();
    $(".content .radio_content-radio_1").show();
    $(".qw").on("click", function () {
      $(".content .radio_content-radio_1").hide();
      $(".content .radio_content-radio_2").show();
      $(".radio_content-radio_2").css("visibility", "visible");
    });
  }
  function GH() {
    $(".option3").css({ "z-index": "2", visibility: "visible" });
    $(".tk").css("z-index", "-1");
  }
  function LK() {
    $(".option3").css("z-index", "-1");
    $(".tk").css("z-index", "2");
  }
  const [result, setResult] = useState({
    Product: "",
    Price: "",
    Quantity: "",
    Pic1: ""
  });
  let history = useHistory();
  let location = useLocation();

  const test = location.state;
  $(document).ready(function () {
    $(".pro-name").text(test.item_name);
    $(".path .pro-path ").text(test.item_name)
    $(".pro-price").text(test.price);
    $(".pro-avl").text(test.avail);
    $(".u1 img").attr("src", test.pic);
  });

  const buyNow = () => {
    var x = $(".pro-name").html().toString();
    var y = $(".pro-price").text();
    var z = $("#pro-qua").val();
    var pic1 = $(".u1 img").attr("src");
    var y2 = y.toString();
    x = String(x);
    setResult({ ...result, Product: x, Price: y2, Quantity: z, Pic1: pic1 });
    console.log(result.Product.length);
    if (result.Product.length > 0) {
      console.log(result);
      history.push({
        pathname: "/Address",
        state: result
      });
    }
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
              style={{ marginLeft: 40 }}
              class="searchTerm"
              placeholder="What are you looking for?"
            ></input>
            <Link to="/Menuresult">
              <input type="submit" class="searchButton" value="search"></input>
            </Link>
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

        <div class="path">
          <Link to="/">Home</Link> /{" "}
          <Link to="/Menuresult"> Boards, Kits and Programmers</Link>
          /<span class="pro-path">LEDs</span>
        </div>

        <div class="reproduct">
          <div class="u1">
            <img src={ARD} alt="imga"></img>
          </div>
          <div class="u2">
            <div class="grid-container">
              <div class="grid-item" style={{ fontSize: 18 }}>
                <b className="pro-name">
                  Arduino Portenta H7 Development Board
                </b>
                <br />
                <p style={{ marginTop: "1cm", fontSize: 15 }}>
                  Availability: <b class="pro-avl">In stock</b>
                </p>
              </div>
              <div>
                {" "}
                <StarRatings
                  rating={2.7}
                  numberOfStars={5}
                  starDimension="30px"
                  starSpacing="5px"
                  starRatedColor="yellow"
                />
              </div>
              <div class="grid-item">
                Quantity
                <input id="pro-qua" type="text" />
                <br />
                <p
                  className="pro-price"
                  style={{
                    marginTop: "0.4cm",
                    fontSize: "1cm",
                    fontWeight: "bolder",
                    color: "black"
                  }}
                >
                  Rs.1499
                </p>
              </div>
              <div class="grid-item">
                {" "}
                <Button> Add to Cart</Button>
                <Button onClick={buyNow} style={{ marginLeft: "0.5cm" }}>
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div class="wrapper">
          <div class="radio_tabs">
            <label class="radio_wrap" data-radio="radio_1">
              <input type="radio" name="sports" class="input" checked />
              <span class="radio_mark">
                <button onClick={ok}>DESCRIPTION</button>
              </span>
            </label>
            <label class="radio_wrap" data-radio="radio_2">
              <input type="radio" name="sports" class="input" checked />
              <span class="radio_mark">
                <button class="qw">SPECIFICATION</button>
              </span>
            </label>
          </div>
          <div class="content">
            <div class="radio_content-radio_1">
              <p>
                Arduino is an open-source electronics platform based on
                easy-to-use hardware and software.Arduino boards are able to
                read inputs - light on a sensor, a finger on a button, or a
                Twitter message - and turn it into an output - activating a
                motor, turning on an LED, publishing something online. You can
                tell your board what to do by sending a set of instructions to
                the microcontroller on the board. To do so you use the Arduino
                programming language (based on Wiring), and the Arduino Software
                (IDE), based on Processing.
              </p>
              <p>
                <b>LED</b>: There is a built-in LED driven by digital pin 13.
                When the pin is high value, the LED is on, when the pin is low,
                it is off.
              </p>
              <p>
                <b>VIN</b>: The input voltage to the Arduino/Genuino board when
                it is using an external power source (as opposed to 5 volts from
                the USB connection or other regulated power source). You can
                supply voltage through this pin, or, if supplying voltage via
                the power jack, access it through this pin.
              </p>
              <p>
                <b>5V</b>: This pin outputs a regulated 5V from the regulator on
                the board. The board can be supplied with power either from the
                DC power jack (7 - 20V), the USB connector (5V), or the VIN pin
                of the board (7-20V). Supplying voltage via the 5V or 3.3V pins
                bypasses the regulator, and can damage the board.
              </p>
              <p>
                <b>GND</b>: Ground pins.
              </p>
              <p>
                <b>IOREF</b>: This pin on the Arduino/Genuino board provides the
                voltage reference with which the microcontroller operates. A
                properly configured shield can read the IOREF pin voltage and
                select the appropriate power source, or enable voltage
                translators on the outputs to work with the 5V or 3.3V.
              </p>
              <p>
                <b>Reset</b>: Typically used to add a reset button to shields
                that block the one on the board.
              </p>
            </div>
            <div class="radio_content-radio_2">
              <p>
                <b>Operating Voltage</b>: 5 Volts
              </p>
              <p>
                <b>Input Voltage</b>: 7 to 20 Volts
              </p>
              <p>
                <b>Digital I/O Pins</b>: 14 (of which 6 can provide PWM output)
              </p>
              <p>
                <b>UART</b>: 1
              </p>
              <p>
                <b>I2C</b>: 1
              </p>
              <p>
                <b>SPPI</b>: 1
              </p>
              <p>
                <b>Analog Input Pins</b>: 6
              </p>
              <p>
                <b>DC Current per I/O Pin</b>: 20 mA
              </p>
              <p>
                <b>DC Current for 3.3V Pin</b>: 50 mA
              </p>
              <p>
                <b>Clock Speed</b>: 16 MHz
              </p>
              <p>
                <b>Length</b>: 68.6 mm
              </p>
              <p>
                <b>Width</b>: 53.4 mm
              </p>
              <p>
                <b>Weight</b>: 25 g
              </p>
            </div>
          </div>
        </div>

        <div class="grid-container">
          <div className="recom">
            <h1 className="r-head"> Recommended Products</h1>
            <App3 />
          </div>

          <div className="recent">
            <h1 className="r-head"> Customers frquently bought</h1>
            <div>
              {" "}
              <App4 />
            </div>
          </div>
        </div>

        <div class="About">
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
export default Resultpage;

//<div style={{ boxSizing:"border-box", transform:"translate(0cm,11cm)"}}><App/></div>
