import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import FormExit from "../components/FormExit";
import SEO from "../components/SEO";

const ExitSurvey = ({ children, classes, data, tags }) => {
  const postNode = {
    title: `Exit Survey - ${config.siteTitle}`,
  };

  return (
    <div className={classes.root}>
      <Helmet>
              <title>{`Exit Survey - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="contact" customTitle />

      <Container>
        <div >
            <div style={{ maxWidth: "900px", paddingBottom: "40px",marginBottom:"40px", marginRight:"auto",marginLeft:"auto"}}>
                <div style={{ paddingLeft: "10px", paddingRight: "10px"}}>
                  <div style={{textAlign:"center"}}>
                    <div style={{fontSize:"26px",fontWeight:"700"}}>Exit Survey</div>
                    <div style={{padding:"10px",marginBottom:"20px"}}>Please take a minute to complete our exit survey.</div>
                </div>
                  <FormExit />
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
  landingHeaderStyle: {
    textAlign: "center",
    marginBottom: "30px",
  },
}))(ExitSurvey);
