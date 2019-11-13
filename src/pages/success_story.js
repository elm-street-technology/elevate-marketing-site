import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import SignUpFormSuccess from "../components/SignUpFormSuccess";
import SEO from "../components/SEO";

const SuccessStory = ({ children, classes, data, tags }) => {
  const postNode = {
    title: `Success Story - ${config.siteTitle}`,
  };

  return (
    <div className={classes.root}>
      <Helmet>
        <title>{`Success Story - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="success_story" />


      <Container>
      <h1 className={classes.heading}>
      A Casual Conversation with Tina Minshall
        </h1>
        <h2 className={classes.subHeading}>
          Bondilyn Jolly, VP of Marketing at Elevate chats with new agent Tina Minshall about the balance between being a mom and a successful agent, being yourself with your clients, and how Elevate helps her do both by automating and streamlining so much of her day-to-day.</h2>
      <div style={{textAlign: "center", maxWidth:"700px",marginLeft:"auto",marginRight:"auto"}}>
        <div style={{ textAlign: "center"}} className={classes.videoEmbed}>
                        <iframe className={classes.videoContainer} src="https://www.youtube.com/embed/py5fhtASVPY?autoplay=1&rel=0"
                         frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        </div>
 
        <h1 className={classes.heading} style={{paddingTop:"40px"}}>
        Are you ready to automate and streamline YOUR online marketing?
        </h1>
        <SignUpFormSuccess />
        {/* <div className={classes.closingContainer}>
          For Media Inquiries, {""} Please {""}
          <a
            className={classes.emailLink}
            href="mailto:ekaplan@elmstreettechnology.com"
          >
            Email Us
          </a>
        </div> */}
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
    margin: "60px auto",
  },
  heading: {
    fontSize: "28px",
    fontWeight: "700",
    letterSpacing: ".14px",
    color: "#55c3ba",
    textAlign: "center",
    marginBottom: "12px",
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

  videoEmbed:{
    position: "relative",
    paddingBottom: "56.25%",
    paddingTop: "30px",
    height: "0",
    overflow: "hidden",
    
  },
  videoContainer:{
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    
  }
  // closingContainer: {
  //   color: "#A9A8B6",
  //   fontWeight: "600",
  //   fontSize: "18px",
  //   textAlign: "center",
  //   margin: "60px auto 0",
  // },
  // emailLink: {
  //   color: "#2E2E35 !important",
  //   textDecoration: "underline",

  //   "&:hover": {
  //     textDecoration: "none !important",
  //   },
  // },
}))(SuccessStory);
