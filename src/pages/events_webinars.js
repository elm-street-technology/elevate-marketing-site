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
import eventsbg from "../images/events_bg.jpg";
import Logo from "../images/edu_webinar_logo3.png";
import Search from "elevate-ui-icons/Search";

class EventsWebinars extends Component {
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
        <SEO customTitle customDescription={`Social media & lead gen tips, tricks & shortcuts - ${config.siteTitle}`} />
        
        <div className={classes.eventsBackground}>
        <Container>
          <div style={{ textAlign: "center" }}>
            <img src={Logo} className={classes.logoStyle}/>
          </div>
          <div className={classes.titleText}>
            Educational Webinars
        </div>
        <div className={classes.BodyText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br />
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud<br />
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
          <div className={classes.titleSubText}>
            Select an event you are interested in:
        </div>
        </Container>
        </div>
        <Container>
          <div className={classes.inputWrapper}>
            <input
              className={classes.input}
              onChange={this.onInputChange}
              value={filteredInputValue}
              placeholder="Type an MLS to search... (e.g. FMLS)"
            />
            <Search size={36} className={classes.inputIcon} />
            
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
  query eventWebinarQuery {
    allContentfulEvent(limit: 1000, filter: {eventType: {eq: "Webinar"}}, sort: { fields: [datetime], order: ASC }) {
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
    paddingTop: "40px",
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
    width:"80%",
    [theme.breakpoints[900]]: {
      width: "40%"
    },
  },

  titleText: {
    fontSize: "28px",
    lineHeight: "36px",
    fontWeight: "700",
    textAlign: "center",
    color: "#55c3ba",
    paddingBottom: "24px",
    paddingTop: "40px"
  },

  titleSubText: {
    fontSize: "18px",
    lineHeight: "30px",
    fontWeight: "700",
    textAlign: "center",
    color: "#55c3ba",
    paddingTop: "30px",
  },

  BodyText: {
    fontSize: "16px",
    lineHeight: "22px",
    fontWeight: "300",
    textAlign: "center",
    color: "#56585a",
    paddingRight: "45px",
    paddingLeft: "45px",
  },

  eventsBackground: {
    backgroundImage: `url('${eventsbg}')`,
    backgroundSize: "cover",
    backgroundPosition: "absolute",
    width:"100%",
  },
}))(EventsWebinars);
