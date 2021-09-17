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
import Referralbg from "../images/referralbg.jpg";
import Referrallogo from "../images/referral_logo.png";
import Hexagons from "../images/hexagons.svg";
import Search from "elevate-ui-icons/Search";

class EventsReferrals extends Component {
  constructor(props) {
    super(props);

    const { data } = this.props;
    console.log(data);
    const events = data.allContentfulEvent !== null ? data.allContentfulEvent.edges : [];

    var mls = false;
    var slug = false;
    if(this.props.pathContext.mls){
      mls = this.props.pathContext.mls;
    }
    if(this.props.pathContext.slug){
      slug = this.props.pathContext.slug;
    }

    const activeEvents = [];
    events.forEach(({ node: event }) => {
      const datetime = new Date(event.datetime);
      const now = new Date();
      if (datetime < now) {
        return;
      }
      if (props.pathContext.slug){
        if(event.slug != props.pathContext.slug){
          return;
        }
      }
      return activeEvents.push(event);
    });

    this.state = {
      activeEvents,
      filteredEvents: activeEvents,
      filteredInputValue: "",
      filteredInputValueState: '',
      mls: mls,
      slug: slug,
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
      searchVal = searchVal.replace(/%2C/g,',');
      
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
    const { activeEvents, filteredEvents, filteredInputValue, mls, slug } = this.state;
    return (
      <div className={classes.root}>
        <Helmet>
          <title>{`Referrals - ${config.siteTitle}`}</title>
          <meta name="og:title" content={`how to get more referrals for your business! - ${config.siteTitle}`}/>
          <meta name="description" content={`how to get more referrals for your business! - ${config.siteTitle}`} />
        </Helmet>
        <SEO customTitle customDescription={`how to get more referrals for your business! - ${config.siteTitle}`} />

        <div className={classes.smBackground}>
        <Container>
        
                <div className={classes.titleText} style={{color:"#ffffff", paddingRight:"20px", paddingLeft:"20px"}}>
                <img src={Referrallogo} width="100%" style={{paddingBottom:"20px", maxWidth:"450px"}}/><br />
                Hot to get MORE referrals for your business year-after-year!<br />
                Register for this MUST-ATTEND experience today...
                { mls && <span><br/>exclusively for {mls}.</span>}
                </div>
                <div className={classes.titleSubText2} style={{paddingRight:"20px", paddingLeft:"20px"}}>Registration is FREE.   <span style={{color:"#6fc3f4"}}>Space is LIMITED.</span> </div>

                
              

                
 


                
                <div className={classes.BodyText2} style={{padding:"40px"}}>
                <div className={classes.titleSubText2} style={{paddingRight:"20px", paddingLeft:"20px", paddingBottom:"20px"}}>HOT NEW Educational Experience</div>
                Referral and repeat business is one of the most effective<br />
and affordable ways to build your real estate business,<br />
but there’s a strategy that agents must know in order to be successful.
                </div>
         
        </Container>
        </div>

        <div style={{backgroundColor:"#e9e747", textAlign:"center", padding:"15px"}}><span className={classes.bold} style={{color:"#322b5f", lineHeight:"20px"}}>REGISTER TODAY by selecting from any upcoming date/time slots</span></div>


        <Container>
        { !slug &&
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
          }
          



          {!(activeEvents && activeEvents.length) ? (
            <EventCardZero className={classes.grid}>
              <div>There are no scheduled upcoming events.</div>
              <div>Check back again soon.</div>
            </EventCardZero>
          ) : !(filteredEvents && filteredEvents.length) ? (
            <EventCardZero className={classes.grid}>
              <div>
                Oops!  Received this message in error?  Click below to view our full event list.
              </div>
              <div>
                <button className={classes.resetButton} onClick={this.onInputClear}>
                                Show ALL Upcoming Events
                              </button>
              </div>
              <div style={{marginTop:'20px'}}>
                No local events in your area at the moment? Click below to connect with one of our Success Coaches instead.
              </div>
              <div>
              <a href="/get-started" className={classes.resetButton}>Speak to an Elevate Coach</a>
                  
              </div>
              
            </EventCardZero>
          ) : (
            <EventCardGrid className={classes.grid}>
              {filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </EventCardGrid>
          )}
          
        </Container>

      </div>
    );
  }
}
export const query = graphql`
  query eventReferralsQuery {
    allContentfulEvent(limit: 1000, filter: {eventType: {eq: "Referralss"}}, sort: { fields: [datetime], order: ASC }) {
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
          slug
          eventStatus
        }
      }
    }
  }
`;

export default withStyles((theme) => ({
  root: {
    position: "relative",
    paddingTop: "20px",
    paddingBottom: "30px",
  },
  top: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
  },
  top2: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "top",
  },
  column3:{
    width:"100%",
    maxWidth: "100%",
    paddingRight:"13px",
    paddingLeft:"13px",
    verticalAlign: "top",
    [theme.breakpoints[900]]: {
      width: "350px"
    },
  },
  heading: {
    fontSize: "32px",
    fontWeight: "700",
    marginRight: "auto",
  },
  bold:{
    fontWeight:"700",
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
    backgroundColor: "#55c3ba",
    textDecoration: "none",
    borderRadius: "6px",
    padding: "12px",
    paddingRight:"24px",
    paddingLeft:"24px",
    marginTop: "24px",
    color:"#FFFFFF",
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
    fontSize: "24px",
    lineHeight: "33px",
    fontWeight: "700",
    textAlign: "center",
    color: "#55c3ba",
    paddingBottom: "18px",
    paddingTop: "40px"
  },

  titleSubText: {
    fontSize: "18px",
    lineHeight: "24px",
    fontWeight: "700",
    textAlign: "center",
    color: "#55c3ba",
  },

  titleSubText2: {
    fontSize: "18px",
    lineHeight: "24px",
    fontWeight: "700",
    textAlign: "center",
    color: "#e9e747",
  },

  BodyText: {
    fontSize: "16px",
    lineHeight: "25px",
    fontWeight: "300",
    textAlign: "center",
    color: "#56585a",
    paddingRight: "45px",
    paddingLeft: "45px",
  },

  BodyText2: {
    fontSize: "16px",
    lineHeight: "25px",
    fontWeight: "300",
    textAlign: "center",
    color: "#ffffff",
    paddingRight: "45px",
    paddingLeft: "45px",
  },

  smBackground: {
    backgroundImage: `url('${Referralbg}')`,
    backgroundPosition: "middle",
    paddingTop:"25px",
    paddingBottom:"25px",
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
}))(EventsReferrals);
