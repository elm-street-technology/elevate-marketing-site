import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import Formemailguide from "../components/Formemailguide";
import SEO from "../components/SEO";
import Emaillogo from "../images/email_guide_logo.png";

const Emailmarketingguide = ({ children, classes, data, tags }) => {
  const postNode = {
      title: `Email Marketing Guide - ${config.siteTitle}`,
  };

  return (
    <div className={classes.root}>
      <Helmet>
              <title>{`Email Marketing Guide - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="Email Marketing Guide" customTitle />

      <Container>
        <div >
                  <div style={{ maxWidth: "900px", backgroundColor: "#f3fafb", marginRight:"auto",marginLeft:"auto",paddingTop:"35px", textAlign:"center"}}>
                
                <div style={{paddingLeft:"65px", paddingRight:"65px",}}>
                    <img src={Emaillogo} width="100%"  style={{paddingBottom:"25px", paddingTop:"48px", maxWidth:"438px", textAlign:"center"}}  />
                   <h1 className={classes.Heading}>Download Your FREE, All-Inclusive Guide<br />
                   Including The 6 Emails That Agents SHOULD Be Sending To Their Audience!</h1>
                  <div style={{color:"#495050", lineHeight:"26px", textAlign:"center"}}>
                      What makes for awesome email marketing? It's not as time-consuming or difficult as you might think. Download this FREE GUIDE and get the tips, tricks, and strategies from the pros to elevate your email marketing content today!
                 </div>
                 </div>


                <div style={{ paddingLeft: "10px", paddingRight: "10px"}}>
                    <Formemailguide />
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
  color: "#5c53a3",
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
}))(Emailmarketingguide);
