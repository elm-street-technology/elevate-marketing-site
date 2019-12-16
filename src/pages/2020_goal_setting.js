import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import FormBright from "../components/FormBright";
import Brightlogo from "../images/brightmls_logo.png";
import Leadsmo from "../images/leads_mo.gif";
import Sprologo from "../images/spro_logo.png";
import Ask from "../images/askhow.png";
import FormGoals from "../components/FormGoals";
import Matto from "../images/matto_bg2.jpg";
import MattLogo from "../images/matt_mentor.png";
import Blogbg from "../images/365_bg.jpg";
import Goalspic from "../images/goals_cover.jpg";
import Spro from "../images/socialpro_bg.jpg";
import BgSectionExternalGoals from "../components/BgSectionExternalGoals";
import BrightBgSectionExternal from "../components/BrightBgSectionExternal";
import SEO from "../components/SEO";

const Goal = ({ children, classes, data, tags }) => {
  const postNode = {
      title: `2020 Goal Setting - ${config.siteTitle}`,
  };

  return (
<div className={classes.root}>
      <Helmet>
              <title>{`2020 Goal Setting - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="2020_goal_setting" customTitle />

      
      
      <div style={{paddingTop:"90px", paddingBottom:"20px",}}>
        <Container>
        <div className={classes.heading}>2020 GOAL SETTING WEBINAR</div>
        <div className={classes.subHeading2}><div className={classes.bold}>AUDIENCE GOODIES</div>
                            <br />
                            <div className={classes.subtext}>
                            
                            </div>
        
        </div>

                           
        </Container>
      </div>
      
      
      
      
      
      <div style={{paddingBottom:"30px",}}>
        <Container>

        <div style={{textAlign:"center", paddingBottom:"45px", padding:"25px"}}><div className={classes.subHeading}>ON-DEMAND WEBINAR RECORDING</div>
    <div className={classes.subHeading2}><div className={classes.bold}>COMING SOON!</div></div></div>



            <div className={classes.flexContainer}>
                <div className={classes.flexItem}>

                   
               
                    

                </div>
                <div className={classes.flexItem} style={{paddingLeft:"20px", paddingRight:"20px", paddingBottom:"20px",}}>
               
                <div className={classes.subtext}><div className={classes.sub}>Missed the webinar?</div>
                Looking for a repeat performance?<br />
                We’ve got you covered!  
                  <br /><br />
                Enjoy this 1-hour, on-demand recording of Matt O’Neill’s<br />
                “2020 Goal Setting” webinar.
</div>
                    
                </div>
            </div>
        </Container>
</div>


<BgSectionExternalGoals bgImage={Matto} secTitle="FREE WEBINAR DOWNLOADS" secLink="/assets/Elevate_GoalSettingWorkshop_FreeDownload.pdf" secButton="Download Now" secImage={Goalspic}>
Continue your preparation for making 2020 your best year yet with Matt’s “Wheel of Life” self-evaluation, PLUS his “magic” document: "Your Best Year Yet: Goal Setting Workshop".
        </BgSectionExternalGoals>






        <div style={{backgroundColor:"#ffffff",}}>
      <Container>

        <div >
            <div style={{ maxWidth: "900px", backgroundColor: "#ffffff", marginRight:"auto",marginLeft:"auto", paddingTop:"60px", paddingBottom:"60px"}}>
                <div className={classes.landingHeaderStyle}>
                   
                </div>
                <div style={{ paddingLeft: "10px", paddingRight: "10px"}}>
                    <FormGoals />
                </div>
                <div>
                    
                </div>
            </div>
        </div>
      </Container>
      </div>




      <div style={{paddingBottom:"30px", backgroundColor:"#373b3b"}}>
        <Container>

        <div style={{textAlign:"center", paddingBottom:"65px", padding:"25px", paddingTop:"55px"}}><div className={classes.subHeading}>MONDAY MORNING MENTOR<br />
        with Matt O’Neill</div>
    <div className={classes.subHeading2} style={{color:"#ffffff"}}><div className={classes.bold}>Kick-Start Your Week with 30-Minutes of Awesomeness</div></div></div>



            <div className={classes.flexContainer}>
                <div className={classes.flexItem}>

                <div style={{ textAlign: "center",paddingBottom:"22px" }}>
                            <img src={MattLogo} width="290" />
                            </div>
               
                    

                </div>
                <div className={classes.flexItem} style={{paddingLeft:"20px", paddingRight:"20px", paddingBottom:"20px",}}>
               
                <div className={classes.subtext} style={{color:"#f7f7f7"}}>Launching Monday, January 6th on the <a target="_blank" href="https://www.facebook.com/TryElevateRE/" style={{color:"#54a59d"}}>Elevate Facebook channel.</a>  All you need to do is follow us to receive alerts.
                      <br /><br />
                      Kick-start your week with a 30-minute, Facebook live stream session with Matt O’Neill on the <a target="_blank" href="https://www.facebook.com/TryElevateRE/" style={{color:"#54a59d"}}>@TryElevateRE</a> channel.
                      <br /><br />
                      Explore hot real estate topics each week such as:<br />
                      •	Goal Setting<br />
                      •	Lead Generation<br />
                      •	Professional Growth<br />
                      •	Work / Life Balance<br />
                      •	Online Marketing<br />
                      •	And much more<br />

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
    color: "#55c3ba",
    textAlign: "center",
    marginBottom: "12px",
  },

  bold:{
    fontWeight:"700",
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
    fontSize: "24px",
    fontWeight: "700",
    lineHeight: "28px",
    color: "#55c3ba",
    letterSpacing: ".14px",
    textAlign: "center",
    margin: "0 auto 5px",
  },

  subHeading2: {
    fontSize: "18px",
    fontWeight: "700",
    lineHeight: "28px",
    color: "#373b3b",
    letterSpacing: ".14px",
    textAlign: "center",
    margin: "0 auto 5px",
  },

  sub: {
    fontSize: "18px",
    fontWeight: "700",
    lineHeight: "28px",
    color: "#55c3ba",
    letterSpacing: ".14px",
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

  getStartedLink: {
    minWidth: "250px",
    maxWidth: "250px",
    alignContent: "center",
    justifyContent: "center",
    fontSize: "16px",
    fontWeight: "600",
    display: "block",
    letterSpacing: ".25px",
    backgroundColor: "#5dc4ba",
    color: "#ffffff",
    textDecoration: "none",
    padding: "14px 16px",
    borderRadius: "4px",
    margin: "16px auto",
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
}))(Goal);
