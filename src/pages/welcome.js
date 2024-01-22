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
import CheckCircle from "elevate-ui-icons/CheckCircle";
import SMBCLogo from "../images/smbcLogo.jpg";
import Tour from "../images/tour_icon.png";
import Encore from "../images/encore_icon.png";
import Webinar from "../images/webinar_icon.png";
import Emails from "../images/6emails_pic.png";
import Dose from "../images/dose_pic.png";
import Social from "../images/social_pic.jpg";
import Welc1 from "../images/welc1.png";
import Welc2 from "../images/welc2.gif";
import Welc3 from "../images/welc3.png";
import Welcheader from "../images/welc_header.jpg";
import Live from "../images/live.jpg";
import Welcome from "../images/welcome.gif";
import Vid from "../images/vidmock.jpg";
import Bar from "../images/bar.gif";
import Freebg from "../images/free_bg.jpg";
const welcome = ({ classes }) => {
  return (
    <div className={classes.root}>
      <SEO />
      <div
        style={{
          backgroundImage: "url(" + Welcheader + ")",
          backgroundSize: "cover",
          backgroundPosition: "centerBottom",
        }}
      >
        <Container>
          <div
            className={classes.top}
            style={{
              paddingBottom: "110px",
              paddingRight: "25px",
              paddingLeft: "25px",
              paddingTop: "115px",
            }}
          >
            <div className={classes.centerHeading}>
              <div
                className={classes.heading}
                style={{ color: "#ffffff", paddingBottom: "15px" }}
              >
                Welcome to Elevate
              </div>
              <div
                className={classes.subtext}
                style={{
                  color: "#f7f7f7",
                  fontSize: "18px",
                  lineHeight: "26px",
                }}
              >
                We invite you to explore your NEW Elevate experience.
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div style={{ textAlign: "center" }}>
        <Container>
          <div className={classes.top} style={{ paddingTop: "32px" }}>
            <div
              className={classes.column3}
              style={{ textAlign: "center", paddingTop: "32px" }}
            >
              <div className={classes.heading2}>Get Started Guide</div>
              <div className={classes.subtext}>
                Let us walk you
                <br />
                step-by-step through your
                <br />
                Elevate experience.
              </div>
              <a
                target="_blank"
                href="/assets/elevate_welcome_ebook.pdf"
                className={classes.getStartedLink}
              >
                Download PDF
              </a>
              <div
                style={{
                  textAlign: "center",
                  paddingTop: "8px",
                  marginBottom: "-6px",
                }}
              >
                <img src={Welc1} width="300" />
              </div>
            </div>

            <div
              className={classes.column3}
              style={{ textAlign: "center", paddingTop: "32px" }}
            >
              <div className={classes.heading2}>Training Webinars</div>
              <div className={classes.subtext}>
                Join a live walk-through with
                <br />
                our Elevate Success Team to
                <br />
                explore your new service.
              </div>
              <a
                target="_blank"
                href="https://tryelevate.com/webinars/"
                className={classes.getStartedLink}
              >
                Register Now
              </a>
              <div
                style={{
                  textAlign: "center",
                  paddingTop: "8px",
                  marginBottom: "-6px",
                }}
              >
                <img src={Welc2} width="300" />
              </div>
            </div>

            <div
              className={classes.column3}
              style={{ textAlign: "center", paddingTop: "32px" }}
            >
              <div className={classes.heading2}>Help Center</div>
              <div className={classes.subtext}>
                Browse our easy-to-search
                <br />
                knowledge base with any
                <br />
                questions you may have.
              </div>
              <a
                target="_blank"
                href="https://support.tryelevate.com/s/ "
                className={classes.getStartedLink}
              >
                Browse Help
              </a>
              <div
                style={{
                  textAlign: "center",
                  paddingTop: "8px",
                  marginBottom: "-6px",
                }}
              >
                <img src={Welc3} width="300" />
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div style={{ backgroundColor: "#f7f7f7", paddingBottom: "25px" }}>
        <Container>
          <div className={classes.section} />
          <div className={classes.top}>
            <div
              className={classes.centerHeading}
              style={{ paddingBottom: "55px" }}
            >
              <div className={classes.heading}>
                FREE Tips, Tricks &amp; Strategies
              </div>
              <div className={classes.subtext}>
                for marketing &amp; lead generation success.
              </div>
            </div>
          </div>

          <div className={classes.top}>
            <div
              className={classes.column3}
              style={{ textAlign: "center", paddingBottom: "35px" }}
            >
              <div style={{ textAlign: "center", paddingBottom: "20px" }}>
                <img src={Dose} style={{ width: "100%", maxWidth: "300px" }} />
              </div>

              <div className={classes.heading2}>
                Daily Marketing Tips
                <br />
                free daily email
              </div>
              <div>
                <div className={classes.subtext}>
                  Sign up to receive your daily dose
                  <br />
                  of marketing awesomeness
                  <br />
                  delivered straight to your inbox.
                </div>
              </div>
              <a
                target="_blank"
                href="http://3sixtyfive.agency/"
                className={classes.getStartedLink}
              >
                Register Today
              </a>
            </div>
            <div
              className={classes.column3}
              style={{ textAlign: "center", paddingBottom: "35px" }}
            >
              <div style={{ textAlign: "center", paddingBottom: "20px" }}>
                <img
                  src={Emails}
                  style={{ width: "100%", maxWidth: "300px" }}
                />
              </div>
              <div className={classes.heading2}>
                Email Marketing Tips
                <br />
                free download
              </div>
              <div>
                <div className={classes.subtext}>
                  6 emails every real estate agent
                  <br />
                  should be sending to nurture past,
                  <br />
                  present &amp; future clients.
                </div>
              </div>
              <a
                target="_blank"
                href="/assets/6emails_elevate.pdf"
                className={classes.getStartedLink}
              >
                Download PDF
              </a>
            </div>

            <div
              className={classes.column3}
              style={{ textAlign: "center", paddingBottom: "35px" }}
            >
              <div style={{ textAlign: "center", paddingBottom: "20px" }}>
                <img
                  src={Social}
                  style={{ width: "100%", maxWidth: "300px" }}
                />
              </div>
              <div className={classes.heading2}>
                Social Media Tips
                <br />
                free download
              </div>
              <div>
                <div className={classes.subtext}>
                  Quick tips to establishing
                  <br />
                  &amp; build your online presence
                  <br />
                  &amp; strengthen relationships.
                </div>
              </div>
              <a
                target="_blank"
                href="/assets/elevatesocialmediaebook.pdf"
                className={classes.getStartedLink}
              >
                Download PDF
              </a>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default withStyles((theme) => ({
  root: {
    position: "relative",
    paddingTop: "10px",
    paddingBottom: "0px",
    lineHeight: "1.75em",
  },
  top: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "top",
  },
  section: {
    paddingTop: "60px",
  },

  subtext: {
    fontSize: "16px",
    fontWeight: "300",
    lineHeight: "24px",
    color: "#777777",
  },

  heading: {
    color: "#52B1AD",
    fontSize: "32px",
    lineHeight: "40px",
    fontWeight: "700",
    marginRight: "auto",
    paddingBottom: "20px",
  },
  heading2: {
    color: "#52B1AD",
    fontSize: "20px",
    lineHeight: "28px",
    fontWeight: "700",
    marginRight: "auto",
    paddingBottom: "20px",
  },

  heading3: {
    color: theme.colors.secondary,
    fontSize: "33px",
    lineHeight: "40px",
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
  column2: {
    width: "710px",
    maxWidth: "100%",
    paddingRight: "10px",
    paddingLeft: "10px",
    verticalAlign: "top",
  },
  column3: {
    width: "350px",
    maxWidth: "100%",
    paddingRight: "10px",
    paddingLeft: "10px",
    verticalAlign: "top",
  },
  getStartedLink: {
    minWidth: "230px",
    maxWidth: "230px",
    alignContent: "center",
    justifyContent: "center",
    fontSize: "14px",
    fontWeight: "700",
    display: "block",
    letterSpacing: ".25px",
    backgroundColor: "#52B1AD",
    color: "#FFF",
    textDecoration: "none",
    padding: "14px 16px",
    borderRadius: "4px",
    margin: "16px auto",
    marginBottom: "20px",
  },

  getStartedLink2: {
    minWidth: "230px",
    maxWidth: "230px",
    alignContent: "center",
    justifyContent: "center",
    fontSize: "14px",
    fontWeight: "700",
    display: "block",
    letterSpacing: ".25px",
    backgroundColor: "#ffffff",
    color: "#5dc4ba",
    textDecoration: "none",
    padding: "14px 16px",
    borderRadius: "4px",
    margin: "16px auto",
    marginBottom: "20px",
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
    backgroundColor: "#1f194c",
    color: theme.colors.gray800,
    textDecoration: "none",
    padding: "40px 25px 25px 25px",
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
    padding: "40px 25px 25px 25px",
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
}))(welcome);
