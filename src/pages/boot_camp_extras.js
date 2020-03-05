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
import Fb from "../images/fbx.png";
import Tw from "../images/twx.png";
import Li from "../images/lix.png";
import Yt from "../images/ytx.png";
import Insta from "../images/instax.png";
import Qpic from "../images/q_pic.jpg";
import Wel from "../images/wel_pic.png";
import Help from "../images/help_pic.png";
import Train from "../images/train_pic.png";
import Tours from "../images/tour_pic.jpg";
import Content from "../images/content_pic.jpg";
import Emails from "../images/6emails_pic.png";
import Blog from "../images/blogpic.jpg";
import Dose from "../images/dose_pic.png";
import Leadpic from "../images/leadpic.jpg";
import Extras1bg from "../images/extras_bg1.jpg";
import Extras2bg from "../images/extras_bg2.jpg";
import SignUpFormExtras from "../components/SignUpFormExtras";
import Extrasbg from "../images/extras_bg.jpg";
const boot_camp_extras = ({ classes }) => {

  return (
    <div className={classes.root}>
      <SEO />

        <div style={{backgroundImage:"url("+Extrasbg+")", backgroundSize:"cover", backgroundPosition:"centerTop"}}>
                <Container>
                        <div className={classes.top} style={{paddingBottom:"80px", paddingRight:"25px", paddingLeft:"25px", paddingTop:"75px"}}>
                                  <div className={classes.centerHeading}>
                                  <div className={classes.heading} style={{color:"#ffffff"}}>Thanks for ATTENDING</div>
                                  <div className={classes.subtext} style={{color:"#ffffff"}}>We loved connecting with you. Let’s keep that connection going...
                                  </div>
                                  </div>
                        </div>
                </Container>
      </div>

<div style={{ textAlign: "center", paddingTop: "48px", paddingBottom:"30px" }}>
  <Container>
        <div className={classes.top}>

                  <div className={classes.column3} style={{ textAlign: "center", paddingBottom: "8px" }}>
                                    <div style={{ textAlign: "center",paddingBottom:"5px" }}>
                                          <img src={Qpic} width="125" />
                                    </div>
                                    <div className={classes.bold}>I subscribed to Elevate today.</div>
                                    <a target="_blank" href="/assets/elevate_getting_started_ebook.pdf" className={classes.getStartedLink}>
                                    What's Next?
                                  </a>
                  </div>

                  <div className={classes.column3} style={{ textAlign: "center", paddingBottom: "8px" }}>
                                    <div style={{ textAlign: "center",paddingBottom:"5px" }}>
                                          <img src={Tours} width="125" />
                                    </div>
                                    <div className={classes.bold}>I want to learn more about Elevate.</div>
                                    <a target="_blank" href="https://elmstreettechnology.zendesk.com/hc/en-us" className={classes.getStartedLink}>
                                    Take a Tour
                                    </a>
                  </div>

                  <div className={classes.column3} style={{ textAlign: "center", paddingBottom: "8px" }}>
                                    <div style={{ textAlign: "center",paddingBottom:"5px" }}>
                                          <img src={Content} width="125" />
                                    </div>
                                    <div className={classes.bold}>I want more great content.</div>
                                    <a target="_blank" href="https://tryelevate.com/webinars/" className={classes.getStartedLink}>
                                    We've Got It!
                                    </a>
                  </div>

        </div>
    </Container>
</div>




<div style={{ textAlign: "center", backgroundImage:"url("+Extras1bg+")" }}>
  <Container>
                    <div style={{paddingTop:"60px", paddingBottom:"25px", paddingLeft:"45px", paddingRight:"45px"}}>
                          <div className={classes.heading}>NEW Subscriber?</div>
                                <div className={classes.bold} style={{color:"#FFFFFF"}}>Welcome, you smart cookie!  This section is for YOU.</div>

                                <div style={{color:"#e4e8ea"}}>It takes about 24-hours to process your order.  Once processed, you will hear from our Success Team with next steps.  <br />In the meantime, get a head-start on “all things Elevate” with our helpful resources:</div>
                    </div>

        <div className={classes.top}>

                  <div className={classes.column3} style={{ textAlign: "center", paddingTop: "12px" }}>
                                    
                                    <div className={classes.bold} style={{color:"#FFFFFF"}}>Getting Started Guide</div>
                                    <a target="_blank" href="/assets/elevate_getting_started_ebook.pdf" className={classes.getStartedLink}>
                                    Download Now!</a>
                                    <div style={{ textAlign: "center",paddingTop:"5px" }}>
                                          <img src={Wel} width="255" />
                                    </div>
                  </div>

                  <div className={classes.column3} style={{ textAlign: "center", paddingTop: "12px" }}>
                 
                                    <div className={classes.bold} style={{color:"#FFFFFF"}}>Elevate Help Center</div>
                                    <a target="_blank" href="https://elmstreettechnology.zendesk.com/hc/en-us" className={classes.getStartedLink}>
                                    View Help Center</a>
                                    <div style={{ textAlign: "center",paddingTop:"5px" }}>
                                          <img src={Help} width="255" />
                                    </div>
                  </div>

                  <div className={classes.column3} style={{ textAlign: "center", paddingTop: "12px" }}>

                                    <div className={classes.bold} style={{color:"#FFFFFF"}}>Training Webinars</div>
                                    <a target="_blank" href="https://tryelevate.com/webinars/" className={classes.getStartedLink}>
                                    View Webinars</a>
                                    <div style={{ textAlign: "center",paddingTop:"5px" }}>
                                          <img src={Train} width="255" />
                                    </div>
                  </div>

        </div>
    </Container>
</div>





<div style={{paddingTop:"55px", paddingBottom:"55px"}}>
<Container>
        <div className={classes.top}>
                <div className={classes.centerHeading}>
                                <div className={classes.heading} style={{textAlign: "center", paddingTop:"13px"}}>
                                    Thinking of joining Elevate?
                                </div>
                                    Sweet!  Take a quick video tour below and then connect with a Success Coach.
                                              <div style={{textAlign: "center", maxWidth:"700px",marginLeft:"auto",marginRight:"auto", paddingTop:"30px"}}>
                                                             <div style={{ textAlign: "center"}} className={classes.videoEmbed}>
                                                              <iframe className={classes.videoContainer} src="https://www.youtube.com/embed/xPJyb2d_tnU"
                                                              frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                             </div>
                                              </div>
                
                                <h1 className={classes.heading} style={{paddingTop:"40px"}}>
                                Questions?  Ready to subscribe?
                               </h1>
                
                </div>

                
                <SignUpFormExtras />
                {/* <div className={classes.closingContainer}>
                For Media Inquiries, {""} Please {""}
                 <a
                  className={classes.emailLink}
                  href="mailto:ekaplan@elmstreettechnology.com"
                  >
                  Email Us
                </a>
                 </div> */}
        </div>
      
      

</Container>
</div>





   
 <div style={{backgroundColor:"gray",backgroundImage:"url("+Extras2bg+")"}}>
      <Container>
                 
                        <div className={classes.top} style={{paddingBottom:"45px", paddingTop:"50px"}}>
                                <div className={classes.centerHeading}>
                                <div className={classes.heading} style={{color:"#ffffff"}}>
                                Looking for MORE great content?
                                </div>
                                <div style={{color:"#ffffff"}}>We’ve got tons to share...and sharing is caring.</div>
                                </div>
                        </div>
      
      
<div className={classes.top}>
<div className={classes.column3} style={{ textAlign: "center", paddingBottom: "35px" }}>
                        <div style={{ textAlign: "center",paddingBottom:"20px" }}>
                        <img src={Dose} style={{ width:"100%", maxWidth:"300px"}}/>
                        </div>

                        <div className={classes.heading2} style={{color:"#ffffff"}}>Daily Dose of<br />
                        Marketing Awesomeness</div>

                        <div style={{color:"#ffffff"}}> 
                        Every morning, we’ll send a marketing tip,<br />
                        trick or insight direct to your inbox.
                        </div>

                        <a target="_blank" href="http://3sixtyfive.agency/" className={classes.getStartedLink2}>
                        Sign Up
                        </a>
</div>


<div className={classes.column3} style={{ textAlign: "center", paddingBottom: "35px" }}>
                        <div style={{ textAlign: "center",paddingBottom:"20px" }}>
                        <img src={Blog} style={{ width:"100%", maxWidth:"300px"}}/>
                        </div>

                        <div className={classes.heading2} style={{color:"#ffffff"}}>Elevate Blog</div>

                        <div style={{color:"#ffffff"}}> 
                        Check out our popular<br />
                        “Casual Conversations” video series,<br />
                        great articles &amp; client insight.
                        </div>

                        <a href="https://tryelevate.com/blog" className={classes.getStartedLink2}>
                        View Now
                        </a>
</div>

<div className={classes.column3} style={{ textAlign: "center", paddingBottom: "35px" }}>
                      <div style={{ textAlign: "center",paddingBottom:"20px" }}>
                      <img src={Emails} style={{ width:"100%", maxWidth:"300px"}}/>
                      </div>
            
                      <div className={classes.heading2} style={{color:"#ffffff"}}>
                      6 Emails Every Real Estate<br />
                      Agent Should Be Sending</div>
                          <div style={{color:"#ffffff"}}>
                          Easy to implement, proven to deliver emails designed to nurture your clients.
                         </div>

                         <a target="_blank" href="/assets/6emails_elevate.pdf" className={classes.getStartedLink2}>
                          Download PDF</a>

</div>




                                <div className={classes.centerHeading} style={{paddingBottom:"55px"}}>
                                        <div className={classes.heading} style={{color:"#ffffff"}}>
                                                Let's Get Social
                                        </div>
                                                <div style={{color:"#ffffff", paddingBottom:"20px"}}>Follow us on your favorite social media channels for daily,<br />
                                                weekly &amp; monthly real estate inspirations.  We’ve got you covered!
                                                </div>

                                                <a target="_blank" href="https://www.facebook.com/TryElevateRE/"><img src={Fb} width="45" style={{paddingRight:"4px"}}/></a> 
                                                <a target="_blank" href="https://twitter.com/TryElevateRE"><img src={Tw} width="45" style={{paddingRight:"4px"}}/></a> 
                                                <a target="_blank" href="https://www.linkedin.com/showcase/tryelevatere/"><img src={Li} width="45" style={{paddingRight:"4px"}}/></a> 
                                                <a target="_blank" href="https://www.youtube.com/channel/UCKVavElvMaRgAHdpMXF8O9A"><img src={Yt} width="45" style={{paddingRight:"4px"}}/></a> 
                                                <a target="_blank" href="https://www.instagram.com/tryelevatere/"><img src={Insta} width="45" style={{paddingRight:"4px"}}/></a>
                                
                                
                                
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
    paddingTop: "26px",
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
    padding: "40px 0px 0px 0px",
    borderRadius: "4px",
    borderColor:"#ffffff",
    borderWidth:"3px",
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

}))(boot_camp_extras);
