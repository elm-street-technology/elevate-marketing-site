import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import HomePageHeroRoles from "../components/HomePageHeroRoles";
import Logo from "../components/Logo";
import Link from "gatsby-link";
import heroVideo from "../images/homepage_hero_vid_new.mp4";
import heroImage600 from "../images/hero_600.jpg";
import heroImage1200 from "../images/hero_900.jpg";

const HomePageHeroVid = ({
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
        className={classNames(classes.background, classes.video)}
      >
        <source src={heroVideo} type="video/mp4" />
        <img
          src={heroImage1200}
          alt="Office of real estate agents celebrating"
        />
      </video>
      <img
        className={classNames(classes.background, classes.image)}
        src={heroImage600}
        alt="Office of real estate agents celebrating"
      />
      <div className={classes.hero}>
              <div className={classes.heroContent}>
                  <div className={classes.heading}>
                      <span>explore</span>
                      <span style={{ paddingTop: "8px", paddingLeft: "8px" }}>
                          <Logo textColor="#fff" triangleColor={theme.colors.primary} />
                      </span>
                  </div>

                  <div className={classes.centerheading} style={{ color: "#ffffff", }}>The power of <span style={{ fontWeight: "bold", color: "#ffffff" }}>PRODUCTIVITY</span></div>
                  <div className={classes.centersubtext} style={{ color: "#ffffff", }}>The 1st true productivity platform in real estate<br />
                      to <span style={{ fontWeight: "bold" }}>capture, nurture &amp; convert leads.</span>
                      <br />
                      <Link to="/get-started" className={classes.ctabutton}>
                          Take a Tour
                        </Link>


                  </div>


              </div>
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
    height: "calc(100vh - 80px)", // Header height
    maxHeight: "720px",
    overflow: "hidden",
  },
  background: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    objectFit: "cover",
  },
  video: {
    display: "none",

    [theme.breakpoints[600]]: {
      display: "block",
    },
  },
  image: {
    display: "block",

    [theme.breakpoints[600]]: {
      display: "none",
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
    centerheading: {
        color: "#4bbbb1",
        fontSize: "30px",
        fontWeight: "700",
        letterSpacing: ".25px",
        fontWeight: "600",
        lineHeight: "1.6",
        textAlign: "center",

        [theme.breakpoints[900]]: {
            fontSize: "28px",
        },
    },
    centersubtext: {
        color: "#5A5B5C",
        fontWeight: "500",
        fontSize: "16px",
        letterSpacing: ".25px",
        lineHeight: "1.6",
        marginbottom: "20px",
        textAlign: "center",

        [theme.breakpoints[900]]: {
            fontSize: "16px",
        },
    },
    ctabutton: {
        alignContent: "center",
        justifyContent: "center",
        fontSize: "16px",
        textAlign: "center",
        fontWeight: "500",
        minWidth: "150px",
        letterSpacing: ".25px",
        backgroundColor: theme.colors.secondary,
        color: "#FFF",
        display: "block",
        marginTop: "30px",
        maxWidth: "150px",
        textDecoration: "none",
        padding: "12px 14px",
        borderRadius: "3px",
        display: "inline-block",
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
}))(HomePageHeroVid);