import React from "react";
import withStyles from "elevate-ui/withStyles";
import Helmet from "react-helmet";
import Link from "gatsby-link";

const Liveevents = ({ classes, className }) => {
    if (window.ga) {
        window.ga('send', 'event', 'Events', 'redirect', 'liveevents');
    }
  window.location.href = "https://tryelevate.com/events/";

  return (
    <div>
      <Helmet>
        <title>Events</title>
        <meta name="description" content="" />
      </Helmet>

      <div className={classes.container}>
        <div className={classes.inner}>
          <div className={classes.content}>
            <p className={classes.body}>             
            </p>
            <Link to="/events" className={classes.link}>
              View our Bootcamp Events
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withStyles((theme) => ({
  container: {
    margin: "100px auto 180px auto",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "column",
    maxWidth: "400px",
    textAlign: "center",
  },
  inner: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    maxWidth: "400px",
    maxHeight: "300px",
  },
  heading: {
    color: "#5A5B5C",
    fontSize: "44px",
    fontWeight: "600",
    marginBottom: "10px",
  },
  body: {
    fontSize: "18px",
    fontWeight: "500",
    marginBottom: "24px",
  },
  content: {
    color: "#5A5B5C",
    display: "flex",
    flexDirection: "column",
    lineHeight: "1.3",
    alignItems: "center",
  },
  subHeading: {
    fontSize: "18px",
    fontWeight: "700",
    marginBottom: "20px",
  },
  link: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "700",
    textDecoration: "none",
    fontSize: "18px",
    // border: "2px solid #2E7FC2",
    backgroundColor: "#F15953",
    borderRadius: "6px",
    padding: "14px 60px",
  },
}))(Liveevents);
