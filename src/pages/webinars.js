import React from "react";
import Link from "gatsby-link";
import withStyles from "elevate-ui/withStyles";
import WebinarCardGrid from "../components/WebinarCardGrid";
import WebinarCard from "../components/WebinarCard";
import BgSectionExternal2 from "../components/BgSectionExternal2";
import Container from "../components/Container";
import Webtopbg from "../images/webtop_bg.jpg";
import Webbottombg from "../images/webbottom_bg.jpg";
import Web0 from "../images/webinars.gif";
import Web1 from "../images/miles_pic.png";
import Web2 from "../images/crm_pic.png";
import Web3 from "../images/list_pic.png";
import Web4 from "../images/emerge_screen.png";
import SEO from "../components/SEO";
import OverlappingHexagons from "../images/overlapping-hexagons.svg";

const days = [
  "Every Monday",
  "Every Tuesday",
  "Every Wednesday",
  "Every Thursday",
  "Every Friday",
  "Every Saturday",
  "Every Sunday",
];

const Webinars = ({ classes, data }) => {
  const webinars = data.allContentfulWebinar.edges;
  const orderedWebinars = [...webinars].sort(
    (a, b) => days.indexOf(a.node.day) > days.indexOf(b.node.day)
  );
  return (
    <div className={classes.root}>
      <SEO />



      <div style={{backgroundImage:"url("+Webtopbg+")", backgroundSize:"cover", backgroundPosition:"centerBottom"}}>
                <Container>
                        <div className={classes.top} style={{paddingBottom:"90px", paddingRight:"25px", paddingLeft:"25px", paddingTop:"95px"}}>
                                  <div className={classes.centerHeading}>
                                  <div className={classes.heading} style={{color:"#ffffff", paddingBottom:"15px"}}>The Power of LEARNING</div>
                                  <div className={classes.subtext} style={{color:"#f7f7f7", fontSize:"18px", lineHeight:"26px"}}>Training webinars for Elevate subscribers,<br />
                                  all from the comfort of your couch
                                  </div>
                                  </div>
                        </div>
                </Container>
      </div>


      <div style={{ textAlign: "center", backgroundColor:"#f7f7f7" }}>
      <Container>
                    <div style={{paddingTop:"40px", paddingLeft:"45px", paddingRight:"45px"}}>
                          <div className={classes.heading2}>Live Training Webinars</div>     
                    </div>

        <div className={classes.top}>

                  <div className={classes.column2} style={{ textAlign: "center", paddingTop: "22px" }}>
                                    
                                    <div className={classes.subheading} >Welcome to Elevate</div>
                                    <div className={classes.subtext}>Join Miles Greer, your Digital Tour Guide for an introduction to the POWER of Elevate.
                                    This popular training is complemented by best practices for engaging your sphere of influence, as well as tips for getting
                                    the most out of all that Elevate<br />
                                    has to offer you and your business. 
                                    <br /><br />
                                    Training time:  1 hr.</div>
                                    <a target="_blank" href="https://register.gotowebinar.com/rt/825496143307891981" className={classes.getStartedLink}>
                                    Register Now</a>
                                    <div style={{ textAlign: "center",paddingTop:"5px" }}>
                                          <img src={Web1} width="300" />
                                    </div>
                  </div>

                  <div className={classes.column2} style={{ textAlign: "center", paddingTop: "22px" }}>
                 
                                    <div className={classes.subheading} >Elevate CRM&trade;</div>
                                    <div className={classes.subtext}>Enjoy a step-by-step overview of your<br />
                                    Elevate CRM&trade;. We’ll cover lead management,<br />
                                    managing your website, creating email<br />
                                    campaigns, social media, CMA’s,<br />
                                    analytics and much, much more.
                                    <br /><br />
                                    Training time:  1 hr.</div>
                                    <a target="_blank" href="https://attendee.gotowebinar.com/rt/5463997054050193165" className={classes.getStartedLink}>
                                    Register Now</a>
                                    <div style={{ textAlign: "center",paddingTop:"5px" }}>
                                          <img src={Web2} width="300" />
                                    </div>
                  </div>


                  <a id="learn_more"></a>
        </div>
    </Container>
    </div>


    <div style={{ textAlign: "center" }}>
      <Container>
                    

        <div className={classes.top} style={{paddingTop:"22px"}}>

             

                  <div className={classes.column2} style={{ textAlign: "center", paddingTop: "22px" }}>

                                    <div className={classes.subheading} >Exploring Social Media</div>
                                    <div className={classes.subtext}>Are you ready to take your social media
                                    marketing to the next level? In this
                                    fast-paced session, we’ll explore social 
                                    marketing techniques designed to increase
                                    reach and engagement, and how
                                    Elevate helps to empower you with all<br />
                                    of the tools you need to succeed.
                                    <br /><br />
                                    Training time:  1 hr.</div>
                                    <a target="_blank" href="https://attendee.gotowebinar.com/rt/6508184552514777101" className={classes.getStartedLink}>
                                    Register Now</a>
                                    <div style={{ textAlign: "center",paddingTop:"5px" }}>
                                          <img src={Web3} width="300" />
                                    </div>
                  </div>

                  <div className={classes.column2} style={{ textAlign: "center", paddingTop: "22px" }}>

                                    <div className={classes.subheading} >Elevate Email Campaigns</div>
                                    <div className={classes.subtext}>Join us as we introduce you to the email marketing
                                    system within your Elevate CRM. This training includes a platform overview
                                    of features for engaging your sphere, tips for staying top of mind,
                                    and best practices for providing valuable content
                                    to nurture your leads. Live Q&amp;A throughout.
                                    <br /><br />
                                    Training time:  1 hr.</div>
                                    <a target="_blank" href="https://register.gotowebinar.com/rt/5239817628865423374" className={classes.getStartedLink}>
Register Now</a>
                                    <div style={{ textAlign: "center",paddingTop:"5px" }}>
                                          <img src={Web4} width="300" />
                                    </div>
                  </div>
                  <a id="learn_more"></a>
        </div>
    </Container>
    </div>



    <BgSectionExternal2 bgImage={Webbottombg} secTitle="On Demand Webinars" secLink="https://tryelevate.wistia.com/projects/u8p4ih0dk6" secButton="View Recordings" secImage={Web0}>
    Browse our ever-growing selection of on-demand Elevate training webinars, including our popular “Secrets of Successful Lead Generation”, “How to Promote Your Open Houses”, and so much more just for you.
        </BgSectionExternal2>



   
    </div>
  );
};

export const query = graphql`
  query webinarQuery {
    allContentfulWebinar(limit: 1000,filter: {eventType: {eq: "Training"}}) {
      edges {
        node {
          day
          description
          eventType
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
    paddingTop: "20px",
  },
  top: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "top",
  },

  column2:{
    width:"530px",
    maxWidth: "100%",
    paddingRight:"20px",
    paddingLeft:"20px",
    verticalAlign: "top",
  },

  column3:{
    width:"350px",
    maxWidth: "100%",
    paddingRight:"10px",
    paddingLeft:"10px",
    verticalAlign: "top",
  },
  getStartedLink: {
    minWidth: "250px",
    maxWidth: "250px",
    alignContent: "center",
    justifyContent: "center",
    fontSize: "14px",
    fontWeight: "700",
    display: "block",
    letterSpacing: ".25px",
    backgroundColor: theme.colors.secondary,
    color: "#FFF",
    textDecoration: "none",
    padding: "14px 16px",
    borderRadius: "4px",
    margin: "16px auto",
    marginBottom: "20px",
  },

  getStartedLink2: {
    minWidth: "250px",
    maxWidth: "250px",
    alignContent: "center",
    justifyContent: "center",
    fontSize: "14px",
    fontWeight: "700",
    display: "block",
    letterSpacing: ".25px",
    backgroundColor: "#83858a",
    color: "#FFF",
    textDecoration: "none",
    padding: "14px 16px",
    borderRadius: "4px",
    margin: "16px auto",
    marginBottom: "20px",
  },
  centerHeading:{
    alignItems: "center",
    width: "100%",
    textAlign: "center",
  },
  bold:{
    fontWeight:"700",
  },
  heading: {
    color: "#2E2E35",
    fontSize: "32px",
    lineHeight: "36px",
    fontWeight: "700",
    marginRight: "auto",
  },

  subheading: {
    color: "#2E2E35",
    fontSize: "20px",
    lineHeight: "24px",
    fontWeight: "700",
    paddingBottom: "15px",
  },

  subtext: {
    fontSize: "16px",
    fontWeight: "300",
    lineHeight: "24px",
    color: "#777777",
  },

  heading2: {
    color: theme.colors.secondary,
    fontSize: "32px",
    lineHeight: "40px",
    fontWeight: "700",
    marginRight: "auto",
    paddingBottom: "20px",
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
    paddingTop: "96px",
    paddingBottom: "120px",
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
}))(Webinars);
