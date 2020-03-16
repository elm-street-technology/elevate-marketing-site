import React, { Component } from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import config from "../utils/siteConfig";
import withStyles from "elevate-ui/withStyles";
import Container from "../components/Container";
import SEO from "../components/SEO";
import Logo from "../images/generic_bootcamp.png";
import Calendar from "elevate-ui-icons/Calendar";
import eventsbg from "../images/events_bg.jpg";
import SMBCLogo from "../images/sm_bootcamp.png";
import LGBCLogo from "../images/lg_bootcamp.png";
import MastermindLogo from "../images/mastermind_logo.png";
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

        <div className={classes.eventsBackground}>
        <Container>
                    <div style={{ textAlign: "center", paddingTop:"50px" }}>
                          <img src={Logo} className={classes.logoStyle}/>
                    </div>
                    <div className={classes.titleText}>
                        Select your area of interest:
                    </div>
        </Container>
        </div>
        
        <div style={{backgroundColor:"#f15953", textAlign:"center", padding:"15px"}}><span className={classes.bold} style={{color:"#ffffff"}}>Now available via WEBINAR</span></div>

        <Container>
          <div className={classes.top}>
            {/* <div className={classes.heading} style={{ marginRight: "auto", marginLeft: "auto",textAlign:"center" }}>Upcoming Webinars &amp; Live Events</div> */}
            <div className={classes.columnSection}>
                    <Link className={classes.bootcampLink} to="/events_sm">
                      <img src={SMBCLogo} className={classes.subLogoStyle}/>
                    </Link><br />
                    <div className={classes.subtitleText}>Turn your social media from a toy into a tool</div>
                    <div className={classes.subtext} style={{ minHeight:"130px"}}>The #1 boot camp for real estate agents continues
                    to take the US by storm. This 2-hr, interactive
                    educational seminar is designed to inspire
                    and empower agents with tips, tricks &amp; strategies
                    for conquering their website, blog and social media.</div>
                    <div>
                      <a href="/events_sm" className={classes.buttonIcon2}>
                      <Calendar size={20} style={{position: "relative",top:"4px"}}/> Upcoming Events</a>
                    </div>
                    <a href="#host_form" className={classes.button}>
                    Host an Event</a>
                    <a  href="#faqs" className={classes.button}>
                    FAQ</a>
            </div>
            <div className={classes.columnSection}>
                    <Link className={classes.bootcampLink} to="/events_lg">
                      <img src={LGBCLogo} className={classes.subLogoStyle} />
                    </Link><br />
                    <div className={classes.subtitleText}>Capture, nurture &amp; convert more leads</div>
                    <div className={classes.subtext} style={{ minHeight:"130px"}}>Come learn the tips, tricks &amp; shortcuts to online
                    lead generation in this high-energy, 90-minute educational session. Brokers and agents
                    alike will learn the three main types of lead generation, along with the pros,
                    cons &amp; best practices to capture, nurture &amp; convert more online business in less time.
                    Wonder how the top performers in the industry maximize their online lead generation?
                    This is your chance to learn their secrets.</div>
                    <div >
                      <a href="/events_lg" className={classes.buttonIcon2}>
                      <Calendar size={20} style={{position: "relative",top:"4px"}}/> Upcoming Events</a>
                    </div>
                    <a  href="#host_form" className={classes.button}>
                    Host an Event</a>
                    <a  href="#faqs" className={classes.button}>
                    FAQ</a>
             </div>
          </div>

          <div className={classes.top}>
            {/* <div className={classes.heading} style={{ marginRight: "auto", marginLeft: "auto",textAlign:"center" }}>Upcoming Webinars &amp; Live Events</div> */}
            <div className={classes.columnSection}>
                    <img src={MastermindLogo} className={classes.subLogoStyle}/>
                    <div className={classes.subtitleText}>Empowering brokers to lead &amp; succeed</div>
                    <div className={classes.subtext}>You asked and we delivered! This half-day
                    broker-only session addresses the key business practices
                    and KPIs that brokers should pay attention to in order
                    to succeed and grow.  Topics include lead generation,
                    agent recruitment and retention, the most important KPIs
                    and metrics to follow, and much more.</div>

                    <a href="#host_form" className={classes.button}>
                    Host an Event
                    </a>
            </div>
            <div className={classes.columnSection}>
                    <img src={DeepLogo} className={classes.subLogoStyle} style={{maxWidth:"260px"}}/>      
                    <div className={classes.subtitleText}>Educational itinerary designed just for you</div>
                    <div className={classes.subtext}>Work with the Elevate Educational Team to develop
                    a custom experience for your membership and/or agents.
                    Popular past deep dives include Facebook intensives,
                    developing content for consumer audiences,
                    agent recruitment &amp; retention strategies, and
                    developing a website designed to capture &amp; convert.</div>

                    <a href="#host_form" className={classes.button}>
                    Consult with Our Team
                    </a>
             </div>
          </div>
          <a id="host_form"></a>
        <hr />
          
        <div style={{paddingTop:"60px",paddingBottom:"30px"}}>
          
            <FormHostEvent />
          
        </div>
        <a id="faqs"></a>
        </Container>

<div style={{paddingTop:"20px", paddingBottom:"50px", backgroundColor:"#28336f"}}>
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
    margin:"20px", 
    textAlign:"center", 
    paddingTop:"20px", 
    paddingBottom:"20px"
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
    fontSize: "18px",
    lineHeight: "30px",
    fontWeight: "700",
    color: "#4cbbb0",
    textAlign: "center",
    paddingTop: "10px",
  },

  subtitleText2: {
    fontSize: "22px",
    lineHeight: "24px",
    fontWeight: "700",
    color: "#28336f",
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
    paddingBottom: "25px",
  
  
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
