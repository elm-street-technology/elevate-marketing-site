import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import FormSellerOptin from "../components/FormSellerOptin";
import SEO from "../components/SEO";

const Sellerpilot = ({ children, classes, data, tags }) => {
  const postNode = {
    title: `Seller Leads Pilot - ${config.siteTitle}`,
  };

  return (
    <div className={classes.root}>
      <Helmet>
              <title>{`Seller Leads Pilot - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="sellerpilot" customTitle />


    <a id="refer_form"></a>



      <Container>
      
        <div >
            <div style={{ maxWidth: "900px", backgroundColor: "#ffffff", paddingBottom: "40px", marginBottom:"40px", marginRight:"auto",marginLeft:"auto", paddingTop:"30px", textAlign:"center" }}>
                <div className={classes.landingHeaderStyle}>
                    {/* <img src={LandingHeader} style={{width:"100%"}} /> */}
                </div>
                <div style={{ paddingLeft: "18px", paddingRight: "18px"}}>                
                    <FormSellerOptin />
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
}))(Sellerpilot);
