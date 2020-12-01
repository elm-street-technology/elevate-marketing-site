import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import FormLeadgen from "../components/FormLeadgen";
import SEO from "../components/SEO";
import Modalpic2 from "../images/doubledown.png";
import LandingHeader from "../images/leads_top_image.jpg";
import LandingFooter from "../images/leads_bottom_image.jpg";

const Dms = ({ children, classes, data, tags }) => {
  const postNode = {
      title: `Lead Generation - ${config.siteTitle}`,
  };

  return (
    <div className={classes.root}>
      <Helmet>
              <title>{`Lead Generation - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="leadgen" customTitle />

      <Container>
        <div >
                  <div style={{ maxWidth: "900px", backgroundColor: "#ece8ea", marginRight:"auto",marginLeft:"auto",paddingTop:"20px", textAlign:"center"}}>
                <div style={{padding:"40px", textAlign:"center"}}>
                <div className={classes.heading} style={{color:"#52B1AD"}}>LIMITED AVAILABILITY ON<br />
                EXCLUSIVE BUYER / SELLER LEADS</div>
                <div className={classes.subHeading} style={{color:"#52B1AD"}}>EXCLUSIVE LEADS IN MARKETS ACROSS THE U.S.</div>
                <div className={classes.centersubtext} style={{ paddingLeft: "22px", paddingRight: "22px"}}>
                First Come. First Served.<br />
                Check availability today.</div>
                </div>
                <div style={{ paddingLeft: "22px", paddingRight: "22px"}}>
                    <FormLeadgen />
                </div>
                <div>
                    <img src={LandingFooter} style={{ width: "100%" }} />
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
    margin: "20px auto",
  },
  heading: {
    fontSize: "30px",
    fontWeight: "700",
    letterSpacing: ".14px",
    color: "#2E2E35",
    textAlign: "center",
    marginBottom: "12px",
  },
  centersubtext: {
    color: "#5A5B5C",
    fontWeight: "700",
    fontSize: "16px",
    letterSpacing: ".25px",
    lineHeight: "1.6",
    marginbottom: "20px",
    textAlign: "center",
  
    [theme.breakpoints[900]]: {
        fontSize: "16px",
    },
  },

  subHeading: {
    fontSize: "18px",
    fontWeight: "700",
    lineHeight: "28px",
    letterSpacing: ".08px",
    textAlign: "center",
    margin: "0 auto 36px",
  },
  landingHeaderStyle:{
    textAlign:"center",
    marginBottom:"30px"
  },
}))(Dms);
