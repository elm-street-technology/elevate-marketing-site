import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import ResponsiveVid from "../components/ResponsiveVid"
import Form2021marketingguide from "../components/Form2021marketingguide";
import SEO from "../components/SEO";
import Logo2021 from "../images/2021_logo.png";


const Your2021marketingguide = ({ children, classes, data, tags }) => {
  const postNode = {
      title: `Your 2021 Marketing Strategy Guide - ${config.siteTitle}`,
  };

  return (
    <div className={classes.root}>
      <Helmet>
              <title>{`Your 2021 Marketing Strategy Guide - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="Your 2021 Marketing Strategy Guide" customTitle />

      <Container>
        <div >
                  <div style={{ maxWidth: "900px", backgroundColor: "#f7f7f7", marginRight:"auto",marginLeft:"auto",paddingTop:"35px", textAlign:"center"}}>
                
                <div style={{paddingLeft:"65px", paddingRight:"65px",}}>
                    <img src={Logo2021} width="100%"  style={{paddingBottom:"45px", paddingTop:"20px", maxWidth:"538px", textAlign:"center"}}  />
                   <h1 className={classes.Heading}>Download Your FREE, Marketing Strategy Guide<br />
                   to Get 2021 Started Right!</h1>
                  <div style={{color:"#495050", lineHeight:"26px", textAlign:"center", paddingBottom:"35px"}}>
                  Planning your goals, budget and overarching marketing strategy can feel like daunting work, but it’s a crucial part of running a successful business.  This FREE guide from the experts at Elevate is designed to help you focus on what’s important, and to encourage you to expand your marketing for the new year. 
                 </div>
                 </div>

                 


                <div style={{ paddingLeft: "10px", paddingRight: "10px"}}>
                    <Form2021marketingguide />
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
}))(Your2021marketingguide);
