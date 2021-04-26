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
import $ from "jquery";
import logo from "./logo.png"
import "./menuresult.css";
import r1 from "./r1.jpg";
import r2 from "./r2.jpg";
import r3 from "./r3.jpg";
import r5 from "./r5.jpg";
import r6 from "./r6.jpg";
import r7 from "./r7.jpg";
import TCard from "./Tcard";
import SResult from "./SResult";
import { Link, useLocation } from "react-router-dom";

const Menuresult = () => {
  let location = useLocation();

  const path = location.pathname;
  const search = location.search;
  const text = location.state;

  
  const [name, setName] = useState("Rasbeery pi2");
  const [price, setPrice] = useState(800);
  const [rating, setRating] = useState(2);
  const [image, setImage] = useState(r1);
  const[avl,setAvl]      =useState();

  const [name2, setName2] = useState("Rasbeery pi2");
  const [price2, setPrice2] = useState(800);
  const [rating2, setRating2] = useState(2);
  const [image2, setImage2] = useState(r2);
  const[avl2,setAvl2]      =useState();

  const [name3, setName3] = useState("Rasbeery pi 3");
  const [price3, setPrice3] = useState(3000);
  const [rating3, setRating3] = useState(5);
  const [image3, setImage3] = useState(r3);
  const[avl3,setAvl3]      =useState();

  const [name4, setName4] = useState("Rasbeery pi 4");
  const [price4, setPrice4] = useState(500);
  const [rating4, setRating4] = useState(4);
  const [image4, setImage4] = useState(r5);
  const[avl4,setAvl4]      =useState();

  const [name5, setName5] = useState("Rasbeery pi 5");
  const [price5, setPrice5] = useState(700);
  const [rating5, setRating5] = useState(2);
  const [image5, setImage5] = useState(r6);
  const[avl5,setAvl5]      =useState();

  const [name6, setName6] = useState("Rasbeery pi 6");
  const [price6, setPrice6] = useState(800);
  const [rating6, setRating6] = useState(1);
  const [image6, setImage6] = useState(r7);
  const[avl6,setAvl6]      =useState();

  const [name7, setName7] = useState("Rasbeery pi 7");
  const [price7, setPrice7] = useState(3000);
  const [rating7, setRating7] = useState(1);
  const [image7, setImage7] = useState(r1);
  const[avl7,setAvl7]      =useState();

  const [name8, setName8] = useState("Rasbeery pi 8");
  const [price8, setPrice8] = useState(500);
  const [rating8, setRating8] = useState(5);
  const [image8, setImage8] = useState(r6);
  const[avl8,setAvl8]      =useState();


  if (text === undefined) {
    console.log("yupp");
  } 
  else {
    $(document).ready(function()
    {
    if($(".res-title").text().length !== 0){     
      $(".res-title").text(search.slice(7))
      $(".path span").text(search.slice(7))
      
      setName(text[1].item_name)
      setName2(text[2].item_name)
      setName3(text[3].item_name)
      setName4(text[4].item_name)
      setName5(text[5].item_name)
      setName6(text[6].item_name)
      setName7(text[7].item_name)
      setName8(text[8].item_name)
      setPrice(text[1].Price)
      setPrice2(text[2].Price)
      setPrice3(text[3].Price)
      setPrice4(text[4].Price)
      setPrice5(text[5].Price)
      setPrice6(text[6].Price)
      setPrice7(text[7].Price)
      setPrice8(text[8].Price)
      setAvl(text[1].avl)
      setAvl2(text[2].avl)
      setAvl3(text[3].avl)
      setAvl4(text[4].avl)
      setAvl5(text[5].avl)
      setAvl6(text[6].avl)
      setAvl7(text[7].avl)
      setAvl8(text[8].avl)
      setRating(text[1].rating)
      setRating2(text[2].rating)
      setRating3(text[3].rating)
      setRating4(text[4].rating)
      setRating5(text[5].rating)
      setRating6(text[6].rating)
      setRating7(text[7].rating)
      setRating8(text[8].rating)
      setImage(text[1].img)
      setImage2(text[2].img)
      setImage3(text[3].img)
      setImage4(text[4].img)
      setImage5(text[5].img)
      setImage6(text[6].img)
      setImage7(text[7].img)
      setImage8(text[8].img)

     
      
     



    }})
  }
  function GH() {
    $(".option3").css({ "z-index": "2", visibility: "visible" });
    $(".tk").css("z-index", "-1");
  }
  function LK() {
    $(".option3").css("z-index", "-1");
    $(".tk").css("z-index", "2");
  }
  $("Sresult").prop("item_name")
 
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
            class="searchTerm"
            style={{marginLeft:40}}
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
        <Link to="/Menuresult"> Boards, Kits and Programmers</Link> /<span>raspberry</span>
      </div>
      <div class="title">
        <h2 className="res-title"> Raspberry pi </h2>
      </div>
      <div
        style={{ marginRight: "3cm", padding: 15, width: 230, float: "right" }}
      >
        {" "}
        Sort by :
        <select>
          <option> default </option>
          <option> A-Z </option>
          <option> Z-A </option>
          <option> Price </option>
        </select>
      </div>

      <SResult
        item_name={name} item_name2={name2} item_name3={name3} item_name4={name4}
        item_name5={name5} item_name6={name6} item_name7={name7} item_name8={name8}
        price={price} price2={price2} price3={price3} price4={price4}
        price5={price5} price6={price6} price7={price7} price8={price8}
        rating={rating} rating2={rating2} rating3={rating3} rating4={rating4} rating5={rating5}
        rating6={rating6} rating7={rating7}  rating8={rating8}
        avl={avl} avl2={avl2} avl3={avl3} avl4={avl4} avl5={avl5} avl6={avl6} avl7={avl7} avl8={avl8}
        image={image} image2={image2} image3={image3} image4={image4} image5={image5} image6={image6}
        image7={image7} image8={image8} 
      />

      <div class="view">
        <a href="#">
          <span>1</span>
        </a>
        <a href="#">
          <span>2</span>
        </a>
        <a href="#">
          <span>3</span>
        </a>
        <a href="#">
          <span style={{ border: "none" }}> Next >></span>
        </a>
      </div>

      <div class="About" style={{ marginTop: "-22cm" }}>
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
    </>
  );
};

export default Menuresult;
