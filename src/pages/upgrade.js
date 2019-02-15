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

          <div style={{
            padding: "20px",
            backgroundColor: "#f159535e",
          marginBottom: "30px",lineHeight:"2em"}}>
            <div style={{fontWeight:"700",width:"100%",textAlign:"center",fontSize:"24px",paddingBottom:"10px"}}>IMPORTANT</div>
            <div style={{ textAlign: "center" }}>The following MLSes have been upgraded to Elevate and will no longer be able to log in at Listingbook.com:<br/>
              <span style={{ fontWeight: "700" }}>ARMLS, BAREIS, CARETS, FMLS, JSMLS, MARISMO, MIREAL, MRED, NEFMLS, SABOR, SDAR, SEFLAMLS, SWFLAMLS, TAR, Wilmington</span></div>
            <div style={{ textAlign: "center" }}>
              Please follow instructions to log in to your new Elevate account provided via email and/or your new Elevate morning report. <br/>
              <a href="https://elmstreettechnology.zendesk.com/hc/en-us/articles/360018375372-Listingbook-to-Elevate-FAQs#help-login" target="_blank">
              Click here</a> for more info on logging in to Elevate, 
              or <a href="" onClick={(e) => { e.preventDefault(); if (window.zE) window.zE.activate() }}>chat with an Elevate Success Coach now</a>.
              </div>
          </div>


          <div className={classes.centerHeading}>
            <div className={classes.heading}>Everything you need to know…</div>
            <div className={classes.bold}>about upgrading from Listingbook to Elevate</div>
            <div className={classes.grayText}>
              <br/>
              Welcome to Elevate!  Developed by <a target="_blank" href="https://elmstreettechnology.com/">Elm Street Technology</a>,
              <a target="_blank" href="https://tryelevate.com/">Elevate</a> is the  
               <span className={classes.bold}> 1st true Productivity Platform for real estate </span> 
               and the next evolution of all of the features &amp; functionality that you love with Listingbook...plus much more.  
            </div>
            <div>
              <Hr style={{ marginTop: "40px", marginBottom: "40px" }} />
            </div>
          </div>
        </div>
      </Container>
      
      <Container>
        <div className={classes.top}>
          <div className={classes.column} style={{ height:"670px"}}> 
            <div className={classes.grayText} style={{ textAlign: "center" }}>
              <div className={classes.heading}>Getting Started Videos</div>
                <div>
                Explore everything that is Elevate
                  with these <span className={classes.bold}> easy-to-digest videos </span>
                  designed to introduce you to all of the new features & functionality that you and your clients will LOVE.
                </div>
                <div style={{ paddingTop: "30px" }}>
                  <a target="_blank" href="https://tryelevate.wistia.com/projects/ibbj6zglui"
                    className={classes.darkTealLink} style={{ backgroundColor: "#3e928b" }}>
                    <LiveTv color="#FFFFFF" size={30} className={classes.iconPosition} style={{ top: "8px", right: "6px" }} />
                    Watch Now</a>
                </div>
            </div>
            
            <div>
            <Hr style={{ marginTop: "40px",marginBottom: "40px"}}/>
            </div>
            <div style={{ textAlign: "center" }}>
              <div className={classes.heading}>FAQ</div>
              <div style={{paddingBottom:"30px"}}>
                Want to understand how the transition
                  from Listingbook to Elevate
                  will occur? Curious about what will
                  happen to your client's information?
                <span className={classes.bold}> We've got the answers!</span>
    
              </div>
              <div>
                <a target="_blank" href="https://elmstreettechnology.zendesk.com/hc/en-us/articles/360018375372-Listingbook-to-Elevate-FAQs" className={classes.getStartedLink}>
                  <QuestionAnswer color="#FFFFFF" size={28} className={classes.iconPosition} style={{top:"9px",right:"5px"}}/> View FAQ
                </a>
              </div>
            </div>

          </div>
          
          <div className={classes.column}>
            <div className={classes.infoboxTeal}>
              <div>
                <div className={classes.heading} style={{color:"#FFFFFF"}}>Training Webinars</div>
                <div>
                  Join us for a live walk-through
                          of Elevate. We will <span className={classes.bold}> answer all
                          of your burning questions </span>
                          about how this exciting new solution
                          will work for you & your clients.

                </div>
                <br/>View our upcoming schedule & register TODAY. 
              </div>
                <div style={{paddingTop:"30px"}}>
                <a target="_blank" href="https://elmstreettechnology.zendesk.com/hc/en-us/articles/360019751351-Live-Training-Webinars-for-Former-Listingbook-Agents" 
                    className={classes.darkTealLink} style={{backgroundColor:"#3e928b"}}>
                    <LiveTv color="#FFFFFF" size={30} className={classes.iconPosition} style={{top:"8px",right:"6px"}}/>
                    Register Today</a>
                </div>
                <div style={{paddingTop:"30px"}}>
                <span className={classes.bold} style={{color:"#FFFFFF"}}>Can’t attend a live training?</span>
                </div>
                No worries, we’ve got recordings for you:
                <div style={{paddingTop:"30px"}} >
                  <a target="_blank" href="https://tryelevate.wistia.com/projects/ibbj6zglui" className={classes.darkTealLink} style={{backgroundColor:"#3e928b"}}>On Demand Recordings</a>
                </div>
            </div>

            <div className={classes.infoboxGray}>
              <div style={{textAlign:"center"}}>
                <div className={classes.heading}>Have Questions Now?</div>
                <a href="" className={classes.getStartedLink} onClick={(e) => { e.preventDefault(); if (window.zE) window.zE.activate() }}>
                  <Chat color="#FFFFFF" size={28} className={classes.iconPosition} style={{top:"10px"}}/> Chat with Success Coach
                </a>
              </div>
            </div>

          </div>

        </div>
      </Container>
      <Container>
        <div className={classes.top}>
          <div className={classes.section}>
            <div style={{ paddingTop: "10px" }} className={classes.centerHeading} >
              <div className={classes.heading}>Talking to your clients about their NEW experience with Elevate</div>
              Your clients will LOVE everything that Elevate has to offer and we've made it easy for you to share it with them.  
              Just <span className={classes.bold}> share the link below with your clients </span> to direct them to a special FAQ experience we've created just for them.
            <div style={{ paddingTop: "30px" }}>
                <a target="_blank" href="https://elmstreettechnology.zendesk.com/hc/en-us/sections/360003180791-Listingbook-to-Elevate-Upgrade-for-Clients" className={classes.getStartedLink}>
                  Share this link with your clients
            </a>
              </div>

            </div>
          </div>
        </div>
      </Container>
      <Container>
        <div className={classes.section}></div>
        <div className={classes.top}>
          <div className={classes.centerHeading}>
            <div className={classes.heading}>
              <div style={{ display: "inline", top: "-8px", marginRight: "6px", position: "relative" }}> Start exploring </div>
              <Logo />
              <div style={{ display: "inline", top: "-8px", marginRight: "6px", position: "relative" }}> ...</div>
            </div>

          </div>
        </div>
      </Container>
      <Container>
        <div className={classes.top}>
          <div className={classes.column}>
            <div className={classes.videoBorder}>
              <WistiaVideo hashedId="ecdwsmxj9y" />
            </div>
            <div style={{ fontSize: "12px", paddingRight: "30px", paddingLeft: "30px" }}>
              <span className={classes.bold}>An Introduction to Elevate CRM</span>
              <div style={{ float: "right", display: "inline" }}>runtime:  20:12</div>

            </div>
          </div>
          <div className={classes.column}>
            <div className={classes.videoBorder}>
              <WistiaVideo hashedId="xhsd39wnip" />
            </div>
            <div style={{ fontSize: "12px", paddingRight: "30px", paddingLeft: "30px" }}>
              <span className={classes.bold}>An Introduction to the Site Editor</span>
              <div style={{ float: "right", display: "inline" }}>runtime:  13:14</div>

            </div>
          </div>
        </div>
        <div className={classes.section}>
          <div style={{ paddingTop: "10px" }} className={classes.centerHeading} >
            <a target="_blank" className={classes.getStartedLink} href="https://tryelevate.wistia.com/projects/ibbj6zglui" >View More Videos</a>
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
