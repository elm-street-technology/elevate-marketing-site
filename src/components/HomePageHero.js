import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import HomePageHeroFooter from "../components/HomePageHeroFooter";
import Logo from "../components/Logo";
import Link from "gatsby-link";

const HomePageHero = ({ classes, className, roles, handleRoleChange }) => {
  return (
    <div className={classNames(classes.root2)}>
      <div className={classes.headingContainer2}>
        <div className={classes.heading2}>
          <span>explore</span>
          <span style={{ paddingTop: "8px", paddingLeft: "8px" }}>
            <Logo />
          </span>
        </div>
        <div className={classes.subHeading2}>
          <div className={classes.subHeadingPrimary2}>
            the 1st Productivity Platform in Real Estate
          </div>
          <div className={classes.subHeadingSecondary}>
            <Link to="/get-started" className={classes.getStartedLink}>
              Schedule Your Personal Demo
            </Link>
          </div>
        </div>
      </div>
      <HomePageHeroFooter
        handleRoleChange={handleRoleChange}
        roles={roles}
        isAlternate={true}
      />
    </div>
  );
};

export default withStyles((theme) => ({
  root2: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    flexGrow: 1,
    height: "100%",
  },
  headingContainer2: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
    margin: "0 auto",
    padding: "0 8px",
    flexGrow: 1,

    [theme.breakpoints[900]]: {
      paddingBottom: "0px",
      maxWidth: "1080px",
    },
  },
  heading2: {
    display: "flex",
    alignItems: "center",
    fontSize: "28px",
    fontWeight: "800",
    color: "#FFF",
    lineHeight: "1.3",
    maxWidth: "710px",
    margin: "0 auto 20px auto",
    textAlign: "center",

    [theme.breakpoints[900]]: {
      fontSize: "32px",
    },
  },
  subHeading2: {
    fontSize: "16px",
    color: "#FFF",
    marginTop: "16px",
    marginBottom: "20px",
    lineHeight: "3px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    [theme.breakpoints[600]]: {
      marginBottom: "36px",
      marginTop: "14px",
      fontWeight: "600",
      fontSize: "22px",
    },
  },
  subHeadingPrimary2: {
    display: "flex",
    height: "40px",
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
  getStartedLink: {
    alignContent: "center",
    justifyContent: "center",
    fontSize: "14px",
    fontWeight: "700",
    letterSpacing: ".25px",
    backgroundColor: theme.colors.secondary,
    color: "#FFF",
    textDecoration: "none",
    padding: "14px 16px",
    borderRadius: "4px",
  },
}))(HomePageHero);
