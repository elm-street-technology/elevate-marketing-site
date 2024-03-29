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
import Lead_gen_logo from "../images/lead_gen_logo.jpg";
import Live from "../images/live.jpg";
import Welcome from "../images/welcome.gif";
import Vid from "../images/vidmock.jpg";
import Bar from "../images/bar.gif";
import Freebg from "../images/free_bg.jpg";
const lead_gen_tampa_orlando = ({ classes }) => {

  return (
    <div className={classes.root}>
      <SEO />
      <Container>
        <div className={classes.top}>
          <div className={classes.centerHeading} style={{paddingBottom:"20px"}}>

          <img src={Lead_gen_logo} style={{ width:"100%", maxWidth:"400px"}}/>
<br />
            <div className={classes.heading2}><strong>The #1 lead generation experience in real estate is coming to Tampa &amp; Orlando.</strong></div>
            <div className={classes.bold}>Join us for a two-hour high-energy, educational experience that has real estate agents raving all across the United States.<br />
            And even more...it's completely FREE.</div>

<br />

            <span className={classes.bold} style={{color:"#55c3ba",}}>Tampa, FL <br />
            Wednesday, April 24th</span><br />
            Ramada Westshore Tampa Airport<br />
            1200 North Westshore Boulevard<br />
            Tampa, FL 33607<br />
            <br />
            <span className={classes.bold} style={{color:"#55c3ba",}}>Register For Your Desired Time:<br />
            Boot Camp #1: 9:30am - 11:45am<br />
            Boot Camp #2: 12:30pm - 2:45pm<br /></span>
            <a target="_blank" href="https://www.eventbrite.com/e/mfrmls-tampa-fl-secrets-to-successful-lead-generation-boot-camp-registration-60263039373" className={classes.getStartedLink}>
                 Register Now
                    </a>

          </div>
        </div>
      </Container>
      
      <Container>
        <div className={classes.top}>
          <div className={classes.column2} style={{ textAlign:"center", paddingBottom:"20px"}}> 

            <span className={classes.bold} style={{color:"#55c3ba",}}>Orlando, FL<br />
            Thursday, April 25th</span><br />
            Holiday Inn Orlando-International Airport<br />
            5750 T G Lee Boulevard<br />
            Orlando, FL 32822<br />
            <br />
            <span className={classes.bold} style={{color:"#55c3ba",}}>Register For Your Desired Time:<br />
            Boot Camp #1: 9:30am - 11:45am<br />
            Boot Camp #2: 12:30pm - 2:45pm<br /></span>
            <a target="_blank" href="https://www.eventbrite.com/e/mfrmls-orlando-fl-secrets-to-successful-lead-generation-boot-camp-registration-60276179676" className={classes.getStartedLink}>
                 Register Now
                    </a>
            
            

          </div>
          
          <div className={classes.column2} style={{ textAlign:"center", paddingBottom:"20px"}}>
           
          <span className={classes.bold} style={{color:"#55c3ba",}}>Orlando, FL<br />
            Friday, April 26th</span><br />
            Hyatt Place Orlando/Convention Center<br />
            8741 International Drive<br />
            Orlando, FL 32819<br />
            <br />
            <span className={classes.bold} style={{color:"#55c3ba",}}>Register For Your Desired Time:<br />
            Boot Camp #1: 9:30am - 11:45am<br />
            Boot Camp #2: 12:30pm - 2:45pm<br /></span>
            <a target="_blank" href="https://www.eventbrite.com/e/mfrmls-orlando-fl-secrets-to-successful-lead-generation-boot-camp-registration-60276914875" className={classes.getStartedLink}>
                 Register Now
                    </a>

          </div>

        </div>
      </Container>

      
   
      







    </div>
  );
};


export default withStyles((theme) => ({
  root: {
    position: "relative",
    paddingTop: "66px",
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
    width:"530px",
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

}))(lead_gen_tampa_orlando);
