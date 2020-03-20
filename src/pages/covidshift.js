import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import SignUpFormCovid from "../components/SignUpFormCovid";
import Covid from "../images/covid_header.jpg";
import Covidlogo from "../images/covid_logo.png";
import C1 from "../images/covid_c1.png";
import C2 from "../images/covid_c2.png";
import C3 from "../images/covid_c3.png";
import C4 from "../images/covid_c4.png";
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
    <div style={{paddingBottom:"50px", textAlign:"center"}}>
    <img src={Covidlogo} width="345" style={{paddingBottom:"20px"}}/>
      <br />

      <h1 className={classes.heading}>Stream The Webinar</h1>
            <h2 className={classes.subHeading}>
             Missed the webinar or looking for a replay? We’ve got you covered.</h2>

              <div style={{textAlign: "center", maxWidth:"700px",marginLeft:"auto",marginRight:"auto", paddingBottom:"50px"}}>
                <div style={{ textAlign: "center"}} className={classes.videoEmbed}>
                        <iframe className={classes.videoContainer} src="https://www.youtube.com/embed/g92eC1CVAYs"
                         frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </div>


              <h1 className={classes.heading}>Poll Results</h1>
            <h2 className={classes.subHeading}>
            Participated in our live survey?  Here’s the group results.</h2>


            <div className={classes.top}>

<div className={classes.column3} style={{ textAlign: "center", paddingTop: "12px" }}>
                  
                  
                
                  <div style={{ textAlign: "center",paddingTop:"12px" }}>
                  <h2 className={classes.subHeading}>Real estate professionals are forecasting a serious market shift.<br />
                  Do you believe this is happening<br />
                  right now?</h2>
                        <img src={C1} width="255" />
                  </div>
</div>

<div className={classes.column3} style={{ textAlign: "center", paddingTop: "12px" }}>

               
                  <div style={{ textAlign: "center",paddingTop:"12px" }}>
                  <h2 className={classes.subHeading}>If YES...<br />
                  how long do you think this<br />
                  real estate market shift will last?</h2>
                        <img src={C2} width="255" />
                  </div>
</div>

<div className={classes.column3} style={{ textAlign: "center", paddingTop: "12px" }}>
                    <div style={{ textAlign: "center",paddingTop:"12px" }}>
                  <h2 className={classes.subHeading}>Are you currently investing MORE in your lead generation and marketing efforts, OR are you withdrawing / holding back?</h2>
                  
                        <img src={C4} width="255" />
                  </div>
</div>
</div>






                  
                  
                
                  <div style={{ textAlign: "center",paddingTop:"32px" }}>
                  <h2 className={classes.subHeading}>How are you staying in touch<br />
                  with your clients?</h2>
                        <img src={C3} width="355" /><br /><br />
                        <h2 className={classes.subHeading}>
                        <span className={classes.bold} style={{color:"#55c3ba"}}>69% Email</span> (Mass mailing, one-on-one, etc.)<br />
                        <span className={classes.bold} style={{color:"#55c3ba"}}>59% Social Media</span> (Facebook, Twitter, Instagram, LinkedIn, etc.)<br />
                        <span className={classes.bold} style={{color:"#55c3ba"}}>17% Video Meetings / House Tours</span> (FaceTime, Zoom, GoToMeeting, etc.)</h2>
                  </div>







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
  top: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "top",
  },

  bold:{
    fontWeight:"700",
  },

  column3:{
    width:"350px",
    maxWidth: "100%",
    paddingRight:"10px",
    paddingLeft:"10px",
    verticalAlign: "top",
  },

  column2:{
    width:"470px",
    maxWidth: "100%",
    paddingRight:"10px",
    paddingLeft:"10px",
    verticalAlign: "top",
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
