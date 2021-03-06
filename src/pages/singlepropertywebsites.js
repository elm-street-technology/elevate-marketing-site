import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import Singlepropbg from "../images/singlepropbg.jpg";
import Amlogo from "../images/amlogo.png";
import Opt1 from "../images/monthly.png";
import Opt2 from "../images/annually.png";
import Singleprop from "../images/singleprop.gif";
import Formsingleproperty from "../components/Formsingleproperty";
import Test_pic1 from "../images/test_pic1.png";
import Test_pic2 from "../images/test_pic2.png";
import Test_pic3 from "../images/test_pic3.png";
import Testa from "../images/testa.png";
import Testb from "../images/testb.png";
import Testc from "../images/testc.png";
import SEO from "../components/SEO";

const Singleproperty = ({ children, classes, data, tags }) => {
  const postNode = {
      title: `Single Property Websites - ${config.siteTitle}`,
  };

  return (
<div className={classes.root}>
      <Helmet>
              <title>{`Single Property Websites - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="singleproperty" customTitle />

<div style={{backgroundImage:"url("+Singlepropbg+")", backgroundSize:"cover", backgroundPosition:"centerTop"}}>
<Container>
      <div className={classes.top} style={{paddingRight:"25px", paddingLeft:"25px", paddingTop:"85px", paddingBottom:"40px"}}>
          <div className={classes.centerHeading}>
                            <div className={classes.heading} style={{color:"#FCBA1E"}}>SINGLE PROPERTY WEBSITES</div>
                            <br />
                            <div className={classes.heading2} style={{color:"#FCBA1E"}}>ONLY $20 A MONTH!</div>
                            <div className={classes.subtext2} style={{color:"#52B1AD",}}>With up to 5 Active Listings Per Month!</div>
                            <br />
                            <div className={classes.subtext2} style={{color:"#52B1AD",}}>Stand-alone service OR add as an upgrade to
                            ANY Elevate DMS&reg;, DMS Plus&reg; or Elite&reg; subscription.</div>
                            <div className={classes.subtext} style={{color:"#f7f7f7"}}>Showcase properties and close deals faster by putting
                            your available listings in front of the right potential buyers.</div>
          </div>
      </div>
     
</Container>
<Container>
            <div className={classes.flexContainer}>
                <div className={classes.flexItem2} style={{paddingBottom:"30px", paddingLeft:"15px", paddingRight:"15px", textAlign:"center"}}>

                <div className={classes.subtext} style={{color:"#f7f7f7"}}>  
                <div className={classes.heading} style={{color:"#FCBA1E", fontSize:"22px"}}>KEY FEATURES:</div>
                • Quick &amp; easy website builder<br />
                • Automation with your MLS<br />
                • Virtual Tour instantly created<br />
                • Print advertising<br />
                • Text codes<br />
                • MLS-compliant<br />
                • Print-ready flyers<br />
                • Feedback integration<br />
                • Open House sign-up<br />
                • Live chat<br />
                • Custom domain name<br />
                • Video integration<br />

                <img src={Amlogo} width="100%"  style={{paddingTop:"23px", maxWidth:"200px"}} />
                   </div> 

                </div>
                <div className={classes.flexItem4}>

                <img src={Singleprop} width="100%"  style={{paddingRight:"28px", paddingLeft:"28px", marginBottom:"-2px"}} />
                    
                </div>
            </div>
        </Container>
</div>






    <div style={{backgroundColor:"#f7f7f7", paddingBottom:"50px", paddingTop:"65px", paddingLeft:"25px", paddingRight:"25px", textAlign:"center"}}>
    <div className={classes.heading} style={{color:"#FCBA1E",}}>READY TO SUBSCRIBE?<br />
    WANT A DEMO?</div>
    <div className={classes.subtext} >Use this form to connect with an Elevate Success Coach TODAY.</div>
        <Formsingleproperty />
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
    margin: "auto",
    marginTop: "-80px",
  },

  top: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "top",
  },

  heading: {
    fontSize: "36px",
    fontWeight: "700",
    lineHeight: "40px",
    letterSpacing: ".14px",
    color: "#5ac0ba",
    marginBottom: "12px",
  },

  bold:{
    fontWeight:"700",
  },

  subtext: {
    fontSize: "16px",
    fontWeight: "300",
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

  subtext2: {
    fontSize: "18px",
    fontWeight: "700",
    lineHeight: "28px",
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
    backgroundColor: "#52B1AD",
    color: "#FFF",
    textDecoration: "none",
    padding: "14px 16px",
    borderRadius: "4px",
    margin: "16px auto",
    marginBottom: "20px",
  },

  centerHeading:{
    alignItems: "center",
    width: "100%",
    textAlign: "center",
  },

  heading2: {
    fontSize: "28px",
    fontWeight: "700",
    lineHeight: "33px",
    color: "#5ac0ba",
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
    backgroundColor: theme.colors.secondary,
    color: "#FFF",
    textDecoration: "none",
    padding: "16px",
    borderRadius: "4px",
    margin: "16px auto",
    marginBottom: "20px",
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
    paddingBottom: "35px",
  
  
    [theme.breakpoints[900]]: {
        maxWidth: "25%",
        width: "25%",
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

  flexItem4: {
    maxWidth: "100%",
    width: "100%",
    paddingRight: "0px",
  
  
    [theme.breakpoints[900]]: {
        maxWidth: "75%",
        width: "75",
        paddingRight: "20px",
        paddingBottom: "0px",
    },
  },
}))(Singleproperty);
