import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import Icon from "elevate-ui/Icon/Icon";

const HomePageAgentHeading = ({ classes, className }) => {
  return (
    <div className={classNames(classes.root, className)}>
      <div className={classes.iconHeadingContainer}>
        <div
          className={classes.iconContainerRed}
          style={{ backgroundColor: "rgb(255, 244, 240)" }}
        >
          <svg
            className={classes.personIcon}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
          >
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
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
    width: "52px",
    height: "52px",
    borderRadius: "50%",
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
