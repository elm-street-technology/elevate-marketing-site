import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import FormRefer from "../components/FormRefer";
import SEO from "../components/SEO";
import power from "../images/refer_power.png";
import LandingHeader from "../images/6emails_landing_header.jpg";

const Refer = ({ children, classes, data, tags }) => {
  const postNode = {
    title: `Share the power of ELEVATE - ${config.siteTitle}`,
  };

  return (
    <div className={classes.root}>
      <Helmet>
              <title>{`Share the power of ELEVATE - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="contact" customTitle />


      <Container>
        <div className={classes.top} style={{paddingRight:"25px", paddingLeft:"25px"}}>
          <div className={classes.centerHeading}>
            <div style={{ textAlign: "center",paddingBottom:"15px" }}>
            <img src={power} width="250" />
            </div>
            <div className={classes.heading}>SHARE THE POWER OF ELEVATE</div>
            <div style={{paddingBottom:"35px", lineHeight:"24px"}}><div className={classes.bold}>Share the love &amp; refer your fellow real estate colleagues to Elevate.</div>
            For any referrals who subscribe to Elevate's DMS or Elite programs,<br />
            you'll receive a $100 credit to your account. Nice!</div>
            
          </div>
        </div>
      </Container>




      <Container>
        <div >
            <div style={{ maxWidth: "900px", backgroundColor: "#f7f7f7", paddingBottom: "40px", marginBottom:"40px", marginRight:"auto",marginLeft:"auto", paddingTop:"10px"}}>
                <div className={classes.landingHeaderStyle}>
                    {/* <img src={LandingHeader} style={{width:"100%"}} /> */}
                </div>
                <div style={{ paddingLeft: "10px", paddingRight: "10px"}}>
                    <FormRefer />
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
    margin: "50px auto",
  },
  heading: {
    fontSize: "28px",
    fontWeight: "800",
    letterSpacing: ".14px",
    color: "#2E2E35",
    textAlign: "center",
    marginBottom: "12px",
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

  centerHeading:{
    alignItems: "center",
    width: "100%",
    textAlign: "center",
  },

  heading: {
    color: theme.colors.secondary,
    fontSize: "32px",
    lineHeight: "40px",
    fontWeight: "700",
    marginRight: "auto",
    paddingBottom: "20px",
  },

  top: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "top",
  },
  bold:{
    fontWeight:"700",
  },
}))(Refer);
