import React from "react";
import { Grid } from "@material-ui/core";
import Card2 from "./Vcard";
import { makeStyles } from "@material-ui/core/styles";
import "./card1.css";
import R1 from "./Raspbeery.jpg";
import R2 from "./R1.jpg";
import R3 from "./Uno.jpg";
import R4 from "./R4.jpg";

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px"
  }
});

function App4() {
  const classes = useStyles();
  return (
    <Grid container spacing={3} className={classes.gridContainer}>
      <Grid item xs={12} sm={6} md={3}>
        <Card2 name="Raspbeery pi " price="Rs.2000" pic={R1} ratings={3} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card2 name=" Arduino mega " price="Rs.1000" pic={R2} ratings={1} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card2 name="Arduino Uno  " price="Rs.4000" pic={R3} ratings={2} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card2 name="Arduino Nano" price="Rs.2000" pic={R4} ratings={4} />
      </Grid>
    </Grid>
  );
}

export default App4;
