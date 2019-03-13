import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import Form6Emails from "../components/Form6Emails";
import SEO from "../components/SEO";
import LandingHeader from "../images/6emails_landing_header.jpg";

const SixEmails = ({ children, classes, data, tags }) => {
  const postNode = {
    title: `6 Emails Every Real Estate Agent Should Be Sending (Free Download) - ${config.siteTitle}`,
  };

  return (
    <div className={classes.root}>
      <Helmet>
              <title>{`6 Emails Every Real Estate Agent Should Be Sending (Free Download) - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="contact" customTitle />

      <Container>
        <div >
            <div style={{ maxWidth: "900px", backgroundColor: "#d0d5d7", paddingBottom: "40px",marginBottom:"40px", marginRight:"auto",marginLeft:"auto"}}>
                <div className={classes.landingHeaderStyle}>
                    <img src={LandingHeader} style={{width:"100%"}} />
                </div>
                <div style={{ paddingLeft: "10px", paddingRight: "10px"}}>
                    <Form6Emails />
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
}))(SixEmails);
