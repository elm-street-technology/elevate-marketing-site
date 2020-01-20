import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import Formwow from "../components/Formwow";
import SEO from "../components/SEO";
import LandingHeader from "../images/leads_top_image.jpg";
import LandingFooter from "../images/wowad_bottom.jpg";

const Wow = ({ children, classes, data, tags }) => {
  const postNode = {
      title: `Social Media Campaigns - ${config.siteTitle}`,
  };

  return (
    <div className={classes.root}>
      <Helmet>
              <title>{`Social Media Campaigns - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="SocialMediaCampaigns" customTitle />

      <Container>
        <div >
                  <div style={{ maxWidth: "900px", backgroundColor: "#f7f7f7", marginRight:"auto",marginLeft:"auto",paddingTop:"35px"}}>
                
                <div style={{ paddingLeft: "10px", paddingRight: "10px"}}>
                    <Formwow />
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
}))(Wow);
