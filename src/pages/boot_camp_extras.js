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
import Web from "../images/webinar_icon.png";
import Star from "../images/star.png";
import Encore from "../images/encore_icon.png";
import Social from "../images/social_pic.jpg";
import Emails from "../images/6emails_pic.png";
import Dose from "../images/dose_pic.png";
import Leadpic from "../images/leadpic.jpg";
import Freebg from "../images/free_bg.jpg";
const boot_camp_extras = ({ classes }) => {

  return (
    <div className={classes.root}>
      <SEO />
      <Container>
        <div className={classes.top}>
          <div className={classes.centerHeading}>
            <div className={classes.heading}>Thanks for <strong>ATTENDING</strong> our educational event</div>
            <div className={classes.bold}>Keep the learning going with these extras...created just for you.</div>
            
            <div>But first...please give us a review &amp; let us know what you thought of our Boot Camp Educational Series:
            
            <a target="_blank" href="https://www.facebook.com/TryElevateRE/" className={classes.getStartedLink}>
                  Share the LOVE
                    </a>
            </div>
            <div>
              <Hr style={{ marginTop: "40px", marginBottom: "40px" }} />
            </div>
          </div>
        </div>
      </Container>
      
      <Container>
        <div className={classes.top}>
          <div className={classes.column} style={{ height:"350px"}}> 
            <div className={classes.grayText} style={{ textAlign: "center" }}>
            <div style={{ textAlign: "center",paddingBottom:"25px" }}>
          <img src={Star} width="45" />
        </div>
              <div className={classes.heading}>
              
              Are you a NEW<br />
              Elevate subscriber?</div>
                <div>
                <div className={classes.bold}>Welcome, you smart cookie!<br />
                Here’s what happens next...</div>
                
                It takes about 24-hrs to process your order.  Once processed, you will hear from our Success Team with next steps.
<br /><br />
                </div>
                
            </div>
            
            

          </div>
          
          <div className={classes.column}>
          <div style={{ textAlign: "center",paddingBottom:"25px" }}>

          <div className={classes.grayText}><strong>Get a head-start on “all things Elevate”<br />
with our helpful resources:</strong></div>

<div style={{ paddingTop: "18px", }}>

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

        </div>
      </Container>


      <Container>
        <div style={{marginLeft: "18px", marginRight: "18px",}}>
        <div className={classes.infoboxGray2}>
                
                <div className={classes.heading}>Received a FREE month?</div>
                <div className={classes.bold}>Here's how it works...</div>
                
1. Your account will be processed &amp; billed within 24 hours.<br /><br />
2. Once processed, an Elevate Coach will be in contact within 2-business days to schedule onboarding.<br /><br />
3. Your FREE month will be applied to your 2nd month (excludes Elite subscribers)<br /><br />
</div>
</div>
      </Container>






      <div>
      <Container>
        <div className={classes.top}>
          <div className={classes.centerHeading}>
          <div className={classes.heading} style={{textAlign: "center", paddingTop:"13px"}}>
              
              Thinking of joining Elevate?</div>

          </div>
        </div>
      
      
        <div className={classes.top}>
          <div className={classes.column3} style={{ textAlign: "center", paddingBottom: "35px" }}>
          
          <div className={classes.infoboxTeal}>
              <div>
              <div style={{ textAlign: "center",paddingBottom:"10px" }}>
          <img src={Tour} width="45" />
        </div>
                <div className={classes.heading2} style={{color:"#FFFFFF"}}>Take a Tour of Elevate</div>
                <div style={{color:"#FFFFFF"}}>
                Schedule your personal<br />
                walk-through with an<br />
                Elevate Success Coach to<br />
                learn how you can capture,<br />
                nurture &amp; convert<br />
                more business...today.<br />

                </div>
              </div>
                <div>
                <a target="_blank" href="https://calendly.com/estsean/15-min-demo" className={classes.getStartedLink2}>
                  Schedule NOW
                    </a>
                </div>
            </div>

            </div>
          <div className={classes.column3} style={{ textAlign: "center", paddingBottom: "35px" }}>
          

          <div className={classes.infoboxGray}>
            <div style={{ textAlign: "center",paddingBottom:"10px" }}>
          <img src={Encore} width="45" />
        </div>
              <div style={{textAlign:"center"}}>
                <div className={classes.heading2}>Join an Upcoming Webinar</div>
                <div style={{color:"#FFFFFF"}}>
                Loved your Elevate educational<br />
                experience?  Dial into one of<br />
                our upcoming one-hour webinars<br />
                for MORE tips, tricks &amp; strategies<br />
                to rock your marketing<br />
                &amp; drive your lead gen.

                </div>
                <a target="_blank" href="/smbc_webinars/" className={classes.getStartedLink}>
                  Register TODAY
                    </a>
              </div>
            </div>

          </div>

          <div className={classes.column3} style={{ textAlign: "center", paddingBottom: "35px" }}>
          <div className={classes.infoboxTeal}>
              <div>
              <div style={{ textAlign: "center",paddingBottom:"10px" }}>
          <img src={Web} width="45" />
        </div>
                <div className={classes.heading2} style={{color:"#FFFFFF"}}>Check us out LIVE</div>
                <div style={{color:"#FFFFFF"}}>
                The Elevate Boot Camp<br />
                series provides tips, tricks<br />
                &amp; strategies in an energetic<br />
                two-hour session designed to<br />
                energize &amp; empower<br />
                agents across the US.

                </div>
              </div>
                <div>
                <a target="_blank" href="/smbc_webinars/" className={classes.getStartedLink2}>
                Upcoming TOUR Schedule
                    </a>
                </div>
            </div>
          </div>



          </div>
      </Container>
      </div>





   
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
          <div className={classes.column3} style={{ textAlign: "center", paddingBottom: "35px" }}>
          <div style={{ textAlign: "center",paddingBottom:"20px" }}>
          <img src={Emails} style={{ width:"100%", maxWidth:"300px"}}/>
        </div>
            
          <div className={classes.heading2} style={{color:"#ffffff"}}>6 Emails Every Real Estate<br />
          Agent Should Be Sending</div>
                <div> 
                Easy to implement, proven to deliver emails designed to nurture your clients.
                </div>
                <a target="_blank" href="/assets/6emails_elevate.pdf" className={classes.getStartedLink2}>
                  Download PDF
                    </a>

            </div>
          <div className={classes.column3} style={{ textAlign: "center", paddingBottom: "35px" }}>
          <div style={{ textAlign: "center",paddingBottom:"20px" }}>
          <img src={Dose} style={{ width:"100%", maxWidth:"300px"}}/>
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

          <div className={classes.column3} style={{ textAlign: "center", paddingBottom: "35px" }}>
          <div style={{ textAlign: "center",paddingBottom:"20px" }}>
          <img src={Social} style={{ width:"100%", maxWidth:"300px"}}/>
        </div>
          <div className={classes.heading2} style={{color:"#ffffff"}}>Social Media Boot Camp<br />
Takeaways
</div>
                <div> 
                Quick tips, tricks &amp; takeaways from our<br />
                Social Media Boot Camp Webinar.
                </div>
                <a target="_blank" href="/assets/elevate_socialmedia_tips.pdf" className={classes.getStartedLink2}>
                  Download PDF
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
    alignItems: "top",
  },
  section:{
    paddingTop: "60px",
  },
  heading: {
    color: theme.colors.secondary,
    fontSize: "32px",
    lineHeight: "40px",
    fontWeight: "700",
    marginRight: "auto",
    paddingBottom: "20px",
  },
  heading2: {
    color: theme.colors.secondary,
    fontSize: "18px",
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
    width:"525px",
    maxWidth: "100%",
    paddingRight:"18px",
    paddingLeft:"18px",
    verticalAlign: "top",
  },

  column3:{
    width:"350px",
    maxWidth: "100%",
    paddingRight:"10px",
    paddingLeft:"10px",
    verticalAlign: "top",
  },

  getStartedLink: {
    minWidth: "250px",
    maxWidth: "250px",
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
    minWidth: "250px",
    maxWidth: "250px",
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
    padding: "40px 25px 25px 25px",
    borderRadius: "4px",
    margin: "30px auto",
    textAlign: "center",
  },
  infoboxGray2: {
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#e4e8ea",
    color: theme.colors.gray800,
    textDecoration: "none",
    padding: "40px 25px 25px 25px",
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
    padding: "40px 25px 25px 25px",
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
