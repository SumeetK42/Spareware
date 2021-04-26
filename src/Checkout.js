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
import AddIcon from "@material-ui/icons/Add";
import $ from "jquery";
import logo from "./logo.png";
import { Link, useHistory, useLocation } from "react-router-dom";
import "./check.css";
const Checkout = () => {
  let history = useHistory();
  let location = useLocation();
  const path = location.pathname;
  const data2 = location.state;

  console.log(path);
  console.log(data2);
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
  const { GoogleSpreadsheet } = require("google-spreadsheet");
  const bought = () => {
    async function accessSpreadsheet() {
      const doc = new GoogleSpreadsheet(
        "1R1-7bpay3vXly_vxlAwMxFDbwpCNWqFB5c9tz5C_YDg"
      );
      await doc.useServiceAccountAuth({
        client_email: "sumeet42@sdpregdemo.iam.gserviceaccount.com",
        private_key:
          "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDw58ZTK8Jmjq3b\nAlFV4yaP55bhSvUpTO6rw2LVoatCQx2CjTI2yaRq07YvgaNAeQd0kYms/uD9XHAG\n2LslXULbimUasm9yUrXDwlYHP13s+3ye4rjFFTUukvddfS3uBV6596szrcWrIFdT\naupXsEAe+ISaRkO5wi1WSXjwFOgfna0ZI4N89L/oqSYncW8Txz3JeGT9+AtyB2+1\nwU9P+5qTRR8t82K3EEy2sN5D8adnt6kRbuIdEO3ttlAQdrtXhb5i4cgnc95PUWjC\nKxygV0EO1hiNbeWGFLeFqoA8/oRcWfXyBSIMrU74KzX9X1AnAFV9/Sz3mhkGOvXl\nK7vh/cEvAgMBAAECggEAMRV4Ui/jTxQZFjt1qQM8MyvjkQm9w+l546NOuupSw5B7\nLcNpDMKu7lkukKVgRt2iCD0zCP1xiA3SgYKdNvK2kZa0HOloTanOgRFSh+2ATK28\n6X6WWQmGKXQmVHUR66JKd6efyUrJsKFJSaTKFI3Dssu98NUKLYoDxMX5jykjVnVb\nvdwMltrNFPBn0CICJkEug9r/tmLazWyHUeoRdEKuPh55zkctBn6gk38aFpNmAQO5\n0u3DM4tJATq9f9VA5hcdFoUi+LVrSSqRkWMBIB+Cw5e1W3HiUq3k/KPC5T8RdvZL\nYWprXQrgTpAcWfnDDukLBjfMoQrPHRvFCAztfaXkyQKBgQD8sNDiTbvZaeVuWfKt\n/5H7TCVjYg8QaYAtisCl1RkrCCHh52nFLRF0P9ETLeqVax+RxuvSpAj6Xl0f4k7L\n1mH9Qu3w6EB3Qq5rvD12beregMUbEVCunBSn+ArBwzdhcWsjt3J8PcUaRSJFeJbY\nw3F+qeT5LX3keq3MonIuHeX/hQKBgQD0D3JZqBetT5e+KEu7nCX7+amEctpAyzri\nG/IB/VOKCuwt+zFrbjQB5F68u4wD2WZmpkGusCPzZY8Vyf0NtmYCKY2gftMB2Yv8\nxlgK3X/naboV8ety/MjLincqmqOPKSFtkEsfSmM0dfvxV2bEQS5eSnbRU5nzGC2g\nNJiWUyAqIwKBgQCkcQiujPm3RePJyX1VYGEG0YnvQAwfmRiSCp7ODHyhdVxfX7KE\nX4zhQvpzackkTZ8wxewHmzpAfJJLwoGWwz/nidvAj9QMCHfrooe4/1T+UXxz3fPM\nfcQvfwq5B6qNnjqj9qjpU2VmcCEaZpx8GcxNKpDY25L20iMybXCytEBN5QKBgHuZ\njwnEzSjiVDDja2c57yqrB6SiHdIOmmWETY2gY7xXR8EJo7+KciA7LZdbS89vPCLk\nNANqBOrxFgOs5dEZ/JM/xA/x6p7XM8PyFwh5oJrrumf+uoTjbDVYjH0xD4AjDmDU\nYJcaLx+UWOGip9LgR8FM6NueAStRpVmrCVOoCXQNAoGAd5bJhInXey2nkpSuFXw3\n5Uklb/7FpUqnYK1bAccsdsz1EM4wfuFGCyPH+jfIQbEFIw8vXhVlw3IlEJmyYIgH\nxdK3dCyWjczDLvd8aNQyKWF8ZownVP2njZbfm8Pkc1Us+y8Hwa9NmwbaoUYKFCh/\nOo1QJHA3k5nlzxRkguk0uec=\n-----END PRIVATE KEY-----\n"
      });
      await doc.loadInfo();
      console.log(doc.title);
      const sheet = doc.sheetsByIndex[0];
      console.log(sheet.title);
      await sheet.addRow(data2);
    }
    accessSpreadsheet();
    alert("Thank you Buying out Product");
    history.push("/");
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
            style={{ marginLeft: 40 }}
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
          <p style={{ marginLeft: "7cm" }}>Checkout Payment Gateway : </p>
        </h1>
        <form onSubmit={bought}>
          <table>
            <tr>
              <td>
                <h3>
                  <input
                    type="radio"
                    name="radio"
                    class="radio"
                    required
                  ></input>{" "}
                  Cash on delivery {location.pathname}
                </h3>
              </td>
            </tr>
            <tr>
              <td>
                <h3> UPI Payment </h3>
                <ul>
                  <li>
                    <input
                      type="radio"
                      id="#b1"
                      name="radio"
                      class="radio"
                      required
                    ></input>{" "}
                    Bhim UPI{" "}
                  </li>
                  <Button
                    id="#bt1"
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      width: "4cm",
                      marginLeft: "60px"
                    }}
                  >
                    Pay
                  </Button>
                  <li>
                    <input
                      type="radio"
                      name="radio"
                      class="radio"
                      id="#b2"
                      required
                    ></input>{" "}
                    Phonepe UPI
                  </li>
                  <Button
                    className="bt2"
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      width: "4cm",
                      marginLeft: "60px"
                    }}
                  >
                    Pay
                  </Button>
                  <li>
                    <input
                      type="radio"
                      name="radio"
                      class="radio"
                      id="#b3"
                      required
                    ></input>{" "}
                    Paytm UPI
                  </li>
                  <Button
                    id="#bt3"
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      width: "4cm",
                      marginLeft: "60px"
                    }}
                  >
                    Pay
                  </Button>
                </ul>
              </td>
            </tr>
            <tr>
              <td>
                <h3>
                  {" "}
                  Add card details
                  <AddIcon className="pk" />
                </h3>
                <br />

                <p class="card1">
                  <strong>**we do not share any of your details </strong>
                  <br />
                  <label for="name"> Name of cardholder : </label>
                  <input type="text" name="name" size="30"></input>
                  <br />
                  <label for="name"> Card number : </label>
                  <input type="text" name="name" maxlength="16"></input>
                  <br />
                  <label for="name"> Expiry Date: </label>
                  <input
                    type="text"
                    name="month"
                    maxlength="2"
                    size="1"
                  ></input>{" "}
                  /{" "}
                  <input type="text" name="year" maxlength="4" size="2"></input>
                  <label for="name"> Cvv : </label>
                  <input
                    type="text"
                    name="cvv"
                    maxlength="3"
                    size="2"
                  ></input>{" "}
                  <br />
                  <button
                    style={{
                      fontSize: 15,
                      width: "3cm",
                      color: "white",
                      backgroundColor: "#050514"
                    }}
                  >
                    Save
                  </button>
                </p>
              </td>
            </tr>
            <button
              type="submit"
              className="button"
              style={{ backgroundColor: "red", color: "white" }}
            >
              {" "}
              Checkout{" "}
            </button>
          </table>
        </form>
      </div>
      <div class="pagemargin4">
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
export default Checkout;
