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
            Select an event you are interested in:
        </div>
        </Container>
        </div>
        <Container>
          <div className={classes.top}>
            {/* <div className={classes.heading} style={{ marginRight: "auto", marginLeft: "auto",textAlign:"center" }}>Upcoming Webinars &amp; Live Events</div> */}
            <div style={{width:"45%", height:"300px", margin:"20px", textAlign:"center", paddingTop:"25px", paddingBottom:"25px"}}>
                    <Link className={classes.bootcampLink} to="/events_sm">
                      <img src={SMBCLogo} className={classes.subLogoStyle}/>
                    </Link><br />
                    <div className={classes.subtitleText}>Turn your social media from a toy into a tool</div>
                    <div className={classes.subtext}>The #1 boot camp for real estate agents continues
                    to take the US by storm. This 2-hr, interactive
                    educational seminar is designed to inspire
                    and empower agents with tips, tricks &amp; strategies
                    for conquering their website, blog and social media.</div>
            </div>
            <div style={{ width: "45%", height: "300px", margin: "20px", textAlign: "center", paddingTop:"25px", paddingBottom:"25px" }}>
                    <Link className={classes.bootcampLink} to="/events_lg">
                      <img src={LGBCLogo} className={classes.subLogoStyle} />
                    </Link><br />
                    <div className={classes.subtitleText}>Capture, nurture &amp; convert more leads</div>
                    <div className={classes.subtext}>The NEW high-energy, 2-hr session teaches
                    brokers and agents alike the secrets of online lead generation
                    used by top performers in the industry.  Attendees will learn
                    the three main types of lead generation, along with
                    the pros, cons and best practices to capture,
                    nurture &amp; convert more online business in less time.</div>
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
}))(Events);
