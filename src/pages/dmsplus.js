import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import BgSectionExternal3 from "../components/BgSectionExternal3";
import FormProduct from "../components/FormProduct";
import Dmsplusbg from "../images/dmsplusbg.jpg";
import Fadebg from "../images/fadebg.jpg";
import Dmspluslogo from "../images/dmspluslogo.png";
import Plusstar from "../images/plusstar.png";
import Quote from "../images/quote.png";
import Ppc from "../images/prodppc.png";
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

const Dmsplus = ({ children, classes, data, tags }) => {
  const postNode = {
      title: `Elevate DMS PlusTM - ${config.siteTitle}`,
  };

  return (
<div className={classes.root}>
      <Helmet>
              <title>{`Elevate DMS PlusTM - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="Dmsplus" customTitle />

<div style={{backgroundImage:"url("+Dmsplusbg+")", backgroundSize:"cover", backgroundPosition:"centerTop"}}>
<Container>
      <div className={classes.top} style={{paddingBottom:"30px", paddingRight:"35px", paddingLeft:"35px", paddingTop:"75px"}}>
          <div className={classes.centerHeading}>
                            <img src={Dmspluslogo} width="100%"  style={{paddingBottom:"18px", paddingTop:"20px",maxWidth:"320px"}} />
                            <div className={classes.heading} style={{color:"#ffffff"}}>The Power of MARKETING plus LEADS</div>
                            <div className={classes.subtext} style={{color:"#f7f7f7", fontSize:"18px"}}>Fuel your PIPELINE with PEOPLE.<br/>
                            <img src={Plusstar} width="100%"  style={{paddingTop:"20px",maxWidth:"255px"}} />
                            </div>
          </div>
      </div>

      <div className={classes.top}  style={{paddingBottom:"50px",}}>

             <div className={classes.column3} style={{ textAlign: "center", paddingBottom: "10px" }}>
                 <a href="#demo" className={classes.buttonLink}>Request Demo</a>
            </div>

            <div className={classes.column3} style={{ textAlign: "center", paddingBottom: "10px" }}>
                <a target="_blank" href="https://elmstreettechnology.recurly.com/subscribe/dmsplus" className={classes.buttonLink}>Subscribe Today</a>
            </div>

            <div className={classes.column3} style={{ textAlign: "center", paddingBottom: "10px" }}>
                <a target="_blank" href="/compare_products" className={classes.buttonLink}>Compare Products</a>
            </div>


</div>          



</Container>
</div>








<div style={{paddingTop:"58px",}}>

            <Container>

                        <div style={{textAlign:"center", paddingRight:"35px", paddingLeft:"35px", paddingBottom:"35px"}}>
                            <div className={classes.Heading2}>Key Highlights</div>
                            <div className={classes.subtext}>All of the power of our popular DMS offering, PLUS a “starter” lead generation<br />
                            component for agents looking to grow their pipeline on a limited budget.</div>     
                            
                        </div>
            </Container>

</div>
<div style={{backgroundImage:"url("+Fadebg+")", backgroundSize:"cover", backgroundPosition:"centerBottom"}}>
<Container>
<div className={classes.top} style={{textAlign:"center"}}>


<div className={classes.column3} style={{ textAlign: "center", paddingTop: "20px" }}>
<div className={classes.subtext2}>Pay-per-click (PPC) capture<br />
of EXCLUSIVE buyer/seller leads</div>
<div style={{ textAlign: "center",}}>
    <img src={Ppc} width="100%"  style={{paddingTop:"25px", maxWidth:"320px"}} />
</div>
</div>

<div className={classes.column3} style={{ textAlign: "center", paddingTop: "20px" }}>
<div className={classes.subtext2}>Advanced, intuitive CRM<br />
with powerful performance metrics</div>
<div style={{ textAlign: "center",}}>
    <img src={Ign2} width="100%"  style={{paddingTop:"25px", maxWidth:"320px"}} />
</div>
</div>

<div className={classes.column3} style={{ textAlign: "center", paddingTop: "20px" }}>
<div className={classes.subtext2}>Morning reports with<br />
the latest activity data</div>
<div style={{ textAlign: "center",}}>
    <img src={Dms2} width="100%"  style={{paddingTop:"25px", maxWidth:"320px"}} />
</div>
</div>


</div>
</Container>
</div>

<div style={{paddingTop:"40px", backgroundImage:"url("+Fadebg+")", backgroundSize:"cover", backgroundPosition:"centerBottom"}}>
<Container>
<div className={classes.top} style={{textAlign:"center"}}>


<div className={classes.column3} style={{ textAlign: "center", paddingTop: "20px" }}>
<div className={classes.subtext2}>Mobile-friendly,<br />
IDX website</div>
<div style={{ textAlign: "center",}}>
    <img src={Dms3} width="100%"  style={{paddingTop:"25px", maxWidth:"320px"}} />
</div>
</div>

<div className={classes.column3} style={{ textAlign: "center", paddingTop: "20px" }}>
<div className={classes.subtext2}>Robust blog<br />
with automated posts</div>
<div style={{ textAlign: "center",}}>
    <img src={Sp5} width="100%"  style={{paddingTop:"25px", maxWidth:"320px"}} />
</div>
</div>

<div className={classes.column3} style={{ textAlign: "center", paddingTop: "20px" }}>
<div className={classes.subtext2}>Automated social media<br />
posts weekly</div>
<div style={{ textAlign: "center",}}>
    <img src={Dms5} width="100%"  style={{paddingTop:"25px", maxWidth:"320px"}} />
</div>
</div>


</div>
</Container>
</div>

<div style={{paddingTop:"40px", backgroundImage:"url("+Fadebg+")", backgroundSize:"cover", backgroundPosition:"centerBottom"}}>
<Container>
<div className={classes.top} style={{textAlign:"center"}}>


<div className={classes.column3} style={{ textAlign: "center", paddingTop: "20px" }}>
<div className={classes.subtext2}>Intuitive<br />
CMA Wizard</div>
<div style={{ textAlign: "center",}}>
    <img src={Cma} width="100%"  style={{paddingTop:"25px", maxWidth:"320px"}} />
</div>
</div>

<div className={classes.column3} style={{ textAlign: "center", paddingTop: "20px" }}>
<div className={classes.subtext2}>Email marketing templates,<br />
campaigns &amp; image library</div>
<div style={{ textAlign: "center",}}>
    <img src={Dms7} width="100%"  style={{paddingTop:"25px", maxWidth:"320px"}} />
</div>
</div>

<div className={classes.column3} style={{ textAlign: "center", paddingTop: "20px" }}>
<div className={classes.subtext2}>Customized social branding on Facebook,
Twitter, LinkedIn &amp; YouTube</div>
<div style={{ textAlign: "center",}}>
    <img src={Sp1} width="100%"  style={{paddingTop:"25px", maxWidth:"320px"}} />
</div>
</div>


</div>
</Container>
</div>


<div style={{paddingTop:"40px", backgroundImage:"url("+Fadebg+")", backgroundSize:"cover", backgroundPosition:"centerBottom", textAlign:"center"}}>
<Container>



<div style={{ textAlign: "center", paddingTop: "20px" }}>
<div className={classes.subtext2}>Automated creation of YouTube video tours</div>
<div width="100%" style={{textAlign: "center", maxWidth:"520px",marginLeft:"auto",marginRight:"auto", paddingTop:"25px" }}>
                <div style={{ textAlign: "center"}} className={classes.videoEmbed}>
                        <iframe className={classes.videoContainer} src="https://www.youtube.com/embed/CwXlC7Xuojs"
                         frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </div>
</div>

</Container>
<a id="demo"></a>
</div>




<div style={{backgroundColor:"#ffffff", paddingBottom:"60px", textAlign:"center", paddingRight:"30px", paddingLeft:"30px"}}>
        <h1 className={classes.Heading2} style={{paddingTop:"70px"}}>
        Take a Tour of Elevate Today
        </h1>
        <h2 className={classes.subtext}>Schedule 15-minutes with an Elevate Success Coach to explore Elevate’s marketing power.</h2>
        <FormProduct
          subject="DMS Plus Product Lead"
          listid="107388"
          webhook="b1452e08-f398-11ea-9d14-bc764e046a9d"
          leadsource="tryelevate.com:dmsplus"
          showMarkets="true" />
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
                      “I never thought I’d<br />
                      be able to afford PPC<br />
                      lead generation, but Elevate<br />
                      is building my pipeline<br />
                      at a price I can afford.”
                      <br /><br />
                      <div className={classes.Heading3}>Elisa B.H.</div>
                      Albany, NY
                      </div>
                </div>

                <div className={classes.flexItem2} style={{padding:"30px", textAlign:"center"}}>
                <img src={Quote} width="80" style={{paddingBottom:"15px"}}/>
                      <div className={classes.subtext}>  
                      “The mix of organic<br />
                      and PPC lead generation has<br />
                      helped me be in front<br />
                      of more people than<br />
                      ever before.”
                      <br /><br />
                      <div className={classes.Heading3}>Michelle K.</div>
                      Cleveland, OH
                        </div>
                </div>

                <div className={classes.flexItem2} style={{padding:"30px", textAlign:"center"}}>
                <img src={Quote} width="80" style={{paddingBottom:"15px"}}/>
                      <div className={classes.subtext}>  
                      “As a new agent, I wasn’t sure where<br />
                      to start with my marketing.<br />
                      Elevate made everything so easy<br />
                      and had me up &amp; running<br />
                      with leads in less than 2-weeks.”
                      <br /><br />
                      <div className={classes.Heading3}>Kevin D.</div>
                      Little Rock, AK
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
}))(Dmsplus);
