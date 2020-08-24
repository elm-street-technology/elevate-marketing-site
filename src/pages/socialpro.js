import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import BgSectionExternal3 from "../components/BgSectionExternal3";
import Formsocialpro from "../components/Formsocialpro";
import Sprobg from "../images/sprobg.jpg";
import Fadebg from "../images/fadebg.jpg";
import Sprologo from "../images/sprologo.png";
import Quote from "../images/quote.png";
import Sp1 from "../images/sp1.png";
import Sp2 from "../images/sp2.png";
import Sp3 from "../images/sp3.png";
import Sp5 from "../images/sp5.png";
import Glance4 from "../images/glance4.png";
import Glance5 from "../images/glance5.png";
import SEO from "../components/SEO";

const Socialpro = ({ children, classes, data, tags }) => {
  const postNode = {
      title: `Elevate Social ProTM - ${config.siteTitle}`,
  };

  return (
<div className={classes.root}>
      <Helmet>
              <title>{`Elevate Social ProTM - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="Socialpro" customTitle />

<div style={{backgroundImage:"url("+Sprobg+")", backgroundSize:"cover", backgroundPosition:"centerTop"}}>
<Container>
      <div className={classes.top} style={{paddingBottom:"30px", paddingRight:"35px", paddingLeft:"35px", paddingTop:"75px"}}>
          <div className={classes.centerHeading}>
                            <img src={Sprologo} width="100%"  style={{paddingBottom:"18px", paddingTop:"20px",maxWidth:"330px"}} />
                            <div className={classes.heading} style={{color:"#ffffff"}}>The Power of SOCIAL MEDIA</div>
                            <div className={classes.subtext} style={{color:"#f7f7f7", fontSize:"18px"}}>Turn your social media from a toy into a tool.
                            </div>
          </div>
      </div>

      <div className={classes.top}  style={{paddingBottom:"50px",}}>

             <div className={classes.column3} style={{ textAlign: "center", paddingBottom: "10px" }}>
                 <a target="_blank" href="" className={classes.buttonLink}>Request Demo</a>
            </div>

            <div className={classes.column3} style={{ textAlign: "center", paddingBottom: "10px" }}>
                <a target="_blank" href="" className={classes.buttonLink}>Subscribe Today</a>
            </div>

            <div className={classes.column3} style={{ textAlign: "center", paddingBottom: "10px" }}>
                <a target="_blank" href="" className={classes.buttonLink}>Compare Products</a>
            </div>


</div>          



</Container>
</div>








<div style={{paddingTop:"58px",}}>

            <Container>

                        <div style={{textAlign:"center", paddingRight:"35px", paddingLeft:"35px", paddingBottom:"35px"}}>
                            <div className={classes.Heading2}>Key Highlights</div>
                            <div className={classes.subtext}>Automate your social media marketing so you can focus on what matters the most...<br />
                            growing your sphere &amp; selling more homes, faster...</div>     
                            
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
<div className={classes.subtext2}>Relevant, life-style content<br />
posted weekly</div>
<div style={{ textAlign: "center",}}>
    <img src={Sp2} width="100%"  style={{paddingTop:"25px", maxWidth:"320px"}} />
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
<div style={{ textAlign: "center",}}>
    <img src={Sp3} width="100%"  style={{paddingTop:"25px", maxWidth:"320px"}} />
</div>
</div>

<div className={classes.column2} style={{ textAlign: "center", paddingTop: "20px" }}>
<div className={classes.subtext2}>Content-rich consumer<br />
blog with weekly posts</div>
<div style={{ textAlign: "center",}}>
    <img src={Sp5} width="100%"  style={{paddingTop:"25px", maxWidth:"320px"}} />
</div>
</div>


</div>
</Container>
</div>




<div style={{backgroundColor:"#ffffff", paddingBottom:"60px", textAlign:"center", paddingRight:"30px", paddingLeft:"30px"}}>
        <h1 className={classes.Heading2} style={{paddingTop:"70px"}}>
        Take a Tour of Elevate Today
        </h1>
        <h2 className={classes.subtext}>Schedule 15-minutes with an Elevate Success Coach to explore Elevate’s marketing power.</h2>
        <Formsocialpro/>
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
}))(Socialpro);
