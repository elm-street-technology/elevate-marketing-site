import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import Formlistingguide from "../components/Formlistingguide";
import Covid from "../images/covid_header.jpg";
import List from "../images/lll.png";
import Listcover from "../images/listings_cover.jpg";
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

const Listings = ({ children, classes, data, tags }) => {
  const postNode = {
    title: `Listings - ${config.siteTitle}`,
  };

  return (
    <div className={classes.root}>
      <Helmet>
        <title>{`Listings - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="Listings" />


<Container>
    <div style={{paddingBottom:"40px", textAlign:"center"}}>
    <img src={List} width="100%" style={{paddingBottom:"20px", maxWidth:"550px"}}/>
      <br />

      <h1 className={classes.heading}>Stream The Webinar</h1>
            <h2 className={classes.subHeading}>
             Missed the webinar or looking for a replay?<br />
             We’ve got you covered.</h2>

              <div style={{textAlign: "center", maxWidth:"700px",marginLeft:"auto",marginRight:"auto", paddingBottom:"50px", paddingTop:"13px"}}>
                <div style={{ textAlign: "center"}} className={classes.videoEmbed}>
                        <iframe className={classes.videoContainer} src="https://www.youtube.com/embed/MQ4bcqLANjc"
                         frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </div>



    </div>
</Container>



 <div style={{backgroundColor:"#f7f7f7", paddingBottom:"30px", paddingTop:"60px"}}>
    <Container>
                        <div style={{textAlign:"center", paddingRight:"25px", paddingLeft:"25px", paddingBottom:"10px"}}>
                            <div className={classes.heading}>Listings, Listings, Listings!<br />
                            FREE DOWNLOAD</div>
                            <div className={classes.subHeading}>Download your comprehensive FREE guide for how real estate agents<br />
                            can capture &amp; market listings like a pro!</div>     
                            
                        </div>
   
            <div className={classes.flexContainer}>
                <div className={classes.flexItem} style={{paddingLeft:"30px", paddingRight:"30px", paddingBottom:"30px", textAlign:"center"}}>
                <Formlistingguide/>
                </div>

                <div className={classes.flexItem} style={{padding:"30px", textAlign:"center"}}>
                <img src={Listcover} width="100%" style={{paddingBottom:"15px"}}/>
                </div>

  


      </div>

        
    </Container>
 </div>
    
</div>
  );
};

export default withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    paddingTop: "10px",
 
  },
  heading: {
    fontSize: "28px",
    lineHeight: "34px",
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
    fontSize: "16px",
    lineHeight: "26px",
    fontWeight: "600",
    letterSpacing: ".08px",
    color: "#888f96",
    textAlign: "center",
    margin: "0 auto 15px",
  },

  covidContainer: {
    width: "70%",
    margin: "16px auto 0 auto",
  },
  covidHeader: {
    width: "100%",
  },

  flexContainer: {
    padding: "0",
    margin: '0',
  
    display: "-webkit-box",
    display: "-moz-box",
    display: "-ms-flexbox",
    display: "-webkit-flex",
    display: "flex",
    flexWrap: "wrap",
  
  },
  flexItem: {
    maxWidth: "100%",
    width: "100%",
    paddingRight: "0px",
    paddingBottom: "25px",
  
  
    [theme.breakpoints[900]]: {
        maxWidth: "50%",
        width: "50%",
        paddingRight: "20px",
        paddingBottom: "0px",
    },
  },

  flexItem2: {
    maxWidth: "100%",
    width: "100%",
    paddingRight: "0px",
    paddingBottom: "25px",
  
  
    [theme.breakpoints[900]]: {
        maxWidth: "33%",
        width: "33%",
        paddingRight: "20px",
        paddingBottom: "0px",
    },
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
}))(Listings);
