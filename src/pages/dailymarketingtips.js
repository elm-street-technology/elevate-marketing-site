import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import Formdailymarketingtips from "../components/Formdailymarketingtips";
import SEO from "../components/SEO";
import Daily from "../images/dailylogo.png";


const Dailymarketingtips = ({ children, classes, data, tags }) => {
  const postNode = {
      title: `Daily Marketing Tips - ${config.siteTitle}`,
  };

  return (
    <div className={classes.root}>
      <Helmet>
              <title>{`Daily Marketing Tips - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="Daily Marketing Tips" customTitle />

      <Container>
        <div >
                  <div style={{ maxWidth: "900px", backgroundColor: "#ffffff", marginRight:"auto",marginLeft:"auto",paddingTop:"35px", textAlign:"center"}}>
                
                <div style={{paddingLeft:"65px", paddingRight:"65px",}}>
                    <img src={Daily} width="100%"  style={{paddingBottom:"40px", paddingTop:"65px", maxWidth:"378px", textAlign:"center"}}  />
                   <h1 className={classes.Heading}>Get a daily dose of marketing<br />
                   awesomeness direct to your inbox.</h1>
                  <div style={{color:"#495050", lineHeight:"26px", textAlign:"center"}}>
                  Every morning, we'll send you a tip, trick or insight to inspire your inner marketing genius.
                 </div>
                 </div>


                <div style={{ paddingLeft: "10px", paddingRight: "10px"}}>
                    <Formdailymarketingtips />
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
}))(Dailymarketingtips);
