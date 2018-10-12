import React from "react";
import withStyles from "elevate-ui/withStyles";
import Helmet from "react-helmet";
import Link from "gatsby-link";

import blankCanvas from "../images/blankCanvas.png";

const NotFoundPage = ({ classes, className }) => {
  return (
    <div>
      <Helmet>
        <title>404 - Page Not Found</title>
        <meta name="description" content="Page not found" />
      </Helmet>

      <div className={classes.container}>
        <div className={classes.inner}>
          <img
            className={classes.image}
            src={blankCanvas}
            alt={"Woman starting at blank canvas"}
          />
          <div className={classes.content}>
            <h1 className={classes.heading}>Page not found</h1>
            <p className={classes.body}>
              We couldn't find the page you were looking for. Let's get you back
              home.
            </p>
            <Link to="/" className={classes.link}>
              Go back home
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
}))(NotFoundPage);
