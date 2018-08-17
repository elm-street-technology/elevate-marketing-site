import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import featureIcon from "../images/feature-icon.png";

const FeatureCard = ({ children, classes, className }) => {
  return (
    <div className={classNames(classes.root, className)}>
      <div className={classes.iconContainer}>
        <img style={{ width: "50px" }} src={featureIcon} alt={"feature icon"} />
      </div>
      <div className={classes.featureTitle}>Feature Title</div>
      <div className={classes.featureDesc}>
        Designed with best-in-class lead capture technology.
      </div>
    </div>
  );
};

export default withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "20px",
    maxWidth: "240px",
    background: "#fff", // material-design 1dp
    transition: "all 200ms ease-in-out",
    overflow: "hidden",
    userSelect: "none",
    borderRadius: "6px",
    boxShadow: "0px 12px 24px rgba(0, 0, 0, .1)",
  },
  featureTitle: {
    color: "#E46457",
    fontSize: "18px",
    fontWeight: "800",
    padding: "10px",
    textAlign: "center",
  },
  iconContainer: {
    textAlign: "center",
  },
  featureDesc: {
    textAlign: "center",
    color: "#64616E",
    lineHeight: "28px",
    padding: "6px",
  },
}))(FeatureCard);
