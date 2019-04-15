import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";

import config from "../utils/siteConfig";
import Container from "../components/Container";
import BootcampFaqs from "../components/BootcampFaqs";
import BootcampSignup from "../components/BootcampSignup";
import BootcampTopics from "../components/BootcampTopics";
import PageTitleImage from "../components/PageTitleImage";
import WideImage from "../images/bootbg.jpg";
import Link from "gatsby-link";
import BootcampInstructors from "../components/BootcampInstructors";
import SMBCLogo from "../images/smbcLogo.jpg";
// import SEO from '../components/SEO'
import Header from "../components/Header";
import Footer from "../components/Footer";

const Bootcamp = ({ classes, data: { contentfulBootcamp } }) => {
  const {
    faqs,
    heroImage,
    heroText,
    instructors,
    signupMessaging,
    // slug,
    topics,
  } = contentfulBootcamp;
  // const postNode = contentfulBootcamp;

  return (
    <div className={classes.root}>
      <Header />
      <Helmet>
        <title>{`${heroText &&
          heroText.childMarkdownRemark &&
          heroText.childMarkdownRemark.excerpt} - ${config.siteTitle}`}</title>
      </Helmet>
      {/* <SEO pagePath={slug} postNode={postNode} pageSEO /> */}


      <PageTitleImage title="The power of KNOWLEDGE" image={WideImage}>
      The leading social media boot camp provides agents with tips, tricks<br />
      &amp; strategies to conquer social marketing, all while having a great time.
      </PageTitleImage>

      <div style={{paddingTop:"30px", paddingBottom:"60px",}}>
        <Container>
            <div className={classes.flexContainer}>
                <div className={classes.flexItem}>

                   
                <iframe width="100%" height="350" src="https://www.youtube.com/embed/fGRZ8-mLwnQ?autoplay=1&rel=0"
          frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    

                </div>
                <div className={classes.flexItem} style={{paddingLeft:"25px", paddingRight:"25px", paddingBottom:"25px"}}>
                <div className={classes.leftheading}>The Leading<br />
                <span style={{ fontWeight: "bold" }}>Social Media Boot Camp</span></div>
                <div className={classes.leftsubtext}>in real estate energizes and empowers agents to take control of their social marketing with tips, tricks &amp; strategies from experts across the industry!
                <br /><br />
                <span style={{ fontWeight: "bold" }}>Are we coming to your town?</span>
                <Link to="/upgrade" className={classes.ctabutton}>
                  View Upcoming Schedule</Link>
                </div>

                </div>
            </div>
        </Container>
        </div>



      <Container>
        <div style={{ textAlign: "center",paddingBottom:"40px", }}>
          <img src={SMBCLogo} width="400" style={{paddingBottom:"15px"}}/>
          <div className={classes.centerheading}>Want to book a <span style={{ fontWeight: "bold" }}>Boot Camp for your agents?</span></div>
          <div style={{paddingTop:"40px", paddingBottom:"40px"}}>form here</div>
        </div>
      </Container>

      <div style={{backgroundColor:"#f7f7f7"}}><Container>
                <div style={{textAlign:"center", paddingTop:"45px", paddingBottom:"10px",}}>

                   
                <div className={classes.centerheading}><span style={{ fontWeight: "bold" }}>Frequently Asked Questions</span></div>
                <div className={classes.centersubtext}>about our Boot Camp Series</div>
                    

                </div>
  </Container>
  </div>
  <div style={{paddingTop:"20px", paddingBottom:"50px", backgroundColor:"#f7f7f7"}}>
        <Container>
            <div className={classes.flexContainer}>
                <div className={classes.flexItem} style={{padding:"25px",}}>  
                <div className={classes.leftsubheading}>Who should attend?</div>
                <div className={classes.leftsubtext}>Our Boot Camps are designed to energize, educate &amp; empower real estate agents, brokers &amp; teams across the U.S.</div>
                <br />
                <div className={classes.leftsubheading}>What will we learn?</div>
                <div className={classes.leftsubtext}>Agents will learn tips, tricks &amp; strategies in a fast-paced, easy-to-digest environment that will help them grow their online brand through intelligent, thoughtful marketing.</div>
                <br />
                <div className={classes.leftsubheading}>How long is the event?</div>
                <div className={classes.leftsubtext}>Our onsite event usually runs about 2-hours and 15 minutes.</div>
                </div>
                <div className={classes.flexItem} style={{padding:"25px",}}>
                <div className={classes.leftsubheading}>Is there a cost to participate?</div>
                <div className={classes.leftsubtext}>No. All of our Boot Camp events are FREE for attendees.</div>
                <br />
                <div className={classes.leftsubheading}>How do I register?</div>
                <div className={classes.leftsubtext}>Click here to view our upcoming tour schedule.  Select an event you’d like to attend and follow the online registration process...and be sure to invite your friends &amp; colleagues who may also be interested!</div>
                <br />
                <div className={classes.leftsubheading}>How do I book a boot camp for my agents?</div>
                <div className={classes.leftsubtext}>That’s easy.  Fill out the request form above OR contact Todd Colthorp, Director of Elevate Events at XXX.XXX.XXXX | todd@tryelevate.com to start the conversation.</div>
                </div>
            </div>
        </Container>
        </div>


      <Footer />
    </div>
  );
};

export const query = graphql`
  query bootcampQuery($slug: String!) {
    contentfulBootcamp(slug: { eq: $slug }) {
      faqs {
        id
        question
        answer {
          childMarkdownRemark {
            html
            excerpt(pruneLength: 320)
          }
        }
      }
      heroImage {
        file {
          url
        }
      }
      heroText {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 320)
        }
      }
      signupMessaging {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 320)
        }
      }
      slug
      topics {
        id
        title
        description {
          childMarkdownRemark {
            html
            excerpt(pruneLength: 320)
          }
        }
      }
      instructors {
        id
        firstName
        lastName
        jobTitle
        profilePhoto {
          file {
            url
          }
        }
        bio {
          childMarkdownRemark {
            html
            excerpt(pruneLength: 320)
          }
        }
      }
    }
  }
`;

export default withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  hero: {
    minHeight: "400px",
    paddingTop: "96px",
    paddingBottom: "48px",
  },
  heroImage: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    minHeight: "360px",

    [theme.breakpoints[900]]: {
      backgroundPosition: "60px center",
    },
  },
  heroText: {
    display: "none",
    maxWidth: "560px",
    fontSize: "36px",
    lineHeight: "52px",
    fontWeight: "700",
    textAlign: "center",
    paddingBottom: "120px",

    "& em": {
      fontStyle: "italic",
    },

    [theme.breakpoints[900]]: {
      display: "flex",
    },
  },
  titleText: {
    fontSize: "36px",
    lineHeight: "52px",
    fontWeight: "700",
    textAlign: "center",
    paddingBottom: "60px",
    paddingTop: "40px"
  },
  signup: {},
  faqs: {
    borderTop: "1px solid #2E2E35",
    paddingTop: "32px",
    paddingBottom: "92px",
  },
  topics: {
    paddingTop: "64px",
    paddingBottom: "92px",
  },
  instructors: {
    paddingTop: "48px",
    paddingBottom: "92px",
  },
  ctabutton: {
    alignContent: "center",
    justifyContent: "center",
    fontSize: "16px",
    textAlign: "center",
    fontWeight: "500",
    minWidth: "300px",
    letterSpacing: ".25px",
    backgroundColor: theme.colors.secondary,
    color: "#FFF",
    display: "block",
    marginTop: "30px",
    maxWidth: "300px",
    textDecoration: "none",
    padding: "12px 14px",
    borderRadius: "3px",
    display: "inline-block",
  },
  flexContainer: {
    padding: "0",
    margin: '0',
  
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

  leftsubtext: {
    color: "#5A5B5C",
    fontWeight: "500",
    fontSize: "18px",
    letterSpacing: ".25px",
    lineHeight: "1.6",
    marginbottom: "20px",
    textAlign: "left",
    [theme.breakpoints[900]]: {
        fontSize: "16px",
    },
  },

  leftheading: {
    color: "#4bbbb1",
    fontSize: "30px",
    fontWeight: "700",
    letterSpacing: ".25px",
    fontWeight: "600",
    lineHeight: "1.6",
  
    [theme.breakpoints[900]]: {
        fontSize: "28px",
    },
  },

  leftsubheading: {
    color: "#4bbbb1",
    fontSize: "18px",
    fontWeight: "900",
    letterSpacing: ".25px",
    fontWeight: "600",
    lineHeight: "1.6",
  
    [theme.breakpoints[900]]: {
        fontSize: "18px",
    },
  },
  centerheading: {
    color: "#4bbbb1",
    fontSize: "30px",
    fontWeight: "700",
    letterSpacing: ".25px",
    fontWeight: "600",
    lineHeight: "1.6",
    textAlign: "center",
  
    [theme.breakpoints[900]]: {
        fontSize: "28px",
    },
  },
  centersubtext: {
    color: "#5A5B5C",
    fontWeight: "500",
    fontSize: "16px",
    letterSpacing: ".25px",
    lineHeight: "1.6",
    marginbottom: "20px",
    textAlign: "center",
  
    [theme.breakpoints[900]]: {
        fontSize: "16px",
    },
  },


}))(Bootcamp);
