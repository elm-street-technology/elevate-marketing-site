import React, { Component } from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import ChevronLeft from "elevate-ui-icons/ChevronLeft";
import ChevronRight from "elevate-ui-icons/ChevronRight";
import Person from "elevate-ui-icons/Person";
import People from "elevate-ui-icons/People";
import GroupAdd from "elevate-ui-icons/GroupAdd";

import Container from "../components/Container";
import HomePageCarouselHeading from "../components/HomePageCarouselHeading";
import HomePageCarouselFeatures from "../components/HomePageCarouselFeatures";

import agent1 from "../images/agent-1.png";
import agent2 from "../images/agent-2.png";
import agent3 from "../images/agent-3.png";

import team1 from "../images/team-1.png";
import team2 from "../images/team-2.png";
import team3 from "../images/team-3.png";

import broker1 from "../images/broker-1.png";
import broker2 from "../images/broker-2.png";
import broker3 from "../images/broker-3.png";

type Props = {
  classes: Object,
  className: string,
};

const availableRoles = ["Agents", "Teams", "Brokerages"];

class HomePageCarousel extends Component<Props> {
  state = {
    selectedRole: "Agents",
  };

  handleCarouselNext = () => {
    const currentIndex = availableRoles.indexOf(this.state.selectedRole);
    const currentLength = availableRoles.length;
    const nextRole = availableRoles[currentIndex + 1]
      ? availableRoles[currentIndex + 1]
      : availableRoles[0];

    this.handleRoleChange(nextRole);
  };

  handleCarouselPrevious = () => {
    const currentIndex = availableRoles.indexOf(this.state.selectedRole);
    const currentLength = availableRoles.length;
    const previousRole = availableRoles[currentIndex - 1]
      ? availableRoles[currentIndex - 1]
      : availableRoles[currentLength - 1];

    this.handleRoleChange(previousRole);
  };

  handleRoleChange = (role) => {
    this.setState({
      selectedRole: role,
    });
  };

  render() {
    const { classes, className } = this.props;
    const { selectedRole } = this.state;
    return (
      <div className={classNames(classes.root, className)}>
        <div className={classes.carousel}>
          <button
            onClick={this.handleCarouselPrevious}
            className={classNames(
              classes.carouselArrow,
              classes.carouselArrowLeft
            )}
          >
            <ChevronLeft size={48} />
          </button>
          <div
            className={classes.carouselContent}
            ref={(div) => (this.carouselContent = div)}
          >
            <div
              className={classNames(
                classes.agentContainer,
                selectedRole === "Agents" && classes.activeRole
              )}
            >
              <HomePageCarouselHeading
                icon={<Person />}
                color={"#F15953"}
                heading="Agents"
                subheading="We manage the digital so you can help clients find their dream homes"
              />
              <HomePageCarouselFeatures
                features={[
                  {
                    screenshot: agent1,
                    heading: "Social Media",
                    description:
                      "With 150k blog posts syndicated to over 20k social media channels, we know social. We build your brand while you build relationships.",
                  },
                  {
                    screenshot: agent2,
                    heading: "Fast Mobile Sites",
                    description:
                      "Avg. page load time is just over 200ms. Fast, secure sites rank higher and provide a superior user experience.",
                  },
                  {
                    screenshot: agent3,
                    heading: "2.3m Pageviews / Mo",
                    description:
                      "A platform facilitating intuitive communication. Easily see who your most engaged leads are with our algorithmic lead score.",
                  },
                ]}
              />
            </div>
            <div
              className={classNames(
                classes.agentContainer,
                selectedRole === "Teams" && classes.activeRole
              )}
            >
              <HomePageCarouselHeading
                color={"#55C3BA"}
                icon={<People />}
                heading="Teams"
                subheading="Everything you and your team needs to increase leads and retain clients"
              />
              <HomePageCarouselFeatures
                features={[
                  {
                    screenshot: team1,
                    heading: "Listing Pulse",
                    description:
                      "At a glance, determine your team's listing pipeline with our Listing Pulse.",
                  },
                  {
                    screenshot: team2,
                    heading: "MLS Health",
                    description:
                      "Easily determine avg DOM, list-to-sold price diffs. Market reports, trend analysis, CMAs. Supplemental demographic, school, and tax data.",
                  },
                  {
                    screenshot: team3,
                    heading: "Gross Commission Income",
                    description:
                      "Annual performance KPIs with breakdown by team members.",
                  },
                ]}
              />
            </div>
            <div
              className={classNames(
                classes.agentContainer,
                selectedRole === "Brokerages" && classes.activeRole
              )}
            >
              <HomePageCarouselHeading
                color={"#FFC629"}
                icon={<GroupAdd />}
                heading="Brokers"
                subheading="Everything you and your brokerage needs to increase leads and retain clients"
              />
              <HomePageCarouselFeatures
                features={[
                  {
                    screenshot: broker1,
                    heading: "Pipeline Mgmt",
                    description:
                      "See the health of your lead pipeline, office GCI, and individual agent performance",
                  },
                  {
                    screenshot: broker2,
                    heading: "Lead Routing",
                    description:
                      "Sync leads from any source and route them to different offices, teams or agents using our dynamic Rules system",
                  },
                  {
                    screenshot: broker3,
                    heading: "ROI",
                    description:
                      "Determine which sources are providing the highest quality leads to hone your ROI.",
                  },
                ]}
              />
            </div>
          </div>

          <button
            onClick={this.handleCarouselNext}
            className={classNames(
              classes.carouselArrow,
              classes.carouselArrowRight
            )}
          >
            <ChevronRight size={48} />
          </button>
        </div>
        <div className={classes.carouselDots}>
          <button
            className={classes.dotButton}
            onClick={() => this.handleRoleChange("Agents")}
          >
            <div
              className={classNames(
                classes.dot,
                selectedRole === "Agents" && classes.activeDot
              )}
            />
          </button>
          <button
            className={classes.dotButton}
            onClick={() => this.handleRoleChange("Teams")}
          >
            <div
              className={classNames(
                classes.dot,
                selectedRole === "Teams" && classes.activeDot
              )}
            />
          </button>
          <button
            className={classes.dotButton}
            onClick={() => this.handleRoleChange("Brokerages")}
          >
            <div
              className={classNames(
                classes.dot,
                selectedRole === "Brokerages" && classes.activeDot
              )}
            />
          </button>
        </div>
      </div>
    );
  }
}

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  carousel: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  agentContainer: {
    display: "none",
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: "80px",
    paddingLeft: "12px",
    paddingRight: "12px",

    [theme.breakpoints[900]]: {
      paddingTop: "100px",
    },
  },
  teamContainer: {
    display: "none",
    flexDirection: "column",
    paddingTop: "80px",
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingBottom: "80px",

    [theme.breakpoints[900]]: {
      paddingTop: "100px",
    },
  },
  brokerageContainer: {
    display: "none",
    flexDirection: "column",
    padding: "100px 0",
    justifyContent: "center",
    transition: "all 3s ease",
  },
  activeRole: {
    display: "flex",
  },
  carouselArrow: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  carouselDots: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  dotButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "8px",
  },
  dot: {
    width: "8px",
    height: "8px",
    borderRadius: "100%",
    backgroundColor: "#ccc",
  },
  activeDot: {
    backgroundColor: "red",
  },
});

export default withStyles(styles)(HomePageCarousel);
