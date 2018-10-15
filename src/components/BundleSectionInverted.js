import React from "react";
import withStyles from "elevate-ui/withStyles";
import * as Icons from "elevate-ui-icons";

const BundleSectionInverted = ({
  classes,
  heading,
  tagline,
  icon,
  screenshot,
  description,
}) => {
  const Icon = Icons[icon];
  return (
    <div className={classes.root}>
      <div className={classes.rightContainer}>
        <div className={classes.heading}>
          <Icon className={classes.icon} size={24} />
          {heading}
        </div>
        <div className={classes.tagline}>{tagline}</div>
        <div
          className={classes.description}
          dangerouslySetInnerHTML={{
            __html: description.childMarkdownRemark.html,
          }}
        />
      </div>
      <div className={classes.screenshot}>
        <img
          className={classes.screenshotImage}
          src={screenshot}
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
    margin: "60px 0px",

    [theme.breakpoints[600]]: {
      margin: "140px 0px",
    },

    [theme.breakpoints[900]]: {
      flexDirection: "row",
      alignItems: "center",
    },
  },
  rightContainer: {
    marginRight: "15px",
    marginLeft: "15px",

    [theme.breakpoints[600]]: {
      maxWidth: "600px",
    },

    [theme.breakpoints[900]]: {
      maxWidth: "400px",
      marginLeft: "50px",
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
  title: {
    fontSize: "30px",
    lineHeight: "36px",
    fontWeight: "700",
    margin: "32px 0 24px",
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
      order: "-1",
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
}))(BundleSectionInverted);
