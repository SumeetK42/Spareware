import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Card2 from "./Vcard";
import { makeStyles } from "@material-ui/core/styles";
import wheels from "./wheels.jpg";
import springs from "./spring.jpg";
import Motor from "./Motor.jpg";
import bear from "./Bear.jpg";
import "./card1.css";
import axios from "axios";
const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px"
  }
});

function App2() {
  const classes = useStyles();
  const [name, setName] = useState([]);
  const [price, setPrice] = useState([]);
  const [rating1, setRating] = useState([]);

  const [name2, setName2] = useState([]);
  const [price2, setPrice2] = useState([]);
  const [rating2, setRating2] = useState([]);

  const [name3, setName3] = useState([]);
  const [price3, setPrice3] = useState([]);
  const [rating3, setRating3] = useState([]);

  const [name4, setName4] = useState([]);
  const [price4, setPrice4] = useState([]);
  const [rating4, setRating4] = useState([]);

  useEffect(() => {
    function getData() {
      {
        axios
          .get("https://swbkend.herokuapp.com/items/get-featured-products/")
          .then((response) => {
            setName(response.data[0].item_name);
            setPrice(response.data[0].price);
            setRating(response.data[0].rating);

            setName2(response.data[1].item_name);
            setPrice2(response.data[1].price);
            setRating2(response.data[1].rating);

            setName3(response.data[2].item_name);
            setPrice3(response.data[2].price);
            setRating3(response.data[2].rating);

            setName4(response.data[3].item_name);
            setPrice4(response.data[3].price);
            setRating4(response.data[3].rating);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }

    getData();
  });
  return (
    <>
      <Grid container spacing={3} className={classes.gridContainer}>
        <Grid item xs={12} sm={6} md={3}>
          <Card2 name="Wheels" price={price} pic={wheels} ratings={rating1} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card2 name="Motors" price={price2} pic={Motor} ratings={rating2} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card2 name="Bearing" price={price3} pic={bear} ratings={rating3} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card2 name="Springs" price={price4} pic={springs} ratings={rating4} />
        </Grid>
      </Grid>
    </>
  );
}

export default App2;
