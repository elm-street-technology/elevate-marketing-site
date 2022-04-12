import React, { Component } from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import config from "../utils/siteConfig";
import withStyles from "elevate-ui/withStyles";
import Container from "../components/Container";
import SEO from "../components/SEO";
import Calendar from "elevate-ui-icons/Calendar";
import eventsbg from "../images/events_bg.jpg";
import AcademyLogo from "../images/academy_logow.png";
import LGBCLogo from "../images/lg_bootcamp.png";
import Cover from "../images/academy_cover.png";
import Fbcamplogo from "../images/fbcamplogo.png";
import Listlogo from "../images/listmore.png";
import MastermindLogo from "../images/mastermind_logo.png";
import ReferralLogo from "../images/referral_logo2.png";
import DeepLogo from "../images/deep_logo.png";
import FormHostEvent from "../components/FormHostEvent";

class Events extends Component {
  constructor(props) {
    super(props);

    const { data } = this.props;
    const events = data.allContentfulEvent.edges;

    const activeEvents = [];
    events.forEach(({ node: event }) => {
      const datetime = new Date(event.datetime);
      const now = new Date();
      if (datetime < now) {
        return;
      }
      return activeEvents.push(event);
    });

    this.state = {
      activeEvents,
      filteredEvents: activeEvents,
      filteredInputValue: "",
    };
  }

  onInputChange = (e) => {
    const value = e.target.value;
    const { activeEvents } = this.state;

    const filteredEvents = activeEvents.filter((event) => {
      // Check the input string against the event title and location
      if (
        (event.title &&
          event.title.toLowerCase().includes(value.toLowerCase())) ||
        (event.location &&
          event.location.toLowerCase().includes(value.toLowerCase()))
      ) {
        return true;
      }
      return false;
    });

    this.setState({
      filteredEvents,
      filteredInputValue: value,
    });
  };

  onInputClear = () => {
    const { activeEvents } = this.state;
    this.setState({
      filteredEvents: activeEvents,
      filteredInputValue: "",
    });
  };

  render() {
    const { classes } = this.props;
    const { activeEvents, filteredEvents, filteredInputValue } = this.state;
    return (
      <div className={classes.root}>
        <Helmet>
          <title>{`Social media & lead gen tips, tricks & shortcuts - ${config.siteTitle}`}</title>
          <meta name="og:title" content={`Social media & lead gen tips, tricks & shortcuts - ${config.siteTitle}`}/>
          <meta name="description" content={`Social media & lead gen tips, tricks & shortcuts - ${config.siteTitle}`} />
        </Helmet>
        <SEO customTitle={`Social media & lead gen tips, tricks & shortcuts - ${config.siteTitle}`} customDescription={`Social media & lead gen tips, tricks & shortcuts - ${config.siteTitle}`} />






        
        
        <div style={{paddingTop:"20px", backgroundColor:"#333666",}}>
    <Container>
            <div className={classes.flexContainer}>
                <div className={classes.flexItem} style={{paddingTop:"35px", paddingRight:"15px", paddingLeft:"15px"}}> 
                <div className={classes.subtitleText} style={{textAlign:"left"}}>Elm Street Academy offers 12-months<br />
                    of educational content, providing classes<br />
                    on a variety of topics.</div><br />
                    <div className={classes.leftsubtext} style={{ minHeight:"130px", textAlign:"left", color:"#ffffff"}}>Whether you are brand new to the industry or are highly experienced and are looking to brush up on your skill sets, Elm Street Academy has a class for you.
                    <br /><br />
                    The best part? All education offered by Elm Street Academy is FREE for you to attend!
Fill out the form below and download this 2022 Elm Street Academy Educational Guide to learn more about each class. We look forward to seeing you at an educational event soon!</div>
                </div>

                <div className={classes.flexItem} style={{paddingTop:"35px", paddingRight:"15px", paddingLeft:"15px" }}>
                <img src={Cover} width="100%"/>
                </div>
            </div>

        
    </Container>
</div>   



        <Container>
        <div style={{paddingTop:"60px",paddingBottom:"30px"}}>
          
            <FormHostEvent />
          
        </div>
        <a id="faqs"></a>
        </Container>

<div style={{paddingTop:"20px", paddingBottom:"50px", backgroundColor:"#333666"}}>
    <Container>
    <div style={{textAlign:"center", paddingBottom:"5px", paddingTop:"25px"}}><div className={classes.subtitleText2} style={{color:"#4cbbb0"}}>BOOT CAMP FAQ'S</div></div>
            <div className={classes.flexContainer}>
                <div className={classes.flexItem} style={{padding:"35px",}}>  
                      <div className={classes.leftsubheading}>Who should attend?</div>
                      <div className={classes.leftsubtext}>Elevate Educational Boot Camps are designed to energize, educate &amp; empower real estate brokers, agents &amp; teams  across the U.S.</div>
                      <br />
                      <div className={classes.leftsubheading}>What will we learn?</div>
                      <div className={classes.leftsubtext}>You’ll learn tips, tricks &amp; strategies in a fast-paced, easy-to-digest environment that will help you grow their online brand through intelligent, thoughtful marketing.</div>
                      <br />
                      <div className={classes.leftsubheading}>How long is the event?</div>
                      <div className={classes.leftsubtext}>Our onsite event usually runs about 2-hours, complete with breakfast and/or lunch, Q&amp;A and exciting giveaways (like an Amazon Fire Tablet to help agents stay mobile).</div>
                </div>
                <div className={classes.flexItem} style={{padding:"35px",}}>
                      <div className={classes.leftsubheading}>Is there a cost to participate?</div>
                      <div className={classes.leftsubtext}>No. All of our Boot Camp events are FREE for attendees.</div>
                      <br />
                      <div className={classes.leftsubheading}>How do I register?</div>
                      <div className={classes.leftsubtext}>Select an event you’d like to attend and follow the online registration process...and be sure to invite your friends &amp; colleagues who may also be interested!</div>
                      <br />
                      <div className={classes.leftsubheading}>How do I book a boot camp for my agents?</div>
                      <div className={classes.leftsubtext}>That’s easy.  Fill out our request form OR contact<br />
                            Chyane LaHay, Events Coordinator at 813-334-0166 | chyanel@tryelevate.com to start the conversation.</div>
                </div>
            </div>

        
    </Container>
</div>    
      </div>
    );
  }
}
export const query = graphql`
  query eventQuery {
    allContentfulEvent(limit: 1000, sort: { fields: [datetime], order: ASC }) {
      edges {
        node {
          datetime
          id
          location
          registrationUrl
          title
        }
      }
    }
  }
`;

export default withStyles((theme) => ({
  root: {
    position: "relative",
    paddingTop: "5px",
  },
  top: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
  },
  columnSection:{
    flex: "1",
    textAlign:"left", 
    paddingTop:"25px", 
  },
  bold:{
    fontWeight:"700",
  },
  heading: {
    fontSize: "32px",
    fontWeight: "700",
    marginRight: "auto",
  },
  bootcampLink: {
    color: "inherit",
    textDecoration: "none",
    padding: "12px 0",

    "&:hover": {
      textDecoration: "underline",
    },
  },
  inputWrapper: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    maxWidth: "600px",
    margin: "64px auto 0",
  },
  input: {
    display: "flex",
    width: "100%",
    height: "52px",
    border: "1px solid rgba(100, 97, 110, .36)",
    color: "#64616E",
    fontSize: "16px",
    fontFamily: "inherit",
    fontWeight: "600",
    borderRadius: "4px",
    padding: "18px 48px 18px 12px",
  },
  inputIcon: {
    position: "absolute",
    top: "0",
    right: "140px",
    color: "rgba(100, 97, 110, .36)",
    margin: "8px",
  },
  resetButton: {
    fontFamily: "inherit",
    fontWeight: "600",
    background: "rgba(100, 97, 110, .1)",
    borderRadius: "6px",
    padding: "12px",
    marginTop: "24px",
  },
  grid: {
    marginTop: "32px",
  },
  logoStyle:{
    width:"100%",
    maxWidth:"350px",
    [theme.breakpoints[900]]: {
      width: "40%"
    },
  },
  subLogoStyle:{
    width:"100%",
    maxWidth:"300px"
  },

  titleText: {
    fontSize: "20px",
    lineHeight: "36px",
    fontWeight: "700",
    textAlign: "center",
    paddingBottom: "34px",
    paddingTop: "30px"
  },

  subtitleText: {
    fontSize: "22px",
    lineHeight: "28px",
    fontWeight: "700",
    color: "#4cbbb0",
    textAlign: "center",
    paddingTop: "10px",
  },

  subtitleText2: {
    fontSize: "22px",
    lineHeight: "24px",
    fontWeight: "700",
    color: "#f69c26",
    textAlign: "center",
    paddingTop: "10px",
  },

  subtext: {
    fontSize: "16px",
    lineHeight: "22px",
    fontWeight: "500",
    color: "#50555c",
    textAlign: "center",
  },

  column2:{
    width:"530px",
    maxWidth: "100%",
    paddingRight:"20px",
    paddingLeft:"20px",
    verticalAlign: "top",
  },

  eventsBackground: {
    backgroundImage: `url('${eventsbg}')`,
    backgroundPosition: "bottom",
    width:"100%",
  },

  leftsubheading: {
    color: "#4bbbb1",
    fontSize: "18px",
    fontWeight: "700",
    letterSpacing: ".25px",
    fontWeight: "700",
    lineHeight: "1.6",
  
    [theme.breakpoints[900]]: {
        fontSize: "18px",
    },
  },
  leftsubtext: {
    color: "#ffffff",
    fontWeight: "500",
    fontSize: "18px",
    letterSpacing: ".25px",
    lineHeight: "1.6",
    marginbottom: "20px",
    textAlign: "left",
    [theme.breakpoints[900]]: {
        fontSize: "16px",
    },
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
    marginBottom:"-2px",
  
  
    [theme.breakpoints[900]]: {
        maxWidth: "50%",
        width: "50%",
        paddingRight: "30px",
        paddingLeft: "30px",
        paddingBottom: "0px",
    },
  },
  buttonIcon: {
    minWidth: "200px",
    maxWidth: "200px",
    alignContent: "center",
    justifyContent: "center",
    fontSize: "14px",
    fontWeight: "700",
    display: "block",
    letterSpacing: ".25px",
    backgroundColor: theme.colors.secondary,
    color: "#FFF",
    textDecoration: "none",
    paddingRight: "14px",
    paddingLeft: "14px",
    paddingTop: "8px",
    paddingBottom: "14px",
    borderRadius: "4px",
    margin: "14px auto",
    marginBottom: "20px",
  },

  buttonIcon2: {
    minWidth: "200px",
    maxWidth: "200px",
    alignContent: "center",
    justifyContent: "center",
    fontSize: "14px",
    fontWeight: "700",
    display: "block",
    letterSpacing: ".25px",
    backgroundColor: "#292c64",
    color: "#FFF",
    textDecoration: "none",
    paddingRight: "14px",
    paddingLeft: "14px",
    paddingTop: "8px",
    paddingBottom: "14px",
    borderRadius: "4px",
    margin: "14px auto",
    marginBottom: "20px",
  },

  button: {
    minWidth: "200px",
    maxWidth: "200px",
    alignContent: "center",
    justifyContent: "center",
    fontSize: "14px",
    fontWeight: "700",
    display: "block",
    letterSpacing: ".25px",
    backgroundColor: theme.colors.secondary,
    color: "#FFF",
    textDecoration: "none",
    padding: "12px 14px",
    borderRadius: "4px",
    margin: "14px auto",
    marginBottom: "20px",
  },
}))(Events);
