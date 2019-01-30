import React from "react";
import Link from "gatsby-link";
import withStyles from "elevate-ui/withStyles";
import WebinarCardGrid from "../components/WebinarCardGrid";
import WebinarCard from "../components/WebinarCard";
import Container from "../components/Container";
import SEO from "../components/SEO";
import OverlappingHexagons from "../images/overlapping-hexagons.svg";
import Header from "../components/Header";
import Footer from "../components/Footer";

const days = [
  "Every Monday",
  "Every Tuesday",
  "Every Wednesday",
  "Every Thursday",
  "Every Friday",
  "Every Saturday",
  "Every Sunday",
];

const Webinars = ({ classes, data }) => {
  const webinars = data.allContentfulWebinar.edges;
  const orderedWebinars = [...webinars].sort(
    (a, b) => days.indexOf(a.node.day) > days.indexOf(b.node.day)
  );
  return (
    <div className={classes.root}>
      <Header />
      <SEO />
      <Container>
        <div className={classes.top}>
          <div className={classes.heading}>Upcoming Webinars</div>
          <Link className={classes.bootcampLink} to="/bootcamp">
            Learn about our Social Media Bootcamp →
          </Link>
        </div>
        <WebinarCardGrid className={classes.grid}>
          {orderedWebinars.map(({ node: webinar }) => {
            return <WebinarCard key={webinar.id} webinar={webinar} />;
          })}
        </WebinarCardGrid>
        <div className={classes.pastContainer}>
          <div className={classes.past}>Past Webinars</div>
          <div className={classes.pastDesc}>
            Updated upon the completion of the weekly webinars
          </div>
          <a
            href={"https://tryelevate.wistia.com/projects/u8p4ih0dk6"}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.pastLink}
          >
            View Recordings
          </a>
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
      <Footer />
    </div>
  );
};

export const query = graphql`
  query webinarQuery {
    allContentfulWebinar(limit: 1000) {
      edges {
        node {
          day
          description
          id
          registrationUrl
          time
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
    color: "#2E2E35",
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
  grid: {
    paddingTop: "96px",
    paddingBottom: "120px",
  },
  backgroundSlice: {
    position: "absolute",
    top: "200px",
    bottom: "0",
    right: "0",
    left: "0",
    width: "100%",
    height: "400px",
    backgroundImage: `url('${OverlappingHexagons}')`,
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
  past: {
    color: "#2E2E35",
    fontSize: "28px",
    fontWeight: "700",
    paddingBottom: "20px",
    borderBottom: "2px solid rgba(100, 97, 110, .20)",
  },
  pastContainer: {
    display: "flex",
    flexDirection: "column",
  },
  pastDesc: {
    padding: "24px 0",
    fontSize: "18px",
    lineHeight: "26px",
  },
  pastLink: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#2E7FC2",
    fontSize: "14px",
    letterSpacing: ".25px",
    color: "#fff",
    textDecoration: "none",
    fontWeight: "600",
    padding: "16px 16px",
    borderRadius: "6px",
    alignSelf: "flex-start",
    marginLeft: "4px",
  },
}))(Webinars);
