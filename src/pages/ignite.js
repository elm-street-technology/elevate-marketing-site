import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import BgSectionExternal3 from "../components/BgSectionExternal3";
import Formignite from "../components/Formignite";
import Ignitebg from "../images/ignitebg.jpg";
import Fadebg from "../images/fadebg.jpg";
import Ignitelogo from "../images/ignitelogo.png";
import Ignstar from "../images/ignstar.png";
import Quote from "../images/quote.png";
import Sp1 from "../images/sp1.png";
import Ppc from "../images/prodppc.png";
import Ign2 from "../images/ign2.gif";
import Ign3 from "../images/ign3.png";
import Sp5 from "../images/sp5.png";
import Ign4 from "../images/ign4.png";
import Glance4 from "../images/glance4.png";
import Glance5 from "../images/glance5.png";
import SEO from "../components/SEO";

const Ignite = ({ children, classes, data, tags }) => {
  const postNode = {
      title: `Elevate IgniteTM - ${config.siteTitle}`,
  };

  return (
<div className={classes.root}>
      <Helmet>
              <title>{`Elevate IgniteTM - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="Ignite" customTitle />

<div style={{backgroundImage:"url("+Ignitebg+")", backgroundSize:"cover", backgroundPosition:"centerTop"}}>
<Container>
      <div className={classes.top} style={{paddingBottom:"30px", paddingRight:"35px", paddingLeft:"35px", paddingTop:"75px"}}>
          <div className={classes.centerHeading}>
                            <img src={Ignitelogo} width="100%"  style={{paddingBottom:"18px", paddingTop:"20px",maxWidth:"255px"}} />
                            <div className={classes.heading} style={{color:"#ffffff"}}>The Power of LEAD GENERATION</div>
                            <div className={classes.subtext} style={{color:"#f7f7f7", fontSize:"18px"}}>Exclusive buyer / seller leads just for you.<br />
                            <img src={Ignstar} width="100%"  style={{paddingTop:"20px",maxWidth:"255px"}} />
                            </div>
          </div>
      </div>

      <div className={classes.top}  style={{paddingBottom:"50px",}}>

             <div className={classes.column2} style={{ textAlign: "center", paddingBottom: "10px" }}>
                 <a href="#demo" className={classes.buttonLink}>Request Demo</a>
            </div>


            <div className={classes.column2} style={{ textAlign: "center", paddingBottom: "10px" }}>
                <a target="_blank" href="/compare_products" className={classes.buttonLink}>Compare Products</a>
            </div>


</div>          



</Container>
</div>








<div style={{paddingTop:"58px",}}>

            <Container>

                        <div style={{textAlign:"center", paddingRight:"35px", paddingLeft:"35px", paddingBottom:"35px"}}>
                            <div className={classes.Heading2}>Key Highlights</div>
                            <div className={classes.subtext}>High-quality, exclusive pay-per-click (PPC) lead generation captured just for you,<br />
                            without all of the other “bells &amp; whistles”.</div>     
                            
                        </div>
            </Container>

</div>
<div style={{backgroundImage:"url("+Fadebg+")", backgroundSize:"cover", backgroundPosition:"centerBottom"}}>
<Container>
<div className={classes.top} style={{textAlign:"center"}}>


<div className={classes.column2} style={{ textAlign: "center", paddingTop: "20px" }}>
<div className={classes.subtext2}>Pay-per-click (PPC) capture<br />
of exclusive leads</div>
<div style={{ textAlign: "center",}}>
    <img src={Ppc} width="100%"  style={{paddingTop:"25px", maxWidth:"350px"}} />
</div>
</div>


<div className={classes.column2} style={{ textAlign: "center", paddingTop: "20px" }}>
<div className={classes.subtext2}>Advanced, intuitive CRM with<br />
powerful performance metrics</div>
<div style={{ textAlign: "center",}}>
    <img src={Ign2} width="100%"  style={{paddingTop:"25px", maxWidth:"350px"}} />
</div>
</div>


</div>
</Container>
</div>

<div style={{paddingTop:"40px", backgroundImage:"url("+Fadebg+")", backgroundSize:"cover", backgroundPosition:"centerBottom"}}>
<Container>
<div className={classes.top} style={{textAlign:"center"}}>


<div className={classes.column2} style={{ textAlign: "center", paddingTop: "20px" }}>
<div className={classes.subtext2}>Automated nurture<br />
campaigns</div>
<div style={{ textAlign: "center",}}>
    <img src={Ign3} width="100%"  style={{paddingTop:"25px", maxWidth:"350px"}} />
</div>
</div>

<div className={classes.column2} style={{ textAlign: "center", paddingTop: "20px" }}>
<div className={classes.subtext2}>Lead engagement<br />
&amp; behavioral tracking</div>
<div style={{ textAlign: "center",}}>
    <img src={Ign4} width="100%"  style={{paddingTop:"25px", maxWidth:"350px"}} />
</div>
</div>

<a id="demo"></a>
</div>
</Container>
</div>




<div style={{backgroundColor:"#ffffff", paddingBottom:"60px", textAlign:"center", paddingRight:"30px", paddingLeft:"30px"}}>
        <h1 className={classes.Heading2} style={{paddingTop:"70px"}}>
        Take a Tour of Elevate Today
        </h1>
        <h2 className={classes.subtext}>Schedule 15-minutes with an Elevate Success Coach to explore Elevate’s marketing power.</h2>
        <Formignite/>
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


<div style={{paddingTop:"50px", paddingBottom:"50px", backgroundColor:"#f7f7f7"}}>
        
                        <div style={{textAlign:"center", paddingRight:"35px", paddingLeft:"35px", paddingBottom:"25px"}}>
                            <div className={classes.Heading2}>Happy Customers</div>
                            <div className={classes.subtext}>What the world needs now is love, love, love.</div>     
                            
                        </div>
    <Container>
            <div className={classes.flexContainer}>
                <div className={classes.flexItem2} style={{padding:"30px", textAlign:"center"}}>
                        <img src={Quote} width="80" style={{paddingBottom:"15px"}}/>
                      <div className={classes.subtext}>
                      “3 listing appointments and one transaction in my first 30-days of Elevate’s lead generation.  I’m hooked!”
                      <br /><br />
                      <div className={classes.Heading3}>Kelli P.</div>
                      Dallas, TX
                      </div>
                </div>

                <div className={classes.flexItem2} style={{padding:"30px", textAlign:"center"}}>
                <img src={Quote} width="80" style={{paddingBottom:"15px"}}/>
                      <div className={classes.subtext}>  
                      “I love that I don’t<br />
                      have to compete for<br />
                      my Elevate leads.”
                      <br /><br />
                      <div className={classes.Heading3}>Jason R.</div>
                      St. Petersburg, FL
                        </div>
                </div>

                <div className={classes.flexItem2} style={{padding:"30px", textAlign:"center"}}>
                <img src={Quote} width="80" style={{paddingBottom:"15px"}}/>
                      <div className={classes.subtext}>  
                      “I’ve got leads in every<br />
                      stage of the purchase<br />
                      process. I love it!”
                      <br /><br />
                      <div className={classes.Heading3}>Courtney H.</div>
                      San Francisco, CA
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
}))(Ignite);
