import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import Formsocialmediaguide from "../components/Formsocialmediaguide";
import SEO from "../components/SEO";
import Logo101 from "../images/social_content_cover.png";
import Bottom from "../images/socialmedia101_bottom.jpg";

const Socialmediamarketingguide = ({ children, classes, data, tags }) => {
  const postNode = {
      title: `Social Media Marketing Guide - ${config.siteTitle}`,
  };

  return (
    <div className={classes.root}>
      <Helmet>
              <title>{`Social Media Marketing Guide - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="Social Media Marketing Guide" customTitle />

      <Container>
        <div >
                  <div style={{ maxWidth: "900px", backgroundColor: "#f7f7f7", marginRight:"auto",marginLeft:"auto",paddingTop:"35px", textAlign:"center"}}>
                
                <div style={{paddingLeft:"65px", paddingRight:"65px",}}>
                    <img src={Logo101} width="100%"  style={{paddingBottom:"45px", paddingTop:"20px", maxWidth:"538px", textAlign:"center"}}  />
                   <h1 className={classes.Heading}>Download Your FREE, All-Inclusive Guide<br />
                   For Creating GREAT Content!</h1>
                  <div style={{color:"#495050", lineHeight:"26px", textAlign:"center"}}>
                      What makes for awesome social media marketing content? It's not as time-consuming or difficult as you might think. Download this FREE GUIDE and get the tips, tricks, and strategies from the pros to elevate your social media marketing content today!
                 </div>
                 </div>


                <div style={{ paddingLeft: "10px", paddingRight: "10px"}}>
                    <Formsocialmediaguide />
                </div>
                <div>
                    <img src={Bottom} style={{ width: "100%" }} />
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
    margin: "70px auto",
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
}))(Socialmediamarketingguide);
