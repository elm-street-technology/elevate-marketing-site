import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import ResponsiveVid from "../components/ResponsiveVid"
import Formemailproguide from "../components/Formemailproguide";
import SEO from "../components/SEO";
import Logoem101 from "../images/em101_logo.png";


const Emailproguide = ({ children, classes, data, tags }) => {
  const postNode = {
      title: `Your 2022 Marketing Strategy Guide - ${config.siteTitle}`,
  };

  return (
    <div className={classes.root}>
      <Helmet>
              <title>{`Your 2022 Marketing Strategy Guide - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="Your 2022 Marketing Strategy Guide" customTitle />

      <Container>
        <div >
                  <div style={{ maxWidth: "900px", backgroundColor: "#f7f7f7", marginRight:"auto",marginLeft:"auto",paddingTop:"35px", textAlign:"center"}}>
                
                <div style={{paddingLeft:"65px", paddingRight:"65px",}}>
                    <img src={Logoem101} width="100%"  style={{paddingBottom:"45px", paddingTop:"20px", maxWidth:"538px", textAlign:"center"}}  />
                   <h1 className={classes.Heading}>EMAIL MARKETING 101:<br />
                   A Real Estate Agent’s Guide<br />
                   To High Performance Emails</h1>
                  <div style={{color:"#495050", lineHeight:"26px", textAlign:"center", paddingBottom:"35px"}}>
                  There are plenty of people who are more than happy to tell you WHY it’s important to lean into email marketing, but far fewer will help you through HOW to actually go through with it. That’s where we come in with the 3 STEPS to maximizing your email marketing effectiveness. 
                 </div>
                 </div>

                 


                <div style={{ paddingLeft: "10px", paddingRight: "10px"}}>
                    <Formemailproguide />
                </div>
                
            </div>
        </div>
      </Container>
      
    </div>
  );
};

export default withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    padding: "0 8px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "0px",
    marginBottom: "70px",
  },

Heading: {
  fontSize: "28px",
  fontWeight: "700",
  lineHeight: "36px",
  letterSpacing: ".14px",
  color: "#55c3ba",
  textAlign: "center",
  marginBottom: "18px",
  },

  fullWidthVid:{
    width: "100%",
    marginLeft:"auto",
    marginRight:"auto",
    [theme.breakpoints[900]]: {
      width: "75%"
  },
},

subHeading: {
    fontSize: "18px",
    lineHeight: "28px",
    fontWeight: "600",
    letterSpacing: ".08px",
    color: "#888f96",
    textAlign: "center",
    margin: "0 auto 36px",
  },

  subHeading: {
    fontSize: "18px",
    lineHeight: "28px",
    letterSpacing: ".08px",
    textAlign: "center",
    margin: "0 auto 36px",
  },
  landingHeaderStyle:{
    textAlign:"center",
    marginBottom:"30px"
  },
}))(Emailproguide);
