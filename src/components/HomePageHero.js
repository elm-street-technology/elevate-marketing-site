import React from "react";
import classNames from "classnames";
import Container from "../components/Container";
import withStyles from "elevate-ui/withStyles";

const HomePageHero = ({ classes, className }) => {
  return (
    <div className={classNames(classes.root)}>
      <div className={classes.headingContainer}>
        <div className={classes.headingLeft}>
          <div className={classes.heading}>
            Choose the Elevate that suits you
          </div>
          <div className={classes.subHeading}>
            Elevate is the best online product for real estate agents, teams,
            and brokers. We help you generate leads and create clients for life.
          </div>
        </div>
      </div>
    </div>
  );
};

export default withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  headingContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    paddingLeft: "10px",
    paddingRight: "10px",
    paddingBottom: "100px",

    [theme.breakpoints[900]]: {
      justifyContent: "space-between",
      flexDirection: "row",
      paddingBottom: "0px",
    },
  },
  headingLeft: {
    order: "1",
    zIndex: "1",

    [theme.breakpoints[900]]: {
      order: "0",
    },
  },
  heading: {
    fontSize: "22px",
    fontWeight: "800",
    color: "#2E2E35",
    lineHeight: "1.2",
    maxWidth: "500px",
    marginTop: "40px",
    textAlign: "center",

    [theme.breakpoints[600]]: {
      fontSize: "28px",
      textAlign: "left",
    },
  },
  subHeading: {
    fontSize: "18px",
    color: "#64616E",
    marginTop: "16px",
    marginBottom: "20px",
    lineHeight: "26px",
    textAlign: "center",

    [theme.breakpoints[600]]: {
      maxWidth: "340px",
      lineHeight: "28px",
      marginBottom: "36px",
      marginTop: "14px",
      textAlign: "left",
    },
  },
}))(HomePageHero);
