import React from "react";
import Helmet from "react-helmet";
import ThemeProvider from "elevate-ui/ThemeProvider";
import config from "../utils/siteConfig";
import Header from "../components/Header";
import HeaderWelcome from "../components/HeaderWelcome";
import HeaderLander from "../components/HeaderLander";
import Footer from "../components/Footer";
import FooterWelcome from "../components/FooterWelcome";
import FooterLander from "../components/FooterLander";
import favicon from "../images/favicon.png";
import withStyles from "elevate-ui/withStyles";

const Template = ({ children, classes, location }) => {
  if (typeof window !== 'undefined'){
    if(window.drift){
      //console.log('resetting drift');
      window.drift.reset();
    } 
  }

  function ChooseFooter(){
    if (location.pathname == "/socialmediamarketingguide/" || location.pathname == "/socialmediamarketingguide" ||
        location.pathname == "/your2021marketingguide/" || location.pathname == "/your2021marketingguide" ||
        location.pathname == "/kardashian/" || location.pathname == "/kardashian" ||
        location.pathname == "/singlepropertywebsites/" || location.pathname == "/singlepropertywebsites" ||
        location.pathname == "/sellerleads/" || location.pathname == "/sellerleads" ||
        location.pathname == "/leadgen/" || location.pathname == "/leadgen" ||
        location.pathname == "/emailmarketingguide/" || location.pathname == "/emailmarketingguide" ||
        location.pathname == "/brokeragetechchecklist/" || location.pathname == "/brokeragetechchecklist" ||
        location.pathname == "/leadgenguide/" || location.pathname == "/leadgenguide") {
      return <FooterLander />;
    }

    if (location.pathname == "/welcome" || location.pathname == "/welcome/" ||
      location.pathname == "/welcome_elite" || location.pathname == "/welcome_elite/"){
      return <FooterWelcome />;
    }

    return <Footer />;
  }

  function ChooseHeader(){
    if (location.pathname == "/socialmediamarketingguide/" || location.pathname == "/socialmediamarketingguide" ||
        location.pathname == "/your2021marketingguide/" || location.pathname == "/your2021marketingguide" ||
        location.pathname == "/kardashian/" || location.pathname == "/kardashian" ||
        location.pathname == "/singlepropertywebsites/" || location.pathname == "/singlepropertywebsites" ||
        location.pathname == "/sellerleads/" || location.pathname == "/sellerleads" ||
        location.pathname == "/leadgen/" || location.pathname == "/leadgen" ||
        location.pathname == "/emailmarketingguide/" || location.pathname == "/emailmarketingguide" ||
        location.pathname == "/brokeragetechchecklist/" || location.pathname == "/brokeragetechchecklist" ||
        location.pathname == "/leadgenguide/" || location.pathname == "/leadgenguide") {
      return <HeaderLander />;
    }

    if (location.pathname == "/welcome" || location.pathname == "/welcome/" ||
      location.pathname == "/welcome_elite" || location.pathname == "/welcome_elite/") {
      return <HeaderWelcome />;
    }

    return <Header currentLocation={location} />;
  }


  return <div>
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
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800" rel="stylesheet" />
      </Helmet>

      <ThemeProvider>
        <div className={classes.root}>
          <ChooseHeader />
          <div className={classes.children}>{children()}</div>
          <ChooseFooter />
        </div>
      </ThemeProvider>
    </div>;
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
    marginTop: "80px", // Header height
  },
}))(Template);
