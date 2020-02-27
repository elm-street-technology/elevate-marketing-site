import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import SignUpFormThankyou from "../components/SignUpFormThankyou";
import SEO from "../components/SEO";

const Mastermind_thankyou = ({ children, classes, data, tags }) => {
  const postNode = {
    title: `Mastermind Thank You - ${config.siteTitle}`,
  };

  return (
    <div className={classes.root}>
      <Helmet>
        <title>{`Mastermind Thank You - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="mastermind_thankyou" />

<div style={{backgroundColor:"#f7f7f7", paddingTop:"50px", paddingBottom:"65px"}}>
<Container>
<h1 className={classes.heading}>
      A Special THANK You
        </h1>
        <h2 className={classes.subHeading}>
        We appreciate your interest in our Mastermind series and hope you enjoyed <br />your experience with Brenda.  Here’s a special thank you message...just for you!</h2>
      <div style={{textAlign: "center", maxWidth:"700px",marginLeft:"auto",marginRight:"auto"}}>
        <div style={{ textAlign: "center"}} className={classes.videoEmbed}>
                        <iframe className={classes.videoContainer} src="https://www.youtube.com/embed/3XfWrKM_wos?autoplay=1&rel=0"
                         frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        </div>

</Container>
</div>





      <Container>
        <h1 className={classes.heading} style={{paddingTop:"55px"}}>
        Thinking of JOINING Elevate?
        </h1>
        <h2 className={classes.subHeading}>
        Sweet!  Take a quick video tour below and then connect with a Success Coach.</h2>
      <div style={{textAlign: "center", maxWidth:"700px",marginLeft:"auto",marginRight:"auto"}}>
        <div style={{ textAlign: "center"}} className={classes.videoEmbed}>
                        <iframe className={classes.videoContainer} src="https://www.youtube.com/embed/xPJyb2d_tnU"
                         frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        </div>
 
        


        <h1 className={classes.heading} style={{paddingTop:"40px"}}>
        Questions?  Ready to subscribe?
        </h1>
        <SignUpFormThankyou />
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
    margin: "50px auto",
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
}))(Mastermind_thankyou);
