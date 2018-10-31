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
        tagline: "Increase your day-to-day productivity",
        description:
          "Lead the pack with an unparalleled marketing strategy & toolset that helps you build your online brand & close more business…all while giving you extra time every day for the things that matter most.",
        icon: "Person",
        color: "#F15953",
        borderColor: "rgba(241, 89, 83, .4)",
        grid: [
          "<p>I need help with my <strong>marketing: website, social, email</strong></p>",
          "<p>I want to <strong>engage with & close more leads, faster</strong></p>",
          "<p>I want to <strong>provide great content</strong> to my audience</p>",
        ],
        page: "/agents",
      },
      Teams: {
        name: "Teams",
        tagline: "Excel at agent adoption & retention",
        description:
          "Arm yourself and your agents with easy-to-access, revenue-driving data that helps support smarter business decisions.",
        icon: "People",
        color: "#55C3BA",
        borderColor: "rgba(85, 195, 186, .4)",
        grid: [
          "<p>We want to <strong>streamline lead routing</strong> & internal communication</p>",
          "<p>We want to better understand what <strong>drives our revenue</strong></p>",
          "<p>We want to save time & money on <strong>recruiting and retention</strong></p>",
        ],
        page: "/teams",
      },
      Brokerages: {
        name: "Brokers",
        tagline: "Streamline all aspects of your business",
        description:
          "Take the guess work out of your daily business operations, agent productivity and brand presence with ONE solution that is easy-to-implement and includes fanatical ongoing training & support.",
        icon: "GroupAdd",
        color: "#FFC629",
        borderColor: "rgba(255, 198, 41, .4)",
        grid: [
          "<p>I want <strong>at-a-glance insight</strong> into what’s happening across my brokerage</p>",
          "<p>I want assistance <strong>recruiting & retaining</strong> agents</p>",
          "<p>I want to streamline lead routing & <strong>internal management processes</strong></p>",
        ],
        page: "/brokers",
      },
    };

    return (
      <div className={classNames(classes.root)}>
        <SEO />
        <HomePageHero roles={roles} isAlternate={true} />

        <DefinitionSection />
        <div
          style={{
            margin: "20px auto",
            padding: "30px",
            fontSize: "20px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <div className={classes.moreThan}>MORE THAN...</div>
          <div className={classes.moreThanContainer}>
            <div>
              <GroupAdd size={72} className={classes.icon} />
              <div className={classes.moreThanText}>a CRM</div>
            </div>
            <div>
              <DeviceHub size={72} className={classes.icon} />
              <div className={classes.moreThanText}>lead management</div>
            </div>
            <div>
              <Forum size={72} className={classes.icon} />
              <div className={classes.moreThanText}>digital marketing</div>
            </div>
            <div>
              <PieChart size={72} className={classes.icon} />
              <div className={classes.moreThanText}>performance metrics</div>
            </div>
          </div>
          <div className={classes.moreThanCTA}>
            Elevate is the{" "}
            <span style={{ fontWeight: "bold" }}>
              ONLY pure productivity platform
            </span>{" "}
            to hit
            <div>
              the real estate market with a goal to make all other solutions
              obsolete.
            </div>
            <div style={{ marginTop: "20px" }}>
              Are you ready to increase your productivity?
            </div>
          </div>
          <Link to="/get-started" className={classes.getStartedLink}>
            Show me how
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
                      <GridCard
                        text={gridItem}
                        color={roleObject.color}
                        page={roleObject.page}
                      />
                    );
                  })}
                </div>
              );
            })}
          </SolutionsGrid>
        </div>

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
              testimonial="<p>Social media is a big deal in real estate, and the Elevate Productivity Platform and coaching team has <strong>saved me valuable time and money</strong>, while helping me stand out from the 4,000 other real estate agents in my local area.</p>"
            />
            <TestimonialCard
              avatar=""
              name="The Sohaei Team"
              title="Team"
              testimonial="<p>The <strong>service and professionalism</strong> of the entire Elevate team is well above any experience we’ve had in the industry.  They are the perfect blend of <strong>cutting-edge technology</strong> mixed with <strong>stellar customer support and coaching.<strong></p>"
            />
            <TestimonialCard
              avatar=""
              name="Bob Cross"
              title="Broker"
              testimonial="<p>Impressive results from the start. Not only have I been able to <strong>increase website traffic and capture more leads</strong> with my new website, Elevate has helped increase my entire online social presence.  I’m a client for life!</p>"
            />
            <TestimonialCard
              avatar=""
              name="Sherlock Fenderson"
              title="Realtor®"
              testimonial="<p>I’ve been a successful Realtor® for more than 12-years and Elevate is my <strong>go-to productivity platform</strong> for everything lead management and web presence.  It’s a <strong>vital tool that I use daily</strong> to <strong>drive my business growth</strong>.  I highly recommend Elevate for anyone looking to grow their business."
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
  moreThan: {
    fontSize: "16px",
    color: theme.colors.secondary,
    fontWeight: "bold",
    marginBottom: "4px",

    [theme.breakpoints[900]]: {
      fontSize: "26px",
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
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
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
  moreThanText: {
    color: "#4a4a4a",
    fontSize: "16px",
    fontWeight: "700",
  },
  moreThanContainer: {
    display: "grid",
    gridGap: "40px",
    margin: "40px auto",
    fontSize: "20px",
    maxWidth: "400px",
    width: "100%",

    [theme.breakpoints[600]]: {
      gridGap: "40px",
      gridTemplateColumns: "repeat(2, minmax(180px, 1fr))",
    },

    [theme.breakpoints[900]]: {
      maxWidth: "800px",
      gridGap: "0px",
      gridTemplateColumns: "repeat(4, minmax(180px, 1fr))",
    },
  },
  moreThanCTA: {
    marginTop: "16px",
    color: "#4a4a4a",
    fontSize: "20px",
    lineHeight: "1.4",
  },
}))(Index);
