import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import FormMastermind from "../components/FormMastermind";
import Brightlogo from "../images/brightmls_logo.png";
import Bosslogo from "../images/eboss_logo.png";
import Sprologo from "../images/spro_logo.png";
import Ask from "../images/askhow.png";
import Eboss from "../images/eboss_bg.jpg";
import Spro from "../images/socialpro_bg.jpg";
import MastermindBgSectionExternal from "../components/MastermindBgSectionExternal";
import SEO from "../components/SEO";

const Mastermind = ({ children, classes, data, tags }) => {
  const postNode = {
      title: `Elevate Mastermind - ${config.siteTitle}`,
  };

  return (
<div className={classes.root}>
      <Helmet>
              <title>{`Elevate Mastermind - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="mastermind" customTitle />

<MastermindBgSectionExternal bgImage={Eboss} secTitle="The Power of PRODUCTIVITY">
All-in-one solution combining a sophisticated
IDX website, exclusive pay-per-click lead generation,
advanced CRM, robust blog, email, and social.
</MastermindBgSectionExternal>


<div style={{backgroundColor:"#ffffff",}}>
      <Container>

        <div >
            <div style={{ maxWidth: "900px", backgroundColor: "#ffffff", marginRight:"auto",marginLeft:"auto", paddingTop:"60px", paddingBottom:"60px"}}>
                <div className={classes.landingHeaderStyle}>
                   
                </div>
                <div style={{ paddingLeft: "10px", paddingRight: "10px"}}>
                    <FormMastermind />
                </div>
                <div>
                    
                </div>
            </div>
        </div>
      </Container>
      </div>
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
    letterSpacing: ".14px",
    color: "#f15623",
    textAlign: "center",
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

  subHeading: {
    fontSize: "18px",
    lineHeight: "28px",
    letterSpacing: ".08px",
    textAlign: "center",
    margin: "0 auto 36px",
  },
  landingHeaderStyle:{
    textAlign:"center",
  },

  flexContainer: {
    padding: "0",
    margin: '0',
  
    display: "-webkit-box",
    display: "-moz-box",
    display: "-ms-flexbox",
    display: "-webkit-flex",
    display: "flex",
    flexWrap: "wrap",
  
  },
  flexItem: {
    maxWidth: "100%",
    width: "100%",
    paddingRight: "0px",
    paddingBottom: "25px",
  
  
    [theme.breakpoints[900]]: {
        maxWidth: "50%",
        width: "50%",
        paddingRight: "20px",
        paddingBottom: "0px",
    },
  },

  flexItem2: {
    maxWidth: "100%",
    width: "100%",
    paddingRight: "0px",
    paddingBottom: "25px",
  
  
    [theme.breakpoints[900]]: {
        maxWidth: "26%",
        width: "26%",
        paddingRight: "20px",
        paddingBottom: "0px",
    },
  },

  flexItem3: {
    maxWidth: "100%",
    width: "100%",
    paddingRight: "0px",
    paddingBottom: "25px",
  
  
    [theme.breakpoints[900]]: {
        maxWidth: "40%",
        width: "40%",
        paddingRight: "20px",
        paddingBottom: "0px",
    },
  },
}))(Mastermind);
