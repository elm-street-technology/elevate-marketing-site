import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import Person from "elevate-ui/Icon/person";

const HomePageAgentHeading = ({ classes, className }) => {
  return (
    <div className={classNames(classes.root, className)}>
      <div className={classes.iconHeadingContainer}>
        <div className={classes.iconContainerRed}>
          <Person className={classes.personIcon} size={30} />
        </div>
        <div className={classes.agentHeading}>Agents</div>
      </div>
      <div className={classes.agentSubHeading}>
        A platform designed to help you succeed as a real estate agent
      </div>
    </div>
  );
};

export default withStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  iconHeadingContainer: {
    display: "flex",
  },
  iconContainerRed: {
    // width: "52px",
    // height: "52px",
    // borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  personIcon: {
    fill: "#F15953",
  },
  agentHeading: {
    fontSize: "26px",
    fontWeight: "800",
    textAlign: "center",
    lineHeight: "45px",
    padding: "0 12px",
    color: "#F15953",
    maxWidth: "700px",

    [theme.breakpoints[900]]: {
      fontSize: "30px",
    },
  },
  agentSubHeading: {
    display: "flex",
    alignSelf: "center",
    paddingTop: "16px",
    fontSize: "20px",
    color: "#5A5B5C",
    textAlign: "center",
    maxWidth: "400px",
    lineHeight: "28px",

    [theme.breakpoints[600]]: {
      maxWidth: "700px",
    },
  },
}))(HomePageAgentHeading);
