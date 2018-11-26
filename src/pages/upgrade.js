import React from "react";
import Link from "gatsby-link";
import withStyles from "elevate-ui/withStyles";
import Container from "../components/Container";
import SEO from "../components/SEO";
import Logo from "../components/Logo";
import Hr from "elevate-ui/Hr";
import WistiaVideo from "../components/WistiaVideo";
import Chat from "elevate-ui-icons/Chat";
import QuestionAnswer from "elevate-ui-icons/QuestionAnswer";
import ViewCarousel from "elevate-ui-icons/ViewCarousel";
import PlayCircleFilled from "elevate-ui-icons/PlayCircleFilled";
import LiveTv from "elevate-ui-icons/LiveTv";

const Upgrade = ({ classes }) => {

  return (
    <div className={classes.root}>
      <SEO />
      <Container>
        <div className={classes.top}>
          <div className={classes.centerHeading}>
            <div className={classes.heading}>Everything you need to know…</div>
            <div className={classes.bold}>about upgrading from Listingbook to Elevate</div>
          </div>
        </div>
      </Container>
      <Container>
        <div className={classes.section}></div>
        <div className={classes.top}>
          <div className={classes.column}> 
            <div className={classes.grayText}>
              <div className={classes.heading}>What is Elevate?</div>
              Developed by <a target="_blank" href="https://elmstreettechnology.com/">Elm Street Technology</a>, 
              <a target="_blank" href="https://tryelevate.com/">Elevate</a> is the <span className={classes.bold}>1st true Productivity Platform for real estate</span> and the next 
              evolution of all of the features and functionality that you love with Listingbook...plus many more.
            </div>
            <br/>
            <div className={classes.bold}>What does this upgrade mean if I’m an MLS?</div>
            You will receive all of the technology and support that you’ve always received, along with many new enhancements.  
            All upgrades will take place over the coming weeks, and the Elevate team will work closely with you on your communication rollout, 
            as well as sales &amp; support strategies.  In the meantime, please explore this page for an introduction to Elevate.
            <div style={{paddingTop:"30px"}}>
             <a target="_blank" href="/assets/Elevate_Listingbook_Feature_Comparison.pdf" className={classes.getStartedLink}>
              <ViewCarousel color="#FFFFFF" size={34} className={classes.iconPosition}/> View Feature Comparison Chart
            </a>
            </div>
            <div>
            <Hr style={{ marginTop: "40px",marginBottom: "40px"}}/>
            </div>
            <div className={classes.bold}>What does this upgrade mean if I’m an agent?</div>
            <div style={{paddingBottom:"30px"}}>
            You will receive all of the technology and support that you’ve always received, but with more features, more power, 
            and more ease-of-use.  All upgrades will take place over the coming weeks, and the Elevate team will communicate 
            with you throughout this process with more definitive timelines.  In the meantime, please explore this page for an introduction to Elevate.
            </div>
            <div>
             <a target="_blank" href="https://elmstreettechnology.zendesk.com/hc/en-us/sections/360002618972-Listingbook-to-Elevate-" className={classes.getStartedLink}>
              <QuestionAnswer color="#FFFFFF" size={28} className={classes.iconPosition} style={{top:"9px",right:"5px"}}/> FAQ's and Getting Started Guide
            </a>
            </div>

          </div>
          
          <div className={classes.column}>
            <div className={classes.infoboxGray}>
                <div>
                <div className={classes.heading}>HELP CENTER</div>
                <span className={classes.bold}>Transitioning from Listingbook to Elevate?</span>
                <br/>
                Start here…
                </div>
                <div style={{paddingTop:"30px",paddingBottom:"30px"}}>
                <a target="_blank" href="https://elmstreettechnology.zendesk.com/hc/en-us/articles/360018375372-Listingbook-to-Elevate-FAQs" className={classes.getStartedLink}>
                  <QuestionAnswer color="#FFFFFF" size={28} className={classes.iconPosition} style={{top:"9px",right:"5px"}}/> Frequently Asked Questions</a>
                </div>
                <div >
                <a target="_blank" href="https://elmstreettechnology.zendesk.com/hc/en-us/articles/360018360772-Upgrade-from-Listingbook-Getting-Started-With-Elevate" className={classes.getStartedLink}>
                  <PlayCircleFilled color="#FFFFFF" size={34} className={classes.iconPosition}/> Getting Started with Elevate</a>
                </div>
            </div>
            <div className={classes.infoboxTeal}>
              <div>
                <div className={classes.heading} style={{color:"#FFFFFF"}}>ATTEND A WEBINAR</div>
                <span className={classes.bold}>Live training webinars every <br/>Monday at 10am &amp; 4pm EST</span>
              </div>
                <div style={{paddingTop:"30px"}}>
                <a target="_blank" href="https://elmstreettechnology.zendesk.com/hc/en-us/articles/360019751351-Live-Training-Webinars-for-Former-Listingbook-Agents" 
                    className={classes.darkTealLink} style={{backgroundColor:"#3e928b"}}>
                    <LiveTv color="#FFFFFF" size={30} className={classes.iconPosition} style={{top:"8px",right:"6px"}}/>
                    Sign Up Now</a>
                </div>
                <div style={{paddingTop:"30px"}}>
                <span className={classes.bold} style={{color:"#FFFFFF"}}>Can’t attend a live training?</span>
                </div>
                No worries, here’s a recording…
                <div style={{paddingTop:"30px"}} >
                  <a target="_blank" href="https://tryelevate.wistia.com/projects/ibbj6zglui" className={classes.darkTealLink} style={{backgroundColor:"#3e928b"}}>On Demand Recordings</a>
                </div>
            </div>

            <div style={{textAlign:"center"}}>
              <div className={classes.heading}>Have Questions Now?</div>
              <a href="" className={classes.getStartedLink} onClick={() => { if (window.zE) window.zE.activate() }}>
                <Chat color="#FFFFFF" size={28} className={classes.iconPosition} style={{top:"10px"}}/> Chat with Success Coach
              </a>
            </div>

          </div>

        </div>
      </Container>
      <Container>
      <div className={classes.section}></div> 
        <div className={classes.top}>
          <div className={classes.centerHeading}>
            <div className={classes.heading}>
              <div style={{display:"inline",top: "-8px",marginRight:"6px", position:"relative"}}>Welcome to</div>
              <Logo />
            </div>
            <div className={classes.bold}>More features.  More support.  More speed.<br/>
            Easier than ever before.
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <div className={classes.section}></div>
        <div className={classes.top}>
          <div className={classes.column}>
            <div className={classes.videoBorder}>
              <WistiaVideo hashedId="ecdwsmxj9y"/>
            </div>
            <div style={{fontSize:"12px",paddingRight:"30px",paddingLeft:"30px"}}>
              <span className={classes.bold}>An Introduction to Elevate CRM</span>
              <div style={{float:"right",display:"inline"}}>runtime:  20:12</div>

            </div>
          </div>
          <div className={classes.column}>
            <div className={classes.videoBorder}>
              <WistiaVideo hashedId="xhsd39wnip"/>
            </div>
            <div style={{fontSize:"12px",paddingRight:"30px",paddingLeft:"30px"}}>
              <span className={classes.bold}>An Introduction to the Site Editor</span>
              <div style={{float:"right",display:"inline"}}>runtime:  13:14</div>

            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};


export default withStyles((theme) => ({
  root: {
    position: "relative",
    paddingTop: "96px",
    paddingBottom: "192px",
    lineHeight: "1.75em",
  },
  top: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
  },
  section:{
    paddingTop: "60px",
  },
  heading: {
    color: theme.colors.secondary,
    fontSize: "32px",
    fontWeight: "700",
    marginRight: "auto",
    paddingBottom: "20px",
  },
  centerHeading:{
    alignItems: "center",
    width: "100%",
    textAlign: "center",
  },
  bold:{
    fontWeight:"700",
  },
  column:{
    width:"530px",
    maxWidth: "100%",
    paddingRight:"10px",
    paddingLeft:"10px",
    verticalAlign: "top",
  },
  getStartedLink: {
    width: "250px",
    alignContent: "center",
    justifyContent: "center",
    fontSize: "14px",
    fontWeight: "700",
    letterSpacing: ".25px",
    backgroundColor: theme.colors.secondary,
    color: "#FFF",
    textDecoration: "none",
    padding: "14px 16px",
    borderRadius: "4px",
    margin: "16px auto",
  },
  darkTealLink: {
    width: "250px",
    alignContent: "center",
    justifyContent: "center",
    fontSize: "14px",
    fontWeight: "700",
    letterSpacing: ".25px",
    backgroundColor: theme.colors.secondaryDark,
    color: "#FFF",
    textDecoration: "none",
    padding: "14px 16px",
    borderRadius: "4px",
    margin: "16px auto",
  },
  grayLink: {
    width: "250px",
    alignContent: "center",
    justifyContent: "center",
    fontSize: "14px",
    fontWeight: "700",
    letterSpacing: ".25px",
    backgroundColor: theme.colors.gray400,
    color: "#FFF",
    textDecoration: "none",
    padding: "14px 16px",
    borderRadius: "4px",
    margin: "16px auto",
  },
  grayText:{
    color: theme.colors.gray800,
  },
  infoboxGray: {
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.gray100,
    color: theme.colors.gray800,
    textDecoration: "none",
    padding: "40px 10px",
    borderRadius: "4px",
    margin: "30px auto",
    textAlign: "center",
  },
  infoboxTeal: {
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.secondary,
    color: theme.colors.gray800,
    textDecoration: "none",
    padding: "40px 10px",
    borderRadius: "4px",
    margin: "30px auto",
    textAlign: "center",
  },
  videoBorder: {
    borderStyle:"solid",
    borderWidth: "1px",
    borderColor: theme.colors.gray400,
  },
  iconPosition:{
    position: "relative",
    top:"12px",
    right:"4px"
  }

}))(Upgrade);
