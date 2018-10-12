import React, { Component } from "react";
import withStyles from "elevate-ui/withStyles";
import classNames from "classnames";
import SEO from "../components/SEO";
import HomePageHero from "../components/HomePageHero";
import CallToAction from "../components/CallToAction";
import CTASecondary from "../components/CTASecondary";
import TestimonialCard from "../components/TestimonialCard";
import TestimonialCardGrid from "../components/TestimonialCardGrid";
import HomePageCarousel from "../components/HomePageCarousel";
import heroImage1600 from "../images/1600.png";
import heroImage1200 from "../images/1200.png";
import heroImage900 from "../images/900.png";
import heroImage600 from "../images/600.png";

class Index extends Component {
  render() {
    const { classes } = this.props;
    const roles = {
      Agents: {
        name: "Agents",
        features: [
          "Manage MLS Feeds",
          "Intelligent KPI Dashboard",
          "Search MLS by list or map",
          "Manage MLS Feeds",
          "Intelligent KPI Dashboard",
          "Search MLS by list or map",
        ],
        icon: "Person",
        color: "#F15953",
        borderColor: "rgba(241, 89, 83, .4)",
        tagline: "I'm an agent",
        btnText: "See Agent Features",
      },
      Teams: {
        name: "Teams",
        features: [
          "Manage Mls Feeds",
          "Intelligent KPI Dashboard",
          "Search MLS by list or map",
          "Intelligent KPI Dashboard",
          "Search MLS by list or map",
          "Manage MLS Feeds",
        ],
        icon: "People",
        color: "#55C3BA",
        borderColor: "rgba(85, 195, 186, .4)",
        tagline: "I lead a team of agents",
        btnText: "See Team Features",
        topTab: "👍 Includes all agents features",
      },
      Brokerages: {
        name: "Brokers",
        features: [
          "Manage Mls Feeds",
          "Intelligent KPI Dashboard",
          "Search MLS by list or map",
          "Intelligent KPI Dashboard",
          "Search MLS by list or map",
          "Intelligent KPI Dashboard",
        ],
        icon: "GroupAdd",
        color: "#FFC629",
        borderColor: "rgba(255, 198, 41, .4)",
        tagline: "I'm a broker",
        btnText: "See Brokerage Features",
        topTab: "🎉  Includes all teams & agents features ",
      },
    };
    return (
      <div className={classNames(classes.root)}>
        <SEO />
        <div className={classes.heroImage}>
          <HomePageHero roles={roles} />
        </div>
        <HomePageCarousel />
        <CallToAction />
        <div className={classes.testimonialContainer}>
          <div className={classes.testHeading}>
            <h1>What Our Customers Are Saying</h1>
          </div>
          <TestimonialCardGrid>
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
          </TestimonialCardGrid>
        </div>
        <CTASecondary />
      </div>
    );
  }
}

export default withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  heroImage: {
    backgroundImage: `url('${heroImage600}')`,
    backgroundSize: "auto",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",

    [theme.breakpoints[600]]: {
      backgroundImage: `url('${heroImage900}')`,
      height: "100%",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      backgroundPosition: "top",
    },

    [theme.breakpoints[900]]: {
      backgroundImage: `url('${heroImage1200}')`,
      backgroundSize: "auto",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      backgroundPosition: "top",
    },

    [theme.breakpoints[1200]]: {
      backgroundImage: `url('${heroImage1600}')`,
      backgroundSize: "auto",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      backgroundPosition: "top",
    },
  },
  testHeading: {
    margin: "0 auto",
    marginBottom: "20px",
    textAlign: "center",
    fontSize: "32px",
    fontWeight: "800",
    color: "#5A5B5C",
    width: "100%",
    maxWidth: "900px",
  },
  testimonialContainer: {
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    paddingLeft: "12px",
    paddingRight: "12px",
    paddingTop: "75px",
    paddingBottom: "100px",
    backgroundColor: "#FFF",

    [theme.breakpoints[900]]: {
      paddingBottom: "200px",
      paddingTop: "100px",
    },
  },
}))(Index);
