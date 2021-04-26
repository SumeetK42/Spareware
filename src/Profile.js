import { Button } from "@material-ui/core";
import React, { useState ,useEffect} from "react";
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
import { Link } from "react-router-dom";
import avtr from "./Avatar3.jpg";
import "./pro.css";
import axios from "axios";

const Profile = () => {
  function GH() {
    $(".option3").css({ "z-index": "2", visibility: "visible" });
    $(".tk").css("z-index", "-1");
  }
  function LK() {
    $(".option3").css("z-index", "-1");
    $(".tk").css("z-index", "2");
  }
  const[name,Setname]=useState({

   name:"",
   emaild:""

  })
  useEffect(()=>
  {
  const dis=(event)=>
  {
      axios({
      method:"GET",
      url: "https://swbkend.herokuapp.com/users/api/buyer-profile/",
      header:{'Authorization': localStorage.getItem("token")}
    }).then((response) => console.log(response))
    .catch((err) => {
      console.log(err.response.request.response);
    });
  }
  dis()
})


  const [update, setUpdate] = useState({
    mobile_number: "",
    img_link:"sample",
    lane_no: "",
    landmark: "",
    village: "",
    district: "",
    state: ""
  });
  const updatePro = (event) => {
    
    axios({ 
         method:"PUT",
         url:"https://swbkend.herokuapp.com/users/api/update-buyer-profile/",
         data:JSON.stringify(update),
         headers: {'Authorization': localStorage.getItem("token")}
        })
      .then((response) => console.log(response))
      .catch((err) => {
        console.log(err.response.request.response);
      });
    console.log(JSON.stringify(update));
    console.log(localStorage.getItem("token"));
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
              <a href="#">
                <AccountCircleIcon />
                My Account
              </a>
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
          <input type="button" class="option4" value="logo"></input>
          <input
            type="text"
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
      <center>
        <h2 className="acco">
          <p>My Account</p>
        </h2>
        <div class="box">
          <img src={avtr} class="image" id="photo"></img>
          <input type="file" name="" id="file" accept="image/*" />
          <label for="file" id="uploadBtn" class="up">
            Edit Image
          </label>
          <form onSubmit={updatePro} style={{ marginTop: "1cm" }}>
            <h3>Personal Information :</h3>
            <div style={{ marginTop: "0.5cm" }}>
              <label for="name" className="al">
                {" "}
                Name{" "}
              </label>
              <label for="email" className="ak">
                {" "}
                Email address{" "}
              </label>
              <br />
              <input type="text" name="name" placeholder="Enter Name" />
              <input
                type="email"
                name="email"
                placeholder="Enter your email id"
              />{" "}
              <br />
              <label for="num" className="al">
                {" "}
                Mobile Number{" "}
              </label>
              <label for="dob" className="ak" id="ol">
                {" "}
                Date of Birth{" "}
              </label>
              <br />
              <input
                type="text"
                name="num"
                placeholder="Enter your mobile number"
                onChange={(e) =>
                  setUpdate({ ...update, mobile_number: e.target.value })
                }
                value={update.mobile_number}
              />
              <input
                type="text"
                name="dob"
                placeholder="Date of birth"  
              />
              <br />
              <p style={{ marginTop: "0.3cm" }}>
                <label
                  for="gender"
                  className="al "
                  style={{ marginTop: "0.5cm" }}
                >
                  {" "}
                  Gender :{" "}
                </label>
                Male <input type="radio"></input> Female{" "}
                <input type="radio"></input>
              </p>
            </div>

            <h3>Address details:</h3>
            <div style={{ marginTop: "0.5cm" }}>
              <label for="name" className="al">
                {" "}
                Lane no.{" "}
              </label>
              <label for="name" className="ak">
                {" "}
                Landmark{" "}
              </label>
              <br />
              <input
                type="text"
                name=""
                placeholder="Lane no./Plot no."
                onChange={(e) => setUpdate({ ...update, lane_no: e.target.value })}
                value={update.lane_no}
              />

              <input
                type="text"
                name=""
                placeholder="Landmark/nearby location"
                onChange={(e) =>
                  setUpdate({ ...update, landmark: e.target.value })
                }
                value={update.landmark}
              />
              <br />
              <label for="name" className="al">
                {" "}
                City{" "}
              </label>
              <label for="name" className="ak">
                {" "}
                District{" "}
              </label>
              <br />
              <input
                type="text"
                name=""
                placeholder="Village/City"
                onChange={(e) => setUpdate({ ...update, viilage: e.target.value })}
                value={update.village}
              />
              <input
                type="text"
                name=""
                placeholder="District"
                onChange={(e) =>
                  setUpdate({ ...update, district: e.target.value })
                }
                value={update.district}
              />
              <br />
              <label for="name" className="al">
                {" "}
                State{" "}
              </label>
              <label for="name" className="ak">
                {" "}
                Pincode{" "}
              </label>
              <br />
              <input
                type="text"
                name=""
                placeholder="State"
                onChange={(e) =>
                  setUpdate({ ...update, state: e.target.value })
                }
                value={update.state}
              />
              <input
                type="text"
                name=""
                placeholder="Pincode"
                
              />
            </div>
            <button
              style={{ float: "left", margin: "20 0 1cm 18.2%" }}
              className="gk"
            >
              {" "}
              Change password{" "}
            </button>
            <button
              style={{ float: "right", margin: "20 18.2% 1cm 0" }}
              className="gk"
            >
              Submit
            </button>
          </form>
        </div>
      </center>
      <div class="pagemargin5">
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
export default Profile;
