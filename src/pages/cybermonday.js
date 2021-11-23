import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import FormReview from "../components/SignUpFormCyber";
import SEO from "../components/SEO";
import LandingHeader from "../images/cmheader.jpg";
import ResponsiveVid from "../components/ResponsiveVid"
import LandingFooter from "../images/wowad_bottom.jpg";

const Cybermonday = ({ children, classes, data, tags }) => {
  const postNode = {
      title: `Cyber Monday - ${config.siteTitle}`,
  };

  return (
    <div className={classes.root}>
      <Helmet>
              <title>{`Cyber Monday - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="Cybermonday" customTitle />

      <Container>
        <div >
                  <div style={{ maxWidth: "900px", backgroundColor: "#f7f7f7", marginRight:"auto",marginLeft:"auto",}}>
                  <img src={LandingHeader} style={{width:"100%"}} />
                  <div style={{marginBottom:"20px", paddingTop:"55px", paddingRight:"60px", paddingLeft:"60px"}}>
                <div className={classes.headingLarge} style={{ marginBottom: "25px" }}>CYBER MONDAY SPECIAL!</div>

                <div style={{color:"#495050", lineHeight:"25px", paddingBottom:"15px", textAlign:"center"}}>Book your one-on-one consultation with an Elevate Success Coach to explore how YOU can jumpstart your 2022 marketing for only $1 between now and the end of the year.  WOW!
<br /><br />
Offer not eligible for existing Elevate subscribers.
<br />
Limited time offer.  Expires at 12pm PT on Monday, November 29, 2021.
<br />
Book your consultation by expiration in order to redeem offer.</div>


             

              
                </div>





                <div style={{ paddingLeft: "40px", paddingRight: "40px", paddingBottom:"60px"}}>
                    <FormReview />
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
  heading: {
    fontSize: "28px",
    fontWeight: "800",
    letterSpacing: ".14px",
    color: "#2E2E35",
    textAlign: "center",
    marginBottom: "12px",
  },
  headingLarge:{
    fontSize: "33px",
    fontWeight: "700",
    color: "#5bc0b8",
    textAlign:"center",
    padding:"3px",
    lineHeight:"38px"
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
  fullWidthVid:{
    width: "100%",
    marginLeft:"auto",
    marginRight:"auto",
    [theme.breakpoints[900]]: {
      width: "75%"
  },
},
}))(Cybermonday);
