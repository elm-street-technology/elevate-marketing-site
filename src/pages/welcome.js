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
import Webinar from "../images/webinar_icon.png";
import Emails from "../images/6emails_pic.png";
import Dose from "../images/dose_pic.png";
import Social from "../images/social_pic.jpg";
import Email from "../images/email.jpg";
import DL from "../images/dl.jpg";
import Help from "../images/help.jpg";
import Live from "../images/live.jpg";
import Vid from "../images/vidmock.jpg";
import Bar from "../images/bar.gif";
import Freebg from "../images/free_bg.jpg";
const welcome = ({ classes }) => {

  return (
    <div className={classes.root}>
      <SEO />
      <Container>
        <div className={classes.top}>
          <div className={classes.centerHeading} style={{paddingBottom:"35px"}}>
            <div className={classes.heading}><strong>Welcome to Elevate</strong></div>
            <div className={classes.bold}>We invite you to explore your NEW Elevate experience.
            
</div>
          </div>
        </div>
      </Container>
      
      <Container>
        <div className={classes.top}>
          <div className={classes.column2} style={{ height:"950px", paddingTop:"20px",}}> 
            <div className={classes.grayText} style={{ textAlign: "center" }}>

           
              <div className={classes.heading}>Your Fulfillment Manager<br />
              Will Reach Out Shortly</div>
                <div>
                
                <div className={classes.bold}>In the meantime you can...</div>
                <br />
                <div style={{ textAlign: "center" }}>
                <div style={{ textAlign: "center",paddingBottom:"5px" }}>
          <img src={DL} style={{ width:"100%", maxWidth:"80px"}}/>
        </div>
                <div className={classes.bold}>Download our <a target="_blank" href="/assets/elevate_getting_started_ebook.pdf" style={{color:"#5cc0b7", textDecoration:"none",}}>eBook</a> to learn about<br />
                the getting started process.</div>
                <br />
                <div style={{ textAlign: "center",paddingBottom:"5px" }}>
          <img src={Live} style={{ width:"100%", maxWidth:"80px"}}/>
        </div>
                <div className={classes.bold}>Schedule a <a href="/webinars" style={{color:"#5cc0b7", textDecoration:"none",}}>Live Walk-Through</a><br />
with a success coach.</div>
<br />
<div style={{ textAlign: "center",paddingBottom:"5px" }}>
          <img src={Help} style={{ width:"100%", maxWidth:"80px"}}/>
        </div>
<div className={classes.bold}>Explore the on-demand training<br />
videos in your <a target="_blank" href="https://elmstreettechnology.zendesk.com/hc/en-us" style={{color:"#5cc0b7", textDecoration:"none",}}>Help Center.</a></div>
<br />
<div style={{ textAlign: "center",paddingBottom:"5px" }}>
          <img src={Email} style={{ width:"100%", maxWidth:"80px"}}/>
        </div>
<div className={classes.bold}>Check out more free <a target="_blank" href="/assets/6emails_elevate.pdf" style={{color:"#5cc0b7", textDecoration:"none",}}>Social Media<br />
&amp; Marketing tips.</a></div>
        </div>

</div>

            </div>
            
            

          </div>
          
          <div className={classes.column3}>
            <div className={classes.infoboxTeal}>
              <div>
            
                <div className={classes.heading2} style={{color:"#FFFFFF"}}>Get Started Guide</div>
                <span style={{color:"#FFFFFF"}}>
                Let us walk you step-by-step through your Elevate experience.


                </span>
              </div>
                <div>
                <a target="_blank" href="/assets/elevate_getting_started_ebook.pdf" className={classes.getStartedLink2}>
                 Download PDF
                    </a>
                </div>
            </div>

            <div className={classes.infoboxGray}>
          
              <div style={{textAlign:"center"}}>
                <div className={classes.heading2}>Training Webinars</div>
                <div style={{color:"#FFFFFF"}}>
                Join a live walk-through with an Elevate Success Coach to explore your new service.

                </div>
                <a target="_blank" href="https://tryelevate.com/webinars/" className={classes.getStartedLink}>
                  Register Now
                    </a>
              </div>
            </div>

            <div className={classes.infoboxTeal}>
              <div>
             
                <div className={classes.heading2} style={{color:"#FFFFFF"}}>Help Center</div>
                <div style={{color:"#FFFFFF"}}>
                Browse our easy-to-search knowledge base with any questions you may have.


                </div>
              </div>
                <div>
                <a target="_blank" href="https://elmstreettechnology.zendesk.com/hc/en-us" className={classes.getStartedLink2}>
                Browse Help
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
          <div className={classes.centerHeading} style={{paddingBottom:"55px",}}>
            <div className={classes.heading} style={{color:"#ffffff"}}>
            FREE Tips, Tricks &amp; Strategies
            </div>
            for marketing &amp; lead generation success.
          </div>
        </div>
      
      
        <div className={classes.top}>
          <div className={classes.column3} style={{ textAlign: "center", paddingBottom: "35px" }}>
          <div style={{ textAlign: "center",paddingBottom:"20px" }}>
          <img src={Dose} style={{ width:"100%", maxWidth:"300px"}}/>
        </div>
            
          <div className={classes.heading2} style={{color:"#ffffff"}}>Daily Marketing Tips<br />
free daily email
</div>
                <div> 
                Sign up to receive your daily dose<br />
                of marketing awesomeness<br />
                delivered straight to your inbox.
                </div>
                <a target="_blank" href="http://3sixtyfive.agency/" className={classes.getStartedLink2}>
                  Register Today
                    </a>
                

            </div>
          <div className={classes.column3} style={{ textAlign: "center", paddingBottom: "35px" }}>
          <div style={{ textAlign: "center",paddingBottom:"20px" }}>
          <img src={Emails} style={{ width:"100%", maxWidth:"300px"}}/>
        </div>
          <div className={classes.heading2} style={{color:"#ffffff"}}>Email Marketing Tips<br />
free download
</div>
                <div> 
                6 emails every real estate agent<br />
                should be sending to nurture past,<br />
                present &amp; future clients.
                </div>
                <a target="_blank" href="/assets/6emails_elevate.pdf" className={classes.getStartedLink2}>
                  Download PDF
                    </a>
          </div>

          <div className={classes.column3} style={{ textAlign: "center", paddingBottom: "35px" }}>
          <div style={{ textAlign: "center",paddingBottom:"20px" }}>
          <img src={Social} style={{ width:"100%", maxWidth:"300px"}}/>
        </div>
          <div className={classes.heading2} style={{color:"#ffffff"}}>Social Media Tips<br />
free download
</div>
                <div> 
                Quick tips to establishing<br />
                &amp; build your online presence<br />
                &amp; strengthen relationships.
                </div>
                <a target="_blank" href="/assets/elevatesocialmediaebook.pdf" className={classes.getStartedLink2}>
                  Download PDF
                    </a>
          </div>



          </div>
      </Container>
      </div>


      <Container>
        <div className={classes.top}>
          <div className={classes.centerHeading} style={{paddingTop:"70px"}}>
            <div className={classes.heading}><strong>Enjoying your Elevate experience so far?</strong></div>
            We’d love for you to share your experience.
           


            <div style={{paddingBottom:"50px", paddingTop:"20px"}}>
            <a target="_blank" href="https://www.facebook.com/TryElevateRE/reviews/" className={classes.getStartedLink}>
                  Write Us a Review
                    </a></div>
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
    lineHeight:"40px",
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

  heading3: {
    color: theme.colors.secondary,
    fontSize: "33px",
    lineHeight: "40px",
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
  column2:{
    width:"710px",
    maxWidth: "100%",
    paddingRight:"10px",
    paddingLeft:"10px",
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
    minWidth: "230px",
    maxWidth: "230px",
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
    minWidth: "230px",
    maxWidth: "230px",
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

}))(welcome);
