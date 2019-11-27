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
import Matto from "../images/matto_bg.jpg";
import Spro from "../images/socialpro_bg.jpg";
import BgSectionExternal from "../components/2020BgSectionExternal";
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

<Container>
      <div className={classes.top} style={{paddingBottom:"15px", paddingRight:"25px", paddingLeft:"25px", paddingTop:"55px"}}>
          <div className={classes.centerHeading}>
                            <div className={classes.subtext}>As we set our personal and professional growth goals for the coming year, successful real estate agent Matt O’Neill outlines the 7 elements in his life that he evaluates every year, how he’s constantly striving for self-improvement,<br />
                            and how you - our audience - can get involved with your own self-evaluation.<br /><br />

                            -----
                            <br /><br />
                            <div className={classes.bold}>“A life dedicated to authentic relationships is a life free of regret.”</div>
                            </div>
                            <div className={classes.subHeading}>DAVID OSBORN</div>
          </div>
      </div>
</Container>

<Container>
<div style={{textAlign: "center", maxWidth:"800px", marginLeft:"auto",marginRight:"auto", paddingBottom:"55px"}}>
        <div style={{ textAlign: "center"}} className={classes.videoEmbed}>
                        <iframe className={classes.videoContainer} src="https://www.youtube.com/embed/biy0h_CeCto"
                         frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
</div>
</Container>

<Container>
      <div style={{paddingBottom:"55px", paddingRight:"25px", paddingLeft:"25px",}}>
          <div className={classes.centerHeading}>
          <span className={classes.subHeading}>KEY DISCUSSION POINTS</span><br /><br />
                            <div className={classes.subtext}><span className={classes.bold}>6:14</span> Business &amp; Career<br />
                            <span className={classes.bold}>6:51</span> Health &amp; Fitness<br />
                            <span className={classes.bold}>7:08</span> Family, Friendships &amp; Relationships<br />
                            <span className={classes.bold}>7:55</span> Lifestyle &amp; Adventure<br />
                            <span className={classes.bold}>8:20</span> Financial &amp; Investment<br />
                            <span className={classes.bold}>8:32</span> Personal Growth &amp; Intellectual Development<br />
                            <span className={classes.bold}>9:02</span> Practicing Appreciation &amp; Gratitude<br />
                            <span className={classes.bold}>10:00</span> Final “Focusing” Question (Courtesy of Gary Keller)<br />
                            </div>
                        
          </div>
      </div>
</Container>

<div style={{paddingTop:"20px", paddingBottom:"30px", backgroundColor:"#f2f2f2"}}>
    <Container>
    <div style={{textAlign:"center", paddingBottom:"5px", padding:"33px"}}>
                            <div style={{ textAlign: "center",paddingBottom:"22px" }}>
                                <img src={Leadsmo} width="270" />
                            </div>
                                 <div className={classes.heading}>LEAD GENERATION MASTERMIND</div>
                                    <div className={classes.subtext}><span className={classes.bold}>Attend Matt’s “Mastermind” in Charleston, SC on Dec. 11th to learn<br />
                                    his lead generation secrets and how he’s closing out the year at over $225M.</span>
                                    <br />
                                    <br />
                                    <a target="_blank" href="https://www.eventbrite.com/e/vip-mastermind-for-real-estate-professionals-charleston-nc-dec-11th-registration-83687943893?aff=Blog" className={classes.getStartedLink}>
                                                                    Register Today
                                                                    </a>
            
                                    </div>
    </div>

        
    </Container>
</div>






<BgSectionExternal bgImage={Matto} secTitle="2020 GOAL SETTING" secLink="https://attendee.gotowebinar.com/register/6407595729034326795?source=blog" secButton="Register For Webinar">
Register for Matt’s upcoming webinar on Dec. 17th “2020 Goal Setting. Make It Your Best Year Yet!” and spend an hour deep-diving into your 2020 marketing strategy.
</BgSectionExternal>




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
    fontSize: "18px",
    fontWeight: "700",
    lineHeight: "28px",
    color: "#55c3ba",
    letterSpacing: ".14px",
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
