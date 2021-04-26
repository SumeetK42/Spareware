import React, { useState } from "react";
import { Button } from "@material-ui/core";
import StarsRating from "stars-rating";
import { Link } from "react-router-dom";
import $ from "jquery";
import "./tc.css";

function TCard(props) {
  const [resul, setResul] = useState({
    Name: "",
    Price: ""
  });
  const cardRes = (e) => {
    let x3 = $(".card-body2").text();
    let y3 = $(".price2").text();
    setResul({ ...resul, Name: x3, Price: y3 });
    if (resul.Name.length > 0) {
      console.log(resul);
    }
  };
  return (
    <div className="card2">
      <div className="card-header2">
        <img
          src={props.pic}
          alt="motor"
          style={{
            width: "4.7cm",
            height: "5.2cm",
            borderBottomRightRadius: 15,
            borderBottomLeftRadius: 15
          }}
        />
      </div>
      <div className="card-body2">
        <p onClick={cardRes}>{props.name}</p>
      </div>
      <div class="avlb2">{props.avlb}</div>
      <div class="rate2">
        <StarsRating
          count={5}
          color="yellow"
          size={30}
          value={props.ratings}
          edit={false}
        />
      </div>
      <div class="price2">
        <b> Rs.{props.price}</b>
      </div>
      <Button variant="contained" class="card-buy2">
        Add to Cart
      </Button>
    </div>
  );
}

export default TCard;
