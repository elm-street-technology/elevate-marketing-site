import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import SignUpFormCovid from "../components/SignUpFormCovid";
import Covid from "../images/covid_header.jpg";
import SEO from "../components/SEO";

const Covidshift = ({ children, classes, data, tags }) => {
  const postNode = {
    title: `Success Story - ${config.siteTitle}`,
  };

  return (
    <div className={classes.root}>
      <Helmet>
        <title>{`Covidshift - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="Covidshift" />


<Container>
    <div style={{paddingBottom:"50px"}}>
                <div className={classes.covidContainer} style={{paddingBottom:"50px"}}>
                            <img
                            src={Covid}
                            alt="Covid Shift"
                            title="Covid Shift"
                            className={classes.covidHeader}
                            />
                 </div>


      <h1 className={classes.heading}>Stream The Webinar</h1>
            <h2 className={classes.subHeading}>
             Missed the webinar or looking for a replay? We’ve got you covered.</h2>

              <div style={{textAlign: "center", maxWidth:"700px",marginLeft:"auto",marginRight:"auto", paddingBottom:"50px"}}>
                <div style={{ textAlign: "center"}} className={classes.videoEmbed}>
                        <iframe className={classes.videoContainer} src="https://www.youtube.com/embed/py5fhtASVPY?autoplay=1&rel=0"
                         frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </div>


              <h1 className={classes.heading}>Poll Results</h1>
            <h2 className={classes.subHeading}>
            Participated in our live survey?  Here’s the group results.</h2>

    </div>
</Container>



 <div style={{backgroundColor:"#f7f7f7", paddingBottom:"50px"}}>
        <h1 className={classes.heading} style={{paddingTop:"50px"}}>
        Connect with a Success Coach
        </h1>
        <SignUpFormCovid />
        {/* <div className={classes.closingContainer}>
          For Media Inquiries, {""} Please {""}
          <a
            className={classes.emailLink}
            href="mailto:ekaplan@elmstreettechnology.com"
          >
            Email Us
          </a>
        </div> */}
 </div>
    
</div>
  );
};

export default withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    padding: "0 0px",
    margin: "40px auto",
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

  covidContainer: {
    width: "70%",
    margin: "16px auto 0 auto",
  },
  covidHeader: {
    width: "100%",
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
}))(Covidshift);
