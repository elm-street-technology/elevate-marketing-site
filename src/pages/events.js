import React, { Component } from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import config from "../utils/siteConfig";
import withStyles from "elevate-ui/withStyles";
import EventCardGrid from "../components/EventCardGrid";
import EventCard from "../components/EventCard";
import EventCardZero from "../components/EventCardZero";
import Container from "../components/Container";
import SEO from "../components/SEO";
import Hexagons from "../images/hexagons.svg";
import Logo from "../images/generic_bootcamp.png";
import Search from "elevate-ui-icons/Search";
import eventsbg from "../images/events_bg.jpg";
import SMBCLogo from "../images/sm_bootcamp.png";
import LGBCLogo from "../images/lg_bootcamp.png";
import WebinarsLogo from "../images/edu_webinar_logo3.png";

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
        <Container>
          <div className={classes.top}>
            {/* <div className={classes.heading} style={{ marginRight: "auto", marginLeft: "auto",textAlign:"center" }}>Upcoming Webinars &amp; Live Events</div> */}
            <div style={{width:"45%", height:"450px", margin:"20px", textAlign:"center", paddingTop:"25px", paddingBottom:"25px"}}>
                    <Link className={classes.bootcampLink} to="/events_sm">
                      <img src={SMBCLogo} className={classes.subLogoStyle}/>
                    </Link><br />
                    <div className={classes.subtitleText}>Turn your social media from a toy into a tool</div>
                    <div className={classes.subtext}>The #1 boot camp for real estate agents continues
                    to take the US by storm. This 2-hr, interactive
                    educational seminar is designed to inspire
                    and empower agents with tips, tricks &amp; strategies
                    for conquering their website, blog and social media.</div>

                    <a target="_blank" href="/events_sm" className={classes.button}>
                    Upcoming Events</a>
                    <a target="_blank" href="" className={classes.button}>
                    Host an Event</a>
                    <a target="_blank" href="" className={classes.button}>
                    FAQ</a>
            </div>
            <div style={{ width: "45%", height: "450px", margin: "20px", textAlign: "center", paddingTop:"25px", paddingBottom:"25px" }}>
                    <Link className={classes.bootcampLink} to="/events_lg">
                      <img src={LGBCLogo} className={classes.subLogoStyle} />
                    </Link><br />
                    <div className={classes.subtitleText}>Capture, nurture &amp; convert more leads</div>
                    <div className={classes.subtext}>The NEW high-energy, 2-hr session teaches
                    brokers and agents alike the secrets of online lead generation
                    used by top performers in the industry.  Attendees will learn
                    the three main types of lead generation, along with
                    the pros, cons and best practices to capture,
                    nurture &amp; convert more<br />
                    online business in less time.</div>

                    <a target="_blank" href="/events_lg" className={classes.button}>
                    Upcoming Events</a>
                    <a target="_blank" href="" className={classes.button}>
                    Host an Event</a>
                    <a target="_blank" href="" className={classes.button}>
                    FAQ</a>
             </div>
          </div>

          <div className={classes.top}>
            {/* <div className={classes.heading} style={{ marginRight: "auto", marginLeft: "auto",textAlign:"center" }}>Upcoming Webinars &amp; Live Events</div> */}
            <div style={{width:"45%", height:"280px", margin:"20px", textAlign:"center", paddingTop:"25px", paddingBottom:"25px"}}>
                    <div className={classes.subtitleText2}>BROKER ONLY MASTERMIND</div>
                    <div className={classes.subtitleText}>Empowering brokers to lead &amp; succeed</div>
                    <div className={classes.subtext}>You asked and we delivered! This half-day
                    broker-only session addresses the key business practices
                    and KPIs that brokers should pay attention to in order
                    to succeed and grow.  Topics include lead generation,
                    agent recruitment and retention, the most important KPIs
                    and metrics to follow, and much more.</div>

                    <a target="_blank" href="" className={classes.button}>
                    Host an Event
                    </a>
            </div>
            <div style={{ width: "45%", height: "280px", margin: "20px", textAlign: "center", paddingTop:"25px", paddingBottom:"25px" }}>
                    <div className={classes.subtitleText2}>CUSTOM DEEP DIVES</div>
                    <div className={classes.subtitleText}>Educational itinerary designed just for you</div>
                    <div className={classes.subtext}>Work with the Elevate Educational Team to develop
                    a custom experience for your membership and/or agents.
                    Popular past deep dives include Facebook intensives,
                    developing content for consumer audiences,
                    agent recruitment &amp; retention strategies, and
                    developing a website designed to capture &amp; convert.</div>

                    <a target="_blank" href="" className={classes.button}>
                    Consult with Our Team
                    </a>
             </div>
          </div>



     







          <div className={classes.inputWrapper}>
            <input
              className={classes.input}
              onChange={this.onInputChange}
              value={filteredInputValue}
              placeholder="Type an MLS to search... (e.g. FMLS)"
            />
            <Search size={36} className={classes.inputIcon} />
            <select className={classes.input} style={{width:"30%",marginLeft:"10px"}}>
              <option>Any State</option>
              <option value="AK">AK</option>
              <option value="AL">AL</option>
              <option value="AR">AR</option>
              <option value="AZ">AZ</option>
              <option value="CA">CA</option>
              <option value="CO">CO</option>
              <option value="CT">CT</option>
              <option value="DC">DC</option>
              <option value="DE">DE</option>
              <option value="FL">FL</option>
              <option value="GA">GA</option>
              <option value="HI">HI</option>
              <option value="IA">IA</option>
              <option value="ID">ID</option>
              <option value="IL">IL</option>
              <option value="IN">IN</option>
              <option value="KS">KS</option>
              <option value="KY">KY</option>
              <option value="LA">LA</option>
              <option value="MA">MA</option>
              <option value="MD">MD</option>
              <option value="ME">ME</option>
              <option value="MI">MI</option>
              <option value="MN">MN</option>
              <option value="MO">MO</option>
              <option value="MS">MS</option>
              <option value="MT">MT</option>
              <option value="NC">NC</option>
              <option value="ND">ND</option>
              <option value="NE">NE</option>
              <option value="NH">NH</option>
              <option value="NJ">NJ</option>
              <option value="NM">NM</option>
              <option value="NV">NV</option>
              <option value="NY">NY</option>
              <option value="OH">OH</option>
              <option value="OK">OK</option>
              <option value="OR">OR</option>
              <option value="PA">PA</option>
              <option value="RI">RI</option>
              <option value="SC">SC</option>
              <option value="SD">SD</option>
              <option value="TN">TN</option>
              <option value="TX">TX</option>
              <option value="UT">UT</option>
              <option value="VA">VA</option>
              <option value="VT">VT</option>
              <option value="WA">WA</option>
              <option value="WI">WI</option>
              <option value="WV">WV</option>
              <option value="WY">WY</option>
            </select>
          </div>
          



          {!(activeEvents && activeEvents.length) ? (
            <EventCardZero className={classes.grid}>
              <div>There are no scheduled upcoming events.</div>
              <div>Check back again soon.</div>
            </EventCardZero>
          ) : !(filteredEvents && filteredEvents.length) ? (
            <EventCardZero className={classes.grid}>
              <div>
                There are no scheduled events for "{filteredInputValue}"
              </div>
              <button
                className={classes.resetButton}
                onClick={this.onInputClear}
              >
                Show all events
              </button>
            </EventCardZero>
          ) : (
            <EventCardGrid className={classes.grid}>
              {filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </EventCardGrid>
          )}
          
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
                            Chyane LaHay, Events Corrdinator at 813-334-0166 | chyanel@tryelevate.com to start the conversation.</div>
                </div>
            </div>

        
    </Container>
</div>    




        <Container>
          <div className={classes.top} style={{
            float:"right",
            marginTop:"40px"}}>
            <Link className={classes.bootcampLink} to="/bootcamp">
              Learn about our Social Media Bootcamp →
            </Link>
          </div>
        </Container>
        <div className={classes.backgroundSlice}>
          <svg
            className={classes.backgroundTopSlice}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon fill="white" points="0,100 100,0 100,100" />
          </svg>
          <svg
            className={classes.backgroundBottomSlice}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon fill="white" points="0,100 100,0 100,100" />
          </svg>
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
    paddingBottom: "192px",
  },
  top: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
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
