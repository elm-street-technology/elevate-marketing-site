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
import smbg from "../images/sm_topbg2.jpg";
import Hexagons from "../images/hexagons.svg";
import Search from "elevate-ui-icons/Search";

class EventsSM extends Component {
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
      filteredInputValueState: '',
    };
  }

  componentDidMount() {
    console.log("Search string");
    console.log(this.props.location.search);
    if(this.props.location.search.length > 4){
      var searchVal = '';
      var urlpieces = this.props.location.search.replace("?",'').split('&');
      urlpieces.forEach(function(val){
        if(val.substring(0,2) == 'q='){
          searchVal = val.replace('q=','');
        }
      });    
      
      //var searchVal = this.props.location.search
      const { activeEvents } = this.state;

      var filteredEvents = {};
      filteredEvents = this.filterEvents(activeEvents, searchVal, 'keyword');
      this.setState({
        filteredInputValue: searchVal,
        filteredEvents
      });
    }
  }

  onInputChange = (e) => {
    console.log(e.target.name);
    const value = e.target.value;
    const { activeEvents } = this.state;

    var filteredEvents = {};

    if(e.target.name == 'keyword'){
      filteredEvents = this.filterEvents(activeEvents, value, 'keyword');
      this.setState({
        filteredInputValue: value,
      });
    }
    if(e.target.name == 'state'){
      filteredEvents = filteredEvents = this.filterEvents(activeEvents, value, 'state');
      this.setState({
        filteredInputValueState: value,
      });
    }    

    this.setState({
      filteredEvents
    });
  };

  onInputClear = () => {
    const { activeEvents } = this.state;
    this.setState({
      filteredEvents: activeEvents,
      filteredInputValue: "",
      filteredInputValueState: ""
    });
  };

  filterEvents = (events, keyword, type="keyword") => {
    var filteredEvents = events;
    if(type === 'keyword'){

      var values = keyword.split(",");

      filteredEvents = events.filter((event) => {
        // Check the input string against the event title and location
        var toReturn = false;
        values.forEach(function(value){
          if(value.length > 1){
            if (
              (event.title &&
                event.title.toLowerCase().includes(value.toLowerCase())) ||
              (event.location &&
                event.location.toLowerCase().includes(value.toLowerCase())) ||
              (event.mls &&
                event.mls.toLowerCase().includes(value.toLowerCase()))
            ) {
              toReturn = true;
            }
          }
          
        })
        
        return toReturn;
      });
    }
    if(type === 'state'){
      filteredEvents = events.filter((event) => {
        if (
          (event.state &&
            event.state.toLowerCase().includes(keyword.toLowerCase())) ||
          (event.state && keyword === 'Any State')
        ) {
          return true;
        }
        return false;
      });
    }

    return filteredEvents;
  }

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

        <div className={classes.smBackground}>
        <Container>
                <div className={classes.titleSubText} style={{color:"#55c3ba", paddingBottom:"35px",paddingTop:"0px"}}>
                    Do you struggle with social media? We're here to help!
                </div>
                <div style={{maxWidth:"800px",marginLeft:"auto",marginRight:"auto"}}>
                <div style={{ textAlign: "center" }} className={classes.videoEmbed}>
                      <iframe className={classes.videoContainer} src="https://www.youtube.com/embed/bHTQ31OzZY8?autoplay=1&rel=0"
                      frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                </div>
                <div className={classes.titleText} style={{color:"#2d397c"}}>
                      Social Media Boot Camp
                </div>
                <div className={classes.BodyText}>
                      The #1 boot camp for real estate agents continues to take the US by storm.<br />
                      This FREE 2-hr, interactive educational seminar is designed to inspire and empower agents<br />
                      with tips, tricks &amp; strategies for conquering their website, blog and social media.
                </div>
          <div className={classes.titleSubText} style={{color:"#2d397c", paddingBottom:"35px"}}>
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
              name="keyword"
            />
            <Search size={36} className={classes.inputIcon} />
            <select className={classes.input} style={{ width: "30%", marginLeft: "10px",padding:"0px" }} name="state" onChange={this.onInputChange}
              value={this.state.filteredInputValueState}>
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
                  Don't see an upcoming event in your area? No worries, you can still get:
                  
              </div>
              <div>
                  <ul>
                    <li>Schedule Audit with a Coach</li>
                    <li>Receive Notification of Next Event in Your Area</li>
                    <li><Link to="/events_webinars">Register for an Upcoming Webinar</Link></li>
                  </ul>
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
        
      </div>
    );
  }
}
export const query = graphql`
  query eventSMQuery {
    allContentfulEvent(limit: 1000, filter: {eventType: {eq: "SM"}}, sort: { fields: [datetime], order: ASC }) {
      edges {
        node {
          datetime
          id
          location
          registrationUrl
          title
          mls
          state
          physicalAddress
        }
      }
    }
  }
`;

export default withStyles((theme) => ({
  root: {
    position: "relative",
    paddingTop: "40px",
    paddingBottom: "30px",
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

  smBackground: {
    backgroundImage: `url('${smbg}')`,
    backgroundPosition: "bottom",
    width:"100%",
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
}))(EventsSM);
