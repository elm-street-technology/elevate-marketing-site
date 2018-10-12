import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import AgentDashActive from "../images/agents-dash-active.jpg";
import AgentPhone from "../images/agents-phone.png";
import AgentDashLeads from "../images/agents-dash-leads.jpg";
import AgentDashContacts from "../images/agent-dash-contacts.jpg";
import AgentDashGraph from "../images/agent-dash-graph.jpg";
import AgentLaptop from "../images/agents-laptop.png";

const HomePageAgentFeatures = ({ classes, className }) => {
  return (
    <div className={classNames(classes.root, className)}>
      <div className={classes.agentFeature}>
        <div>
          <img
            style={{ width: "100%" }}
            src={AgentLaptop}
            alt={"Laptop with screenshot"}
          />
        </div>
        <div>
          <img
            style={{ width: "100%" }}
            src={AgentDashActive}
            alt={"screenshot of dashboard"}
          />
        </div>
        <div className={classes.agentFeatureHeading}>Intelligent Dashboard</div>
        <div className={classes.agentFeatureDesc}>
          Suspendisse at sem eget massa malesuada efficitur vitae vel.
        </div>
      </div>
      <div className={classes.agentFeature}>
        <div className={classes.agentImage}>
          <img
            style={{ width: "50%" }}
            src={AgentPhone}
            alt={"Phone with screenshot"}
          />
        </div>
        <div className={classes.agentFeatureHeading}>Morning Report</div>
        <div className={classes.agentFeatureDesc}>
          Suspendisse at sem eget massa malesuada efficitur vitae vel.
        </div>
      </div>
      <div className={classes.agentFeature}>
        <div className={classes.agentImage}>
          <img
            style={{ width: "70%", paddingBottom: "30px" }}
            src={AgentDashLeads}
            alt={"Phone with screenshot"}
          />
        </div>
        <div>
          <img
            style={{ width: "48%", padding: "10px" }}
            src={AgentDashContacts}
            alt={"screenshot of dashboard"}
          />
          <img
            style={{ width: "48%", padding: "10px" }}
            src={AgentDashGraph}
            alt={"screenshot of dashboard"}
          />
        </div>
        <div className={classes.agentFeatureHeading}>Lead Analysis</div>
        <div className={classes.agentFeatureDesc}>
          Suspendisse at sem eget massa malesuada efficitur vitae vel.
        </div>
      </div>
    </div>
  );
};

export default withStyles((theme) => ({
  root: {
    display: "flex",
    maxWidth: "1100px",
    margin: "0 auto",
    justifyContent: "space-between",
    flexDirection: "column",

    [theme.breakpoints[600]]: {
      maxWidth: "1100px",
      flexDirection: "row",
      margin: "60px auto",
    },
  },
  agentFeature: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    textAlign: "center",
    margin: "0 25px",
    flex: "1",
    flexDirection: "column",
    maxWidth: "340px",
    marginTop: "40px",
    paddingBottom: "40px",
    borderBottom: "1px solid #ECECEC",

    "&:last-child": {
      borderBottom: "none",
    },

    [theme.breakpoints[600]]: {
      marginTop: "0px",
      borderBottom: "none",
      paddingBottom: "0px",
    },
  },
  agentImage: {
    textAlign: "center",
  },
  agentFeatureHeading: {
    color: "#5A5B5C",
    fontSize: "15px",
    fontWeight: "700",
    paddingTop: "10px",

    [theme.breakpoints[600]]: {
      paddingTop: "30px",
    },
  },
  agentFeatureDesc: {
    color: "#5A5B5C",
    fontSize: "13px",
    paddingTop: "10px",
    maxWidth: "80%",
    lineHeight: "18px",

    [theme.breakpoints[600]]: {
      paddingTop: "20px",
    },
  },
}))(HomePageAgentFeatures);
