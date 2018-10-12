import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";

const HomePageCarouselFeatures = ({ classes, className, features, color }) => {
  return (
    <div className={classNames(classes.root, className)}>
      {features.map((feature) => (
        <div className={classes.agentFeature}>
          <div>
            <img
              style={{ width: "100%" }}
              src={feature.screenshot}
              alt={"Laptop with screenshot"}
            />
          </div>
          <div className={classes.agentFeatureHeading}>{feature.heading}</div>
          <div className={classes.agentFeatureDesc}>{feature.description}</div>
        </div>
      ))}
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
}))(HomePageCarouselFeatures);
