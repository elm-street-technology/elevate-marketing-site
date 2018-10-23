import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import Link from "gatsby-link";

const CTASecondary = ({ classes, className }) => (
  <div className={classNames(classes.root, className)}>
    <div className={classes.ctaContainer}>
      <div className={classes.ctaLeft}>
        <div className={classes.heading}>
          Explore the 1st Productivity Platform in Real Estate
        </div>
        <Link to="/get-started" className={classes.getStartedLink}>
          <button className={classes.ctaBtn}>Schedule a Demo</button>
        </Link>
      </div>
      <div className={classes.ctaRight}>
        <div>Talk to an Elevate Coach today</div>
        <div>
          <a href="tel:18445469275" className={classes.call}>
            844.546.9275
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default withStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
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
    alignItems: "flex-start",
    width: "60%",

    [theme.breakpoints[900]]: {
      flexDirection: "row",
      textAlign: "left",
      fontSize: "28px",
    },
  },
  heading: {
    color: "#FFF !important",
    fontSize: "16px",
    lineHeight: "1.6",
    fontWeight: "600",
    marginTop: "0px !important",
    marginBottom: "8px",

    [theme.breakpoints[900]]: {
      fontSize: "20px",
      marginBottom: "0px",
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
    backgroundColor: "#29978c",
    fontSize: "16px",
    color: "#FFF",
    borderRadius: "6px",
    fontWeight: "600",
    padding: "16px 20px",
    marginBottom: "16px",

    [theme.breakpoints[900]]: {
      fontSize: "20px",
    },
  },
  ctaLeft: {
    color: "#FFF",
    display: "flex",
    flexDirection: "column",
  },
  ctaRight: {
    textAlign: "center",
    color: "#FFF",
    fontSize: "16px",
    fontWeight: "bold",

    [theme.breakpoints[900]]: {
      fontSize: "20px",
      textAlign: "right",
    },
  },
  call: {
    display: "block",
    marginTop: "8px",
    color: "#FFF !important",
    textDecoration: "none !important",
    fontSize: "30px",
    fontWeight: "bold",
  },
}))(CTASecondary);
