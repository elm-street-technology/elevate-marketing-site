import React from "react";
import Link from "gatsby-link";
import withStyles from "elevate-ui/withStyles";
import EventCardGrid from "../components/EventCardGrid";
import EventCard from "../components/EventCard";
import Container from "../components/Container";
import SEO from "../components/SEO";
import Hexagons from "../images/hexagons.svg";

const Events = ({ classes, data }) => {
  const events = data.allContentfulEvent.edges;
  return (
    <div className={classes.root}>
      <SEO />
      <Container>
        <div className={classes.top}>
          <div className={classes.heading}>Upcoming Events</div>
          <Link to="/bootcamp">Learn about our Social Media Bootcamp →</Link>
        </div>
        <EventCardGrid className={classes.grid}>
          {events.map(({ node: event }) => (
            <EventCard key={event.id} event={event} />
          ))}
        </EventCardGrid>
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
};

export const query = graphql`
  query eventQuery {
    allContentfulEvent(limit: 1000, sort: { fields: [datetime], order: ASC }) {
      edges {
        node {
          datetime
          id
          location
          title
        }
      }
    }
  }
`;

export default withStyles((theme) => ({
  root: {
    position: "relative",
    paddingTop: "96px",
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
  grid: {
    paddingTop: "96px",
  },
  backgroundSlice: {
    position: "absolute",
    top: "240px",
    bottom: "0",
    right: "0",
    left: "0",
    width: "100%",
    height: "400px",
    backgroundImage: `url('${Hexagons}')`,
    opacity: "0.5",
    zIndex: "-1",
  },

  backgroundTopSlice: {
    position: "absolute",
    top: "-1px",
    width: "100%",
    height: "10vw",
    transform: "rotate(180deg)",
  },

  backgroundBottomSlice: {
    position: "absolute",
    bottom: "0",
    width: "100%",
    height: "10vw",
  },
}))(Events);
