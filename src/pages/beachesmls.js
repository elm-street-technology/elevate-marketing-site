import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import BgSectionExternal3 from "../components/BgSectionExternal3";
import FormBeaches from "../components/FormBeaches";
import Beachbg from "../images/beachbg.jpg";
import Fadebg from "../images/fadebg.jpg";
import Dmslogo from "../images/dmslogo.png";
import Splogo from "../images/sp_logo.png";
import Beacheslogo from "../images/beachesmls.png";
import Elevatelogo from "../images/elevate_tag.svg";
import Beacheslogow from "../images/beachesmlsw.png";
import Elevatelogow from "../images/elevate_tagw.svg";
import Quote from "../images/quote.png";
import Sp1 from "../images/sp1.png";
import Cma from "../images/prodcma.png";
import Dms2 from "../images/dms2.png";
import Dms3 from "../images/dms3.png";
import Dms5 from "../images/dms5.gif";
import Dms7 from "../images/dms7.png";
import Sp3 from "../images/sp3.png";
import Sp5 from "../images/sp5.png";
import Ign2 from "../images/ign2.gif";
import Glance4 from "../images/glance4.png";
import Glance5 from "../images/glance5.png";
import SEO from "../components/SEO";

const Beachesmls = ({ children, classes, data, tags }) => {
  const postNode = {
      title: `Elevate and Beaches MLS - ${config.siteTitle}`,
  };

  return (
<div className={classes.root}>
      <Helmet>
              <title>{`Elevate and Beaches MLS - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="Beachesmls" customTitle />

<div style={{backgroundImage:"url("+Beachbg+")", backgroundSize:"cover", backgroundPosition:"centerTop"}}>
<Container>
      <div className={classes.top} style={{paddingBottom:"75px", paddingRight:"35px", paddingLeft:"35px",}}>
          <div className={classes.centerHeading}>
                            <img src={Elevatelogo} width="100%"  style={{paddingBottom:"20px",maxWidth:"160px", marginRight:"12px"}} />
                            <img src={Beacheslogo} width="100%"  style={{paddingBottom:"20px",maxWidth:"280px", marginLeft:"12px"}} />
                            <div className={classes.heading} style={{fontSize:"42px", lineHeight:"48px", paddingBottom:"8px"}}>Marketing Done For You!</div>
                            <div className={classes.subtext2} style={{fontSize:"20px", lineHeight:"28px"}}>Automated Social Media Marketing<br />
                            &amp; Lead Conversion Services by Elevate<br/>
                            
                            </div>
          </div>
      </div>

           



</Container>
</div>








<div style={{paddingTop:"78px",}}>

            <Container>

                        <div style={{textAlign:"center", paddingRight:"35px", paddingLeft:"35px", paddingBottom:"55px",}}>
                            
                            <div className={classes.subtext}>As a member of BeachesMLS, Elevate is your approved supplier of done-for-you social media marketing, automated marketing templates and campaigns, lead generation and conversion tools, IDX websites, CRM, blog content creation, and more!
<br /><br />
The best part? All members of BeachesMLS receive access to preferred pricing on tools that are designed to help make your life easier, and your business grow. Explore the tools and resources available below.
</div>     
                            
                        </div>
            </Container>

</div>







<Container>
      
      
      <div className={classes.top}>
      <div className={classes.infoboxGray2}>
      <div className={classes.column2} style={{ textAlign: "center", paddingBottom: "15px" }}>
        
        <div style={{ textAlign: "center",paddingBottom:"10px" }}>
        
      </div>
      
              <div className={classes.productCol} style={{ paddingLeft:"10px", paddingRight:"10px",}}>
              <img src={Splogo} width="100%"  style={{paddingBottom:"18px", paddingTop:"13px",maxWidth:"290px"}} />
              <div className={classes.Heading3} style={{fontSize:"20px", lineHeight:"28px"}}>The Power of Social Media</div>
              <div className={classes.subtext}>Automate your social media marketing so you can focus on what matters the most...growing your sphere &amp; selling more homes, faster.
              <br /><br />
              • Customized social branding on Facebook,<br />
Twitter, LinkedIn &amp; YouTube.<br />
• Relevant, lifestyle content posted weekly.<br />
• Automated posts of new listings &amp; listing updates.<br />
• Automated creation of YouTube video tours.<br />
• Content-rich consumer blog with weekly posts.
<br /><br />
<div className={classes.Heading3}>Learn More Today</div>
Preferred pricing for members of Beaches MLS</div>

<FormBeaches
          subject="DMS Product Lead"
          listid="107387"
          webhook="b1452e08-f398-11ea-9d14-bc764e046a9d"
          leadsource="tryelevate.com:elevatedms" />
            
<div className={classes.subtext2} style={{fontSize:"20px", lineHeight:"28px"}}>If you already have an Elevate account...</div>
<a href="https://auth.yourelevate.com/saml/login?tenant=elevate" target="_blank" className={classes.buttonLink}>Access Your Account</a> 
              </div>

         



        </div>
          </div>

          <div className={classes.infoboxGray2}>
      <div className={classes.column2} style={{ textAlign: "center", paddingBottom: "15px" }}>
        
        <div style={{ textAlign: "center",paddingBottom:"10px" }}>
        
      </div>
      
              <div className={classes.productCol} style={{ paddingLeft:"10px", paddingRight:"10px",}}>
              <img src={Dmslogo} width="100%"  style={{paddingBottom:"18px", paddingTop:"13px",maxWidth:"120px"}} />
              <div className={classes.Heading3} style={{fontSize:"20px", lineHeight:"28px"}}>The Power of Marketing</div>
              <div className={classes.subtext}>Build your business, increase your sphere &amp; look like a marketing expert
with an all-in-one solution designed to capture, engage &amp; convert.
              <br /><br />
              • Advanced, intuitive CRM with<br />
              powerful performance metrics.<br />
              • Morning reports with the latest activity data.<br />
              • IDX website.<br />
              • Robust blog with automated posts.<br />
              • Automated social media posts weekly.<br />
              • Intuitive CMA Wizard.<br />
              • Email marketing templates, campaigns &amp; image library.<br />
              • Customized social branding on Facebook,<br />
              Twitter, LinkedIn &amp; YouTube.<br />
              • Automated creation of YouTube video tours.

<br /><br />
<div className={classes.Heading3}>Learn More Today</div>
Preferred pricing for members of Beaches MLS</div>

<FormBeaches
          subject="DMS Product Lead"
          listid="107387"
          webhook="b1452e08-f398-11ea-9d14-bc764e046a9d"
          leadsource="tryelevate.com:elevatedms" />
            
<div className={classes.subtext2} style={{fontSize:"20px", lineHeight:"28px"}}>If you already have an Elevate account...</div>
<a href="https://auth.yourelevate.com/saml/login?tenant=elevate" target="_blank" className={classes.buttonLink}>Access Your Account</a> 
              </div>

         



        </div>
          </div>




        </div>
    </Container>











<div style={{backgroundColor:"#ffffff", paddingBottom:"60px", textAlign:"center", paddingRight:"30px", paddingLeft:"30px"}}>
        <h1 className={classes.Heading2} style={{paddingTop:"70px"}}>
        Not Sure Which Program Fits Your Business Needs?
        </h1>
        <h2 className={classes.subtext2}>Connect with a success coach today to find the perfect solution.</h2>
        <FormBeaches
          subject="DMS Product Lead"
          listid="107387"
          webhook="b1452e08-f398-11ea-9d14-bc764e046a9d"
          leadsource="tryelevate.com:elevatedms" />
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


<div style={{paddingTop:"70px", paddingBottom:"40px", backgroundColor:"#f7f9fb"}}>
        
                        <div style={{textAlign:"center", paddingRight:"35px", paddingLeft:"35px", paddingBottom:"25px"}}>
                            <div className={classes.Heading2}>If You Already Have an Account...</div>
                            <div className={classes.subtext2}>Access It Here.</div>    

                            <a href="https://auth.yourelevate.com/saml/login?tenant=elevate" target="_blank" className={classes.buttonLink}>Access Your Account</a> 
                            
                        </div>

</div> 


<div style={{paddingTop:"70px", paddingBottom:"50px", backgroundColor:"#074e7a", textAlign:"center"}}>
        
<img src={Elevatelogow} width="100%"  style={{paddingBottom:"20px",maxWidth:"160px", marginRight:"12px"}} />
                            <img src={Beacheslogow} width="100%"  style={{paddingBottom:"20px",maxWidth:"280px", marginLeft:"12px"}} />

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
    color: "#32c4b9",
    marginBottom: "12px",
  },

  subtext: {
    fontSize: "16px",
    fontWeight: "300",
    lineHeight: "24px",
    color: "#074e7a",
  },

  subtext2: {
    fontSize: "16px",
    fontWeight: "700",
    lineHeight: "24px",
    color: "#074e7a",
  },

  column2:{
    width:"480px",
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
    paddingBottom: "8px",
    fontWeight: "700",
    lineHeight: "34px",
    color: "#32c4b9",
    letterSpacing: ".14px",
  },

  Heading3: {
    fontSize: "20px",
    paddingBottom: "5px",
    fontWeight: "700",
    lineHeight: "26px",
    color: "#32c4b9",
    letterSpacing: ".14px",
  },

  landingHeaderStyle:{
    textAlign:"center",
  },


  infoboxGray2: {
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#f7f9fb",
    textDecoration: "none",
    padding: "25px 10px 10px 10px",
    borderRadius: "4px",
    margin: "30px auto",
    textAlign: "center",
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
    backgroundColor: "#32c4b9",
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
}))(Beachesmls);
