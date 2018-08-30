import React from "react";
import Container from "../components/Container";
import withStyles from "elevate-ui/withStyles";
import classNames from "classnames";
import SEO from "../components/SEO";
import CallToAction from "../components/CallToAction";
import CTASecondary from "../components/CTASecondary";
import RoleCard from "../components/RoleCard";
import TestimonialCard from "../components/TestimonialCard";
import TestimonialCardGrid from "../components/TestimonialCardGrid";
import Icon from "elevate-ui/Icon/Icon";
import AgentLaptop from "../images/agents-laptop.png";
import AgentDashActive from "../images/agents-dash-active.jpg";
import AgentPhone from "../images/agents-phone.png";
import AgentDashLeads from "../images/agents-dash-leads.jpg";
import AgentDashContacts from "../images/agent-dash-contacts.jpg";
import AgentDashGraph from "../images/agent-dash-graph.jpg";
import TeamsLaptop from "../images/teams-laptop.png";
import BrokerDash from "../images/broker-dash-listings.png";

const Index = ({ classes, data }) => {
  const roles = [
    {
      name: "Agents",
      features: [
        "Manage MLS Feed",
        "Intelligent KPI Dashboard",
        "Search MLS by list or map",
      ],
      icon: "Person",
      color: "#F15953",
      tagline: "I'm a single agent",
      btnText: "See Agent Features",
    },
    {
      name: "Teams",
      features: [
        "Manage Mls Feed",
        "Intelligent KPI Dashboard",
        "Search MLS by list or map",
        "Intelligent KPI Dashboard",
        "Search MLS by list or map",
      ],
      icon: "People",
      color: "#0092FF",
      tagline: "I'm on a team of agents",
      btnText: "See Team Features",
      topTab: "👍 Includes all agents features",
    },
    {
      name: "Brokerages",
      features: [
        "Manage Mls Feed",
        "Intelligent KPI Dashboard",
        "Search MLS by list or map",
        "Intelligent KPI Dashboard",
        "Search MLS by list or map",
        "Intelligent KPI Dashboard",
        "Search MLS by list or map",
      ],
      icon: "PersonAdd",
      color: "#00A54D",
      tagline: "I'm part of a brokerage",
      btnText: "See Brokerage Features",
      topTab: "🎉  Includes all teams & agents features ",
    },
  ];
  return (
    <div className={classNames(classes.root)}>
      <SEO />
      <Container>
        <div className={classes.headingContainer}>
          <div className={classes.headingLeft}>
            <div className={classes.heading}>
              Choose the Elevate that suits you
            </div>
            <div className={classes.subHeading}>
              Elevate is the best online product for real estate agents, teams,
              and brokers. We help you generate leads and create clients for
              life.
            </div>
            <div className={classes.roleCardContainer}>
              {roles.map((role) => (
                <RoleCard
                  key={role.name}
                  className={classes.roleCard}
                  role={role}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
      <div className={classes.backgroundSlice} />
      <div className={classes.agentContainer}>
        <div className={classes.agentHeadingContainer}>
          <div
            className={classes.iconContainerRed}
            style={{ backgroundColor: "rgb(255, 244, 240)" }}
          >
            <svg
              className={classes.personIcon}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
          <div className={classes.agentHeading}>Agents</div>
        </div>
        <div className={classes.agentSubHeading}>
          A platform designed to help you succeed as a real estate agent
        </div>
        <div className={classes.agentFeaturesContainer}>
          <div className={classes.agentFeature}>
            <div>
              <img
                style={{ width: "100%" }}
                src={AgentLaptop}
                alt={"Laptop with screenshot"}
              />
            </div>
            <div>
              <img
                style={{ width: "100%" }}
                src={AgentDashActive}
                alt={"screenshot of dashboard"}
              />
            </div>
            <div className={classes.agentFeatureHeading}>
              Intelligent Dashboard
            </div>
            <div className={classes.agentFeatureDesc}>
              Suspendisse at sem eget massa malesuada efficitur vitae vel.
            </div>
          </div>
          <div className={classes.agentFeature}>
            <div className={classes.agentImage}>
              <img
                style={{ width: "50%" }}
                src={AgentPhone}
                alt={"Phone with screenshot"}
              />
            </div>
            <div className={classes.agentFeatureHeading}>Morning Report</div>
            <div className={classes.agentFeatureDesc}>
              Suspendisse at sem eget massa malesuada efficitur vitae vel.
            </div>
          </div>
          <div className={classes.agentFeature}>
            <div className={classes.agentImage}>
              <img
                style={{ width: "70%", paddingBottom: "30px" }}
                src={AgentDashLeads}
                alt={"Phone with screenshot"}
              />
            </div>
            <div>
              <img
                style={{ width: "48%", padding: "10px" }}
                src={AgentDashContacts}
                alt={"screenshot of dashboard"}
              />
              <img
                style={{ width: "48%", padding: "10px" }}
                src={AgentDashGraph}
                alt={"screenshot of dashboard"}
              />
            </div>
            <div className={classes.agentFeatureHeading}>Lead Analysis</div>
            <div className={classes.agentFeatureDesc}>
              Suspendisse at sem eget massa malesuada efficitur vitae vel.
            </div>
          </div>
        </div>
        <div className={classes.agentBtnContainer}>
          <button className={classes.agentBtn}>More Agents Features</button>
        </div>
      </div>
      <CallToAction />
      <Container>
        <div className={classes.teamContainer}>
          <div className={classes.teamHeadingContainer}>
            <div className={classes.teamHeading}>
              <div className={classes.teamHeadingLeft}>
                <div className={classes.iconContainer}>
                  <Icon name={"People"} style={{ color: "#0092FF" }} />
                  <div
                    style={{
                      backgroundColor: "#0092FF",
                      opacity: ".2",
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      top: 0,
                      left: 0,
                    }}
                  />
                </div>
                <div style={{ paddingLeft: "10px" }}>Teams</div>
              </div>
              <div className={classes.agentBtnContainer}>
                <button className={classes.teamBtn}>More Teams Features</button>
              </div>
            </div>
            <div className={classes.teamSubHeading}>
              <h2>
                Everything you and your team need to increase leads and retain
                clients.
              </h2>
            </div>
          </div>
          <div className={classes.teamDetails}>
            <div className={classes.teamDetailsLeft}>
              <div className={classes.teamIncludesContainer}>
                <Icon name={"InfoOutline"} style={{ color: "#0092FF" }} />
                <div className={classes.teamIncludes}>
                  Includes all Agents features plus
                </div>
              </div>
              <div className={classes.teamFeaturesContainer}>
                <div className={classes.teamFeatures}>
                  <div className={classes.teamFeatureHead}>
                    <Icon
                      name={"RecordVoiceOver"}
                      style={{ color: "#0092FF" }}
                    />
                    <div className={classes.teamFeatureHeading}>
                      Lead routing
                    </div>
                  </div>
                  <div className={classes.teamFeatureDesc}>
                    Sed nibh lacus, lobortis et ipsum sit amet, luctus dapibus
                    purus. Morbi.
                  </div>
                </div>
                <div className={classes.teamFeatures}>
                  <div className={classes.teamFeatureHead}>
                    <Icon
                      name={"LocationSearching"}
                      style={{ color: "#0092FF" }}
                    />
                    <div className={classes.teamFeatureHeading}>
                      Lead parsing
                    </div>
                  </div>
                  <div className={classes.teamFeatureDesc}>
                    Etiam sit amet elit dictum, fermentum nibh quis,
                    pellentesque ante. Aliquam quis leo elit.
                  </div>
                </div>
                <div className={classes.teamFeatures}>
                  <div className={classes.teamFeatureHead}>
                    <Icon name={"Dashboard"} style={{ color: "#0092FF" }} />
                    <div className={classes.teamFeatureHeading}>
                      Team dashboard
                    </div>
                  </div>
                  <div className={classes.teamFeatureDesc}>
                    Etiam sit amet elit dictum, fermentum nibh quis,
                    pellentesque ante. Aliquam quis leo elit.
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.teamsLaptop}>
              <img
                src={TeamsLaptop}
                style={{ width: "110%" }}
                alt={"Laptop screenschot"}
              />
            </div>
          </div>
        </div>
      </Container>
      <CTASecondary />
      <div className={classes.brokerageContainer}>
        <div className={classes.brokerageHeadingContainer}>
          <div className={classes.iconContainer}>
            <Icon name={"PersonAdd"} style={{ color: "#00A54D" }} />
            <div
              style={{
                backgroundColor: "#00A54D",
                opacity: ".2",
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
              }}
            />
          </div>
          <div className={classes.brokerageHeading}>Brokerages</div>
        </div>
        <div className={classes.agentSubHeading}>
          The tool brokerage firms reach for to grow their business
        </div>
        <div className={classes.brokerageCardContainer}>
          <div className={classes.brokerageCard}>
            <div className={classes.brokerageCardLeft}>
              <div className={classes.teamFeatureHead}>
                <Icon name={"Dashboard"} style={{ color: "00A54D" }} />
                <div className={classes.teamFeatureHeading}>Dashboard</div>
              </div>
              <div className={classes.teamFeatureDesc}>
                Mauris viverra molestie tempus. Proin quam dui, accumsan eget
                dui a, tempus fermentum neque. Proin fringilla imperdiet
                lacinia. Mauris lacinia, dui quis auctor sollicitudin, nisi
                magna maximus sapien, vel commodo mauris sem et dui.
              </div>
              <div className={classes.topTab}>
                <span style={{ zIndex: "1", position: "relative" }}>
                  👍 includes all agents and teams features
                </span>
                <div
                  style={{
                    backgroundColor: "#00A54D",
                    opacity: ".2",
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    borderTopRightRadius: "6px",
                    borderBottomRightRadius: "6px",
                  }}
                />
              </div>
            </div>
            <img
              src={BrokerDash}
              style={{ width: "50%" }}
              alt={"App Dashboard"}
            />
          </div>
        </div>
        <div className={classes.agentBtnContainer}>
          <button className={classes.brokerageBtn}>
            More Brokerages Features
          </button>
        </div>
      </div>
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
    </div>
  );
};

export default withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  headingContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    paddingLeft: "10px",
    paddingRight: "10px",
    paddingBottom: "100px",

    [theme.breakpoints[900]]: {
      justifyContent: "space-between",
      flexDirection: "row",
      paddingBottom: "0px",
    },
  },
  headingLeft: {
    order: "1",
    zIndex: "1",

    [theme.breakpoints[900]]: {
      order: "0",
    },
  },
  heading: {
    fontSize: "22px",
    fontWeight: "800",
    color: "#2E2E35",
    lineHeight: "1.2",
    maxWidth: "500px",
    marginTop: "40px",
    textAlign: "center",

    [theme.breakpoints[600]]: {
      fontSize: "28px",
      textAlign: "left",
    },
  },
  subHeading: {
    fontSize: "18px",
    color: "#64616E",
    marginTop: "16px",
    marginBottom: "20px",
    lineHeight: "26px",
    textAlign: "center",

    [theme.breakpoints[600]]: {
      maxWidth: "340px",
      lineHeight: "28px",
      marginBottom: "36px",
      marginTop: "14px",
      textAlign: "left",
    },
  },
  backgroundSlice: {
    position: "absolute",
    top: "240px",
    bottom: "0",
    right: "0",
    left: "0",
    width: "100%",
    height: "50%",
    backgroundColor: "#FFF",
    opacity: "0.5",
    zIndex: "-1",

    [theme.breakpoints[900]]: {
      background: "linear-gradient(#FEFEFE, #FFD0D0)",
    },
  },
  headingImg: {
    width: "350px",
    marginBottom: "0px",

    [theme.breakpoints[600]]: {
      width: "450px",
      marginTop: "40px",
    },

    [theme.breakpoints[900]]: {
      width: "550px",
      marginBottom: "140px",
    },
  },
  learnMore: {
    display: "none",

    [theme.breakpoints[900]]: {
      display: "block",
      textAlign: "center",
      paddingBottom: "80px",
      color: "#64616E",
    },
  },
  form: {
    maxWidth: "400px",
  },
  agentContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: "100px",
    paddingLeft: "12px",
    paddingRight: "12px",

    [theme.breakpoints[900]]: {
      paddingBottom: "140px",
    },
  },
  iconContainer: {
    width: "55px",
    height: "55px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
  },
  iconContainerRed: {
    width: "52px",
    height: "52px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  personIcon: {
    fill: "#F15953",
  },
  agentHeadingContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  agentHeading: {
    fontSize: "26px",
    fontWeight: "800",
    textAlign: "center",
    lineHeight: "45px",
    padding: "0 12px",
    color: "#F15953",
    maxWidth: "700px",

    [theme.breakpoints[900]]: {
      fontSize: "30px",
    },
  },
  agentSubHeading: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "16px",
    fontSize: "20px",
    color: "#2E2E35",
    fontWeight: "600",
  },
  agentFeaturesContainer: {
    display: "flex",
    maxWidth: "1100px",
    margin: "60px auto",
    justifyContent: "space-between",
  },
  agentFeature: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    textAlign: "center",
    margin: "0 25px",
    flex: "1",
    flexDirection: "column",
    width: "340px",
  },
  agentImage: {
    textAlign: "center",
  },
  agentFeatureHeading: {
    color: "#2E2E35",
    fontSize: "15px",
    fontWeight: "700",
    paddingTop: "30px",
  },
  agentFeatureDesc: {
    color: "#64616E",
    fontSize: "13px",
    paddingTop: "20px",
    maxWidth: "80%",
    lineHeight: "18px",
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
  },
  teamBtn: {
    borderRadius: "28px",
    border: "1px solid #0092FF",
    padding: "12px 30px",
    fontSize: "14px",
    margin: "auto",
    color: "#0092FF",
    fontWeight: "600",
  },
  brokerageBtn: {
    borderRadius: "28px",
    border: "1px solid #00A54D",
    padding: "12px 30px",
    fontSize: "14px",
    margin: "auto",
    color: "#00A54D",
    fontWeight: "600",
  },
  roleCardContainer: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    margin: "-20px -10px 40px -10px",

    [theme.breakpoints[600]]: {
      // marginTop: "-80px",
      marginTop: "-80px",
      flexDirection: "row",
      alignItems: "flex-end",
    },

    [theme.breakpoints[900]]: {
      marginTop: "-120px",
    },
  },
  teamContainer: {
    display: "flex",
    flexDirection: "column",
    paddingTop: "75px",
    paddingBottom: "100px",

    [theme.breakpoints[900]]: {
      paddingTop: "125px",
      paddingBottom: "0px",
    },
  },
  teamHeadingContainer: {
    display: "flex",
    flexDirection: "column",
  },
  teamHeadingLeft: {
    display: "flex",
    alignItems: "center",
  },
  teamHeading: {
    fontSize: "28px",
    color: "#0092FF",
    fontWeight: "800",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    [theme.breakpoints[900]]: {
      fontSize: "36px",
    },
  },
  teamSubHeading: {
    color: "#2E2E35",
    fontSize: "20px",
    maxWidth: "320px",
    lineHeight: "30px",
    marginTop: "20px",
  },
  teamDetails: {
    display: "flex",
  },
  teamDetailsLeft: {
    flex: "1 50%",
  },
  teamIncludesContainer: {
    display: "flex",
    alignItems: "center",
    paddingTop: "40px",
  },
  teamIncludes: {
    color: "#2E2E35",
    fontWeight: "700",
    paddingLeft: "6px",
  },
  teamFeaturesContainer: {
    display: "flex",
    flexDirection: "column",
    paddingTop: "20px",
  },
  teamFeatureHead: {
    display: "flex",
    alignItems: "center",
  },
  teamFeatureHeading: {
    color: "#2E2E35",
    fontWeight: "700",
    fontSize: "15px",
    paddingLeft: "6px",
  },
  teamFeatures: {
    paddingTop: "40px",
  },
  teamFeatureDesc: {
    fontSize: "13px",
    color: "#64616E",
    paddingTop: "15px",
    paddingLeft: "30px",
    lineHeight: "18px",
  },
  brokerageContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "100px 0",
    justifyContent: "center",
  },
  brokerageHeadingContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  brokerageHeading: {
    fontSize: "26px",
    fontWeight: "800",
    textAlign: "center",
    lineHeight: "45px",
    padding: "0 12px",
    color: "#00A54D",
    maxWidth: "700px",

    [theme.breakpoints[900]]: {
      fontSize: "30px",
    },
  },
  brokerageCardContainer: {
    display: "flex",
    justifyContent: "center",
    padding: "40px",
  },
  brokerageCard: {
    display: "flex",
    background: "#fff",
    justifyContent: "space-between", // material-design 1dp
    transition: "all 200ms ease-in-out",
    overflow: "hidden",
    userSelect: "none",
    borderRadius: "12px",
    boxShadow: "0px 12px 24px rgba(0, 0, 0, .1)",

    [theme.breakpoints[900]]: {
      width: "655px",
      height: "300px",
    },
  },
  brokerageCardLeft: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    marginTop: "60px",
    paddingLeft: "26px",
    paddingRight: "22px",
  },
  topTab: {
    display: "flex",
    fontSize: "12px",
    fontWeight: "600",
    justifyContent: "center",
    padding: "12px 0",
    position: "relative",
    marginLeft: "-26px",
    marginTop: "30px",
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
}))(Index);
