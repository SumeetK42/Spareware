import React from "react";
import { Grid } from "@material-ui/core";
import Card2 from "./Vcard";
import { makeStyles } from "@material-ui/core/styles";
import "./card1.css";
import R9 from "./R9.jpg";
import R6 from "./R6.jpg";
import R7 from "./R7.jpg";
import R8 from "./R8.jpg";

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px"
  }
});

function App3() {
  const classes = useStyles();
  return (
    <Grid container spacing={3} className={classes.gridContainer}>
      <Grid item xs={12} sm={6} md={3}>
        <Card2 name="Capacitor" price="Rs.3700" pic={R6} ratings={5} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card2 name="PCB Board" price="Rs.1000" pic={R7} ratings={1} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card2 name="SMD Board" price="Rs.4000" pic={R8} ratings={4} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card2
          name="raspbeeypi Camera"
          price="Rs.2000"
          pic={R9}
          ratings={4.5}
        />
      </Grid>
    </Grid>
  );
}

export default App3;
