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
import Sgs from "../images/Sgs.png";
import Summer_logo from "../images/summer_logo.png";
import Leadpic from "../images/leadpic.jpg";
import Extras1bg from "../images/extras_bg1.jpg";
import Extras2bg from "../images/extras_bg2.jpg";
import Formsummer from "../components/Formsummer";
import Summerbg from "../images/summer_bg.jpg";
const Summergiveaway = ({ classes }) => {

  return (
    <div className={classes.root}>
      <SEO />

        <div style={{backgroundImage:"url("+Summerbg+")", backgroundSize:"cover", backgroundPosition:"centerTop"}}>
                <Container>
                        <div className={classes.top} style={{paddingBottom:"80px", paddingRight:"25px", paddingLeft:"25px", paddingTop:"65px"}}>
                                  <div className={classes.centerHeading}>
                                  <img src={Summer_logo} style={{ width:"100%", maxWidth:"470px", paddingBottom:"20px"}}/>
                                  <div className={classes.heading} style={{color:"#0b6661"}}>REGISTER TO WIN<br />
                                  ELEVATE DMS&trade;</div>
                                  <div className={classes.subtext} className={classes.bold} style={{color:"#0b6661"}}>INCLUDES 1 YEAR FREE:<br/>
                                   IDX website, CRM, social media,<br />
                                   email campaigns, &amp; blog<br />
                                  </div>
                                  </div>
                        </div>
                </Container>
      </div>











<div style={{paddingTop:"55px", paddingBottom:"55px", textAlign:"center"}}>

<img src={Sgs} style={{ width:"100%", maxWidth:"350px", paddingBottom:"20px", textAlign:"center",}}/>
<Container>



        <div className={classes.top} style={{textAlign:"center"}}>
   
                <Formsummer />
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
        <a id="content"></a> 
      

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

  column5:{
    width:"205px",
    maxWidth: "100%",
    paddingRight:"2px",
    paddingLeft:"2px",
    verticalAlign: "top",
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

}))(Summergiveaway);
