import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import BgSectionExternal3 from "../components/BgSectionExternal3";
import Spcrmbg from "../images/spcrmbg.jpg";
import Fadebg from "../images/fadebg.jpg";
import Sprologo from "../images/sprologo.png";
import Quote from "../images/quote.png";
import Sp1 from "../images/sp1.png";
import Newl from "../images/newl.png";
import Sp3 from "../images/sp3.png";
import Av from "../images/av.png";
import Glance4 from "../images/glance4.png";
import Glance5 from "../images/glance5.png";
import SEO from "../components/SEO";
import FormFreetrial from "../components/FormFreetrial";

const Freetrial = ({ children, classes, data, tags }) => {
  const postNode = {
      title: `Elevate Free Trial - ${config.siteTitle}`,
  };

  return (
<div className={classes.root}>
      <Helmet>
              <title>{`Elevate Free Trial - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="Freetrial" customTitle />

<div style={{backgroundImage:"url("+Spcrmbg+")", backgroundSize:"cover", backgroundPosition:"centerTop"}}>
<Container>
      <div className={classes.top} style={{paddingBottom:"30px", paddingRight:"35px", paddingLeft:"35px", paddingTop:"95px", paddingBottom:"95px"}}>
          <div className={classes.centerHeading}>
                            
                            <div className={classes.heading} style={{color:"#ffffff"}}><span style={{color:"#f9ea6c",}}>CYBER MONDAY</span><br />
GET THE ELEVATE CRM FOR $1<br />
ANY LEVEL. ANY PACKAGE.
</div>
                            <div className={classes.subtext} style={{color:"#f7f7f7", fontSize:"18px"}}>Voted the #1 Social Media CRM for Real Estate Agents in 2022, by TheClose.com.
                            <br />
                            <div style={{ textAlign: "center", paddingBottom: "10px" }}>
                 <a href="#demo" className={classes.buttonLink}>Create FREE Account Today!</a>
            </div>
                            </div>
          </div>
      </div>


    



</Container>
</div>





<div style={{paddingTop:"50px", paddingBottom:"50px", backgroundColor:"#333666"}}>
        

<Container>
    <div className={classes.top}>

                <div className={classes.column2} style={{padding:"30px", textAlign:"center"}}>
                <div style={{ textAlign: "center"}} className={classes.videoEmbed}>
                        <iframe className={classes.videoContainer} src="https://www.youtube.com/embed/WMqvFA708ss"
                         frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                </div>

                <div className={classes.column2} style={{padding:"30px", textAlign:"center"}}>
                <div className={classes.Heading2}><span style={{color:"#f9ea6c",}}>CYBER MONDAY SPECIAL</span><br />
DECEMBER FOR A DOLLAR
</div>
                <div className={classes.subtext} style={{color:"#f7f7f7"}}>
                Elevate's CRM offers busy real estate professionals a comprehensive, all-in-one lead generation &amp; nurturing solution that is UNPARALLELED in the space.
                </div>
                <div style={{ textAlign: "center", paddingTop: "15px" }}>
                 <a href="#demo" className={classes.buttonLink}>Create Your Account!</a>
            </div>
                </div>
              



      </div>

        
      </Container>
</div> 









<div style={{paddingTop:"58px",}}>

            <Container>

                        <div style={{textAlign:"center", paddingRight:"35px", paddingLeft:"35px", paddingBottom:"35px"}}>
                            <div className={classes.Heading2}>The Elevate CRM Includes...</div>
                            <div className={classes.subtext}>Automate your lead generation &amp; social media marketing so you can focus on what matters the most...<br />
growing your sphere &amp; selling more homes, faster...
</div>     
                            
                        </div>
            </Container>

</div>
<div style={{backgroundImage:"url("+Fadebg+")", backgroundSize:"cover", backgroundPosition:"centerBottom"}}>
<Container>
<div className={classes.top} style={{textAlign:"center"}}>


<div className={classes.column3} style={{ textAlign: "center", paddingTop: "20px" }}>
<div className={classes.subtext2}>Customized social branding on Facebook,
Twitter, LinkedIn &amp; YouTube</div>
<div style={{ textAlign: "center",}}>
    <img src={Sp1} width="100%"  style={{paddingTop:"25px", maxWidth:"320px"}} />
</div>
</div>

<div className={classes.column3} style={{ textAlign: "center", paddingTop: "20px" }}>
<div className={classes.subtext2}>Lead Generation &amp; Prospecting,<br />
with leads provided monthly</div>
<div style={{ textAlign: "center",}}>
    <img src={Newl} width="100%"  style={{paddingTop:"25px", maxWidth:"320px"}} />
</div>
</div>

<div className={classes.column3} style={{ textAlign: "center", paddingTop: "20px" }}>
<div className={classes.subtext2}>Automated posts of new listings<br />
&amp; listing updates</div>
<div style={{ textAlign: "center",}}>
    <img src={Sp3} width="100%"  style={{paddingTop:"25px", maxWidth:"320px"}} />
</div>
</div>


</div>
</Container>
</div>

<div style={{paddingTop:"40px", backgroundImage:"url("+Fadebg+")", backgroundSize:"cover", backgroundPosition:"centerBottom"}}>
<Container>
<div className={classes.top} style={{textAlign:"center"}}>


<div className={classes.column2} style={{ textAlign: "center", paddingTop: "20px" }}>
<div className={classes.subtext2}>Automated creation of<br />
YouTube video tours</div>
<div width="100%" style={{textAlign: "center", maxWidth:"400px",marginLeft:"auto",marginRight:"auto", paddingTop:"25px" }}>
                <div style={{ textAlign: "center"}} className={classes.videoEmbed}>
                        <iframe className={classes.videoContainer} src="https://www.youtube.com/embed/CwXlC7Xuojs"
                         frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </div>
</div>

<div className={classes.column2} style={{ textAlign: "center", paddingTop: "20px" }}>
<div className={classes.subtext2}>Lead Concierge nurtures your<br />
leads through to conversion</div>
<div style={{ textAlign: "center",}}>
    <img src={Av} width="100%"  style={{paddingTop:"25px", maxWidth:"320px"}} />
</div>
</div>

<a id="demo"></a>
</div>
</Container>
</div>




<div style={{backgroundColor:"#ffffff", paddingBottom:"60px", textAlign:"center", paddingRight:"30px", paddingLeft:"30px"}}>
        <h1 className={classes.Heading2} style={{paddingTop:"70px"}}>
        Get Elm Street Technology's Elevate CRM for $1 Today!
        </h1>
       
        <FormFreetrial
          subject="Cyber Monday Free Trial Lead"
          listid="154467"
          webhook="5a0ac3e9-fa6f-11ec-a07e-bc764e046a9d"
          leadsource="tryelevate.com/cybermonday" />
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
                      “I always struggled with creating &amp; managing my social media until Elevate.  Now I look like a pro!”
                      <br /><br />
                      <div className={classes.Heading3}>Jennifer M.</div>
                      San Clemente, CA
                      </div>
                </div>

                <div className={classes.flexItem2} style={{padding:"30px", textAlign:"center"}}>
                <img src={Quote} width="80" style={{paddingBottom:"15px"}}/>
                      <div className={classes.subtext}>  
                      “I’ve had so many complements<br />
                      on my blog articles, and I don’t have<br />
                      to lift a finger.”
                      <br /><br />
                      <div className={classes.Heading3}>Michael K.</div>
                      Tampa, FL
                        </div>
                </div>

                <div className={classes.flexItem2} style={{padding:"30px", textAlign:"center"}}>
                <img src={Quote} width="80" style={{paddingBottom:"15px"}}/>
                      <div className={classes.subtext}>  
                      “Elevate has saved me hours of frustration &amp; time with my online marketing.  I love the automation.”
                      <br /><br />
                      <div className={classes.Heading3}>Mary Ann B.</div>
                      Arlington, TX
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
}))(Freetrial);
