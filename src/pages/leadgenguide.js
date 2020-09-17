import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import Formleadgenguide from "../components/Formleadgenguide";
import SEO from "../components/SEO";
import Logoss from "../images/leadgen_sslogo.png";
import Bottom from "../images/socialmedia101_bottom.jpg";

const Leadgenguide = ({ children, classes, data, tags }) => {
  const postNode = {
      title: `Lead Generation Secret Sauce Guide - ${config.siteTitle}`,
  };

  return (
    <div className={classes.root}>
      <Helmet>
              <title>{`Lead Generation Secret Sauce Guide - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="Lead Generation Secret Sauce Guide" customTitle />

      <Container>
        <div >
                  <div style={{ maxWidth: "900px", backgroundColor: "#f7f7f7", marginRight:"auto",marginLeft:"auto",paddingTop:"35px", textAlign:"center"}}>
                
                <div style={{paddingLeft:"65px", paddingRight:"65px",}}>
                    <img src={Logoss} width="100%"  style={{paddingBottom:"25px", paddingTop:"20px", maxWidth:"538px", textAlign:"center"}}  />
                   <h1 className={classes.Heading}>FREE DOWNLOAD<br />
                   Lead Generation “Secret Sauce”</h1>
                  <div style={{color:"#495050", lineHeight:"26px", textAlign:"center"}}>
                  How to stand out from the crowd, build a successful pipeline, and drive conversions.

                    Your FREE GUIDE is packed full of easy-to-implement tips, tricks &amp; strategies, an overview of how Elevate’s lead generation technology does 90% of the work for busy real estate professionals, and a bunch of special offers to jumpstart your online lead generation.
                 </div>
                 </div>


                <div style={{ paddingLeft: "25px", paddingRight: "25px", paddingBottom: "45px"}}>
                    <Formleadgenguide />
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
}))(Leadgenguide);
