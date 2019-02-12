import React from "react";
import Link from "gatsby-link";
import withStyles from "elevate-ui/withStyles";
import WebinarCardGrid from "../components/WebinarCardGrid";
import SmbcWebinarCard from "../components/SmbcWebinarCard";
import Container from "../components/Container";
import SEO from "../components/SEO";
import OverlappingHexagons from "../images/overlapping-hexagons.svg";
import YellowArrow from "../images/yellowArrow.png";
import SMBCLogo from "../images/smbcLogo.jpg";

const days = [
  "Every Monday",
  "Every Tuesday",
  "Every Wednesday",
  "Every Thursday",
  "Every Friday",
  "Every Saturday",
  "Every Sunday",
];

const Smbc_webinars = ({ classes, data }) => {
    console.log(data.allContentfulWebinar);

    var webinars = [];
    var orderedWebinars = [];

    if (data.allContentfulWebinar !== null) {
        webinars = data.allContentfulWebinar.edges;
        orderedWebinars = [...webinars].sort(
            (a, b) => days.indexOf(a.node.day) > days.indexOf(b.node.day)
        );
    }

  return (
    <div className={classes.root}>
      <SEO />
      <Container>
        <div className={classes.top}>
                  <div style={{textAlign:"center"}}><img src={SMBCLogo} width="400" /></div>
                  <div className={classes.heading}>
                      
                  REGISTER TODAY.  IT'S FREE!</div>
                  <div className={classes.subheading}>Exclusive Social Media Boot Camp Webinar</div>
        </div>
      </Container>
      <div style={{ backgroundColor:"#5cc3b9"}}>
        <Container>
            <div style={{paddingTop:"20px",textAlign:"center",fontSize:"18px",lineHeight:"2em"}}>
                Lead by 17-year real estate technology veteran, Sean Price, we'll help you build your online business with<br/> great tips, tricks & social media marketing strategies.<br/>
                <span style={{fontWeight:"700"}}>Space is limited, so register TODAY!</span>
            </div>
            <WebinarCardGrid className={classes.grid}>
            {orderedWebinars.map(({ node: webinar }) => {
                return <SmbcWebinarCard key={webinar.id} webinar={webinar} />;
            })}
            </WebinarCardGrid>
        </Container>
      </div>

          <div style={{ backgroundColor: "#ef5c58" }}>
          <Container>
                  <div style={{padding:"20px",textAlign:"center"}}>
                      <img src={YellowArrow} style={{ width:"80px"}} />
                      <div style={{ fontSize: "24px", color:"#FFFF00", fontWeight:"700",padding:"20px"}}>WANT A SNEAK PEAK?</div>
                  <div style={{color:"#FFFFFF"}}>Watch our promotional video to see just what
                    the Social Media Boot Camps are all about!</div>
                    <div style={{ textAlign: "center", paddingTop: "40px" }}>
                      <iframe width="800" height="450" src="https://www.youtube.com/embed/emAjb5GZI88?autoplay=1&rel=0"
                          frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </div>
          </Container>
      </div>


      <div className={classes.backgroundSlice}>
        <svg
          className={classes.backgroundTopSlice}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon fill="white" points="0,100 100,0 100,100" />
        </svg>
        <svg
          className={classes.backgroundBottomSlice}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon fill="white" points="0,100 100,0 100,100" />
        </svg>
      </div>
    </div>
  );
};

export const query = graphql`
  query smbcWebinarQuery {
    allContentfulWebinar(filter: {eventType: {eq: "SMBC Encore"}}) {
      edges {
        node {
          day
          description
          eventType
          expires
          id
          registrationUrl
          time
          title 
        }
      }
    }
  }
`;

export default withStyles((theme) => ({
  root: {
    position: "relative",
    paddingTop: "30px",
    paddingBottom: "0px",
  },
  top: {
    alignItems: "center",
  },
  heading: {
    color: "#2E2E35",
    fontSize: "32px",
    fontWeight: "700",
    marginRight: "auto",
    textAlign:"center",
    paddingBottom:"20px",
    paddingTop:"40px"
  },
    subheading: {
        color: "#2E2E35",
        fontSize: "24px",
        fontWeight: "700",
        marginRight: "auto",
        textAlign: "center",
        padding:"10px",
        paddingBottom:"30px"
    },
  bootcampLink: {
    color: "inherit",
    textDecoration: "none",
    padding: "12px 0",

    "&:hover": {
      textDecoration: "underline",
    },
  },
  grid: {
    paddingTop: "50px",
    paddingBottom: "70px",
  },
  backgroundSlice: {
    position: "absolute",
    top: "200px",
    bottom: "0",
    right: "0",
    left: "0",
    width: "100%",
    height: "400px",
    backgroundImage: `url('${OverlappingHexagons}')`,
    opacity: "0.5",
    zIndex: "-1",
  },
  backgroundTopSlice: {
    position: "absolute",
    top: "-1px",
    width: "100%",
    height: "10vw",
    transform: "rotate(180deg)",
  },
  backgroundBottomSlice: {
    position: "absolute",
    bottom: "0",
    width: "100%",
    height: "10vw",
  },
  past: {
    color: "#2E2E35",
    fontSize: "28px",
    fontWeight: "700",
    paddingBottom: "20px",
    borderBottom: "2px solid rgba(100, 97, 110, .20)",
  },
  pastContainer: {
    display: "flex",
    flexDirection: "column",
  },
  pastDesc: {
    padding: "24px 0",
    fontSize: "18px",
    lineHeight: "26px",
  },
  pastLink: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#2E7FC2",
    fontSize: "14px",
    letterSpacing: ".25px",
    color: "#fff",
    textDecoration: "none",
    fontWeight: "600",
    padding: "16px 16px",
    borderRadius: "6px",
    alignSelf: "flex-start",
    marginLeft: "4px",
  },
}))(Smbc_webinars);
