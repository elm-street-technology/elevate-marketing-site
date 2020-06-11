import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import SignUpFormLeading from "../components/SignUpFormLeading";
import Covid from "../images/covid_header.jpg";
import Leading from "../images/leading_logo.png";
import BgSectionExternalNorm from "../components/BgSectionExternalNorm";
import Mrc1 from "../images/mrc_chart1.png";
import Mrc2 from "../images/mrc_chart2.png";
import Mrc3 from "../images/mrc_chart3.png";
import Mrc4 from "../images/mrc_chart4.png";
import Mrc5 from "../images/mrc_chart5.png";
import R1 from "../images/reev1.png";
import R2 from "../images/reev2.png";
import R3 from "../images/reev3.png";
import Swot from "../images/swot.png";
import SEO from "../components/SEO";

const Leadingbrokerage = ({ children, classes, data, tags }) => {
  const postNode = {
    title: `Leading Today's Real Estate Brokerage - ${config.siteTitle}`,
  };

  return (
    <div className={classes.root}>
      <Helmet>
        <title>{`Leading Today's Real Estate Brokerage - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="Leadingbrokerage" />


<Container>
    <div style={{paddingBottom:"50px", textAlign:"center"}}>
    <img src={Leading} width="345" style={{paddingBottom:"40px", paddingTop:"20px"}}/>
      <br />

      <h1 className={classes.heading}>Stream The Webinar</h1>
            <h2 className={classes.subHeading}>
             Missed the webinar or looking for a replay?<br />
             We’ve got you covered.</h2>

              <div style={{textAlign: "center", maxWidth:"700px",marginLeft:"auto",marginRight:"auto", paddingBottom:"50px"}}>
                <div style={{ textAlign: "center"}} className={classes.videoEmbed}>
                        <iframe className={classes.videoContainer} src="https://www.youtube.com/embed/MQ4bcqLANjc"
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
                  <h2 className={classes.subHeading}>Do you have closings currently<br />
                  being held up because of<br />
                  mortgage related issues?</h2>
                        <img src={Mrc1} width="255"/>
                  </div>
</div>


<div className={classes.column3} style={{ textAlign: "center", paddingTop: "12px" }}>
                  
                  
                
                  <div style={{ textAlign: "center",paddingTop:"12px" }}>
                  <h2 className={classes.subHeading}><br />
                  Do you prefer to work<br />
                  with only one lender partner?</h2>
                        <img src={Mrc2} width="255" />
                  </div>
</div>

<div className={classes.column3} style={{ textAlign: "center", paddingTop: "12px" }}>

               
                  <div style={{ textAlign: "center",paddingTop:"12px" }}>
                  <h2 className={classes.subHeading}>Are you currently working<br />
                  with a lender partner to acquire<br />
                  and farm new leads?</h2>
                        <img src={Mrc3} width="255"/>
                  </div>
</div>


</div>  












              <div className={classes.top}>

<div className={classes.column2} style={{ textAlign: "center", paddingTop: "12px" }}>
                  
                  
                
                  <div style={{ textAlign: "center",paddingTop:"12px" }}>
                  <h2 className={classes.subHeading}>How is real estate in<br />
                  your market right now?</h2>
                        <img src={Mrc4} width="255" style={{ paddingBottom:"12px" }}/>
                        <h2 className={classes.subHeading}>
                        <span className={classes.bold} style={{color:"#55c3ba"}}>36%</span> Starting to open up but real estate is moving slow<br />
                        <span className={classes.bold} style={{color:"#55c3ba"}}>34%</span> Starting to open up and real estate<br />
                        is moving at a good pace<br />
                        <span className={classes.bold} style={{color:"#55c3ba"}}>16%</span> Still shut down but people are looking<br />
                        <span className={classes.bold} style={{color:"#55c3ba"}}>9%</span> Still shut down and no one is moving<br />
                        <span className={classes.bold} style={{color:"#55c3ba"}}>5%</span> My business saw no decline and I'm cooking with gas
                        </h2>
                  </div>
</div>




<div className={classes.column2} style={{ textAlign: "center", paddingTop: "12px" }}>

               
                  <div style={{ textAlign: "center",paddingTop:"12px" }}>
                  <h2 className={classes.subHeading}>What is your production<br />
                  looking like this year?</h2>
                        <img src={Mrc5} width="255" style={{ paddingBottom:"12px" }}/>
                        <h2 className={classes.subHeading}>
                        <span className={classes.bold} style={{color:"#55c3ba"}}>47%</span> Less than six transactions<br />
                        <span className={classes.bold} style={{color:"#55c3ba"}}>47%</span> Between 7-12 transactions<br />
                        <span className={classes.bold} style={{color:"#55c3ba"}}>6%</span> Between 13-25 transactions<br />
                        <span className={classes.bold} style={{color:"#55c3ba"}}>0%</span> Between 26-35 transactions<br />
                        <span className={classes.bold} style={{color:"#55c3ba"}}>0%</span> More than 36 transactions</h2>
                  </div>
</div>


</div>    


            






                  
                  
                
             







    </div>
</Container>



 <div style={{backgroundColor:"#f7f7f7", paddingBottom:"70px"}}>
        <h1 className={classes.heading} style={{paddingTop:"65px"}}>
        Connect with a Success Coach
        </h1>
        <h2 className={classes.subHeading}>We’re here to help you succeed during (and after) this market shift.</h2>
        <SignUpFormLeading />
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
}))(Leadingbrokerage);
