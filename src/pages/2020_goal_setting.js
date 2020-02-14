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
import FormGoalsInitial from "../components/FormGoalsInitial";

const Goal = ({ children, classes, data, tags }) => {
  const postNode = {
      title: `2020 Goal Setting - ${config.siteTitle}`,
  };

  var showPop = false;
  var foundSkippop = false;
  if(typeof window != 'undefined'){
    if(window.location.search.length > 1){
      var values = window.location.search.substring(1);
      var valueArray = values.split("&");
      console.log(valueArray);
      valueArray.forEach(function(element){
        var pieces = element.split("=");
        if(pieces[0] == "skippop"){
          foundSkippop = true;
        }
      })
      
    }
    if(!foundSkippop){
      showPop = true;
    }
  }

  return (
    <div>
      {showPop && (
    <FormGoalsInitial />
    )}
<div className={classes.root}>
      <Helmet>
              <title>{`2020 Goal Setting - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="2020_goal_setting" customTitle />


      
      <div style={{paddingTop:"90px", paddingBottom:"50px",}}>
        <Container>
        <div className={classes.heading}>2020 GOAL SETTING SELF-EVALUATION</div>
        <div className={classes.subHeading2}><div className={classes.bold}>With #1 Team Leader - Matt O'Neill</div>
                            <br />
                            <div className={classes.subtext}>
                            Make 2020 your BEST YEAR YET with Matt's popular "Goal Setting" workshop.<br />
                            We've captured it and have it on demand below so you can work through it at your own pace.
                            </div>
        
        </div>

                           
        </Container>
      </div>


      <BgSectionExternalGoals bgImage={Matto} secTitle="FREE DOWNLOAD" secLink="/assets/Elevate_GoalSettingWorkshop_FreeDownload.pdf" secButton="Download Now" secImage={Goalspic}>
      Broken down into the 7 key elements in life, be sure to print this worksheet before you stream Matt’s videos.  And, have a pen handy because you’ve got work to do!
        </BgSectionExternalGoals>
      
      
      
      <div style={{paddingBottom:"60px",}}>
        <Container>

        <div style={{textAlign:"center", paddingBottom:"45px", padding:"25px", paddingTop:"65px"}}><div className={classes.subHeading}>STREAM ON-DEMAND VIDEO WITH MATT O'NEILL</div>
  
   <br />
                            <div className={classes.subtext} style={{paddingBottom:"20px"}}>
                            Make 2020 your BEST YEAR YET with Matt's popular "Goal Setting" workshop.<br />
                            We've captured it and have it on demand below so you can work through it at your own pace.
                            <br />
                            </div>

                            

                            </div>

                            <div style={{textAlign: "center", maxWidth:"700px",marginLeft:"auto",marginRight:"auto"}}>
        <div style={{ textAlign: "center"}} className={classes.videoEmbed}>
                        <iframe className={classes.videoContainer} src="https://www.youtube.com/embed/UoFQnPfTRyQ"
                         frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        </div>
            
        </Container>
</div> 
      










        <div style={{backgroundColor:"#f7f7f7",}}>
      <Container>

        <div >
            <div style={{ maxWidth: "900px", backgroundColor: "#f7f7f7", marginRight:"auto",marginLeft:"auto", paddingTop:"60px", paddingBottom:"60px"}}>
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
