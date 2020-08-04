import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import Formseoguide from "../components/Formseoguide";
import SEO from "../components/SEO";
import LandingHeader from "../images/leads_top_image.jpg";
import Rockin from "../images/rockin_logo.png";

const Websiteseoguide = ({ children, classes, data, tags }) => {
  const postNode = {
      title: `Website SEO Guide - ${config.siteTitle}`,
  };

  return (
    <div className={classes.root}>
      <Helmet>
              <title>{`Website SEO Guide - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="Websiteseoguide" customTitle />

      <Container>
        <div >
                  <div style={{ maxWidth: "900px", backgroundColor: "#4e258b", marginRight:"auto",marginLeft:"auto",paddingTop:"35px", textAlign:"center"}}>
                  <div>
                    <img src={Rockin} width="100%"  style={{paddingBottom:"25px", paddingTop:"20px", maxWidth:"538px", textAlign:"center"}} />
                </div>
                <div style={{paddingLeft:"45px", paddingRight:"45px"}}>
                    <h1 className={classes.Heading}>Secrets to Getting Found of Google</h1>
                           <div style={{color:"#f7f7f7", lineHeight:"26px", textAlign:"center"}}>93% of buyers looking for a home use online searches for listings and information during their home-buying journey. What does it take to be seen on the first page of Google, and what can you do to get there?
                            <br /><br />
                           <h3 className={classes.Heading}>This FREE GUIDE is your key to SEO success!</h3></div>
                </div>

                <div style={{ paddingLeft: "10px", paddingRight: "10px"}}>
                    <Formseoguide />
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
    margin: "80px auto",
  },

  Heading: {
    fontSize: "28px",
    fontWeight: "700",
    lineHeight: "36px",
    letterSpacing: ".14px",
    color: "#52B1AD",
    textAlign: "center",
    marginBottom: "18px",
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
}))(Websiteseoguide);
