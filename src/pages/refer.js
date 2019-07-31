import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import FormRefer from "../components/FormRefer";
import SEO from "../components/SEO";
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
        <div >
            <div style={{ maxWidth: "900px", backgroundColor: "#d0d5d7", paddingBottom: "40px",marginBottom:"40px", marginRight:"auto",marginLeft:"auto"}}>
                <div className={classes.landingHeaderStyle}>
                    {/* <img src={LandingHeader} style={{width:"100%"}} /> */}
                </div>
                <div>
                    Share the power of ELEVATE

                    Share the love &amp; refer your fellow real estate colleagues to Elevate. For any referrals who subscribe to Elevate's DMS or Elite programs, you'll receive a $100 credit to your account. Nice!
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
}))(Refer);
