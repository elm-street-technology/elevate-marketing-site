import React from "react";
import withStyles from "elevate-ui/withStyles";
import AgentLeads from "../images/agent-leads-bundle.png";
import Security from "elevate-ui-icons/Security";

const BundleSectionStandard = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.leftContainer}>
        <div className={classes.heading}>
          <Security className={classes.icon} size={24} />
          Security
        </div>
        <div className={classes.tagline}>Increase Agent Adoption</div>
        <div className={classes.description}>
          The #1 challenge for brokerage level business systems is the lack of
          agent adoption. We've solved this challenge by providing the brokerage
          with unparalleled access to key performance indicators and activities
          while protecting the contact record details for the agent's databases.
          Research shows that agents will more readily use broker provided tools
          after they know their contacts, spheres of influence and databases are
          protected.
        </div>
      </div>
      <div className={classes.screenshot}>
        <img
          className={classes.screenshotImage}
          src={AgentLeads}
          alt={"screenshot"}
          style={{ maxWidth: "100%" }}
        />
      </div>
    </div>
  );
};

export default withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    margin: "20px 0px",

    [theme.breakpoints[600]]: {
      margin: "20px 0px",
    },

    [theme.breakpoints[900]]: {
      flexDirection: "row",
      alignItems: "center",
    },
  },
  leftContainer: {
    marginRight: "15px",
    marginLeft: "15px",
    maxWidth: "600px",

    [theme.breakpoints[600]]: {
      maxWidth: "600px",
    },

    [theme.breakpoints[900]]: {
      maxWidth: "400px",
      marginRight: "50px",
      marginLeft: "0px",
    },
  },
  heading: {
    display: "flex",
    alignItems: "center",
    textTransform: "uppercase",
    color: "#2E7FC2",
    fontWeight: "700",
    letterSpacing: ".8px",
    fontSize: "18px",
    marginBottom: "30px",
  },
  tagline: {
    fontSize: "26px",
    fontWeight: "700",
    color: "#2E2E35",
    lineHeight: "38px",
    marginBottom: "20px",
  },
  description: {
    fontSize: "18px",
    lineHeight: "30px",
    color: "#5A5B5C",
    marginBottom: "60px",

    [theme.breakpoints[900]]: {
      maxWidth: "400px",
      marginBottom: "0px",
    },
  },
  screenshot: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    boxShadow: "0 8px 12px rgba(0,0,0,0.15)",

    [theme.breakpoints[900]]: {
      maxWidth: "600px",
      alignItems: "center",
    },
  },
  icon: {
    fill: "#2E7FC2",
    marginRight: "6px",
  },
  grid: {
    padding: "0 14px",
  },
}))(BundleSectionStandard);
