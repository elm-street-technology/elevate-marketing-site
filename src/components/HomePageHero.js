import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import HomePageHeroRoles from "../components/HomePageHeroRoles";
import Logo from "../components/Logo";
import Link from "gatsby-link";
import heroImage600 from "../images/hero_600.jpg";
import heroImage1200 from "../images/hero.jpg";

const HomePageHero = ({
  classes,
  className,
  roles,
  handleRoleChange,
  theme,
}) => {
  return (
    <div className={classNames(classes.root)}>

      <div style={{ backgroundImage: "url(" + heroImage1200 + ")", height: "100%", backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPositionY: "top",
          backgroundPositionX: "center"}}>
            <div className={classes.overlay}>
            
            <div className={classes.heroContent}>
          <div className={classes.heading}>
            <span>explore</span>
            <span style={{ paddingTop: "8px", paddingLeft: "8px" }}>
              <Logo textColor="#fff" triangleColor={theme.colors.primary} />
            </span>
          </div>
   
          <div className={classes.centerheading} style={{color:"#ffffff",}}>The power of <span style={{ fontWeight: "bold", color:"#ffffff" }}>PRODUCTIVITY</span></div>
          <div className={classes.centersubtext} style={{color:"#ffffff",}}>The 1st true productivity platform in real estate<br />
          to <span style={{ fontWeight: "bold" }}>capture, nurture &amp; convert leads.</span>
          <br />
          <Link to="/get-started" className={classes.ctabutton}>
            Take a Tour
          </Link>
          
          
          </div>

         
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
    background: "rgba(0, 0, 0, 0.20)",
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

overlay: {
  backgroundColor: "rgba(54, 54, 54, 0.5)",
  paddingLeft: "35px",
  paddingRight: "35px",
  paddingTop: "135px",
  height:"100%",

  [theme.breakpoints[900]]: {
      padding: "225px",
  },
},
image:{
  paddingLeft:"15px",
  
},

flexContainer: {
    padding: "0",
    margin: '0',

    display: "-webkit-box",
    display: "-moz-box",
    display: "-ms-flexbox",
    display: "-webkit-flex",
    display: "flex",
    flexWrap: "wrap",

},
flexItem: {
    maxWidth: "100%",
    width: "100%",


    [theme.breakpoints[900]]: {
        maxWidth: "50%",
        width: "50%",
    },
}
}))(HomePageHero);
