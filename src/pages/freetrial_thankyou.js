import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import BgSectionExternal3 from "../components/BgSectionExternal3";
import Spcrmbg from "../images/spcrmbg.jpg";
import Fadebg from "../images/fadebg.jpg";
import Eslogo from "../images/es_hlogo.png";
import Quote from "../images/quote.png";
import Sp1 from "../images/sp1.png";
import Sp2 from "../images/sp2.png";
import Sp3 from "../images/sp3.png";
import Sp5 from "../images/sp5.png";
import Glance4 from "../images/glance4.png";
import Glance5 from "../images/glance5.png";
import SEO from "../components/SEO";
import FormFreetrial from "../components/FormFreetrial";

const Freetrialthankyou = ({ children, classes, data, tags }) => {
  const postNode = {
      title: `Thank you for signing up for the Cyber Monday Special - ${config.siteTitle}`,
  };

  return (
<div className={classes.root}>
      <Helmet>
              <title>{`Thank you for signing up for the Cyber Monday Special - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="Freetrialthankyou" customTitle />

<div style={{backgroundColor:"#333666"}}>
<Container>
      <div className={classes.top} style={{paddingBottom:"30px", paddingRight:"35px", paddingLeft:"35px", paddingTop:"135px", paddingBottom:"115px"}}>
          <div className={classes.centerHeading}>
                            <div className={classes.heading} style={{color:"#f69c26"}}>WELCOME TO</div>
                            <img src={Eslogo} width="100%"  style={{paddingBottom:"18px", maxWidth:"400px"}} />
                            <div className={classes.subtext} style={{color:"#ffffff", fontSize:"18px"}}>A member of our Success Team will reach out shortly to confirm your account with the Cyber Monday special.
                            In the meantime, please feel free<br />
                            to connect with us directly at: <a href="tel:18333031040" className={classes.link} style={{color:"#ffffff"}}>833.303.1040</a>.
                
                            </div>
          </div>
      </div>


    



</Container>
</div>





<div style={{paddingTop:"50px", paddingBottom:"50px",}}>
        

<Container>
    <div className={classes.top}>

                <div className={classes.column2} style={{padding:"30px", textAlign:"center"}}>
                <div className={classes.heading} style={{color:"#f69c26"}}>#1 TRAINING SERIES<br />
                IN REAL ESTATE</div>
                <div className={classes.subtext}><div className={classes.subtext2} style={{color:"#5bc1ba"}}>FREE Registration. Great Educators. Actionable Content.</div>
            Elm Street Academy offers empowering, high-energy educational webinars on a variety of topics such as:</div>
                </div>

                <div className={classes.column2} style={{padding:"30px", textAlign:"center"}}>
                <div className={classes.subtext}>Social Media Marketing<br />
            Online Lead Generation<br />
            Building Repeat &amp; Referral Business<br />
            Innovative Thought Leadership<br />
            Technology Trends<br />
            Business Planning<br />
            And...MORE!</div>
            <a href="https://elmstreet.com/events" target="_blank" className={classes.buttonLink}>Browse Upcoming Events</a>
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
    margin: "auto",
  },

  top: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "top",
  },

  heading: {
    fontSize: "33px",
    fontWeight: "700",
    lineHeight: "40px",
    letterSpacing: ".14px",
    color: "#52B1AD",
    marginBottom: "12px",
  },

  subtext: {
    fontSize: "16px",
    fontWeight: "300",
    lineHeight: "24px",
    color: "#777777",
  },

  subtext2: {
    fontSize: "16px",
    fontWeight: "700",
    lineHeight: "24px",
    color: "#777777",
  },

  column2:{
    width:"530px",
    maxWidth: "100%",
    paddingRight:"20px",
    paddingLeft:"20px",
    verticalAlign: "top",
  },

  column3:{
    width:"350px",
    maxWidth: "100%",
    paddingRight:"10px",
    paddingLeft:"10px",
    verticalAlign: "top",
  },

  bold:{
    fontWeight:"700",
  },

  centerHeading:{
    alignItems: "center",
    width: "100%",
    textAlign: "center",
  },

  Heading2: {
    fontSize: "28px",
    paddingBottom: "20px",
    fontWeight: "700",
    lineHeight: "34px",
    color: "#52B1AD",
    letterSpacing: ".14px",
  },

  Heading3: {
    fontSize: "20px",
    paddingBottom: "5px",
    fontWeight: "700",
    lineHeight: "26px",
    color: "#52B1AD",
    letterSpacing: ".14px",
  },

  landingHeaderStyle:{
    textAlign:"center",
  },


  buttonLink: {
    minWidth: "250px",
    maxWidth: "250px",
    alignContent: "center",
    justifyContent: "center",
    fontSize: "14px",
    fontWeight: "700",
    display: "block",
    letterSpacing: ".25px",
    backgroundColor: "#52B1AD",
    color: "#FFF",
    textDecoration: "none",
    padding: "16px",
    borderRadius: "4px",
    margin: "16px auto",
    marginBottom: "10px",
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

  flexItem3: {
    maxWidth: "100%",
    width: "100%",
    paddingRight: "0px",
    paddingBottom: "25px",
  
  
    [theme.breakpoints[900]]: {
        maxWidth: "40%",
        width: "40%",
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
}))(Freetrialthankyou);
