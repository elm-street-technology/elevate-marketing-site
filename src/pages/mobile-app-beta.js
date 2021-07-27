import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import FormMobileAppBeta from "../components/FormMobileAppBeta";
import phone from "../images/mobile_app_phone.png";
import SEO from "../components/SEO";

const MobileAppBeta = ({ children, classes, data, tags }) => {
  const postNode = {
    title: `Elevate Mobile App Beta Program - ${config.siteTitle}`,
  };

  return (
    <div className={classes.root}>
      <Helmet>
        <title>{`Elevate Mobile App Beta Program - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="Mobile App Beta Program" customTitle />

      <div
        style={{
          backgroundColor: "#55c3ba",
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
                  fontSize: "52px",
                  lineHeight: "65px",
                }}
              >
                We're officially putting out the call for Beta Test Users!
              </div>
              <div
                className={classes.subtext}
                style={{ color: "#000", fontSize: "21px", lineHeight: "36px" }}
              >
                Elevate is launching a NEW mobile app focused on increasing your
                speed to lead contact. The app includes push notifications for
                new leads and client activity so you can take action right away.
                If you're interested in getting first access to this new mobile
                app experience, here's your official invite to join!
              </div>
            </div>
            <div className={classes.column2}>
              <img
                src={phone}
                className={classes.phoneImage}
                width="100%"
                style={{
                  paddingTop: "20px",
                  margin: "0 auto",
                }}
              />
            </div>
          </div>
        </Container>
      </div>

      <div
        style={{
          paddingTop: "40px",
          paddingBottom: "40px",
        }}
      >
        <Container>
          <div style={{ paddingTop: "20px" }}>
            <div className={classes.column2}>
              <div
                className={classes.subtext2}
                style={{
                  color: "#55c3ba",
                  marginBottom: "15px",
                  fontSize: "18px",
                  lineHeight: "30px",
                }}
              >
                Here are just a few of the benefits to being a mobile app beta
                test user:
              </div>
              <div>
                <ul
                  className={classes.subtext}
                  style={{
                    listStyle: "inside",
                    color: "#000",
                    fontSize: "18px",
                    lineHeight: "28px",
                  }}
                >
                  <li>
                    Receive mobile push notifications for new leads &amp; client
                    activity
                  </li>
                  <li>
                    Quickly call, text, or email clients from your own phone
                    number (vs. the VoIP)
                  </li>
                  <li>
                    Give valuable feedback to help shape future iterations of
                    the mobile app
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div
        style={{
          backgroundColor: "#F15953",
          color: "#ffffff !important",
          paddingBottom: "60px",
          paddingTop: "60px",
          textAlign: "left",
          paddingRight: "30px",
          paddingLeft: "30px",
        }}
      >
        <Container>
          <div
            className={classes.subtext}
            style={{ color: "#fff", paddingLeft: "20px", paddingRight: "20px" }}
          >
            The Elevate mobile app will be available for iOS and Android users.
            To become an Elevate Beta Test User, please fill out the form below
            using the email associated with your Elevate account. Once you've
            submitted the form, we will send you a download link to the app.
          </div>
          <div className={classes.column2} style={{ color: "#fff !important" }}>
            <FormMobileAppBeta
              subject="Mobile App Beta"
              listid="107389"
              webhook="b1452e08-f398-11ea-9d14-bc764e046a9d"
              leadsource="tryelevate.com:mobileAppBeta"
            />
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
    height: "unset",
    [theme.breakpoints[900]]: {
      height: "690px",
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
}))(MobileAppBeta);
