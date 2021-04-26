import React from "react";
import { Button } from "@material-ui/core";
import StarsRating from "stars-rating";
import { Link } from "react-router-dom";
import "./card1.css";

function Card2(props) {
  return (
    <div className="card">
      <div className="card-header">
        <Link to="/Resultpage">
          <img src={props.pic} alt="motor" />
        </Link>
      </div>
      <div className="card-body">
        <p>
          <Link to="/Resultpage">{props.name}</Link>
        </p>
      </div>
      <div class="rate">
        <StarsRating
          count={5}
          color="yellow"
          size={30}
          value={props.ratings}
          edit={false}
        />
      </div>
      <div class="price">
        <b>Rs.{props.price}</b>
      </div>
      <Button variant="contained" class="card-buy">
        Add to Cart
      </Button>
    </div>
  );
}

export default Card2;
