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
import p3 from "../images/dmslogo.png";
import p4 from "../images/dmsplus_logo1.png";
import p5 from "../images/ignite_logo1.png";
import Flowroi from "../images/flow2.jpg";
import Voicepad from "../images/voice2.jpg";
import Feature from "../images/featurespic.jpg";
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

<div>
<Container>
      <div className={classes.top} style={{paddingRight:"35px", paddingLeft:"35px", paddingTop:"45px"}}>
          <div className={classes.centerHeading}>
                            
                            <div className={classes.heading}>A SPECIAL OFFER for Elevate Subscribers</div>
                            <h2 className={classes.subtext} style={{paddingBottom:"35px"}}><span className={classes.bold}>Elevate price increases go into effect May 15, 2021.</span><br />
                            As a thank you for being a trusted technology partner, we invite you to upgrade your Elevate account to include the next level of lead generation and LOCK IN 2020 PRICES FOR THE NEXT 12-MONTHS. *Offer expires May 14, 2021.
<br />
<div style={{ textAlign: "center", paddingBottom: "20px" }}>
                 <a href="https://secure.systememerge.com/view-1050132867.html"  target="_blank"  className={classes.buttonLink}>Read Email From CEO, Prem Luthra</a>
            </div>

</h2>
          </div>
      </div>

        



</Container>
</div>








{/*
<div style={{paddingBottom:"35px", paddingTop:"24px"}}>
<Container>
<div className={classes.top} style={{textAlign:"center"}}>


<div className={classes.column4} style={{ textAlign: "center", paddingTop: "20px" }}>
<img src={p1} width="65" style={{paddingBottom:"8px"}}/>
<div className={classes.Heading4}>$110/m</div>
</div>

<div className={classes.column4} style={{ textAlign: "center", paddingTop: "20px" }}>
<img src={p2} width="100%" style={{paddingBottom:"8px", maxWidth:"220px"}}/>
<div className={classes.Heading4}>$110/m</div>
</div>

<div className={classes.column4} style={{ textAlign: "center", paddingTop: "20px" }}>
<img src={p3} width="80" style={{paddingBottom:"8px"}}/>
<div className={classes.Heading4}>$200/m</div>
</div>

<div className={classes.column4} style={{ textAlign: "center", paddingTop: "20px" }}>
<img src={p6} width="98" style={{paddingBottom:"15px"}}/>
<div className={classes.Heading4}>+ $50/m</div>
<div className={classes.subtext} style={{fontSize:"11px"}}>no increase on lead gen. services</div>
</div>

</div>
</Container>

</div>
*/}









<div style={{backgroundColor:"#f7f7f7", paddingBottom:"70px", textAlign:"center", paddingRight:"30px", paddingLeft:"30px", paddingTop:"60px"}}>
<Container>
<h2 className={classes.subtext} style={{paddingBottom:"35px"}}>
<span className={classes.bold}>To learn more about this SPECIAL OFFER or to connect with an Elevate Success Coach<br />
regarding your account, fill out the following:</span>
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






<div style={{paddingBottom:"75px", paddingTop:"74px", backgroundColor:"#ffffff",}}>
<Container>
<div className={classes.top} style={{textAlign:"center"}}>

<div className={classes.centerHeading}>
                            
                            <div className={classes.Heading3}>Elm Street Technology Adds NEW Features &amp; Acquires VoicePad &amp; Flow ROI to Expand Offerings</div>
                            <h2 className={classes.subtext} style={{paddingBottom:"35px"}}>Two acquisitions &amp; NEW features announced in January tease aggressive 2021 growth

</h2>
          </div>


          <div className={classes.column3} style={{ textAlign: "center", paddingTop: "20px",}}>

<div  className={classes.subtext}>Recently, the team has released a wave of exciting new services and features inside of Elevate designed to assist busy real estate professionals with providing an unparalleled online experience
<br />for the buyers and sellers they serve.</div>

<div style={{ textAlign: "center", paddingBottom: "10px" }}>
                 <a href="https://tryelevate.com/elevate-releases-wave-of-new-features/"  target="_blank"  className={classes.buttonLink}>Check Them Out</a>
                 <img src={Feature} width="100%" style={{maxWidth:"450px", paddingTop:"15px"}}/>
            </div>
</div>

<div className={classes.column3} style={{ textAlign: "center", paddingTop: "20px",}}>

<div  className={classes.subtext}>For over 17-years, VoicePad has<br />
provided high-level lead generation<br />
and telecom solutions to real estate<br />
professionals and now joins the<br />
comprehensive suite of services<br />
offered under Elevate.</div>

<div style={{ textAlign: "center", paddingBottom: "10px" }}>
                 <a href="https://tryelevate.com/elm-street-technology-acquires-voicepad/"  target="_blank"  className={classes.buttonLink}>Read The Press Release</a>
                 <img src={Voicepad} width="100%" style={{maxWidth:"450px", paddingTop:"15px"}}/>
            </div>
</div>

<div className={classes.column3} style={{ textAlign: "center", paddingTop: "20px" }}>

<div  className={classes.subtext}>Flow ROI introduces real estate<br />
transaction functionality<br />
into the Elm Street Technology product<br />
suite, enhancing Elevate’s<br />
end-to-end solution<br />
for brokers, agents and teams.</div>

<div style={{ textAlign: "center", paddingBottom: "10px" }}>
                 <a href="https://tryelevate.com/elm-street-technology-acquires-flow-roi/"  target="_blank"  className={classes.buttonLink}>Read The Press Release</a>
                 <img src={Flowroi} width="100%" style={{maxWidth:"450px", paddingTop:"15px"}}/>
            </div>

</div>



</div>
</Container>

</div>



<div style={{paddingBottom:"75px", paddingTop:"74px", backgroundColor:"#f7f7f7",}}>
<Container>
<div className={classes.top} style={{textAlign:"center"}}>

<div className={classes.centerHeading}>
                            
                            <div className={classes.Heading3}>Frequently Asked Questions</div>
                
          </div>


          <div className={classes.column2} style={{ textAlign: "left", paddingTop: "20px",}}>

<div  className={classes.subtext}><span className={classes.bold}>Why are you raising prices at this time?</span><br />
For the past several years we’ve been packing the Elevate Platform with value at an affordable price. From NEW email nurture plans and a streamlined email editor, all the way to instant property alerts for home-searchers and a new dashboard optimized for user experience - each tool equips you to do more, faster - all while ensuring meaningful connections with your users.  
After careful assessment of these feature releases supported by our “customer-first” staff, we are adjusting prices for the first time since the launch of our product. We are excited to continue bringing awesome products to our subscribers at a price that matches the true value of Elevate. 
<br /><br />All Elevate pricing will be adjusted to reflect the following:
<br /><br />
IDX<sup>&reg;</sup> -  $110/m<br />
Social Pro<sup>&reg;</sup> -  $110/m<br />
DMS<sup>&reg;</sup> - $200/m<br />
DMS Plus<sup>&reg;</sup> - $300/m<br />
<br /><br />
<span className={classes.bold}>What makes Elevate different from companies that provide the same services and tools for less?</span><br />
There are a number of options available when it comes to finding a standalone CRM, IDX-enabled websites, website builders, lead generation services and email marketing software solutions. At Elevate, our focus continues to be optimizing each to compound their impact when they work smoothly together. It’s something we’re particularly proud of, and when we assess the value of Elevate products and services, we remain an outstanding value option.
<br /><br />
<span className={classes.bold}>What is the price going to be?</span><br />
Our current pricing:
<br /><br />
IDX<sup>&reg;</sup> -  $110/m<br />
Social Pro<sup>&reg;</sup> -  $110/m<br />
DMS<sup>&reg;</sup> - $200/m<br />
DMS Plus<sup>&reg;</sup> - $300/m<br /></div>

</div>

<div className={classes.column2} style={{ textAlign: "left", paddingTop: "20px",}}>

<div  className={classes.subtext}>
<span className={classes.bold}>Which features most maximize the value of my Elevate subscription?</span><br />
There are a number of new features that have been added to the Elevate Platform. Each tool has been designed, tested, and proven to make the most out of your time and energy spent in the new dashboard. Some of the most powerful new features include:
<br /><br /> 
Property Promoter - Create gorgeous digital property promotions using a selection of pre-made templates (Open House, Virtual Open House, Just Sold, New Listing). 
<br /><br />
NEW Lead Nurturing Emails - New “7-day nurture” campaigns ensure that no opportunity is missed this upcoming selling season.
<br /><br />
Instant Property Alerts - In this ultra-competitive market, it’s imperative for active buyers to receive alerts when a new property matching their search criteria hits the market. Be first!
<br /><br />
<a href="https://tryelevate.com/elevate-releases-wave-of-new-features/"  target="_blank" style={{textDecoration:"none", color:"#52B1AD"}}><span className={classes.bold}>Many More!</span></a>
<br /><br />
<span className={classes.bold}>Can I upgrade and lock in pricing?</span><br />
Yes. If you upgrade your account to include lead services, we will ensure that your lead pipeline remains active with the same estimated amount of leads at current pricing for the next 12 months, even as costs to acquire those leads continue to rise.
<br /><br />
<span className={classes.bold}>Who can I contact to make sure I’m getting<br />
the most out of my subscription?</span><br />
If you have any questions about how you might maximize the value of your subscription, just reach out! We’re here to help, we want to ensure you succeed with Elevate!

</div>


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

  column4:{
    width:"265px",
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

  Heading4: {
    fontSize: "18px",
    fontWeight: "700",
    lineHeight: "25px",
    color: "#52B1AD",
    letterSpacing: ".14px",
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
    minWidth: "320px",
    maxWidth: "320px",
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
