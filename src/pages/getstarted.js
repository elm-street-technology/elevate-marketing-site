import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import SignUpForm from "../components/SignUpForm";
import SEO from "../components/SEO";

const GetStarted = ({ children, classes, data, tags }) => {
  const postNode = {
    title: `Get Started - ${config.siteTitle}`,
  };

  return (
    <div className={classes.root}>
      <Helmet>
        <title>{`Get Started - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="contact" customTitle />

      <Container>
        <h1 className={classes.heading} type="title">
          Get Started
        </h1>
        <h2 className={classes.subHeading}>
          Fill out this form and an Elevate Agent Success coach will be in touch
          shortly!
        </h2>
        <SignUpForm />
        <div className={classes.closingContainer}>
          For Media Inquiries, {""} Please {""}
          <span>
            <a className={classes.signUp} href={`/login`}>
              click here.
            </a>
          </span>
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
    margin: "100px auto",
  },
  heading: {
    textAlign: "center",
    fontWeight: "800",
    letterSpacing: ".14px",
    fontSize: "28px",
    color: "#2E2E35",
    marginBottom: "12px",
  },

  subHeading: {
    fontSize: "18px",
    letterSpacing: ".08px",
    lineHeight: "29px",
    textAlign: "center",
    margin: "auto",
    marginBottom: "36px",
    maxWidth: "340px",
  },
  closingContainer: {
    marginTop: "60px",
    color: "#A9A8B6",
    fontWeight: "600",
    fontSize: "18px",
    maxWidth: "330px",
    margin: "0 auto",
  },
  signUp: {
    color: "#2E2E35 !important",
    textDecoration: "underline",

    "&:hover": {
      textDecoration: "none !important",
    },
  },
}))(GetStarted);
