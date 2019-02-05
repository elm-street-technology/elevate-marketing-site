import React from "react";
import Link from "gatsby-link";
import withStyles from "elevate-ui/withStyles";
import Container from "../components/Container";
import SEO from "../components/SEO";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Section2Col from "../components/Section2Col";
import Section1Col from "../components/Section1Col";
import PageTitleImage from "../components/PageTitleImage";
import TestImage from "../images/600.jpg";
import WideImage from "../images/1200.jpg";

const Demo = ({ classes }) => {

  return (
    <div className={classes.root}>
      <Header />
      <SEO />

      <PageTitleImage title="The power of NURTURING" image={WideImage}>
        Automate your lead nurturing with email newsletters, workflows,<br />
        templates &amp; content designed by the best in the business.
      </PageTitleImage>

      <div style={{ margin: "45px", }}>
        <Section2Col secTitle="Section Header" secLink="/upgrade" secButton="Upgrade Button Text" secImage={TestImage}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Section2Col>
      </div>
    
      <div style={{ margin: "45px", }}>
        <Section1Col secTitle="Center Heder" secLink="/upgrade" secButton="Click Me">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Section1Col>
      </div>
     
      <div style={{margin:"45px",}}>
        <Container>
      <div className={classes.flexContainer}>
            <div className={classes.flexItem}>
            <h1 className={classes.leftheading}>Section Header</h1>
        <p className={classes.leftsubtext}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        
    
        </p>
        <Link to="/get-started" className={classes.ctabutton}>
              Button Text Goes Here
            </Link>
            </div>

      <div className={classes.flexItem}>Image goes here</div>

      </div>
      </Container>
      </div>

    

      <div style={{margin:"45px",}}>
          <Container>
          <div>
      <h1 className={classes.centerheading}>Section Header</h1>
        <p className={classes.centersubtext} >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div style={{alignContent:"center"}}>
        <Link to="/get-started" className={classes.ctabutton}>
              Button Text Goes Here
            </Link>
            </div>
        </div>
      </Container>
      </div>

      <div>
          <Container>
      <div className={classes.flexContainer}>
        <div className={classes.flexItem}>fffff</div>
        <div className={classes.flexItem}>fffff</div>
        </div>
      </Container>
      </div>
      
      <Footer />
    </div>
  );
};


export default withStyles((theme) => ({
  root: {
    position: "relative",
    paddingTop: "48px",
    paddingBottom: "192px",
    lineHeight: "1.75em",
  },
  top: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
  },
  section:{
    paddingTop: "60px",
  },
  leftheading: {
    color: "#4bbbb1",
    fontSize: "30px",
    fontWeight: "700",
    letterSpacing: ".25px",
    fontWeight: "600",
    lineHeight: "1.6",

    [theme.breakpoints[900]]: {
      fontSize: "28px",
    },
  },
  leftsubtext: {
    color: "#5A5B5C",
    fontWeight: "500",
    fontSize: "18px",
    letterSpacing: ".25px",
    lineHeight: "1.6",
    marginbottom: "20px",
    
    [theme.breakpoints[900]]: {
        fontSize: "16px",
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
        fontSize: "18px",
        letterSpacing: ".25px",
        lineHeight: "1.6",
        marginbottom: "20px",
        textAlign: "center",
        
        [theme.breakpoints[900]]: {
            fontSize: "16px",
          },
        },
  centerHeading:{
    alignItems: "center",
    width: "100%",
    textAlign: "center",
  },
  bold:{
    fontWeight:"700",
  },
  column:{
    width:"530px",
    maxWidth: "100%",
    paddingRight:"10px",
    paddingLeft:"10px",
    verticalAlign: "top",
  },
  getStartedLink: {
    width: "250px",
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
    margin: "16px auto",
  },
  darkTealLink: {
    width: "250px",
    alignContent: "center",
    justifyContent: "center",
    fontSize: "14px",
    fontWeight: "700",
    letterSpacing: ".25px",
    backgroundColor: theme.colors.secondaryDark,
    color: "#FFF",
    textDecoration: "none",
    padding: "14px 16px",
    borderRadius: "4px",
    margin: "16px auto",
  },
  grayLink: {
    width: "250px",
    alignContent: "center",
    justifyContent: "center",
    fontSize: "14px",
    fontWeight: "700",
    letterSpacing: ".25px",
    backgroundColor: theme.colors.gray400,
    color: "#FFF",
    textDecoration: "none",
    padding: "14px 16px",
    borderRadius: "4px",
    margin: "16px auto",
  },
  grayText:{
    color: theme.colors.gray800,
  },
  infoboxGray: {
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.gray100,
    color: theme.colors.gray800,
    textDecoration: "none",
    padding: "40px 10px",
    borderRadius: "4px",
    margin: "30px auto",
    textAlign: "center",
  },
  infoboxTeal: {
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.secondary,
    color: theme.colors.gray800,
    textDecoration: "none",
    padding: "40px 10px",
    borderRadius: "4px",
    margin: "30px auto",
    textAlign: "center",
  },
  videoBorder: {
    borderStyle:"solid",
    borderWidth: "1px",
    borderColor: theme.colors.gray400,
  },
  iconPosition:{
    position: "relative",
    top:"12px",
    right:"4px"
  },
  ctabutton: {
    alignContent: "center",
    justifyContent: "center",
    fontSize: "16px",
    textAlign:"center",
    fontWeight: "500",
    minWidth: "300px",
    letterSpacing: ".25px",
    backgroundColor: theme.colors.secondary,
    color: "#FFF",
    display: "block",
    marginTop:"30px",
    maxWidth: "300px",
    textDecoration: "none",
    padding: "12px 14px",
    borderRadius: "3px",
  },

  titleheading: {
    color: "#ffffff",
    fontSize: "24px",
    letterSpacing: ".25px",
    fontWeight: "700",
    lineHeight: "1.45",
    textAlign: "center",

    [theme.breakpoints[900]]: {
      fontSize: "44px",
    },
  },

  titlesubtext: {
    color: "#dbe1e5",
    fontSize: "18px",
    letterSpacing: ".25px",
    lineHeight: "1.6",
    textAlign: "center",
    
    [theme.breakpoints[900]]: {
        fontSize: "16px",
      },
    },

  titlearea: {
    backgroundColor:"#404548",
    padding:"55px",

    [theme.breakpoints[900]]: {
        padding:"125px",
      },
    },
  flexContainer:{
      padding: "0",
      margin: '0',
      
      display: "-webkit-box",
      display: "-moz-box",
      display: "-ms-flexbox",
      display: "-webkit-flex",
      display: "flex",
      flexWrap: "wrap",

  },
  flexItem:{
      maxWidth: "100%",
      width:"100%",

      
      [theme.breakpoints[900]]: {
          maxWidth: "50%",
          width:"50%",
        },
  }


}))(Demo);
