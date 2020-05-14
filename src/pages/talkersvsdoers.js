import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import SignUpFormTalkers from "../components/SignUpFormTalkers";
import Covid from "../images/covid_header.jpg";
import Talkerslogo from "../images/talkers.png";
import Aprilbg from "../images/aprilbg.jpg";
import SEO from "../components/SEO";

const Talkersvsdoers = ({ children, classes, data, tags }) => {
  const postNode = {
    title: `Talks vs Doers - ${config.siteTitle}`,
  };

  return (
    <div className={classes.root}>
      <Helmet>
        <title>{`Talks vs Doers - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="Talkersvsdoers" />


<Container>
    <div style={{paddingBottom:"50px", textAlign:"center"}}>
    <img src={Talkerslogo} width="300" style={{paddingBottom:"20px", paddingTop:"40px"}}/>
      <br />

      <h1 className={classes.heading}>Stream The Webinar</h1>
            <h2 className={classes.subHeading}>
             Missed the webinar or looking for a replay? We’ve got you covered.</h2>

              <div style={{textAlign: "center", maxWidth:"700px",marginLeft:"auto",marginRight:"auto", paddingBottom:"30px"}}>
                <div style={{ textAlign: "center"}} className={classes.videoEmbed}>
                        <iframe className={classes.videoContainer} src="https://www.youtube.com/embed/xmtVJP9Nq8s"
                         frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </div>


              


       






                  
                  
                
 







    </div>
</Container>


<div style={{backgroundImage:"url("+Aprilbg+")", backgroundSize:"cover", backgroundPosition:"centerTop", padding:"45px"}}>
              <h1 className={classes.heading} style={{color:"#ffffff", lineHeight:"34px"}}>Ready to conquer your<br />
              online marketing with Elevate?</h1>
              <a target="_blank" href="https://elmstreettechnology.recurly.com/subscribe/webinardms" className={classes.getStartedLink}>
                  SUBSCRIBE NOW
                    </a>
              </div>


 <div style={{backgroundColor:"#f7f7f7", paddingBottom:"65px"}}>
        <h1 className={classes.heading} style={{paddingTop:"50px"}}>
        Request Your FREE Social Media Consultation
        </h1>
        <SignUpFormTalkers />
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
    margin: "auto",
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
  getStartedLink: {
    minWidth: "200px",
    maxWidth: "200px",
    alignContent: "center",
    justifyContent: "center",
    fontSize: "16px",
    fontWeight: "700",
    display: "block",
    letterSpacing: ".25px",
    backgroundColor: "#f8c43c",
    color: "#FFF",
    textDecoration: "none",
    padding: "12px 14px",
    borderRadius: "4px",
    margin: "14px auto",
    marginBottom: "10px",
    textAlign:"center"
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
}))(Talkersvsdoers);
