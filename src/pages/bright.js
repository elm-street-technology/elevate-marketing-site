import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import FormBright from "../components/FormBright";
import Brightlogo from "../images/brightmls_logo.png";
import Bosslogo from "../images/eboss_logo.png";
import Sprologo from "../images/spro_logo.png";
import Ask from "../images/askhow.png";
import Eboss from "../images/eboss_bg.jpg";
import Spro from "../images/socialpro_bg.jpg";
import BrightBgSectionExternal from "../components/BrightBgSectionExternal";
import SEO from "../components/SEO";

const Bright = ({ children, classes, data, tags }) => {
  const postNode = {
      title: `Your Single Source Solution - ${config.siteTitle}`,
  };

  return (
<div className={classes.root}>
      <Helmet>
              <title>{`Your Single Source Solution - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="bright" customTitle />

<Container>
      <div className={classes.top} style={{paddingBottom:"40px", paddingRight:"15px", paddingLeft:"15px", paddingTop:"55px"}}>
          <div className={classes.centerHeading}>
                            <div className={classes.heading}>THE POWER OF</div>
                            <div style={{ textAlign: "center",paddingBottom:"22px" }}>
                            <img src={Brightlogo} width="180" />
                            </div>
                            <div className={classes.subtext}>Introducing a partnership designed to provide Bright MLS brokers,<br />
                              agents &amp; teams with the best marketing and productivity tools on the market.
                            </div>
          </div>
      </div>
</Container>

<BrightBgSectionExternal bgImage={Eboss} secTitle="BROKERS...Meet the BOSS" secLink="#form" secButton="request a demo today">
              One singular solution for all of your real estate needs. The 1st true productivity platform in real estate offers a more efficient, cost-effective way to increase production &amp; help your agents sell more homes...faster.
</BrightBgSectionExternal>










<div style={{paddingTop:"60px", paddingBottom:"50px", backgroundColor:"#f7f7f7"}}>
        <Container>
            <div className={classes.flexContainer}>
                <div className={classes.flexItem}>

                   
                <iframe width="100%" height="330" src="https://www.youtube.com/embed/wUNYSRnAbog?rel=0"
          frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    

                </div>
                <div className={classes.flexItem} style={{paddingLeft:"20px", paddingRight:"20px", paddingBottom:"20px",}}>
                <div style={{ textAlign: "left",paddingBottom:"22px" }}>
                            <img src={Bosslogo} width="270" />
                            </div>
                <div className={classes.subtext}>Join Andrew Strauch of Bright MLS and Prem Luthra of Elevate, as they sit down to discuss the all-in-one productivity and marketing solution that every broker wants...and needs. Available to Bright MLS brokers, this intuitive, comprehensive solution allows brokerages insight into the key performance indicators of their office, along with IDX websites, an advanced productivity CRM, dynamic MLS-fed CMA wizards, pay-per-click lead generation services, Voiceover IP, automated email, social media, text and blog campaigns, and more.</div>
                    
                </div>
            </div>
        </Container>
</div>

<div style={{paddingTop:"60px", paddingBottom:"50px", backgroundColor:"#ffffff"}}>
    <Container>
    <div style={{textAlign:"center", paddingBottom:"5px", padding:"25px"}}><div className={classes.heading}>The Power of PRODUCTIVITY</div>
    <div className={classes.subtext}><strong>One</strong> vendor. <strong>One</strong> point of contact. <strong>One</strong> solution. <strong>For you entire office.</strong></div></div>
            <div className={classes.flexContainer}>
                <div className={classes.flexItem3} style={{padding:"20px",}}>  
                      <div className={classes.subtext}>• Brokerage recruiting module<br />
                          • Brokerage-level advanced dashboard<br />
                          • Brokerage, office &amp; agent KPIs<br />
                          • Lead capture / response routing &amp; tracking<br />
                          • Team capable<br />
                          • Lead generation, parsing &amp; scrubbing<br />
                          • Customer activity workflows &amp; task coaching
                      </div>
                </div>
                <div className={classes.flexItem2} style={{padding:"20px",}}>
                      <div className={classes.subtext}>• CMA Wizard<br />
                          • Document management<br />
                          • Agent-protected databases<br />
                          • Email &amp; Text Campaigns<br />
                          • Voiceover IP (VoIP)<br />
                          • Bright MLS Integration</div>
                </div>

                <div className={classes.flexItem2} style={{padding:"20px",}}>
                <div style={{ textAlign: "center" }}>
                            <img src={Ask} width="260" />
                            </div>
                </div>
            </div>

        
    </Container>
</div> 





<div style={{paddingBottom:"65px", backgroundColor:"#ffffff"}}>
    <Container>
    
            <div className={classes.flexContainer}>
                <div className={classes.flexItem2a} style={{paddingBottom:"30px",}}>  
                <div style={{ textAlign: "center" }} className={classes.videoEmbed}>
                      <iframe className={classes.videoContainer} src="https://www.youtube.com/embed/sgSS6uA_t-Q"
                      frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <br />
                <div className={classes.subtext} style={{ textAlign: "center" }}>Elevate BOSS&reg; for BrightMLS</div>
                </div>
                <div className={classes.flexItem2a} style={{paddingBottom:"30px",}}>
                <div style={{ textAlign: "center" }} className={classes.videoEmbed}>
                      <iframe className={classes.videoContainer} src="https://www.youtube.com/embed/8YIWu5FqMeQ"
                      frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <br />
                <div className={classes.subtext} style={{ textAlign: "center" }}>Elevate CRM&reg; for BrightMLS</div>
                </div>

               
            </div>

        
    </Container>
</div> 








 



<a id="form"></a>
<div style={{backgroundColor:"#f7f7f7",}}>
      <Container>

        <div >
            <div style={{ maxWidth: "900px", backgroundColor: "#f7f7f7", marginRight:"auto",marginLeft:"auto", paddingTop:"60px", paddingBottom:"60px"}}>
            <div className={classes.heading}>Schedule Your Confidential One-On-One</div>
            <div className={classes.subtext} style={{textAlign:"center"}}>with the Elevate Brokerage Development Team</div>
                <div style={{ paddingLeft: "30px", paddingRight: "30px", paddingTop:"25px"}}>
                    <FormBright />
                </div>
                <div>
                    
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
    letterSpacing: ".14px",
    color: "#f15623",
    textAlign: "center",
    marginBottom: "12px",
  },

  subtext: {
    fontSize: "16px",
    fontWeight: "300",
    lineHeight: "24px",
    color: "#777777",
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
    
  },

  centerHeading:{
    alignItems: "center",
    width: "100%",
    textAlign: "center",
  },

  subHeading: {
    fontSize: "18px",
    lineHeight: "28px",
    letterSpacing: ".08px",
    textAlign: "center",
    margin: "0 auto 36px",
  },
  landingHeaderStyle:{
    textAlign:"center",
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
        maxWidth: "26%",
        width: "26%",
        paddingRight: "20px",
        paddingBottom: "0px",
    },
  },

  flexItem2a: {
    maxWidth: "100%",
    width: "100%",
    paddingRight: "0px",
    paddingBottom: "25px",
  
  
    [theme.breakpoints[900]]: {
        maxWidth: "50%",
        width: "50%",
        paddingLeft: "15px",
        paddingRight: "15px",
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
}))(Bright);
