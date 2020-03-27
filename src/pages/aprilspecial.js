import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import Aprilbg from "../images/aprilbg.jpg";
import SignUpFormApril from "../components/SignUpFormApril";
import SEO from "../components/SEO";

const AprilSpecial = ({ children, classes, data, tags }) => {
  const postNode = {
    title: `April Special - ${config.siteTitle}`,
  };

  return (
    <div className={classes.root}>
      <Helmet>
        <title>{`April Special - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="aprilspecial" />


        <div style={{backgroundImage:"url("+Aprilbg+")", backgroundSize:"cover", backgroundPosition:"centerTop"}}>
                <Container>
                    <div className={classes.top} style={{paddingBottom:"60px", paddingRight:"35px", paddingLeft:"35px", paddingTop:"55px"}}>
                            <div className={classes.centerHeading}>
                            <div className={classes.heading} style={{color:"#fbda3d"}}>Welcome to the POWER of Elevate</div>
                            <div className={classes.bold} style={{color:"#ffffff", fontSize:"18px", lineHeight:"33px", textAlign:"center"}}>Save time, energy &amp; money with this all-in-one marketing solution
                            </div>

                             </div>
                    </div>
                </Container>
        </div>




      <Container>
      <h1 className={classes.heading} style={{paddingTop:"40px"}}>
      <span style={{color:"#c30650"}}>APRIL ONLY!</span><br />
      50% OFF YOUR 1ST 3-MONTHS OF SERVICE
        </h1>
        <h2 className={classes.subHeading}>
        *valid for all NEW subscribers ONLY.</h2>
      <div style={{textAlign: "center", maxWidth:"700px",marginLeft:"auto",marginRight:"auto"}}>
        <div style={{ textAlign: "center"}} className={classes.videoEmbed}>
                        <iframe className={classes.videoContainer} src="https://www.youtube.com/embed/xPJyb2d_tnU"
                         frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        </div>
 
        <h1 className={classes.heading} style={{paddingTop:"40px"}}>
        Schedule Your Elevate Tour NOW
        </h1>
        <SignUpFormApril />
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
    
    margin: "40px auto",
  },
  heading: {
    fontSize: "28px",
    fontWeight: "700",
    letterSpacing: ".14px",
    lineHeight:"36px",
    color: "#55c3ba",
    textAlign: "center",
    marginBottom: "12px",
  },
  bold:{
    fontWeight:"700",
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
}))(AprilSpecial);
