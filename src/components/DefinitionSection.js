import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";

const SolutionsGrid = ({ classes, className, children }) => {
  return (
    <div className={classNames(classes.root, className)}>
      <div className={classes.left}>
        <div className={classes.heading}>Productivity</div>
        <div className={classes.subheading}>/proh-duhk-tiv-i-tee/</div>
        <div className={classes.noun}>noun</div>
      </div>
      <div className={classes.right}>
        <div className={classes.number}>1.</div>
        <div className={classes.definition}>
          The quality, state, or fact of being able to generate, create,
          enhance, or bring forth goods and services: {""}
          <span className={classes.highlight}>
            "The productivity of my agents surpassed our annual goals."
          </span>
        </div>
        <div className={classes.number}>2.</div>
        <div className={classes.definition}>
          The rate at which goods and services having value are brought forth or
          produced:{" "}
          <span className={classes.highlight}>
            "Productivity increased dramatically once I consolidated all of my
            business tools into one, simple solution."
          </span>
        </div>
      </div>
    </div>
  );
};

export default withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "70px 15px 30px",
    maxWidth: "480px",
    width: "100%",
    margin: "auto",

    [theme.breakpoints[900]]: {
      maxWidth: "1080px",
      padding: "100px 15px 40px",
      flexDirection: "row",
      justifyContent: "space-between",
    },
  },
  left: {
    display: "flex",
    flexDirection: "column",
    paddingBottom: "40px",
  },
  right: {
    display: "flex",
    flexDirection: "column",

    [theme.breakpoints[900]]: {
      marginLeft: "100px",
    },
  },
  heading: {
    fontSize: "36px",
    fontWeight: "800",
    color: "#55c3ba",
    paddingBottom: "6px",

    [theme.breakpoints[900]]: {
      fontSize: "48px",
    },
  },
  subheading: {
    color: "#4a4a4a",
    letterSpacing: ".4px",
    paddingBottom: "10px",
  },
  noun: {
    color: "#55c3ba",
    fontSize: "26px",
    fontWeight: "700",
  },
  number: {
    fontSize: "24px",
    fontWeight: "700",
    color: "#55c3ba",
    paddingBottom: "6px",

    [theme.breakpoints[900]]: {
      fontSize: "28px",
    },
  },
  definition: {
    color: "#4a4a4a",
    fontSize: "16px",
    letterSpacing: ".4px",
    paddingBottom: "16px",
    lineHeight: "1.4",

    [theme.breakpoints[900]]: {
      lineHeight: "1.5",
      fontSize: "18px",
    },
  },
  highlight: {
    color: "#4a4a4a",
    fontWeight: "600",
  },
}))(SolutionsGrid);
