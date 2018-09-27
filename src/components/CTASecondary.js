import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";

const CTASecondary = ({ classes, className }) => (
  <div className={classNames(classes.root, className)}>
    <div className={classes.ctaContainer}>
      <div className={classes.ctaLeft}>
        <h1 className={classes.heading}>Let's get you started</h1>
        <p className={classes.description}>Schedule a demo call</p>
      </div>
      <div className={classes.ctaRight}>
        <button className={classes.ctaBtn}>Get started</button>
      </div>
    </div>
  </div>
);

export default withStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#55C3BA",
    padding: "40px 12px",

    [theme.breakpoints[900]]: {
      padding: "60px 12px",
    },
  },
  ctaContainer: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "space-between",
    alignItems: "center",
    width: "60%",

    [theme.breakpoints[900]]: {
      flexDirection: "row",
      textAlign: "left",
      fontSize: "28px",
    },
  },
  heading: {
    color: "#FFF",
    fontSize: "20px",
    lineHeight: "1.6",
    fontWeight: "600",

    [theme.breakpoints[900]]: {
      fontSize: "28px",
    },
  },
  description: {
    fontSize: "14px",
    lineHeight: "1.6",
    marginTop: "6px",
    marginBottom: "12px",
    color: "#FFF",

    [theme.breakpoints[900]]: {
      fontSize: "18px",
    },
  },
  ctaBtn: {
    backgroundColor: "#E46457",
    padding: "10px 50px",
    fontSize: "16px",
    color: "#FFF",
    borderRadius: "6px",
    fontWeight: "600",

    [theme.breakpoints[900]]: {
      padding: "16px 60px",
      fontSize: "20px",
    },
  },
  ctaLeft: {
    display: "flex",
    flexDirection: "column",
  },
}))(CTASecondary);
