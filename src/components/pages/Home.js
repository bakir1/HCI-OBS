import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../pages/b1.png";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import Typed from "react-typed";

//css for main images avatar
const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(35),
    height: theme.spacing(35),
    margin: theme.spacing(10),
  },
  title: {
    color: "#ffc107",
  },
  subtitle: {
    color: "white",
    marginBottom: "3rem",
  },
  typedContainer: {
    position: "auto",
    top: "50%",
    left: "50%",
    transform: "translate(-1%, -1%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="bakery" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Welcome to Online Bakery Shop"]} typeSpeed={40} />
      </Typography>
      <br />
      <Typography className={classes.subtitle} variant="h2">
        <Typed
          strings={["bakery", "sweets", "salty"]}
          typeSpeed={40}
          backSpeed={20}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Home;
