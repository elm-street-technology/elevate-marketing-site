import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import HomePageHeroFooter from "../components/HomePageHeroFooter";

const HomePageHero = ({ classes, className, roles, handleRoleChange }) => {
  return (
    <div className={classNames(classes.root)}>
      <div className={classes.headingContainer}>
        <div className={classes.heading}>
          Online Technology and Marketing Services for Agents and Brokers Made
          Easy
        </div>
        <div className={classes.subHeading}>
          <div className={classes.subHeadingPrimary}>
            Elevate is the only fully integrated single system on the market
            today that does everything real estate professionals need — from
            generating new leads to creating clients for life!
          </div>
          <div className={classes.subHeadingSecondary}>
            From generating leads to creating clients for life, Elevate combines
            everything you need in one operating system.
          </div>
          <div className={classes.subHeadingTagline}>
            <div>Digital tools to</div>
            <div>Elevate your potential</div>
          </div>
        </div>
      </div>
      <HomePageHeroFooter handleRoleChange={handleRoleChange} roles={roles} />
    </div>
  );
};

export default withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  headingContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
    maxWidth: "1080px",
    margin: "0 auto",
    padding: "0 8px",

    [theme.breakpoints[900]]: {
      paddingBottom: "0px",
    },
  },
  heading: {
    fontSize: "28px",
    fontWeight: "800",
    color: "#5A5B5C",
    lineHeight: "1.3",
    maxWidth: "710px",
    margin: "40px auto 20px auto",
    textAlign: "center",

    [theme.breakpoints[900]]: {
      fontSize: "32px",
      marginBottom: "60px",
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
      maxWidth: "450px",
      marginBottom: "36px",
      marginTop: "14px",
      textAlign: "left",
      fontWeight: "500",
    },
  },
  subHeadingPrimary: {
    display: "none",

    [theme.breakpoints[900]]: {
      display: "flex",
    },
  },
  subHeadingSecondary: {
    paddingTop: "20px",
    paddingBottom: "38px",
  },
  subHeadingTagline: {
    color: "#5A5B5C",
    fontWeight: "700",
    fontSize: "24px",
    paddingBottom: "40px",
    textShadow: "2px 4px 3px rgba(0,0,0,0.08)",
  },
}))(HomePageHero);
