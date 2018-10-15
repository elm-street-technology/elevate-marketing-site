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
                subheading="A platform designed to help you succeed as a real estate agent"
              />
              <HomePageCarouselFeatures
                features={[
                  {
                    screenshot: "https://placehold.it/300x420",
                    heading: "Agents Ipsum",
                    description:
                      "Suspendisse at sem eget massa malesuada efficitur vitae vel.",
                  },
                  {
                    screenshot: "https://placehold.it/300x420",
                    heading: "Agents Ipsum",
                    description:
                      "Suspendisse at sem eget massa malesuada efficitur vitae vel.",
                  },
                  {
                    screenshot: "https://placehold.it/300x420",
                    heading: "Agents Ipsum",
                    description:
                      "Suspendisse at sem eget massa malesuada efficitur vitae vel.",
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
                    screenshot: "https://placehold.it/300x420",
                    heading: "Teams Ipsum",
                    description:
                      "Suspendisse at sem eget massa malesuada efficitur vitae vel.",
                  },
                  {
                    screenshot: "https://placehold.it/300x420",
                    heading: "Teams Ipsum",
                    description:
                      "Suspendisse at sem eget massa malesuada efficitur vitae vel.",
                  },
                  {
                    screenshot: "https://placehold.it/300x420",
                    heading: "Teams Ipsum",
                    description:
                      "Suspendisse at sem eget massa malesuada efficitur vitae vel.",
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
                    screenshot: "https://placehold.it/300x420",
                    heading: "Brokers Ipsum",
                    description:
                      "Suspendisse at sem eget massa malesuada efficitur vitae vel.",
                  },
                  {
                    screenshot: "https://placehold.it/300x420",
                    heading: "Brokers Ipsum",
                    description:
                      "Suspendisse at sem eget massa malesuada efficitur vitae vel.",
                  },
                  {
                    screenshot: "https://placehold.it/300x420",
                    heading: "Brokers Ipsum",
                    description:
                      "Suspendisse at sem eget massa malesuada efficitur vitae vel.",
                  },
                ]}
              />
            </div>

            {/* <Container>
              <div
                className={classNames(
                  classes.teamContainer,
                  selectedRole === "Teams" && classes.activeRole
                )}
              >
                <HomePageCarouselHeading />
                <HomePageCarouselFeatures />
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
            </div> */}
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
    paddingBottom: "60px",

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
  inactiveRole: {},
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
