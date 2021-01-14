import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import BgSectionExternal3 from "../components/BgSectionExternal3";
import Formboss from "../components/Formboss";
import Formchecklist from "../components/Formchecklist";
import Bossbg from "../images/bossbg.jpg";
import B1 from "../images/boss1.png";
import B2 from "../images/boss2.png";
import B3 from "../images/boss3.png";
import B4 from "../images/boss4.png";
import B5 from "../images/boss5.png";
import B6 from "../images/boss6.png";
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

const Boss = ({ children, classes, data, tags }) => {
  const postNode = {
      title: `Elevate Boss - ${config.siteTitle}`,
  };

  return (
<div className={classes.root}>
      <Helmet>
              <title>{`Elevate Boss - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="Boss" customTitle />

<div style={{backgroundImage:"url("+Bossbg+")", backgroundSize:"cover", backgroundPosition:"centerTop"}}>
<Container>
      <div className={classes.top} style={{paddingRight:"35px", paddingLeft:"35px", paddingTop:"75px"}}>
          <div className={classes.centerHeading}>
                            <img src={Bosslogo} width="100%"  style={{paddingBottom:"18px", paddingTop:"20px",maxWidth:"220px"}} />
                            <div className={classes.heading} style={{color:"#ffffff"}}>The Power of ONE</div>
                            <div className={classes.subtext} style={{color:"#f7f7f7", fontSize:"18px"}}>One vendor.  One point of contact.  One solution.  For your entire office.<br/>
                            <img src={Bossstar} width="100%"  style={{paddingTop:"20px",maxWidth:"295px"}} />
                            </div>
          </div>
      </div>

      <div style={{textAlign: "center", maxWidth:"700px",marginLeft:"auto",marginRight:"auto", paddingBottom:"20px", paddingRight:"35px", paddingLeft:"35px",marginTop:"-5px"}}>
                <div style={{ textAlign: "center"}} className={classes.videoEmbed}>
                        <iframe className={classes.videoContainer} src="https://www.youtube.com/embed/vd7DeTuNb6w"
                         frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </div>

            <div style={{paddingBottom:"50px",}}>

             <div style={{ textAlign: "center", paddingBottom: "10px" }}>
                 <a href="#demo" className={classes.buttonLink}>Request Demo</a>
            </div>



</div>          



</Container>
</div>








<div style={{paddingTop:"58px",}}>

            <Container>

                        <div style={{textAlign:"center", paddingRight:"35px", paddingLeft:"35px", paddingBottom:"25px"}}>
                            <div className={classes.Heading2}>Key Highlights</div>
                            <div className={classes.subtext}>The 1st true productivity platform in real estate offers a more efficient, cost-effective way<br />
                            to increase production &amp; help your agents sell more homes...faster.</div>     
                            
                        </div>
            </Container>

</div>
<div style={{backgroundImage:"url("+Fadebg+")", backgroundSize:"cover", backgroundPosition:"centerBottom", paddingBottom:"65px"}}>
<Container>
<div className={classes.top} style={{textAlign:"center"}}>


<div className={classes.column4} style={{ textAlign: "center", paddingTop: "45px" }}>
<img src={B1} width="80" style={{paddingBottom:"15px"}}/>
<div className={classes.subtext2}>Brokerage<br />
recruiting module</div>

</div>

<div className={classes.column4} style={{ textAlign: "center", paddingTop: "45px" }}>
<img src={B2} width="80" style={{paddingBottom:"15px"}}/>
<div className={classes.subtext2}>Brokerage-level<br />
advanced dashboard</div>

</div>

<div className={classes.column4} style={{ textAlign: "center", paddingTop: "45px" }}>
<img src={B3} width="80" style={{paddingBottom:"15px"}}/>
<div className={classes.subtext2}>Brokerage, office<br />
&amp; agent KPIs</div>
</div>

<div className={classes.column4} style={{ textAlign: "center", paddingTop: "45px" }}>
<img src={B4} width="80" style={{paddingBottom:"15px"}}/>
<div className={classes.subtext2}>Lead capture/response<br />
routing &amp; tracking</div>
</div>




</div>
</Container>

<Container>
<div className={classes.top} style={{textAlign:"center"}}>


<div className={classes.column4} style={{ textAlign: "center", paddingTop: "45px" }}>
<img src={B5} width="80" style={{paddingBottom:"15px"}}/>
<div className={classes.subtext2}>Lead generation,<br />
parsing &amp; scrubbing</div>

</div>

<div className={classes.column4} style={{ textAlign: "center", paddingTop: "45px" }}>
<img src={B6} width="80" style={{paddingBottom:"15px"}}/>
<div className={classes.subtext2}>Customer activity<br />
workflows &amp; task coaching</div>

</div>

<div className={classes.column4} style={{ textAlign: "center", paddingTop: "45px" }}>
<img src={B7} width="80" style={{paddingBottom:"15px"}}/>
<div className={classes.subtext2}>Document<br />
management</div>
</div>

<div className={classes.column4} style={{ textAlign: "center", paddingTop: "45px" }}>
<img src={B8} width="80" style={{paddingBottom:"15px"}}/>
<div className={classes.subtext2}>Agent-protected<br />
databases</div>
</div>




</div>
</Container>





<Container>
<div className={classes.top} style={{textAlign:"center"}}>


<div className={classes.column4} style={{ textAlign: "center", paddingTop: "45px" }}>
<img src={B9} width="80" style={{paddingBottom:"15px"}}/>
<div className={classes.subtext2}>CMA Wizard</div>

</div>

<div className={classes.column4} style={{ textAlign: "center", paddingTop: "45px" }}>
<img src={B10} width="80" style={{paddingBottom:"15px"}}/>
<div className={classes.subtext2}>Team capable</div>

</div>


</div>
</Container>
<a id="demo"></a>
</div>








<div style={{backgroundColor:"#ffffff", paddingBottom:"60px", textAlign:"center", paddingRight:"30px", paddingLeft:"30px"}}>
<Container>
  <h1 className={classes.Heading2} style={{paddingTop:"70px"}}>
        Tour the BOSS
        </h1>
        <h2 className={classes.subtext} style={{paddingBottom:"40px"}}>Request your personal consultation with our broker<br/>
        development team using the form below, or call 833-978-1196 to speak to us today.</h2>
        <Formboss/>
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
                      “Elevate BOSS&reg; has helped<br />
                      my independent office<br />
                      compete against the<br />
                      big box brands.”
                      <br /><br />
                      <div className={classes.Heading3}>Joe J.</div>
                      Nashville, TN
                      </div>
                </div>

                <div className={classes.flexItem2} style={{padding:"30px", textAlign:"center"}}>
                <img src={Quote} width="80" style={{paddingBottom:"15px"}}/>
                      <div className={classes.subtext}>  
                      “Our agents love<br />
                      all of the technology<br />
                      and marketing tools we now<br />
                      offer with Elevate.”
                      <br /><br />
                      <div className={classes.Heading3}>Jenn &amp; Mark N.</div>
                      Los Angeles, CA
                        </div>
                </div>

                <div className={classes.flexItem2} style={{padding:"30px", textAlign:"center"}}>
                <img src={Quote} width="80" style={{paddingBottom:"15px"}}/>
                      <div className={classes.subtext}>  
                      “I went from 13 vendors down<br />
                      to 3 with Elevate. Not only<br />
                      did I save tons of money, but my stress<br />
                      level seriously dropped!”
                      <br /><br />
                      <div className={classes.Heading3}>Jacob M.</div>
                     Worcester, MA
                        </div>
                </div>


      </div>

        
    </Container>
</div>


<div style={{paddingTop:"50px", paddingBottom:"50px",}}>
        
        
        <Container>
                        <div style={{textAlign:"center", paddingRight:"25px", paddingLeft:"25px", paddingBottom:"25px"}}>
                            <div className={classes.Heading2}>Brokerage Technology Checklist<br />
                            FREE DOWNLOAD</div>
                            <div className={classes.subtext}>Download your comprehensive guide to selecting the right technology partner for your brokerage. Includes the top 4 questions to ask tech companies to separate potential partners from vendors, and a checklist of features &amp; functionality every brokerage must have!</div>     
                            
                        </div>
   
            <div className={classes.flexContainer}>
                <div className={classes.flexItem} style={{padding:"30px", textAlign:"center"}}>
                <Formchecklist/>
                </div>

                <div className={classes.flexItem} style={{padding:"30px", textAlign:"center"}}>
                <img src={Cover} width="100%" style={{paddingBottom:"15px"}}/>
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
    paddingBottom: "20px",
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
}))(Boss);
