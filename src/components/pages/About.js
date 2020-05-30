import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../pages/about1.jpg";
import avatar2 from "../pages/about2.jpg";
import avatar3 from "../pages/about3.jpg";
import avatar4 from "../pages/b5.jpg";
import avatar5 from "../pages/b9.jpg";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import Typed from "react-typed";

//css for main images avatar
const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(55),
    height: theme.spacing(55),
    margin: theme.spacing(10),
  },
  title: {
    color: "#ffc107",
    marginTop: "3rem",
  },
  subtitle: {
    color: "white",
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

const About = () => {
  const classes = useStyles();
  return (
    <Box className={classes.typedContainer}>
      <Typography className={classes.title} variant="h2">
        <Typed strings={["About Us"]} typeSpeed={80} backSpeed={60} loop />
      </Typography>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="bakery" />
      </Grid>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar4} alt="bakery" />
      </Grid>

      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar2} alt="bakery" />
      </Grid>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar5} alt="bakery" />
      </Grid>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar3} alt="bakery" />
      </Grid>
    </Box>
  );
};

export default About;
