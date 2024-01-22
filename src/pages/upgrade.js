import React from "react";
import Link from "gatsby-link";
import withStyles from "elevate-ui/withStyles";
import Container from "../components/Container";
import SEO from "../components/SEO";
import Logo from "../components/Logo";
import Hr from "elevate-ui/Hr";
import WistiaVideo from "../components/WistiaVideo";
import Chat from "elevate-ui-icons/Chat";
import QuestionAnswer from "elevate-ui-icons/QuestionAnswer";
import ViewCarousel from "elevate-ui-icons/ViewCarousel";
import PlayCircleFilled from "elevate-ui-icons/PlayCircleFilled";
import LiveTv from "elevate-ui-icons/LiveTv";

const Upgrade = ({ classes }) => {
  return (
    <div className={classes.root}>
      <SEO />
      <Container>
        <div className={classes.top} style={{ textAlign: "center" }}>
          <div
            style={{
              padding: "25px",
              backgroundColor: "#f159535e",
              marginBottom: "30px",
              lineHeight: "2em",
            }}
          >
            <div
              style={{
                fontWeight: "700",
                width: "100%",
                textAlign: "center",
                fontSize: "24px",
                paddingBottom: "10px",
              }}
            >
              IMPORTANT ANNOUNCEMENT FOR LISTINGBOOK AGENTS
            </div>
            <div style={{ textAlign: "center" }}>
              Excluding Triad MLS, ALL Listingbook agents &amp; their clients
              have now been upgraded to Elevate. You can NO LONGER log in at
              Listingbook.com. Please follow login instruction for your NEW
              Elevate account
              <br />
              via email / text communication and/or your Elevate morning report.
              <br />
              <br />
              <a
                target="_blank"
                href="https://support.tryelevate.com/s/ /articles/360018375372-Listingbook-to-Elevate-FAQs#help-login"
                className={classes.getStartedLink2}
              >
                Login to Elevate
              </a>
              &nbsp;&nbsp;
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  if (window.zE) window.zE.activate();
                }}
                className={classes.getStartedLink2}
              >
                Chat with Coach
              </a>
            </div>
            <br />
            <div className={classes.bold}>
              TRIAD MLS USERS ONLY, click the link below:
            </div>

            <div style={{ paddingTop: "25px", paddingBottom: "25px" }}>
              <a
                target="_blank"
                href="https://triadlistingbook.com/home"
                className={classes.getStartedLink2}
              >
                Triad Users Login
              </a>
            </div>
          </div>

          <div className={classes.centerHeading}>
            <div style={{ textAlign: "center", fontSize: "12px" }}>
              Migrated MLSes: SMART, TAR, BAREIS, MRED, SANDICOR, CARETS,
              Wilmington, SABOR, JSMLS, ARMLS,
              <br />
              MARISMO, MIREAL, SWFLAMLS, NEFMLS, SEFMLAMLS, MRIS, Orlando,
              LIBOR, CRMLS, HGAR.
            </div>
            <div className={classes.heading} style={{ paddingTop: "45px" }}>
              New to Elevate?
            </div>
            <div className={classes.bold}>
              Here’s everything you need to know about your upgrade to Elevate.
            </div>
            <br />
          </div>
        </div>
      </Container>

      <Container>
        <div className={classes.top}>
          <div className={classes.column} style={{}}>
            <div className={classes.grayText} style={{ textAlign: "center" }}>
              <div className={classes.heading}>Getting Started Videos</div>
              <div>
                Explore everything that is Elevate with these{" "}
                <span className={classes.bold}> easy-to-digest videos </span>
                designed to introduce you to all of the new features &amp;
                functionality that you and your clients will LOVE.
              </div>
              <div style={{ paddingTop: "30px" }}>
                <a
                  target="_blank"
                  href="https://tryelevate.wistia.com/projects/ibbj6zglui"
                  className={classes.darkTealLink}
                  style={{ backgroundColor: "#3e928b" }}
                >
                  <LiveTv
                    color="#FFFFFF"
                    size={30}
                    className={classes.iconPosition}
                    style={{ top: "8px", right: "6px" }}
                  />
                  Watch Now
                </a>
              </div>
            </div>

            <div>
              <Hr style={{ marginTop: "40px", marginBottom: "40px" }} />
            </div>
            <div style={{ textAlign: "center" }}>
              <div className={classes.heading}>FAQ for You</div>
              <div style={{ paddingBottom: "30px" }}>
                Here are quick answers to your most important questions about
                Elevate and your client’s information.
              </div>
              <div>
                <a
                  target="_blank"
                  href="https://support.tryelevate.com/s/ /articles/360018375372-Listingbook-to-Elevate-FAQs"
                  className={classes.getStartedLink}
                >
                  <QuestionAnswer
                    color="#FFFFFF"
                    size={28}
                    className={classes.iconPosition}
                    style={{ top: "9px", right: "5px" }}
                  />{" "}
                  View FAQ
                </a>
              </div>
            </div>
          </div>

          <div className={classes.column}>
            <div className={classes.infoboxTeal}>
              <div>
                <div className={classes.heading} style={{ color: "#FFFFFF" }}>
                  Training Webinars
                </div>
              </div>

              <div style={{ paddingTop: "10px" }}>
                <span className={classes.bold} style={{ color: "#FFFFFF" }} />
              </div>

              <div style={{ paddingTop: "30px" }}>
                <a
                  target="_blank"
                  href="https://tryelevate.wistia.com/projects/ibbj6zglui"
                  className={classes.darkTealLink}
                  style={{ backgroundColor: "#3e928b" }}
                >
                  On Demand Recordings
                </a>
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div className={classes.heading}>FAQ for Your Clients</div>
              <div style={{ paddingBottom: "30px" }}>
                We’ve created a special FAQ experiences
                <br />
                for you to share with your clients.
                <br />
                <div className={classes.bold}>Just share the link below...</div>
              </div>
              <div>
                <a
                  target="_blank"
                  href="https://support.tryelevate.com/s/ /sections/360003180791-Listingbook-to-Elevate-Upgrade-for-Clients"
                  className={classes.getStartedLink}
                >
                  <QuestionAnswer
                    color="#FFFFFF"
                    size={28}
                    className={classes.iconPosition}
                    style={{ top: "9px", right: "5px" }}
                  />{" "}
                  View Client FAQ
                </a>
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <div className={classes.infoboxGray}>
          <div style={{ textAlign: "center" }}>
            <div className={classes.heading}>Chat with us NOW</div>
            The Elevate Success Team is here to help you every step of the way.
            <br />
            <div className={classes.bold}>How can we help you today?</div>
            <br />
            <a
              href=""
              className={classes.getStartedLink}
              onClick={(e) => {
                e.preventDefault();
                if (window.zE) window.zE.activate();
              }}
            >
              <Chat
                color="#FFFFFF"
                size={28}
                className={classes.iconPosition}
                style={{ top: "10px" }}
              />{" "}
              Chat with Success Coach
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default withStyles((theme) => ({
  root: {
    position: "relative",
    paddingTop: "96px",
    paddingBottom: "102px",
    lineHeight: "1.75em",
  },
  top: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
  },
  section: {
    paddingTop: "60px",
  },
  heading: {
    color: theme.colors.secondary,
    fontSize: "32px",
    fontWeight: "700",
    marginRight: "auto",
    paddingBottom: "20px",
  },
  centerHeading: {
    alignItems: "center",
    width: "100%",
    textAlign: "center",
  },
  bold: {
    fontWeight: "700",
  },
  column: {
    width: "530px",
    maxWidth: "100%",
    paddingRight: "10px",
    paddingLeft: "10px",
    verticalAlign: "top",
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
  getStartedLink2: {
    width: "250px",
    alignContent: "center",
    justifyContent: "center",
    fontSize: "14px",
    fontWeight: "700",
    letterSpacing: ".25px",
    backgroundColor: "#FFF",
    color: "#f15953",
    textDecoration: "none",
    padding: "14px 16px",
    borderRadius: "4px",
    margin: "16px auto",
  },
  darkTealLink: {
    width: "250px",
    alignContent: "center",
    justifyContent: "center",
    fontSize: "14px",
    fontWeight: "700",
    letterSpacing: ".25px",
    backgroundColor: theme.colors.secondaryDark,
    color: "#FFF",
    textDecoration: "none",
    padding: "14px 16px",
    borderRadius: "4px",
    margin: "16px auto",
  },
  grayLink: {
    width: "250px",
    alignContent: "center",
    justifyContent: "center",
    fontSize: "14px",
    fontWeight: "700",
    letterSpacing: ".25px",
    backgroundColor: theme.colors.gray400,
    color: "#FFF",
    textDecoration: "none",
    padding: "14px 16px",
    borderRadius: "4px",
    margin: "16px auto",
  },
  grayText: {
    color: theme.colors.gray800,
  },
  infoboxGray: {
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.gray100,
    color: theme.colors.gray800,
    textDecoration: "none",
    padding: "40px 10px",
    borderRadius: "4px",
    margin: "30px auto",
    textAlign: "center",
  },
  infoboxTeal: {
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.secondary,
    color: theme.colors.gray800,
    textDecoration: "none",
    padding: "40px 10px",
    borderRadius: "4px",
    margin: "30px auto",
    textAlign: "center",
  },
  videoBorder: {
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: theme.colors.gray400,
  },
  iconPosition: {
    position: "relative",
    top: "12px",
    right: "4px",
  },
}))(Upgrade);
