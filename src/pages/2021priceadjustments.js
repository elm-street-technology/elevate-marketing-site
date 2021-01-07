import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import BgSectionExternal3 from "../components/BgSectionExternal3";
import Formprice from "../components/SignUpFormPriceadjustments";
import Formchecklist from "../components/Formchecklist";
import Bossbg from "../images/bossbg.jpg";
import p1 from "../images/elevateidx.png";
import p2 from "../images/sp_logo.png";
import p3 from "../images/dms_logo1.png";
import p4 from "../images/dmsplus_logo1.png";
import p5 from "../images/ignite_logo1.png";
import p6 from "../images/elite_logo1.png";
import B7 from "../images/boss7.png";
import B8 from "../images/boss8.png";
import B9 from "../images/boss9.png";
import B10 from "../images/boss10.png";
import Fadebg from "../images/fadebg.jpg";
import Bosslogo from "../images/bosslogo.png";
import Bossstar from "../images/bossstar.png";
import Quote from "../images/quote.png";
import Cover from "../images/checklist_cover.jpg";
import SEO from "../components/SEO";

const Priceadjustments = ({ children, classes, data, tags }) => {
  const postNode = {
      title: `Elevate 2021 Price Adjustments - ${config.siteTitle}`,
  };

  return (
<div className={classes.root}>
      <Helmet>
              <title>{`Elevate 2021 Price Adjustments - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="2021priceadjustments" customTitle />

<div style={{backgroundImage:"url("+Bossbg+")", backgroundSize:"cover", backgroundPosition:"centerTop"}}>
<Container>
      <div className={classes.top} style={{paddingRight:"35px", paddingLeft:"35px", paddingTop:"70px", paddingBottom:"75px"}}>
          <div className={classes.centerHeading}>
                            
                            <div className={classes.heading}>Thank you for choosing Elevate</div>
                            <div className={classes.subtext} style={{color:"#f7f7f7"}}>as your real estate technology partner and entrusting us with your online marketing and lead generation. We are adjusting our pricing strategy for all current subscribers <span className={classes.bold}>effective March 1, 2021</span> as follows:

                            </div>
          </div>
      </div>

        



</Container>
</div>









<div style={{paddingBottom:"65px", paddingTop:"24px"}}>
<Container>
<div className={classes.top} style={{textAlign:"center"}}>


<div className={classes.column3} style={{ textAlign: "center", paddingTop: "45px" }}>
<img src={p1} width="85" style={{paddingBottom:"15px"}}/>
<div className={classes.Heading2}>$110/m</div>
</div>

<div className={classes.column3} style={{ textAlign: "center", paddingTop: "45px" }}>
<img src={p2} width="100%" style={{paddingBottom:"15px", maxWidth:"270px"}}/>
<div className={classes.Heading2}>$110/m</div>
</div>

<div className={classes.column3} style={{ textAlign: "center", paddingTop: "45px" }}>
<img src={p3} width="100" style={{paddingBottom:"15px"}}/>
<div className={classes.Heading2}>$200/m</div>
</div>

</div>
</Container>



<Container>
<div className={classes.top} style={{textAlign:"center"}}>


<div className={classes.column3} style={{ textAlign: "center", paddingTop: "45px" }}>
<img src={p4} width="100%" style={{paddingBottom:"15px", maxWidth:"220px"}}/>
<div className={classes.Heading2}>+ $50/m</div>
<div className={classes.subtext}>no increase on lead gen. services</div>

</div>

<div className={classes.column3} style={{ textAlign: "center", paddingTop: "45px" }}>
<img src={p5} width="100%" style={{paddingBottom:"15px", maxWidth:"140px"}}/>
<div className={classes.Heading2}>+ $50/m</div>
<div className={classes.subtext}>no increase on lead gen. services</div>

</div>

<div className={classes.column3} style={{ textAlign: "center", paddingTop: "45px" }}>
<img src={p6} width="120" style={{paddingBottom:"15px"}}/>
<div className={classes.Heading2}>+ $50/m</div>
<div className={classes.subtext}>no increase on lead gen. services</div>
</div>

</div>
</Container>


</div>








<div style={{backgroundColor:"#f7f7f7", paddingBottom:"70px", textAlign:"center", paddingRight:"30px", paddingLeft:"30px"}}>
<Container>
  <h1 className={classes.Heading2} style={{paddingTop:"70px"}}>
        As a SPECIAL OFFER...
        </h1>
        <h2 className={classes.subtext} style={{paddingBottom:"40px"}}>we invite you to upgrade your Elevate account to include the next level of lead generation<br />
        and LOCK IN 2020 prices for the next 12-months.  This offer expires January 31, 2021.

<br /><br />
<span className={classes.bold}>To learn more about this SPECIAL OFFER or to connect with an<br />
Elevate Success Coach regarding your account, fill out the following:</span>
</h2>
        <Formprice/>
        {/* <div className={classes.closingContainer}>
          For Media Inquiries, {""} Please {""}
          <a
            className={classes.emailLink}
            href="mailto:ekaplan@elmstreettechnology.com"
          >
            Email Us
          </a>
        </div> */}
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

  column4:{
    width:"260px",
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
    paddingBottom: "10px",
    fontWeight: "700",
    lineHeight: "40px",
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
}))(Priceadjustments);
