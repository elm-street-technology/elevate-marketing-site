import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import Sellerleadsbg from "../images/sellerleads_bg.jpg";
import Sellerleadslogo from "../images/sellerleads_logo.png";
import Opt1 from "../images/monthly.png";
import Opt2 from "../images/annually.png";
import Seller1 from "../images/seller1.gif";
import Seller2 from "../images/seller2.gif";
import Seller3 from "../images/seller3.gif";
import Seller4 from "../images/seller4.gif";
import Formsellerleads from "../components/Formsellerleads";
import Test_pic1 from "../images/test_pic1.png";
import Test_pic2 from "../images/test_pic2.png";
import Test_pic3 from "../images/test_pic3.png";
import Testa from "../images/testa.png";
import Testb from "../images/testb.png";
import Testc from "../images/testc.png";
import SEO from "../components/SEO";

const Sellerleads = ({ children, classes, data, tags }) => {
  const postNode = {
      title: `Elevate Seller Leads - ${config.siteTitle}`,
  };

  return (
<div className={classes.root}>
      <Helmet>
              <title>{`Elevate Seller Leads - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="sellerleads" customTitle />

<div style={{backgroundImage:"url("+Sellerleadsbg+")", backgroundSize:"cover", backgroundPosition:"centerTop", paddingBottom:"65px"}}>
<Container>
      <div className={classes.top} style={{paddingRight:"35px", paddingLeft:"35px", paddingTop:"45px", paddingBottom:"35px"}}>
          <div className={classes.centerHeading}>
          <img src={Sellerleadslogo} width="100%"  style={{maxWidth:"600px"}} />
                            <br />
                            <div className={classes.subtext2} style={{color:"#ffffff",}}>September pre-sale.<br />
                            Program launching Oct 2020.</div>        
          </div>
      </div>

      <div className={classes.top}>

             

<div className={classes.column3} style={{ textAlign: "center",}}>
                  <div style={{ textAlign: "center",paddingTop:"15px" }}>
                        <img src={Seller1} width="100%" style={{maxWidth:"480px"}}/>
                  </div>
</div>

<div className={classes.column3} style={{ textAlign: "center",}}>

                  <div style={{ textAlign: "center",paddingTop:"15px" }}>
                        <img src={Seller2} width="100%" style={{maxWidth:"480px"}} />
                  </div>
</div>

<div className={classes.column3} style={{ textAlign: "center",}}>

                  <div style={{ textAlign: "center",paddingTop:"15px" }}>
                        <img src={Seller3} width="100%" style={{maxWidth:"480px"}} />
                  </div>
</div>

</div>
     
</Container>




</div>






    <div style={{backgroundColor:"#ffffff", paddingBottom:"70px", paddingTop:"55px", paddingLeft:"30px", paddingRight:"30px", textAlign:"center"}}>
    <div className={classes.heading}>Exclusive Seller Leads<br />
    Now Available Across the Entire U.S.</div>
    <div className={classes.subtext} style={{paddingBottom:"25px"}}>Claim Yours Today!</div>
        <Formsellerleads />
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
    fontSize: "28px",
    fontWeight: "700",
    lineHeight: "36px",
    letterSpacing: ".14px",
    color: "#5ac0ba",
    marginBottom: "12px",
  },

  bold:{
    fontWeight:"700",
  },

  subtext: {
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
}))(Sellerleads);
