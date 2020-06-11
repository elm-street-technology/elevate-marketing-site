import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import SignUpFormLeading from "../components/SignUpFormLeading";
import Covid from "../images/covid_header.jpg";
import Leading from "../images/leading_logo.png";
import BgSectionExternalNorm from "../components/BgSectionExternalNorm";
import Leading1 from "../images/leading1.png";
import Leading2 from "../images/leading2.png";
import Leading3 from "../images/leading3.png";
import Leading4 from "../images/leading4.png";
import Leading5 from "../images/leading5.png";
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
                        <iframe className={classes.videoContainer} src="https://www.youtube.com/embed/rfnj2WfGSzU"
                         frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </div>


              <h1 className={classes.heading}>Poll Results</h1>
            <h2 className={classes.subHeading}>
            Participated in our live survey?<br />
            Here’s the group results.</h2>


            <div className={classes.top} style={{ paddingBottom: "20px" }}>

<div className={classes.column2} style={{ textAlign: "center", paddingTop: "12px" }}>
                  
                  
                
                  <div style={{ textAlign: "center",paddingTop:"12px" }}>
                  <h2 className={classes.subHeading}>Has your brokerage grown or contracted<br />
                  (# of agents) since the beginning of the year?</h2>
                        <img src={Leading1} width="255"/>
                  </div>
</div>


<div className={classes.column2} style={{ textAlign: "center", paddingTop: "12px" }}>
                  
                  
                
                  <div style={{ textAlign: "center",paddingTop:"12px" }}>
                  <h2 className={classes.subHeading}>How many technology vendors<br />
                  do you currently work with? </h2>
                        <img src={Leading2} width="255" />
                  </div>
</div>



</div>  












              <div className={classes.top}>


<div className={classes.column3} style={{ textAlign: "center", paddingTop: "12px" }}>

               
                  <div style={{ textAlign: "center",paddingTop:"12px" }}>
                  <h2 className={classes.subHeading}>What type of business model<br />
                  do you operate?</h2>
                        <img src={Leading3} width="255" style={{ paddingBottom:"12px" }}/>
                        <h2 className={classes.subHeading}>
                        <span className={classes.bold} style={{color:"#55c3ba"}}>57%</span> Traditional Split Model<br />
                        <span className={classes.bold} style={{color:"#55c3ba"}}>14%</span> Hybrid: flat fee &amp; traditional<br />
                        <span className={classes.bold} style={{color:"#55c3ba"}}>14%</span> Traditional with cap system<br />
                        <span className={classes.bold} style={{color:"#55c3ba"}}>8%</span> 100% / flat fee<br />
                        <span className={classes.bold} style={{color:"#55c3ba"}}>7%</span> Other</h2>
                  </div>
</div>

<div className={classes.column3} style={{ textAlign: "center", paddingTop: "12px" }}>

               
                  <div style={{ textAlign: "center",paddingTop:"12px" }}>
                  <h2 className={classes.subHeading}>How do you currently monetize<br />
                  your agent technology offerings?</h2>
                        <img src={Leading4} width="255" style={{ paddingBottom:"12px" }}/>
                        <h2 className={classes.subHeading}>
                        <span className={classes.bold} style={{color:"#55c3ba"}}>64%</span> The brokerage pays 100%<br />
                        <span className={classes.bold} style={{color:"#55c3ba"}}>18%</span> Other<br />
                        <span className={classes.bold} style={{color:"#55c3ba"}}>9%</span> The brokerage charges<br />
                        monthly tech fee<br />
                        <span className={classes.bold} style={{color:"#55c3ba"}}>9%</span> The brokerage pays nothing<br />
                        &amp; all on the agent<br />
                        <span className={classes.bold} style={{color:"#55c3ba"}}>0%</span> Our agents pay a portion</h2>
                  </div>
</div>

<div className={classes.column3} style={{ textAlign: "center", paddingTop: "12px" }}>

               
                  <div style={{ textAlign: "center",paddingTop:"12px" }}>
                  <h2 className={classes.subHeading}>What are your recruiting growth<br />
                  goals for the rest of 2020?</h2>
                        <img src={Leading5} width="255" style={{ paddingBottom:"12px" }}/>
                        <h2 className={classes.subHeading}>
                        <span className={classes.bold} style={{color:"#55c3ba"}}>37%</span> Net gain of less than 5 agents<br />
                        <span className={classes.bold} style={{color:"#55c3ba"}}>25%</span> Net gain of 6-10 agents<br />
                        <span className={classes.bold} style={{color:"#55c3ba"}}>25%</span> Net gain of 11 or more agents<br />
                        <span className={classes.bold} style={{color:"#55c3ba"}}>13%</span> Flat – no growth expected</h2>
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
