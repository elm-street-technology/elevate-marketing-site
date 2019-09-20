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
      <SEO postNode={postNode} pagePath="contact" customTitle />

      <Container>
      <div className={classes.top} style={{paddingBottom:"40px"}}>
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

<BrightBgSectionExternal bgImage={Eboss} secTitle="BROKERS...Meet the BOSS" secLink="#" secButton="request a demo today">
              One singular solution for all of your real estate needs.
</BrightBgSectionExternal>



<div style={{paddingTop:"50px", paddingBottom:"50px",}}>
        <Container>
            <div className={classes.flexContainer}>
                <div className={classes.flexItem}>

                   
                <iframe width="100%" height="300" src="https://www.youtube.com/embed/fGRZ8-mLwnQ?rel=0"
          frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    

                </div>
                <div className={classes.flexItem} style={{padding:"20px",}}>
                <div style={{ textAlign: "left",paddingBottom:"22px" }}>
                            <img src={Bosslogo} width="290" />
                            </div>
                <div className={classes.subtext}>Andrew Strauch of Bright MLS and Prem Luthra of Elevate sit down to discuss the all-in-one productivity and marketing solution that every broker wants...and needs.</div>
                    
                </div>
            </div>
        </Container>
</div>

<div style={{paddingTop:"20px", paddingBottom:"50px", backgroundColor:"#f7f7f7"}}>
    <Container>
    <div style={{textAlign:"center", paddingBottom:"5px", paddingTop:"25px"}}><div className={classes.heading}>The Power of PRODUCTIVITY</div>
    <div className={classes.subtext}><strong>One</strong> vendor. <strong>One</strong> point of contact. <strong>One</strong> solution. <strong>For you entire office.</strong></div></div>
            <div className={classes.flexContainer}>
                <div className={classes.flexItem3} style={{padding:"30px",}}>  
                      <div className={classes.subtext}>• Brokerage recruiting module<br />
                          • Brokerage-level advanced dashboard<br />
                          • Brokerage, office &amp; agent KPIs<br />
                          • Lead capture / response routing &amp; tracking<br />
                          • Team capable<br />
                          • Lead generation, parsing &amp; scrubbing<br />
                          • Customer activity workflows &amp; task coaching
                      </div>
                </div>
                <div className={classes.flexItem2} style={{padding:"30px",}}>
                      <div className={classes.subtext}>• CMA Wizard<br />
                          • Document management<br />
                          • Agent-protected databases<br />
                          • Email &amp; Text Campaigns<br />
                          • Voiceover IP (VoIP)<br />
                          • Bright MLS Integration</div>
                </div>

                <div className={classes.flexItem2} style={{padding:"30px",}}>
                <div style={{ textAlign: "center" }}>
                            <img src={Ask} width="260" />
                            </div>
                </div>
            </div>

        
    </Container>
</div> 


<BrightBgSectionExternal bgImage={Spro} secTitle="AGENTS...Here’s your all-in-one marketing solution" secLink="#" secButton="request a demo today">
                Turn your online marketing from a toy into a tool. Automate your social media marketing so you can focus on what
                matters the most...growing your sphere &amp; selling more homes, faster.
</BrightBgSectionExternal>



<div style={{paddingTop:"50px", paddingBottom:"50px",}}>
        <Container>
            <div className={classes.flexContainer}>
                <div className={classes.flexItem}>

                   
                <iframe width="100%" height="300" src="https://www.youtube.com/embed/fGRZ8-mLwnQ?rel=0"
          frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    

                </div>
                <div className={classes.flexItem} style={{padding:"20px",}}>
                <div style={{ textAlign: "left",paddingBottom:"22px" }}>
                            <img src={Sprologo} width="290" />
                            </div>
                <div className={classes.subtext}>Andrew Strauch of Bright MLS and Prem Luthra of Elevate sit down to discuss the all-in-one productivity and marketing solution that every broker wants...and needs.</div>
                    
                </div>
            </div>
        </Container>
</div>



      <Container>

        <div >
            <div style={{ maxWidth: "900px", backgroundColor: "#ffffff", marginRight:"auto",marginLeft:"auto"}}>
                <div className={classes.landingHeaderStyle}>
                   
                </div>
                <div style={{ paddingLeft: "10px", paddingRight: "10px"}}>
                    <FormBright />
                </div>
                <div>
                    
                </div>
            </div>
        </div>
      </Container>
    </div>
  );
};

export default withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    padding: "0 8px",
    margin: "70px auto",
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
