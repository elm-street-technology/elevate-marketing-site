import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import ReferBgSectionExternal from "../components/ReferBgSectionExternal";
import FormRefer from "../components/FormRefer";
import SEO from "../components/SEO";
import power from "../images/refer_power.png";
import Referbg from "../images/refer_bg.jpg";
import Referlogo2 from "../images/refer_logo2.png";
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
      <SEO postNode={postNode} pagePath="refer" customTitle />

      <ReferBgSectionExternal bgImage={Referbg} secLink="#refer_form" secButton="Start referring today...">
      For every friend you refer that subscribes to Elevate, you’ll receive a FREE batch of 5 - 10 leads from your target market in your Elevate account, and so will your friend!
    </ReferBgSectionExternal>
    <a id="refer_form"></a>



      <Container>
      
        <div >
            <div style={{ maxWidth: "900px", backgroundColor: "#ffffff", paddingBottom: "40px", marginBottom:"40px", marginRight:"auto",marginLeft:"auto", paddingTop:"30px", textAlign:"center" }}>
                <div className={classes.landingHeaderStyle}>
                    {/* <img src={LandingHeader} style={{width:"100%"}} /> */}
                </div>
                <img src={Referlogo2} width="100%" style={{ paddingBottom:"28px", maxWidth:"330px",}}/>
                <div style={{ paddingLeft: "18px", paddingRight: "18px"}}>
                
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
    padding: "0px",
    margin: "2px auto",
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

  column2:{
    width:"520px",
    maxWidth: "100%",
    paddingRight:"10px",
    paddingLeft:"10px",
    verticalAlign: "top",
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
