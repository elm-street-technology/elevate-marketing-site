import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import FormRollercoasterCommunicate from "../components/SignUpFormRollercoasterCommunicate";
import Covid from "../images/covid_header.jpg";
import Roll from "../images/roll_logo2.png";
import BgSectionExternalNorm from "../components/BgSectionExternalNorm";
import Roll1 from "../images/roll2a.png";
import Roll2 from "../images/roll2b.png";
import Roll3 from "../images/roll2c.png";
import Roll4 from "../images/roll2d.png";
import Roll5 from "../images/roll2e.png";
import SEO from "../components/SEO";

const Rollercoastercommunicate = ({ children, classes, data, tags }) => {
  const postNode = {
    title: `The Mortage Rollercoaster Communicate with you Clients - ${config.siteTitle}`,
  };

  return (
    <div className={classes.root}>
      <Helmet>
        <title>{`The Mortage Rollercoaster Communicate with you Clients - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="Rollercoastercommunicate" />


<Container>
    <div style={{paddingBottom:"50px", textAlign:"center"}}>
    <img src={Roll} width="345" style={{paddingBottom:"40px", paddingTop:"20px"}}/>
      <br />

      <h1 className={classes.heading}>Stream The Webinar</h1>
            <h2 className={classes.subHeading}>
             Missed the webinar or looking for a replay?<br />
             We’ve got you covered.</h2>

              <div style={{textAlign: "center", maxWidth:"700px",marginLeft:"auto",marginRight:"auto", paddingBottom:"50px"}}>
                <div style={{ textAlign: "center"}} className={classes.videoEmbed}>
                        <iframe className={classes.videoContainer} src="https://www.youtube.com/embed/s1TU9Ux5rJ8"
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
                  <h2 className={classes.subHeading}>Are you currently receiving an increased amount of questions from customers regarding financing?</h2>
                        <img src={Roll1} width="255"/>
                  </div>
</div>


<div className={classes.column3} style={{ textAlign: "center", paddingTop: "12px" }}>
                  
                  
                
                  <div style={{ textAlign: "center",paddingTop:"12px" }}>
                  <h2 className={classes.subHeading}><br />
                  Do you prefer to work with<br />
                  only one lender partner?</h2>
                        <img src={Roll3} width="255" />
                  </div>
</div>

<div className={classes.column3} style={{ textAlign: "center", paddingTop: "12px" }}>

               
                  <div style={{ textAlign: "center",paddingTop:"12px" }}>
                  <h2 className={classes.subHeading}>Do you have closings currently being held up because of mortgage of mortgage related issues?</h2>
                        <img src={Roll2} width="255"/>
                  </div>
</div>


</div>  












              <div className={classes.top}>

<div className={classes.column2} style={{ textAlign: "center", paddingTop: "12px" }}>
                  
                  
                
                  <div style={{ textAlign: "center",paddingTop:"12px" }}>
                  <h2 className={classes.subHeading}>How is real estate in your<br />
                  market right now?</h2>
                        <img src={Roll4} width="255" style={{ paddingBottom:"12px" }}/>
                        <h2 className={classes.subHeading}>
                        <span className={classes.bold} style={{color:"#55c3ba"}}>62%</span> Starting to open up and real estate<br />
                        is moving at a good pace.<br />
                        <span className={classes.bold} style={{color:"#55c3ba"}}>18%</span> Starting to open up but real estate is moving slow.<br />
                        <span className={classes.bold} style={{color:"#55c3ba"}}>15%</span> My business saw no decline<br />
                        and I'm cooking with gas.<br />
                        <span className={classes.bold} style={{color:"#55c3ba"}}>3%</span> Still shut down and no one is moving.<br />
                        <span className={classes.bold} style={{color:"#55c3ba"}}>3%</span> Still shut down but people are looking.
                        </h2>
                  </div>
</div>




<div className={classes.column2} style={{ textAlign: "center", paddingTop: "12px" }}>

               
                  <div style={{ textAlign: "center",paddingTop:"12px" }}>
                  <h2 className={classes.subHeading}>What is your production<br />
                  looking like this year?</h2>
                        <img src={Roll5} width="255" style={{ paddingBottom:"12px" }}/>
                        <h2 className={classes.subHeading}>
                        <span className={classes.bold} style={{color:"#55c3ba"}}>42%</span> Less than six transaction.<br />
                        <span className={classes.bold} style={{color:"#55c3ba"}}>36%</span> Between 7-12 transactions.<br />
                        <span className={classes.bold} style={{color:"#55c3ba"}}>21%</span> Between 13-25 transactions.<br />
                        <span className={classes.bold} style={{color:"#55c3ba"}}>0%</span> Between 26-35 transactions.<br />
                        <span className={classes.bold} style={{color:"#55c3ba"}}>0%</span> More than 36 transactions.</h2>
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
        <FormRollercoasterCommunicate />
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
}))(Rollercoastercommunicate);
