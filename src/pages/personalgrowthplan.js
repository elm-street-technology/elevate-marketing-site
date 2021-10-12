import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import ResponsiveVid from "../components/ResponsiveVid"
import Formpersonalgrowthplan from "../components/Formpersonalgrowthplan";
import SEO from "../components/SEO";
import Swot from "../images/swot_pic.png";


const Personalgrowthplan = ({ children, classes, data, tags }) => {
  const postNode = {
      title: `Elevate Personal Growth Plan - ${config.siteTitle}`,
  };

  return (
    <div className={classes.root}>
      <Helmet>
              <title>{`Elevate Personal Growth Plan - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="Elevate Personal Growth Plan" customTitle />

      <Container>
        <div >
                  <div style={{ maxWidth: "900px", backgroundColor: "#f7f7f7", marginRight:"auto",marginLeft:"auto",paddingTop:"55px", textAlign:"center"}}>
                
                <div style={{paddingLeft:"65px", paddingRight:"65px",}}>
                <img src={Swot} width="100%" style={{paddingBottom:"20px", maxWidth:"450px"}}/>
                   <h1 className={classes.Heading}>SELF EVALUATION OF PERSONAL<br />
                   &amp; PROFESSIONAL GOALS.</h1>
                  <div style={{color:"#495050", lineHeight:"26px", textAlign:"center", paddingBottom:"25px"}}>
                  Download your complimentary Personal Growth Plan<br />
                  and explore where you are, where you want to go and what's holding you back.
                 </div>
                 </div>

                 


                <div style={{ paddingLeft: "20px", paddingRight: "20px", paddingBottom:"40px"}}>
                    <Formpersonalgrowthplan />
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

  fullWidthVid:{
    width: "100%",
    marginLeft:"auto",
    marginRight:"auto",
    [theme.breakpoints[900]]: {
      width: "75%"
  },
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
}))(Personalgrowthplan);
