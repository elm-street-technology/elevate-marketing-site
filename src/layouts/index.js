import React from "react";
import Helmet from "react-helmet";
import ThemeProvider from "elevate-ui/ThemeProvider";
import config from "../utils/siteConfig";
import Header from "../components/Header";
import Footer from "../components/Footer";
import favicon from "../images/favicon.png";
import withStyles from "elevate-ui/withStyles";

const Template = ({ children, classes }) => {
  return (
    <div>
      <Helmet>
        <title>{config.siteTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={favicon} />
        <meta name="description" content={config.siteDescription} />
        <meta property="og:title" content={config.siteTitle} />
        <meta property="og:url" content={config.siteUrl} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={config.siteTitle} />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800"
          rel="stylesheet"
        />
      </Helmet>

      <ThemeProvider>
        <div className={classes.root}>
          <Header />
          <div className={classes.children}>{children()}</div>
          <Footer />
        </div>
      </ThemeProvider>
    </div>
  );
};

export default withStyles((theme) => ({
  "@global": {
    body: {
      background: "#fff",
      color: "#2E2E35",
    },
  },
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    minHeight: "100vh",
  },
  children: {
    flex: "1",
  },
}))(Template);
