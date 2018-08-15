import React from "react";
import Link from "gatsby-link";
import withStyles from "elevate-ui/withStyles";
import EventCardGrid from "../components/EventCardGrid";
import EventCard from "../components/EventCard";
import Container from "../components/Container";
import SEO from "../components/SEO";

const Events = ({ classes, data }) => {
  const events = data.allContentfulEvent.edges;
  return (
    <div className={classes.container}>
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
}))(Events);
