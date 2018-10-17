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
import heroImage2560 from "../images/2560.jpg";
import heroImage1600 from "../images/1600.jpg";
import heroImage1200 from "../images/1200.jpg";
import heroImage900 from "../images/900.jpg";
import heroImage600 from "../images/600.jpg";

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
      },
    };
    return (
      <div className={classNames(classes.root)}>
        <SEO />
        <div className={classes.heroImage}>
          <HomePageHero roles={roles} />
        </div>
        <HomePageCarousel />
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
              testimonial="The Elevate platform help me save time and money with many aspects with my social media... Social media is huge folks... There are 4000 realtors in my area if you want to make it to the top 5 percent then you have to do the work. There is an old saying that is linked directly to doing the work, and that saying is work smarter not harder."
            />
            <TestimonialCard
              avatar=""
              name="The Sohaei Team"
              title="Team"
              testimonial="The standard and professionalism [of service] are well above my satisfaction. Elm Street Technology communication is well above the industry standard and they are there for you...Not only are we satisfied with the quality of the website but the customer support both Anna and I have received to this point. A positive experience all around."
            />
            <TestimonialCard
              avatar=""
              name="Bob Cross"
              title="Broker"
              testimonial="I'm glad I invested in Elm Street Technology. You've done a great job in assistant in web page hits, producing new leads and keeping in touch with my client base on a weekly basis through my social media. The results have been most impressive. You now have a Client for Life!"
            />
            <TestimonialCard
              avatar=""
              name="Sherlock Fenderson"
              title="Realtor®"
              testimonial="I have been a Realtor® for more than 12 years now and for most of those years, Elevate has been my go-to internet website and CRM provider. As I have grown in the real estate business, it has been a vital tool in assitant me with my growth. Elevate's service is excellent! Price-wise, I don't know if Elevate can be beat for the service provided at the price. I have checked and tried, but no one compares. I recommend Elevate to any agent for their business."
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

    "@media (min-width: 1600px)": {
      backgroundImage: `url('${heroImage2560}')`,
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
  callToAction: {
    paddingTop: "100px",
  },
}))(Index);
