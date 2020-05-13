import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import SignUpFormRollercoaster from "../components/SignUpFormRollercoaster";
import Covid from "../images/covid_header.jpg";
import Mrc from "../images/mrc_logo.png";
import BgSectionExternalNorm from "../components/BgSectionExternalNorm";
import Rechart1 from "../images/rechart1.jpg";
import Rechart2 from "../images/rechart2.jpg";
import Rechart3 from "../images/rechart3.jpg";
import Rechart4 from "../images/rechart4.jpg";
import Rechart5 from "../images/rechart5.jpg";
import Rechart6 from "../images/rechart6.jpg";
import R1 from "../images/reev1.png";
import R2 from "../images/reev2.png";
import R3 from "../images/reev3.png";
import Swot from "../images/swot.png";
import SEO from "../components/SEO";

const Rollercoaster = ({ children, classes, data, tags }) => {
  const postNode = {
    title: `Rollercoaster - ${config.siteTitle}`,
  };

  return (
    <div className={classes.root}>
      <Helmet>
        <title>{`Rollercoaster - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="Rollercoaster" />


<Container>
    <div style={{paddingBottom:"50px", textAlign:"center"}}>
    <img src={Mrc} width="345" style={{paddingBottom:"40px", paddingTop:"20px"}}/>
      <br />

      <h1 className={classes.heading}>Stream The Webinar</h1>
            <h2 className={classes.subHeading}>
             Missed the webinar or looking for a replay?<br />
             We’ve got you covered.</h2>

              <div style={{textAlign: "center", maxWidth:"700px",marginLeft:"auto",marginRight:"auto", paddingBottom:"50px"}}>
                <div style={{ textAlign: "center"}} className={classes.videoEmbed}>
                        <iframe className={classes.videoContainer} src="https://www.youtube.com/embed/F4leasNVHPY"
                         frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </div>


              <h1 className={classes.heading}>Poll Results</h1>
            <h2 className={classes.subHeading}>
            Participated in our live survey?<br />
            Here’s the group results.</h2>


            <div className={classes.top} style={{ paddingBottom: "20px" }}>

<div className={classes.column3} style={{ textAlign: "center", paddingTop: "12px" }}>
                  
                  
                
                  <div style={{ textAlign: "center",paddingTop:"12px" }}>
                  <h2 className={classes.subHeading}>Have you already<br />
                  re-evaluated / adjusted<br />
                  your annual projections yet?</h2>
                        <img src={Rechart3} width="255"/>
                  </div>
</div>


<div className={classes.column3} style={{ textAlign: "center", paddingTop: "12px" }}>
                  
                  
                
                  <div style={{ textAlign: "center",paddingTop:"12px" }}>
                  <h2 className={classes.subHeading}><span className={classes.bold} style={{color:"#55c3ba"}}>IF YES...</span><br />
                  what percentage have you<br />
                  adjusted your numbers by?</h2>
                        <img src={Rechart2} width="255" />
                  </div>
</div>

<div className={classes.column3} style={{ textAlign: "center", paddingTop: "12px" }}>

               
                  <div style={{ textAlign: "center",paddingTop:"12px" }}>
                  <h2 className={classes.subHeading}>How many of you feel you<br />
                  are still “on track” with your<br />
                  2020 financial projections?</h2>
                        <img src={Rechart1} width="255"/>
                  </div>
</div>


</div>  












              <div className={classes.top}>

<div className={classes.column3} style={{ textAlign: "center", paddingTop: "12px" }}>
                  
                  
                
                  <div style={{ textAlign: "center",paddingTop:"12px" }}>
                  <h2 className={classes.subHeading}>What tools are you<br />
                  using more now than previously?</h2>
                        <img src={Rechart5} width="255" style={{ paddingBottom:"12px" }}/>
                        <h2 className={classes.subHeading}>
                        <span className={classes.bold} style={{color:"#55c3ba"}}>60%</span> Social Media<br />
                        <span className={classes.bold} style={{color:"#55c3ba"}}>57%</span> Virtual Tours/Meetings<br />
                        <span className={classes.bold} style={{color:"#55c3ba"}}>51%</span> Email/Text/Video<br />
                        <span className={classes.bold} style={{color:"#55c3ba"}}>19%</span> Online Lead Gen.<br />
                        </h2>
                  </div>
</div>


<div className={classes.column3} style={{ textAlign: "center", paddingTop: "12px" }}>
                  
                  
                
                  <div style={{ textAlign: "center",paddingTop:"12px" }}>
                  <h2 className={classes.subHeading}>Have you had any pending<br />
                  transactions cancel to date?</h2>
                        <img src={Rechart4} width="255" />
                  </div>
</div>

<div className={classes.column3} style={{ textAlign: "center", paddingTop: "12px" }}>

               
                  <div style={{ textAlign: "center",paddingTop:"12px" }}>
                  <h2 className={classes.subHeading}>Do you know the source of your<br />
                  largest number of transactions?</h2>
                        <img src={Rechart6} width="255" style={{ paddingBottom:"12px" }}/>
                        <h2 className={classes.subHeading}>
                        <span className={classes.bold} style={{color:"#55c3ba"}}>29%</span> Past Clients<br />
                        <span className={classes.bold} style={{color:"#55c3ba"}}>10%</span> Online Lead Gen.<br />
                        <span className={classes.bold} style={{color:"#55c3ba"}}>7%</span> Social Media/Networking</h2>
                  </div>
</div>


</div>    


            






                  
                  
                
             







    </div>
</Container>



 <div style={{backgroundColor:"#f7f7f7", paddingBottom:"60px"}}>
        <h1 className={classes.heading} style={{paddingTop:"65px"}}>
        Connect with a Success Coach
        </h1>
        <h2 className={classes.subHeading}>We’re here to help you succeed during (and after) this market shift.</h2>
        <SignUpFormRollercoaster />
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
    paddingTop: "23px",
 
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

  getStartedLink: {
    minWidth: "250px",
    maxWidth: "250px",
    alignContent: "center",
    justifyContent: "center",
    fontSize: "14px",
    fontWeight: "700",
    display: "block",
    letterSpacing: ".25px",
    backgroundColor: theme.colors.secondary,
    color: "#FFF",
    textDecoration: "none",
    padding: "14px 16px",
    borderRadius: "4px",
    margin: "16px auto",
    marginBottom: "20px",
  },

  column3:{
    width:"350px",
    maxWidth: "100%",
    paddingRight:"10px",
    paddingLeft:"10px",
    verticalAlign: "top",
  },

  column2:{
    width:"520px",
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
}))(Rollercoaster);
