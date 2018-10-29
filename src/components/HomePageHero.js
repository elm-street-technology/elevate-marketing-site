import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import HomePageHeroRoles from "../components/HomePageHeroRoles";
import Logo from "../components/Logo";
import Link from "gatsby-link";
import heroVideo from "../images/homepage-hero-2048-1080.mp4";
import heroVideoFallback from "../images/1200.jpg";

const HomePageHero = ({
  classes,
  className,
  roles,
  handleRoleChange,
  theme,
}) => {
  return (
    <div className={classNames(classes.root)}>
      <video
        autoPlay={true}
        muted={true}
        loop={true}
        id="myVideo"
        className={classes.video}
      >
        <source src={heroVideo} type="video/mp4" />
        <img
          src={heroVideoFallback}
          alt="Office of real estate agents celebrating"
        />
      </video>
      <div className={classes.hero}>
        <div className={classes.heroContent}>
          <div className={classes.heading}>
            <span>explore</span>
            <span style={{ paddingTop: "8px", paddingLeft: "8px" }}>
              <Logo textColor="#fff" triangleColor={theme.colors.primary} />
            </span>
          </div>
          <div className={classes.subHeading}>
            the 1st Productivity Platform in Real Estate
          </div>
          <Link to="/get-started" className={classes.link}>
            Schedule Your Personal Demo
          </Link>
        </div>
        <HomePageHeroRoles
          handleRoleChange={handleRoleChange}
          roles={roles}
          isAlternate={true}
        />
      </div>
    </div>
  );
};

export default withStyles((theme) => ({
  root: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100vh",
    maxHeight: "720px",
    overflow: "hidden",
  },
  video: {
    display: "none",
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    objectFit: "cover",

    [theme.breakpoints[900]]: {
      display: "block",
    },
  },
  hero: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    background: "rgba(0, 0, 0, 0.50)",
    color: "#fff",
  },
  heroContent: {
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
  heading: {
    display: "flex",
    alignItems: "center",
    fontSize: "36px",
    lineHeight: "46px",
    fontWeight: "600",
    color: "#fff",
    margin: "0 auto",
    textAlign: "center",
  },
  subHeading: {
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: "600",
    color: "#fff",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "8px",
    marginBottom: "32px",
  },
  link: {
    display: "inline-flex",
    alignContent: "center",
    justifyContent: "center",
    fontSize: "14px",
    fontWeight: "700",
    letterSpacing: ".25px",
    textDecoration: "none",
    color: "#FFF",
    backgroundColor: theme.colors.secondary,
    padding: "14px 16px",
    borderRadius: "4px",
    margin: "0 auto",
  },
}))(HomePageHero);
