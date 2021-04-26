import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Card2 from "./Vcard";
import { makeStyles } from "@material-ui/core/styles";
import "./card1.css";
import axios from "axios";
import Uno from "./Uno.jpg";
import Raspberry from "./Raspbeery.jpg";
import R2 from "./R2.jpg";

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px"
  }
});

function App() {
  const classes = useStyles();

  const [name, setName] = useState([]);
  const [price, setPrice] = useState([]);
  const [rating1, setRating] = useState([]);
  const [image, setImage] = useState([]);

  const [name2, setName2] = useState([]);
  const [price2, setPrice2] = useState([]);
  const [rating2, setRating2] = useState([]);
  const [image2, setImage2] = useState([]);

  const [name3, setName3] = useState([]);
  const [price3, setPrice3] = useState([]);
  const [rating3, setRating3] = useState([]);
  const [image3, setImage3] = useState([]);

  const [name4, setName4] = useState([]);
  const [price4, setPrice4] = useState([]);
  const [rating4, setRating4] = useState([]);
  const [image4, setImage4] = useState([]);

  useEffect(() => {
    function getData() {
      {
        axios
          .get("https://swbkend.herokuapp.com/items/get-top-products/")
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
          <Card2 name={name} price={price} ratings={rating1} pic={Uno} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card2
            name={name2}
            price={price2}
            ratings={rating2}
            pic={Raspberry}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card2 name={name3} price={price3} ratings={rating3} pic={R2} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card2 name={name4} price={price4} ratings={rating4} pic={Uno} />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
