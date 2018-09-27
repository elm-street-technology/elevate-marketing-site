import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import heroImage from "../images/heroimage1200.jpg";
import HomePageHeroFooter from "../components/HomePageHeroFooter";

const HomePageHero = ({ classes, className, roles }) => {
  return (
    <div className={classNames(classes.root)}>
      <div className={classes.headingContainer}>
        <div className={classes.heading}>
          Online Technology and Marketing Services for Agents and Brokers Made
          Easy
        </div>
        <div className={classes.subHeading}>
          Elevate is the only fully integrated single system on the market today
          that does everything real estate professionals need — from generating
          new leads to creating clients for life!
          <div className={classes.subHeadingSecondary}>
            Elevate is the best online product or real estate agents, teams, and
            brokers. We help you generate leads and create clients for life.
          </div>
          <div className={classes.subHeadingTagline}>
            Choose the Elevate that suits you
          </div>
        </div>
        <HomePageHeroFooter roles={roles} />
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
  headingContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    paddingBottom: "100px",
    backgroundImage: `url('${heroImage}')`,
    backgroundSize: "auto",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    width: "100%",

    [theme.breakpoints[900]]: {
      paddingBottom: "0px",
    },
  },
  heading: {
    fontSize: "22px",
    fontWeight: "800",
    color: "#5A5B5C",
    lineHeight: "1.2",
    maxWidth: "710px",
    margin: "40px auto 80px auto",
    textAlign: "center",

    [theme.breakpoints[600]]: {
      fontSize: "32px",
    },
  },
  subHeading: {
    fontSize: "18px",
    color: "#5A5B5C",
    marginTop: "16px",
    marginBottom: "20px",
    lineHeight: "26px",
    textAlign: "center",

    [theme.breakpoints[600]]: {
      maxWidth: "450px",
      marginBottom: "36px",
      marginTop: "14px",
      textAlign: "left",
    },
  },
  subHeadingSecondary: {
    padding: "20px 0",
  },
  subHeadingTagline: {
    color: "#5A5B5C",
    fontWeight: "700",
    fontSize: "24px",
    paddingBottom: "40px",
  },
}))(HomePageHero);
