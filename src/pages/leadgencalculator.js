import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import LeadgenCalc from "../components/LeadgenCalc";
import SEO from "../components/SEO";
import HeadBG from "../images/lead_calc_bg.jpg";

const LeadGenCalculator = ({ children, classes, data, tags }) => {
  const postNode = {
      title: `Lead Generation Calculator - ${config.siteTitle}`,
  };

  return (
    <div className={classes.root}>
      <Helmet>
              <title>{`Lead Generation - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="leadcalc" customTitle />

      <div style={{backgroundImage:"url("+HeadBG+")", backgroundSize:"cover", backgroundPosition:"centerTop"}}>
        <Container>
              <div className={classes.top} style={{paddingBottom:"80px", paddingRight:"25px", paddingLeft:"25px", paddingTop:"75px"}}>
                  <div className={classes.centerHeading}>
                      <div className={classes.heading} style={{color:"#ffffff"}}>The power of LEADS</div>
                      <div className={classes.subtext} style={{color:"#ffffff"}}>Use our easy lead generation calculator to evaluate buyer / seller lead counts, monthly ad spend, and potential ROI.
                      </div>
                  </div>
              </div>
        </Container>
      </div>

      <Container>
        <div >
                  <div style={{ maxWidth: "900px",  marginRight:"auto",marginLeft:"auto",paddingTop:"15px"}}>
                
                <div style={{ paddingLeft: "10px", paddingRight: "10px"}}>
                    <LeadgenCalc />
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
    margin: "auto",
  },
  top: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "top",
  },

  heading: {
    fontSize: "33px",
    fontWeight: "700",
    lineHeight: "40px",
    letterSpacing: ".14px",
    color: "#5ac0ba",
    marginBottom: "12px",
  },

  subtext: {
    fontSize: "16px",
    fontWeight: "300",
    lineHeight: "24px",
    color: "#777777",
  },

  centerHeading:{
    alignItems: "center",
    width: "100%",
    textAlign: "center",
  },
  heading2: {
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
  
}))(LeadGenCalculator);
