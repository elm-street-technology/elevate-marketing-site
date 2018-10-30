import React, { Component } from "react";
import withStyles from "elevate-ui/withStyles";
import classNames from "classnames";
import SEO from "../components/SEO";
import HomePageHero from "../components/HomePageHero";
import CallToAction from "../components/CallToAction";
import CTASecondary from "../components/CTASecondary";
import TestimonialCard from "../components/TestimonialCard";
import gridBackgroundImg from "../images/index_area_bg.jpg";
import SolutionsGrid from "../components/SolutionsGrid";
import GridTitle from "../components/GridTitle";
import GridCard from "../components/GridCard";
import DefinitionSection from "../components/DefinitionSection";
import TestimonialCardGrid from "../components/TestimonialCardGrid";
import HomePageCarousel from "../components/HomePageCarousel";
import heroVideo from "../images/hero-video.mp4";
import Link from "gatsby-link";

import GroupAdd from "elevate-ui-icons/GroupAdd";
import Forum from "elevate-ui-icons/Forum";
import DeviceHub from "elevate-ui-icons/DeviceHub";
import PieChart from "elevate-ui-icons/PieChart";

class Index extends Component {
  render() {
    const { classes } = this.props;
    const roles = {
      Agents: {
        name: "Agents",
        features: [
          "Advanced, Lightning Fast MLS Search",
          "Behavior-driven Lead Intel",
          "Automated, Smart Communication",
          "Social Media + Brand Management",
          "Insane Lead-Gen Conversions",
          "Compelling Webblogging Content",
          "Pipeline Management And Assistive Tasking",
        ],
        icon: "Person",
        color: "#F15953",
        borderColor: "rgba(241, 89, 83, .4)",
        tagline: "I'm an agent",
        grid: [
          "I need help with my marketing: website, social, email",
          "I want to close more leads faster",
          "I'd like to help with providing great content to my audience",
        ],
      },
      Teams: {
        name: "Teams",
        features: [
          "Behavior-driven Lead Intel",
          "Automated, Smart Communication",
          "Social Media + Brand Management",
          "Pipeline Management And Assistive Tasking",
          "Best-of-breed Lead Routing",
          "Team Insights",
          "Strategic GCI Reporting",
          "Team Recruiter",
          "Team Asset + Marketing Mgmt",
        ],
        icon: "People",
        color: "#55C3BA",
        borderColor: "rgba(85, 195, 186, .4)",
        tagline: "I lead a team of agents",
        grid: [
          "I want at-a-glance insight into what's happening across my brokerage",
          "I need assistance recruiting & retaining clients",
          "I want to streamline lead routing & internal management processes",
        ],
      },
      Brokerages: {
        name: "Brokers",
        features: [
          "Behavior-driven Lead Intel",
          "Automated, Smart Communication",
          "Social Media + Brand Management",
          "Compelling Webblogging Content",
          "Pipeline Management And Assistive Tasking",
          "Best-of-breed Lead Routing",
          "Strategic GCI Reporting",
          "Office Insights",
          "Agent Recruiter",
          "Office Asset + Marketing Mgmt",
        ],
        icon: "GroupAdd",
        color: "#FFC629",
        borderColor: "rgba(255, 198, 41, .4)",
        tagline: "I'm a broker",
        grid: [
          "We want to streamline lead routing & internal communication",
          "We want to better understand what drives our revenue",
          "We want to save time & money on marketing efforts",
        ],
      },
    };

    roles.Agents.features = [
      "Increase your day-to-day productivity",
      "Lead the pack with an unparalleled marketing strategy & toolset that helps you build your online brand & close more business…all while giving you extra time every day for the things that matter most.",
    ];

    return (
      <div className={classNames(classes.root)}>
        <SEO />
        <div style={{ position: "relative" }}>
          <video
            autoPlay={true}
            muted={true}
            loop={true}
            id="myVideo"
            className={classes.hero2}
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className={classes.hero2Content}>
            <HomePageHero roles={roles} isAlternate={true} />
          </div>
        </div>

        <DefinitionSection />
        <div
          style={{
            margin: "20px auto",
            padding: "30px",
            fontSize: "20px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <div className={classes.moreThan}>MORE THAN...</div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              margin: "30px 20px",
              fontSize: "20px",
              width: "100%",
            }}
          >
            <div style={{ flexGrow: 1 }}>
              <GroupAdd size={72} className={classes.icon} />
              <div style={{ fontSize: "16px" }}>a CRM</div>
            </div>
            <div style={{ flexGrow: 1 }}>
              <DeviceHub size={72} className={classes.icon} />
              <div style={{ fontSize: "16px" }}>lead management</div>
            </div>
            <div style={{ flexGrow: 1 }}>
              <Forum size={72} className={classes.icon} />
              <div style={{ fontSize: "16px" }}>digital marketing</div>
            </div>
            <div style={{ flexGrow: 1 }}>
              <PieChart size={72} className={classes.icon} />
              <div style={{ fontSize: "16px" }}>performance metrics</div>
            </div>
          </div>

          <div
            className={classes.moreThan}
            style={{ marginBottom: "16px", marginTop: "24px" }}
          >
            MORE THAN...
          </div>
          <div
            style={{ fontWeight: "bold", color: "#4a4a4a", fontSize: "16px" }}
          >
            any other technology company in the space
          </div>
          <div
            style={{ marginTop: "16px", color: "#4a4a4a", fontSize: "16px" }}
          >
            Elevate is the{" "}
            <span style={{ fontWeight: "bold" }}>
              ONLY pure productivity platform
            </span>{" "}
            to hit
            <div>
              the real estate market with a goal to make all other solutions
              obsolete.
            </div>
          </div>
          <Link to="/get-started" className={classes.getStartedLink}>
            Schedule A Demo
          </Link>
        </div>

        <div className={classes.solutionsGridContainer}>
          <div className={classes.solutionsHeading}>
            How can we help you be more productive today?
          </div>
          <SolutionsGrid>
            {Object.keys(roles).map((role, i) => {
              const roleObject = roles[role];
              return (
                <div>
                  <GridTitle
                    name={roleObject.name}
                    color={roleObject.color}
                    icon={roleObject.icon}
                  />
                  {roleObject.grid.map((gridItem) => {
                    return (
                      <GridCard text={gridItem} color={roleObject.color} />
                    );
                  })}
                </div>
              );
            })}
          </SolutionsGrid>
        </div>

        <HomePageCarousel isAlternate={true} />
        <CallToAction className={classes.callToAction} />
        <div className={classes.testimonialContainer}>
          <div className={classes.testHeading}>
            <h1>What Our Customers Are Saying</h1>
          </div>
          <TestimonialCardGrid>
            <TestimonialCard
              avatar=""
              name="Prince Jones"
              title="MBA-ISM / Realtor®"
              testimonial="Social media is a big deal in real estate, and the Elevate Productivity Platform and coaching team has saved me valuable time and money, while helping me stand out from the 4,000 other real estate agents in my local area."
            />
            <TestimonialCard
              avatar=""
              name="The Sohaei Team"
              title="Team"
              testimonial="The service and professionalism of the entire Elevate team is well above any experience we’ve had in the industry.  They are the perfect blend of cutting-edge technology mixed with stellar customer support and coaching."
            />
            <TestimonialCard
              avatar=""
              name="Bob Cross"
              title="Broker"
              testimonial="Impressive results from the start. Not only have I been able to increase website traffic and capture more leads with my new website, Elevate has helped increase my entire online social presence.  I’m a client for life!"
            />
            <TestimonialCard
              avatar=""
              name="Sherlock Fenderson"
              title="Realtor®"
              testimonial="I’ve been a successful Realtor® for more than 12-years and Elevate is my go-to productivity platform for everything lead management and web presence.  It’s a vital tool that I use daily to drive my business growth.  I highly recommend Elevate for anyone looking to grow their business."
            />
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
  hero2: {
    minWidth: "100%",

    [theme.breakpoints[900]]: {
      minHeight: "100%",
    },
  },
  moreThan: {
    fontSize: "16px",
    color: theme.colors.secondary,
    fontWeight: "bold",
    marginBottom: "4px",

    [theme.breakpoints[900]]: {
      fontSize: "26px",
    },
  },
  hero2Content: {
    position: "absolute",
    bottom: 0,
    background: "rgba(0, 0, 0, 0.29)",
    color: "#fff",
    width: "100%",
    top: 0,
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
  callToAction: {
    paddingTop: "100px",
  },
  red: {
    color: theme.colors.primary,
  },
  icon: {
    width: "56px",
    height: "56px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "4px auto 8px auto",
    color: theme.colors.white,
    backgroundColor: theme.colors.secondary,
    borderRadius: "50%",
    padding: "12px",
  },
  getStartedLink: {
    width: "250px",
    alignContent: "center",
    justifyContent: "center",
    fontSize: "14px",
    fontWeight: "700",
    letterSpacing: ".25px",
    backgroundColor: theme.colors.secondary,
    color: "#FFF",
    textDecoration: "none",
    padding: "14px 16px",
    borderRadius: "4px",
    margin: "16px auto",
  },
  solutionsGridContainer: {
    backgroundImage: `url("${gridBackgroundImg}")`,
    backgroundSize: "cover",
  },
  solutionsHeading: {
    textAlign: "center",
    textShadow: "0px 4px 3px rgba(0,0,0,0.05)",
    color: "#fff",
    fontWeight: "700",
    fontSize: "22px",
    marginTop: "60px",
    lineHeight: "1.5",
  },
}))(Index);
