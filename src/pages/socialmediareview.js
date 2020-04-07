import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import FormReview from "../components/SignUpFormReview";
import SEO from "../components/SEO";
import ResponsiveVid from "../components/ResponsiveVid"
import LandingHeader from "../images/leads_top_image.jpg";
import LandingFooter from "../images/wowad_bottom.jpg";

const SocialMediaReview = ({ children, classes, data, tags }) => {
  const postNode = {
      title: `Social Media Review - ${config.siteTitle}`,
  };

  return (
    <div className={classes.root}>
      <Helmet>
              <title>{`Social Media Review - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="SocialMediaReview" customTitle />

      <Container>
        <div >
                  <div style={{ maxWidth: "900px", backgroundColor: "#f7f7f7", marginRight:"auto",marginLeft:"auto",}}>
                
                  <div style={{marginBottom:"30px", paddingTop:"55px", paddingRight:"60px", paddingLeft:"60px"}}>
                <div className={classes.headingLarge} style={{ marginBottom: "25px" }}>FREE Social Media Review</div>

                <div style={{color:"#495050", lineHeight:"25px", paddingBottom:"55px", textAlign:"center"}}>Spend 15-minutes with an Elevate Success Coach who will review your website, blog and social channels with you and give you tips, tricks &amp; strategies for making the most of your online marketing NOW and in the FUTURE. No string attached.</div>


                <div className={classes.fullWidthVid}>
                  <div aspectRatio="16by9">
                  <ResponsiveVid youtubeId="xPJyb2d_tnU" />
                  </div>
                </div>

              
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
}))(SocialMediaReview);
