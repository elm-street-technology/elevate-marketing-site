import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";

const HomePageCarouselHeading = ({
  classes,
  className,
  icon,
  heading,
  subheading,
}) => {
  return (
    <div className={classNames(classes.root, className)}>
      <div className={classes.iconHeadingContainer}>
        <div className={classes.icon}>{icon}</div>
        <div className={classes.agentHeading}>{heading}</div>
      </div>
      <div className={classes.agentSubHeading}>{subheading}</div>
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
  icon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  agentHeading: {
    fontSize: "26px",
    fontWeight: "800",
    textAlign: "center",
    lineHeight: "45px",
    padding: "0 12px",
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
}))(HomePageCarouselHeading);
