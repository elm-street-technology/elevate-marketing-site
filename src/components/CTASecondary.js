import React from "react";
import withStyles from "elevate-ui/withStyles";
import Link from "gatsby-link";

const CTASecondary = ({ classes }) => (
  <div className={classes.root}>
    <div className={classes.inner}>
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
    backgroundColor: "#55C3BA",
    padding: "40px 12px",
    justifyContent: "center",
  },
  inner: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
    maxWidth: "1080px",
    textAlign: "center",
    fontWeight: "600",

    [theme.breakpoints[900]]: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      textAlign: "left",
      fontSize: "28px",
    },
  },
  heading: {
    color: "#FFF",
    fontSize: "16px",
    lineHeight: "1.6",
    fontWeight: "600",
    paddingBottom: "12px",

    [theme.breakpoints[900]]: {
      fontSize: "20px",
      marginBottom: "0px",
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

  ctaRight: {
    textAlign: "center",
    color: "#FFF",
    fontSize: "16px",

    [theme.breakpoints[900]]: {
      fontSize: "20px",
      textAlign: "right",
    },
  },
  call: {
    display: "block",
    marginTop: "8px",
    color: "#FFF",
    textDecoration: "none",
    fontSize: "30px",
    fontWeight: "bold",
  },
}))(CTASecondary);
