import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import ResponsiveVid from "../components/ResponsiveVid"
import Formbloggingguide from "../components/Formbloggingguide";
import SEO from "../components/SEO";
import Blog from "../images/bfb_title.png";


const Bloggingguide = ({ children, classes, data, tags }) => {
  const postNode = {
      title: `Listings Guide - ${config.siteTitle}`,
  };

  return (
    <div className={classes.root}>
      <Helmet>
              <title>{`Blogging For Beginners Guide - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="Blogging For Beginners Guide" customTitle />

      <Container>
        <div >
                  <div style={{ maxWidth: "900px", backgroundColor: "#f7f7f7", marginRight:"auto",marginLeft:"auto",paddingTop:"55px", textAlign:"center"}}>
                
                <div style={{paddingLeft:"65px", paddingRight:"65px",}}>
                <img src={Blog} width="100%" style={{paddingBottom:"20px", maxWidth:"450px"}}/>
                   <h1 className={classes.Heading}>Download Your Free Guide!<br />
Blogging For Beginners!</h1>
                  <div style={{color:"#495050", lineHeight:"26px", textAlign:"center", paddingBottom:"25px"}}>
                  Want to finally master blogging &amp; reap the benefits? You're in the right place!<br />
                  Come with us as we take a deep dive into the tips, tricks, &amp; strategies that will not only help you to effortlessly generate valuable content for your audience, but also reap the ROI that comes with generating high-quality leads &amp; increased SEO.
                  Fill out our quick form to get your free guide today!
                 </div>
                 </div>

                 


                <div style={{ paddingLeft: "20px", paddingRight: "20px", paddingBottom:"40px"}}>
                    <Formbloggingguide />
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
}))(Bloggingguide);
