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
import CheckCircle from "elevate-ui-icons/CheckCircle";
import SMBCLogo from "../images/smbcLogo.jpg";
import Tour from "../images/tour_icon.png";
import Encore from "../images/encore_icon.png";
import Emails from "../images/6emails_pic.png";
import Dose from "../images/dose_pic.png";
import Freebg from "../images/free_bg.jpg";
const boot_camp_extras = ({ classes }) => {

  return (
    <div className={classes.root}>
      <SEO />
      <Container>
        <div className={classes.top}>
          <div className={classes.centerHeading}>
            <div className={classes.heading}>Thanks for <strong>ATTENDING</strong></div>
            <div className={classes.bold}>Keep the learning experience going with these extras...created just for you.</div>
            <div>
              <Hr style={{ marginTop: "40px", marginBottom: "40px" }} />
            </div>
          </div>
        </div>
      </Container>
      
      <Container>
        <div className={classes.top}>
          <div className={classes.column} style={{ height:"780px"}}> 
            <div className={classes.grayText} style={{ textAlign: "center" }}>
              <div className={classes.heading2}>
              <div style={{ textAlign: "center",paddingBottom:"10px" }}>
          <img src={SMBCLogo} width="300" />
        </div>
              Subscribed to one or more<br />
              Elevate solution at our Boot Camp?</div>
                <div>
                <div className={classes.bold}>You are a smart cookie!  Here's what happens next...</div>
                
It takes about 24-hours for us to process your order.  Once processed, you will hear from our Success Team with next steps.
<br /><br />
Get a head-start on ‘all things Elevate’ by registering for an <a target="_blank" href="https://tryelevate.com/webinars/">upcoming training webinar</a>, <a target="_blank" href="https://elmstreettechnology.zendesk.com/hc/en-us">visiting our help center</a>,
<br />&amp; <a target="_blank" href="/assets/elevate_getting_started_ebook.pdf">downloading our ‘Getting Started’ guide.</a>
                </div>
                <div style={{ paddingTop: "30px", }}>

                <a target="_blank" href="https://tryelevate.com/webinars/" className={classes.getStartedLink}>
                  Training Webinars
                    </a>
                <a target="_blank" href="https://elmstreettechnology.zendesk.com/hc/en-us" className={classes.getStartedLink}>
                  Elevate Help Center
                    </a>
                <a target="_blank" href="/assets/elevate_getting_started_ebook.pdf" className={classes.getStartedLink}>
                  Getting Started Guide
                    </a>
                </div>
            </div>
            
            

          </div>
          
          <div className={classes.column}>
            <div className={classes.infoboxTeal}>
              <div>
              <div style={{ textAlign: "center",paddingBottom:"10px" }}>
          <img src={Tour} width="60" />
        </div>
                <div className={classes.heading2} style={{color:"#FFFFFF"}}>Take a Tour of Elevate</div>
                <div style={{color:"#FFFFFF"}}>
                Schedule your personal walk-through with an Elevate Success Coach to learn how you can capture, nurture &amp; convert more business...today.

                </div>
              </div>
                <div>
                <a target="_blank" href="https://calendly.com/estsean/15min-1/02-12-2019" className={classes.getStartedLink2}>
                  Schedule NOW
                    </a>
                </div>
            </div>

            <div className={classes.infoboxGray}>
            <div style={{ textAlign: "center",paddingBottom:"10px" }}>
          <img src={Encore} width="60" />
        </div>
              <div style={{textAlign:"center"}}>
                <div className={classes.heading2}>Join an 'Encore' Webinar</div>
                <div style={{color:"#FFFFFF"}}>
                Want a repeat of your Boot Camp education session?  Dial into one of our upcoming one-hour webinars for another round of tips, tricks &amp; strategies to rock your marketing.

                </div>
                <a target="_blank" href="/smbc_webinars/" className={classes.getStartedLink}>
                  Register TODAY
                    </a>
              </div>
            </div>

          </div>

        </div>
      </Container>
   
      <div style={{backgroundColor:"gray",backgroundImage:"url("+Freebg+")"}}>
      <Container>
            <div className={classes.section}></div>
        <div className={classes.top}>
          <div className={classes.centerHeading}>
            <div className={classes.heading} style={{paddingBottom:"55px", color:"#ffffff"}}>
            FREE Marketing Content
            </div>

          </div>
        </div>
      
      
        <div className={classes.top}>
          <div className={classes.column} style={{ textAlign: "center", paddingBottom: "35px" }}>
          <div style={{ textAlign: "center",paddingBottom:"20px" }}>
          <img src={Emails} style={{ width:"100%", maxWidth:"400px"}}/>
        </div>
            
          <div className={classes.heading2} style={{color:"#ffffff"}}>6 Emails Every Real Estate<br />
          Agent Should Be Sending</div>
                <div> 
                Easy to implement, proven to deliver emails designed
                to nurture past, present &amp; future clients.
                </div>
                <a target="_blank" href="/assets/6emails_elevate.pdf" className={classes.getStartedLink2}>
                  Download PDF
                    </a>

            </div>
          <div className={classes.column} style={{ textAlign: "center", paddingBottom: "35px" }}>
          <div style={{ textAlign: "center",paddingBottom:"20px" }}>
          <img src={Dose} style={{ width:"100%", maxWidth:"400px"}}/>
        </div>
          <div className={classes.heading2} style={{color:"#ffffff"}}>Daily Dose of<br />
         Marketing Awesomeness</div>
                <div> 
                Every morning, we’ll send a marketing tip,<br />
                trick or insight direct to your inbox.
                </div>
                <a target="_blank" href="http://3sixtyfive.agency/" className={classes.getStartedLink2}>
                  Sign Up
                    </a>
          </div>
          </div>
      </Container>
      </div>
    </div>
  );
};


export default withStyles((theme) => ({
  root: {
    position: "relative",
    paddingTop: "96px",
    paddingBottom: "0px",
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
  heading2: {
    color: theme.colors.secondary,
    fontSize: "22px",
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
    minWidth: "300px",
    maxWidth: "300px",
    alignContent: "center",
    justifyContent: "center",
    fontSize: "14px",
    fontWeight: "700",
    display: "block",
    letterSpacing: ".25px",
    backgroundColor: theme.colors.secondary,
    color: "#FFF",
    textDecoration: "none",
    padding: "14px 16px",
    borderRadius: "4px",
    margin: "16px auto",
    marginBottom: "20px",
  },

  getStartedLink2: {
    minWidth: "300px",
    maxWidth: "300px",
    alignContent: "center",
    justifyContent: "center",
    fontSize: "14px",
    fontWeight: "700",
    display: "block",
    letterSpacing: ".25px",
    backgroundColor: "#ffffff",
    color: "#5dc4ba",
    textDecoration: "none",
    padding: "14px 16px",
    borderRadius: "4px",
    margin: "16px auto",
    marginBottom: "20px",
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
    backgroundColor: "#1f194c",
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

}))(boot_camp_extras);