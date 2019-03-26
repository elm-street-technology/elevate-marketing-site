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
import Elite from "../images/elite.jpg";
import Ignite from "../images/ignite.jpg";
import Pro from "../images/pro.jpg";
import Tour from "../images/tour_icon.png";
import Web from "../images/webinar_icon.png";
import Star from "../images/star.png";
import Encore from "../images/encore_icon.png";
import Emails from "../images/6emails_pic.png";
import Dose from "../images/dose_pic.png";
import Leadpic from "../images/leadpic.jpg";
import Freebg from "../images/free_bg.jpg";
const specialoffer = ({ classes }) => {

  return (
    <div className={classes.root}>
      <SEO />
    
   
      <Container>
      
      
        <div className={classes.top}>
          <div className={classes.column3} style={{ textAlign: "center", paddingBottom: "35px", }}>
          <div style={{ textAlign: "center",paddingBottom:"20px" }}>
          <img src={Ignite} style={{ width:"100%", maxWidth:"200px"}}/>
        </div>
            
                <div> 
                <div className={classes.bold} style={{color:"#f7960a"}}>- Pay-Per-Click Lead Generation</div>
                <span style={{color:"#f7960a"}}>(Google, Bing, Yahoo)</span><br />
                <div className={classes.bold} style={{color:"#f7960a"}}>- Advanced CRM</div>
                <div className={classes.bold} style={{color:"#f7960a"}}>- CMA Wizard</div>
                <br /><br />
                <div className={classes.bold} style={{fontSize:"65px", paddingBottom:"20px", color:"#f7960a"}}>$549</div>
                <span style={{color:"#f7960a"}}>(a savings of $100)</span>
                <br /><br />
                <div className={classes.bold} style={{color:"#f7960a"}}>One-Time Setup Fee: $200</div>
                <span style={{color:"#f7960a"}}>(Normally $1000)</span>
                </div>
                <a target="_blank" href="https://elmstreettechnology.recurly.com/subscribe/ignite" className={classes.getStartedLinkignite}>
                  Subscribe NOW
                    </a>

            </div>
          <div className={classes.column3} style={{ textAlign: "center", paddingBottom: "35px" }}>
          <div style={{ textAlign: "center",paddingBottom:"20px" }}>
          <img src={Elite} style={{ width:"100%", maxWidth:"200px"}}/>
        </div>
                <div>
                <div className={classes.bold} style={{color:"#ef5b4d"}}>- IDX Website</div>
                <div className={classes.bold} style={{color:"#ef5b4d"}}>- Blog</div>
                <div className={classes.bold} style={{color:"#ef5b4d"}}>- Social Media Services</div>
                <div className={classes.bold} style={{color:"#f7960a"}}>- Pay-Per-Click Lead Generation</div>
                <span style={{color:"#f7960a"}}>(Google, Bing, Yahoo)</span><br />
                <div className={classes.bold} style={{color:"#f7960a"}}>- Advanced CRM</div>
                <div className={classes.bold} style={{color:"#f7960a"}}>- CMA Wizard</div>
<br /><br />
<div className={classes.bold} style={{fontSize:"65px", paddingBottom:"20px", color:"#ef5b4d"}}>$749</div>
<span style={{color:"#ef5b4d"}}>(a savings of $100)</span>

                <br /><br />
                <div className={classes.bold} style={{color:"#ef5b4d"}}>One-Time Setup Fee: $200</div>
                <span style={{color:"#ef5b4d"}}>(Normally $1000)</span>
                </div>
                <a target="_blank" href="https://elmstreettechnology.recurly.com/subscribe/elevateelite" className={classes.getStartedLinkelite}>
                  Subscribe NOW
                    </a>
          </div>

          <div className={classes.column3} style={{ textAlign: "center", paddingBottom: "35px" }}>
          <div style={{ textAlign: "center",paddingBottom:"20px" }}>
          <img src={Pro} style={{ width:"100%", maxWidth:"200px"}}/>
        </div>
                <div> 
                <div className={classes.bold} style={{color:"#524493"}}>- Lead Scrubbing Concierge</div>
                <div className={classes.bold} style={{color:"#ef5b4d"}}>- IDX Website</div>
                <div className={classes.bold} style={{color:"#ef5b4d"}}>- Blog</div>
                <div className={classes.bold} style={{color:"#ef5b4d"}}>- Social Media Services</div>
                <div className={classes.bold} style={{color:"#f7960a"}}>- Pay-Per-Click Lead Generation</div>
                <span style={{color:"#f7960a"}}>(Google, Bing, Yahoo)</span><br />
                <div className={classes.bold} style={{color:"#f7960a"}}>- Advanced CRM</div>
                <div className={classes.bold} style={{color:"#f7960a"}}>- CMA Wizard</div>
                <br /><br />

                <div className={classes.bold} style={{fontSize:"65px", paddingBottom:"20px", color:"#524493"}}>$1049</div>
<span style={{color:"#524493"}}>(a savings of $100)</span>

                <br /><br />
                <div className={classes.bold} style={{color:"#524493"}}>One-Time Setup Fee: $200</div>
                <span style={{color:"#524493"}}>(Normally $1000)</span>
                </div>
                <a target="_blank" href="https://elmstreettechnology.recurly.com/subscribe/elevateelitepro" className={classes.getStartedLinkpro}>
                  Subscribe NOW
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
  getStartedLinkignite: {
    minWidth: "250px",
    maxWidth: "250px",
    alignContent: "center",
    justifyContent: "center",
    fontSize: "14px",
    fontWeight: "700",
    display: "block",
    letterSpacing: ".25px",
    backgroundColor: "#f7960a",
    color: "#FFF",
    textDecoration: "none",
    padding: "14px 16px",
    borderRadius: "4px",
    margin: "16px auto",
    marginBottom: "20px",
  },
  getStartedLinkelite: {
    minWidth: "250px",
    maxWidth: "250px",
    alignContent: "center",
    justifyContent: "center",
    fontSize: "14px",
    fontWeight: "700",
    display: "block",
    letterSpacing: ".25px",
    backgroundColor: "#ef5b4d",
    color: "#FFF",
    textDecoration: "none",
    padding: "14px 16px",
    borderRadius: "4px",
    margin: "16px auto",
    marginBottom: "20px",
  },
  getStartedLinkpro: {
    minWidth: "250px",
    maxWidth: "250px",
    alignContent: "center",
    justifyContent: "center",
    fontSize: "14px",
    fontWeight: "700",
    display: "block",
    letterSpacing: ".25px",
    backgroundColor: "#524493",
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

}))(specialoffer);
