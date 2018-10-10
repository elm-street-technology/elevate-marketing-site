import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import Laptop from "../images/laptop.png";
import GroupAdd from "elevate-ui-icons/GroupAdd";

const BundleHero = ({ classes, className }) => {
  return (
    <div className={classNames(classes.root)}>
      <div className={classNames(classes.backgroundContainer)}>
        <div className={classes.headingContainer}>
          <div className={classes.headingIcon}>
            <GroupAdd className={classes.icon} size={26} />
            Brokers
          </div>
          <div className={classes.heading}>
            Discover a platform to help you and your agents sell more homes,
            faster!
          </div>
          <div className={classes.subHeading}>
            Access all your core services in one business operating system.
          </div>
          <img
            className={classes.laptop}
            src={Laptop}
            alt={"laptop with screenshot of app"}
          />
        </div>
      </div>
    </div>
  );
};

export default withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  backgroundContainer: {
    background: "linear-gradient(#FFF, rgba(255,198,41,.3))",
    backgroundSize: "auto 78%",
    backgroundRepeat: "no-repeat",
  },
  headingContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    maxWidth: "1080px",
    marginTop: "30px",
    margin: "0 auto",
    padding: "0 8px",

    [theme.breakpoints[900]]: {
      paddingBottom: "0px",
    },
  },
  heading: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#2E2E35",
    lineHeight: "38px",
    maxWidth: "710px",
    margin: "24px auto 0px auto",
    textAlign: "center",

    [theme.breakpoints[900]]: {
      fontSize: "32px",
      marginBottom: "10px",
    },
  },
  subHeading: {
    fontSize: "18px",
    color: "#5A5B5C",
    marginTop: "16px",
    marginBottom: "20px",
    lineHeight: "26px",
    textAlign: "center",
    fontWeight: "600",

    [theme.breakpoints[600]]: {
      marginTop: "14px",
      textAlign: "left",
      fontWeight: "500",
    },
  },
  headingIcon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textTransform: "uppercase",
    fontSize: "20px",
    paddingTop: "10px",
    color: "#FFC629",
    fontWeight: "700",
  },
  icon: {
    fill: "#FFC629",
    marginRight: "6px",
  },
  laptop: {
    maxWidth: "100%",

    [theme.breakpoints[1200]]: {
      maxWidth: "1400px",
    },
  },
}))(BundleHero);
