import React, { Component } from "react";
import Container from "../components/Container";
import withStyles from "elevate-ui/withStyles";
import classNames from "classnames";
import SEO from "../components/SEO";
import HomePageAgentHeading from "../components/HomePageAgentHeading";
import HomePageAgentFeatures from "../components/HomePageAgentFeatures";
import HomePageTeamHeading from "../components/HomePageTeamHeading";
import HomePageTeamFeatures from "../components/HomePageTeamFeatures";
import HomePageHero from "../components/HomePageHero";
import CallToAction from "../components/CallToAction";
import CTASecondary from "../components/CTASecondary";
import TestimonialCard from "../components/TestimonialCard";
import TestimonialCardGrid from "../components/TestimonialCardGrid";
import HomePageBrokerageCard from "../components/HomePageBrokerageCard";
import HomePageBrokerageHeading from "../components/HomePageBrokerageHeading";
import heroImage from "../images/heroImage.jpg";

class Index extends Component {
  state = {
    selectedRole: "Agents",
  };

  handleRoleChange = (role) => {
    this.setState({
      selectedRole: role,
    });
    this.roleContainer.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  render() {
    const { classes } = this.props;
    const { selectedRole } = this.state;

    const roles = {
      Agents: {
        name: "Agents",
        features: [
          "Manage MLS Feed",
          "Intelligent KPI Dashboard",
          "Search MLS by list or map",
          "Manage MLS Feed",
          "Intelligent KPI Dashboard",
          "Search MLS by list or map",
        ],
        icon: "Person",
        color: "#F15953",
        borderColor: "rgba(241, 89, 83, .4)",
        tagline: "I'm a single agent",
        btnText: "See Agent Features",
      },
      Teams: {
        name: "Teams",
        features: [
          "Manage Mls Feed",
          "Intelligent KPI Dashboard",
          "Search MLS by list or map",
          "Intelligent KPI Dashboard",
          "Search MLS by list or map",
          "Manage Mls Feed",
        ],
        icon: "People",
        color: "#55C3BA",
        borderColor: "rgba(85, 195, 186, .4)",
        tagline: "I'm on a team of agents",
        btnText: "See Team Features",
        topTab: "👍 Includes all agents features",
      },
      Brokerages: {
        name: "Brokerages",
        features: [
          "Manage Mls Feed",
          "Intelligent KPI Dashboard",
          "Search MLS by list or map",
          "Intelligent KPI Dashboard",
          "Search MLS by list or map",
          "Intelligent KPI Dashboard",
        ],
        icon: "PersonAdd",
        color: "#FFC629",
        borderColor: "rgba(255, 198, 41, .4)",
        tagline: "I'm part of a brokerage",
        btnText: "See Brokerage Features",
        topTab: "🎉  Includes all teams & agents features ",
      },
    };
    return (
      <div className={classNames(classes.root)}>
        <SEO />
        <div className={classes.heroImage}>
          <Container>
            <HomePageHero
              handleRoleChange={this.handleRoleChange}
              roles={roles}
            />
          </Container>
        </div>
        <div
          className={classes.roleContainer}
          ref={(div) => {
            this.roleContainer = div;
          }}
        >
          <div
            className={classNames(
              classes.agentContainer,
              selectedRole === "Agents" && classes.activeRole
            )}
          >
            <HomePageAgentHeading />
            <HomePageAgentFeatures />
          </div>

          <Container>
            <div
              className={classNames(
                classes.teamContainer,
                selectedRole === "Teams" && classes.activeRole
              )}
            >
              <HomePageTeamHeading />
              <HomePageTeamFeatures />
            </div>
          </Container>
          <div
            className={classNames(
              classes.brokerageContainer,
              selectedRole === "Brokerages" && classes.activeRole
            )}
          >
            <HomePageBrokerageHeading />
            <HomePageBrokerageCard />
          </div>
        </div>
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
    backgroundImage: `url('${heroImage}')`,
    backgroundSize: "auto",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "top",
  },
  backgroundSlice: {
    position: "absolute",
    top: "240px",
    bottom: "0",
    right: "0",
    left: "0",
    width: "100%",
    height: "400px",
    backgroundColor: "#FFF",
    opacity: "0.5",
    zIndex: "-1",

    [theme.breakpoints[900]]: {
      background: "linear-gradient(#FEFEFE, #FFD0D0)",
    },
  },
  agentContainer: {
    display: "none",
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: "60px",
    paddingLeft: "12px",
    paddingRight: "12px",
    paddingBottom: "60px",

    [theme.breakpoints[900]]: {
      paddingBottom: "140px",
      paddingTop: "100px",
    },
  },
  agentBtnContainer: {
    display: "flex",
  },
  agentBtn: {
    borderRadius: "28px",
    border: "1px solid #F15953",
    padding: "12px 30px",
    fontSize: "14px",
    margin: "auto",
    color: "#F15953",
    fontWeight: "600",

    "&:hover": {
      color: "#FFF",
      backgroundColor: "#F15953",
      transition: "all .3s ease",
    },
  },
  roleCardContainer: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    margin: "-20px -10px 40px -10px",

    [theme.breakpoints[600]]: {
      marginTop: "-80px",
      flexDirection: "row",
      alignItems: "flex-end",
    },

    [theme.breakpoints[900]]: {
      marginTop: "-120px",
    },
  },
  teamContainer: {
    display: "none",
    flexDirection: "column",
    paddingTop: "75px",
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingBottom: "80px",

    [theme.breakpoints[900]]: {
      paddingTop: "125px",
    },
  },
  brokerageContainer: {
    display: "none",
    flexDirection: "column",
    padding: "100px 0",
    justifyContent: "center",
    transition: "all 3s ease",
  },
  brokerageBtn: {
    borderRadius: "28px",
    border: "1px solid #FFC629",
    padding: "12px 30px",
    fontSize: "14px",
    margin: "auto",
    color: "#FFC629",
    fontWeight: "600",

    "&:hover": {
      color: "#FFF",
      backgroundColor: "#FFC629",
      transition: "all .3s ease",
    },
  },
  testHeading: {
    margin: "0 auto",
    marginBottom: "20px",
    textAlign: "center",
    fontSize: "32px",
    fontWeight: "800",
    color: "#413F48",
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
  activeRole: {
    display: "flex",
  },
}))(Index);
