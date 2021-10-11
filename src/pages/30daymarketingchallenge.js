import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import ResponsiveVid from "../components/ResponsiveVid"
import Formchallenge from "../components/Formchallenge";
import SEO from "../components/SEO";
import Day from "../images/30day_pic.png";


const Challengeguide = ({ children, classes, data, tags }) => {
  const postNode = {
      title: `30-Day Marketing Challenge Guide - ${config.siteTitle}`,
  };

  return (
    <div className={classes.root}>
      <Helmet>
              <title>{`30-Day Marketing Challenge Guide - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="30-Day Marketing Challenge Guide" customTitle />

      <Container>
        <div >
                  <div style={{ maxWidth: "900px", backgroundColor: "#f7f7f7", marginRight:"auto",marginLeft:"auto",paddingTop:"55px", textAlign:"center"}}>
                
                <div style={{paddingLeft:"65px", paddingRight:"65px",}}>
                <img src={Day} width="100%" style={{paddingBottom:"20px", maxWidth:"550px"}}/>
                   <h1 className={classes.Heading}>30-DAY MARKETING CHALLENGE</h1>
                  <div style={{color:"#495050", lineHeight:"26px", textAlign:"center", paddingBottom:"25px"}}>
                  "It takes 30-days for a change in behavior to become a habit,<br />
                  and six months for a habit to become the automatic way a person does things.<br /> 
                  If you haven’t changed in 30-days, it’s not happening." - Mark Goulston<br /><br />

Simple steps to elevate your marketing in less than 1-month.<br />
                  Are you ready to change your Marketing for the better?  Get started with this FREE guide.
                 </div>
                 </div>

                 


                <div style={{ paddingLeft: "20px", paddingRight: "20px", paddingBottom:"40px"}}>
                    <Formchallenge />
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
}))(Challengeguide);
