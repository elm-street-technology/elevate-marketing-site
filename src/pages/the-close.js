import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import FormTheClose from "../components/FormTheClose";
import hero from "../images/the-close-hero.jpeg";
import tablet from "../images/glance1.f7b17e82.gif";
import website from "../images/glance2.ac268b35.png";
import phone from "../images/glance3.aa3f25cf.gif";
import support from "../images/glance4.f2510b03.png";
import Testa from "../images/testa.png";
import Testb from "../images/testb.png";
import Testc from "../images/testc.png";
import SEO from "../components/SEO";

const TheClose = ({ children, classes, data, tags }) => {
  const postNode = {
    title: `Elevate + The Close - ${config.siteTitle}`,
  };

  return (
    <div className={classes.root}>
      <Helmet>
        <title>{`Elevate + The Close - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="Elevate + The Close" customTitle />

      <div
        style={{
          backgroundImage: `url(${hero})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Container>
          <div
            className={classes.top}
            style={{
              paddingBottom: "30px",
              paddingTop: "75px",
            }}
          >
            <div className={classes.column2}>
              <div
                className={classes.heading}
                style={{
                  color: "#ffffff",
                  paddingTop: "30px",
                  fontSize: "30px",
                  lineHeight: "40px",
                  paddingRight: "15px",
                }}
              >
                Everything you need for lead generation, digital marketing,
                &amp; client collaboration - all in one place.
              </div>
              <div
                className={classes.subtext}
                style={{ color: "#fff", fontSize: "21px", lineHeight: "36px" }}
              >
                Allow Elevate to empower your productivity (and lower costs!) by
                decreasing your need for multiple disjointed solutions! Elevate
                gives Brokers, Agents and Teams an intuitive, consolidated
                marketing experience at an affordable price.
              </div>
            </div>
            <div className={classes.column2}>
              <div style={{ backgroundColor: "#fff", padding: "30px" }}>
                <div className={classes.heading2}>Want to explore Elevate?</div>
                <div className={classes.subtext}>
                  Schedule a demo today and discover the power of pure
                  productivity!
                </div>
                <FormTheClose
                  subject="The Close"
                  listid="131134"
                  webhook=""
                  leadsource="tryelevate.com:mobileAppBeta"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div
        style={{
          backgroundColor: "#fff",
        }}
      >
        <Container>
          <div
            className={classes.top}
            style={{
              paddingTop: "75px",
              paddingBottom: "0px",
              height: "unset",
            }}
          >
            <div className={classes.column1}>
              <div
                className={classes.subtext2}
                style={{
                  color: "#55c3ba",
                  marginBottom: "15px",
                  fontSize: "28px",
                  lineHeight: "37px",
                }}
              >
                Advanced, Intuitive CRM with Powerful Metrics
              </div>
              <div>
                <div className={classes.subtext}>
                  Easily track the KPIs (key performance indicators) of your
                  business with activity workflows, task coaching,
                  agent-protected databases, lead response routing &amp;
                  tracking, and a customizable metrics dashboard.
                </div>
              </div>
            </div>
            <div className={classes.column3}>
              <img src={tablet} style={{ width: "100%" }} />
            </div>
          </div>
        </Container>
      </div>

      <div
        style={{
          backgroundColor: "#F7F7F7",
        }}
      >
        <Container>
          <div
            className={classes.top}
            style={{
              paddingTop: "75px",
              paddingBottom: "0px",
              height: "unset",
            }}
          >
            <div className={classes.column3}>
              <img src={website} style={{ width: "100%" }} />
            </div>
            <div className={classes.column1}>
              <div
                className={classes.subtext2}
                style={{
                  color: "#55c3ba",
                  marginBottom: "15px",
                  fontSize: "28px",
                  lineHeight: "37px",
                }}
              >
                High SEO IDX Website
              </div>
              <div>
                <div className={classes.subtext}>
                  Designed to be found on search engines, your Elevate IDX®
                  website features rich, relevant content, an intuitive consumer
                  interface with plenty of lead capture opportunities, and an
                  interactive blog with automated content posted weekly!
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div
        style={{
          backgroundColor: "#fff",
        }}
      >
        <Container>
          <div
            className={classes.top}
            style={{
              paddingTop: "75px",
              paddingBottom: "0px",
              height: "unset",
            }}
          >
            <div className={classes.column1}>
              <div
                className={classes.subtext2}
                style={{
                  color: "#55c3ba",
                  marginBottom: "15px",
                  fontSize: "28px",
                  lineHeight: "37px",
                }}
              >
                Automated Social, Email &amp; Text Campaigns
              </div>
              <div>
                <div className={classes.subtext}>
                  Nurture your past, present &amp; future clients with
                  intelligent campaigns, proven templates and workflows designed
                  to provide insight and engagement with every step of your
                  lead’s life cycle.
                </div>
              </div>
            </div>
            <div className={classes.column3}>
              <img src={phone} style={{ width: "100%" }} />
            </div>
          </div>
        </Container>
      </div>

      <div
        style={{
          backgroundColor: "#F7F7F7",
        }}
      >
        <Container>
          <div
            className={classes.top}
            style={{
              paddingTop: "75px",
              paddingBottom: "0px",
              height: "unset",
            }}
          >
            <div style={{ textAlign: "center", margin: "0 auto" }}>
              <img
                src={support}
                style={{ width: "30%", marginBottom: "30px" }}
              />
            </div>
            <div>
              <div
                className={classes.subtext2}
                style={{
                  color: "#55c3ba",
                  marginBottom: "15px",
                  fontSize: "28px",
                  lineHeight: "37px",
                  textAlign: "center",
                }}
              >
                Backed By Premium Support &amp; Training
              </div>
              <div>
                <div
                  className={classes.subtext}
                  style={{
                    textAlign: "center",
                    maxWidth: "80%",
                    margin: "0 auto 80px",
                  }}
                >
                  Dedicated onboarding and success specialists who will help you
                  every step of the way. Elevate offers webinars and training
                  on-demand, an interactive help center, accompanied by live
                  chat, email and telephone support.
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div
        style={{
          paddingTop: "50px",
          paddingBottom: "50px",
          backgroundColor: "#ffffff",
        }}
      >
        <Container>
          <div className={classes.flexContainer}>
            <div
              className={classes.flexItem2}
              style={{ padding: "20px", textAlign: "center" }}
            >
              <div className={classes.subtext}>
                <img src={Testa} width="170" />
                <div className={classes.Heading2}>
                  Joloyce Egbert-Palmer
                  <br />
                  REALTOR&reg;
                </div>
                KRCH Realty
                <br />
                Reno, NV
                <br />
                <br />
                “Elevate created my amazing website and launched my lead
                program. My website is professional and easy to use, plus
                Elevate automatically posts content on all my social media
                channels...something that
                <br />
                I don’t have time to do, and now
                <br />I don’t need to!”
              </div>
            </div>
            <div
              className={classes.flexItem2}
              style={{ padding: "20px", textAlign: "center" }}
            >
              <div className={classes.subtext}>
                <img src={Testb} width="170" />
                <div className={classes.Heading2}>
                  Prince Jones
                  <br />
                  Broker Associate, REALTOR&reg;
                </div>
                RE/MAX Realty Team <br />
                Cape Coral, FL
                <br />
                <br />
                “As a REALTOR&reg;, you will find that there are a vast number
                of companies trying to make money off your hard work. They
                promise the world, and they do not deliver. Elevate is not one
                of those companies. To quote Tony Robbins, using Elevate...”life
                will never be the same.”
              </div>
            </div>

            <div
              className={classes.flexItem2}
              style={{ padding: "20px", textAlign: "center" }}
            >
              <div className={classes.subtext}>
                <img src={Testc} width="170" />
                <div className={classes.Heading2}>
                  Tracy Anne Madden
                  <br />
                  REALTOR&reg;
                </div>
                Tracy Madden Homes
                <br />
                Temecula, CA
                <br />
                <br />
                “I am a new REALTOR&reg; and I was really struggling with
                managing my social media in a professional way, and I
                desperately needed my own website. I attended a Social Media
                Boot Camp and learned about the services these guys had to offer
                and I was blown away
                <br />
                by the fact that they literally
                <br />
                covered everything."
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    margin: "auto",
  },

  top: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "unset",
    ["@media (min-width:1090px)"]: {
      height: "710px",
    },
  },

  heading: {
    fontSize: "36px",
    fontWeight: "700",
    lineHeight: "40px",
    letterSpacing: ".14px",
    color: "#fff",
    marginBottom: "12px",
    paddingTop: "40px",
  },

  heading2: {
    fontSize: "21px",
    fontWeight: "400",
    lineHeight: "26px",
    textTransform: "uppercase",
    marginBottom: "5px",
  },

  subtext: {
    fontSize: "16px",
    fontWeight: "300",
    lineHeight: "24px",
    color: "#777777",
  },

  subtext2: {
    fontSize: "16px",
    fontWeight: "700",
    lineHeight: "24px",
    color: "#777777",
  },

  column2: {
    width: "530px",
    maxWidth: "100%",
    paddingRight: "20px",
    paddingLeft: "20px",
    verticalAlign: "top",
    [theme.breakpoints[900]]: {
      paddingLeft: "20px",
      paddingRight: "20px",
    },
  },

  column1: {
    width: "353px",
    maxWidth: "100%",
    paddingRight: "20px",
    paddingLeft: "20px",
    verticalAlign: "top",
    [theme.breakpoints[900]]: {
      paddingLeft: "20px",
      paddingRight: "20px",
    },
  },

  column3: {
    width: "707px",
    maxWidth: "100%",
    paddingRight: "20px",
    paddingLeft: "20px",
    verticalAlign: "top",
    [theme.breakpoints[900]]: {
      paddingLeft: "20px",
      paddingRight: "20px",
    },
  },

  bold: {
    fontWeight: "700",
  },

  centerHeading: {
    alignItems: "center",
    width: "100%",
    textAlign: "center",
  },

  Heading2: {
    fontSize: "28px",
    paddingBottom: "20px",
    fontWeight: "700",
    lineHeight: "34px",
    color: "#52B1AD",
    letterSpacing: ".14px",
  },

  Heading3: {
    fontSize: "20px",
    paddingBottom: "5px",
    fontWeight: "700",
    lineHeight: "26px",
    color: "#52B1AD",
    letterSpacing: ".14px",
  },

  landingHeaderStyle: {
    textAlign: "center",
  },

  buttonLink: {
    minWidth: "250px",
    maxWidth: "250px",
    alignContent: "center",
    justifyContent: "center",
    fontSize: "14px",
    fontWeight: "700",
    display: "block",
    letterSpacing: ".25px",
    backgroundColor: "#52B1AD",
    color: "#FFF",
    textDecoration: "none",
    padding: "16px",
    borderRadius: "4px",
    margin: "16px auto",
    marginBottom: "10px",
  },

  flexContainer: {
    padding: "0",
    margin: "0",

    display: "-webkit-box",
    display: "-moz-box",
    display: "-ms-flexbox",
    display: "-webkit-flex",
    display: "flex",
    flexWrap: "wrap",
  },
  phoneImage: {
    display: "none",
    ["@media (min-width:1090px)"]: {
      display: "block",
    },
  },
  flexContainer: {
    padding: "0",
    margin: "0",

    display: "-webkit-box",
    display: "-moz-box",
    display: "-ms-flexbox",
    display: "-webkit-flex",
    display: "flex",
    flexWrap: "wrap",
  },
  flexItem: {
    maxWidth: "100%",
    width: "100%",
    paddingRight: "0px",
    paddingBottom: "25px",

    [theme.breakpoints[900]]: {
      maxWidth: "50%",
      width: "50%",
      paddingRight: "20px",
      paddingBottom: "0px",
    },
  },

  flexItem2: {
    maxWidth: "100%",
    width: "100%",
    paddingRight: "0px",
    paddingBottom: "25px",

    [theme.breakpoints[900]]: {
      maxWidth: "33%",
      width: "33%",
      paddingRight: "20px",
      paddingBottom: "0px",
    },
  },

  flexItem3: {
    maxWidth: "100%",
    width: "100%",
    paddingRight: "0px",
    paddingBottom: "25px",

    [theme.breakpoints[900]]: {
      maxWidth: "40%",
      width: "40%",
      paddingRight: "20px",
      paddingBottom: "0px",
    },
  },
}))(TheClose);
