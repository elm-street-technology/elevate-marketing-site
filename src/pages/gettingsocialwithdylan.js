import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import ResponsiveVid from "../components/ResponsiveVid"
import Formdylan from "../components/Formdylan";
import SEO from "../components/SEO";
import Gswd from "../images/gswd_logo.png";


const Gettingsocialwithdylan = ({ children, classes, data, tags }) => {
  const postNode = {
      title: `Getting Social With Dylan - ${config.siteTitle}`,
  };

  return (
    <div className={classes.root}>
      <Helmet>
              <title>{`Getting Social With Dylan - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="Getting Social With Dylan" customTitle />

      <Container>
        <div >
                  <div style={{ maxWidth: "900px", backgroundColor: "#ffffff", marginRight:"auto",marginLeft:"auto",paddingTop:"35px", textAlign:"center"}}>
                
                <div style={{paddingLeft:"65px", paddingRight:"65px",}}>
                <img src={Gswd} width="100%" style={{paddingBottom:"20px", maxWidth:"550px"}}/>
                   <h1 className={classes.Heading}>What is “Getting Social With Dylan”?</h1>
                  <div style={{color:"#495050", lineHeight:"26px", textAlign:"center", paddingBottom:"25px"}}>
                  It’s an exciting new educational program from the Marketing minds at Elm Street Technology showcasing the social media coaching of Dylan Handy, one of our top educational trainers.  Focusing on a different social media marketing theme each month, Dylan will provide quick tips, tricks &amp; strategies to followers across @tryelevateRE’s social channels AND offer a 1x/month DEEP DIVE into the topic via webinar with a live q&amp;a session.
                  <br /><br />
                  <h1 className={classes.Heading}>This is 100% FREE. No strings attached.</h1>  
                    Sign up below to receive notifications about future webinars, additional insights and inspiration from Dylan to empower your social media marketing, 
                    and even more great content to feed your brain!  

                 
                 
                 </div>
                 </div>

                 


                <div style={{ paddingLeft: "20px", paddingRight: "20px", paddingBottom:"40px"}}>
                    <Formdylan />
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
}))(Gettingsocialwithdylan);
