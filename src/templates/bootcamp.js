import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";

import config from "../utils/siteConfig";
import Container from "../components/Container";
import BootcampFaqs from "../components/BootcampFaqs";
import BootcampSignup from "../components/BootcampSignup";
import BootcampTopics from "../components/BootcampTopics";
import BootcampInstructors from "../components/BootcampInstructors";
import SMBCLogo from "../images/smbcLogo.jpg";
// import SEO from '../components/SEO'

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
      <Helmet>
        <title>{`${heroText &&
          heroText.childMarkdownRemark &&
          heroText.childMarkdownRemark.excerpt} - ${config.siteTitle}`}</title>
      </Helmet>
      {/* <SEO pagePath={slug} postNode={postNode} pageSEO /> */}

      <Container>
        <div style={{textAlign:"center",paddingTop:"40px"}}>
          <iframe width="800" height="450" src="https://www.youtube.com/embed/klUhBTht0ZA?autoplay=1&rel=0" 
          frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className={classes.titleText}>
          Free Social Media Seminar <span style={{ color:"#f3574e"}}>Exclusively</span> for Real Estate Professionals
        </div>
        <div style={{ textAlign: "center",paddingBottom:"40px" }}>
          <img src={SMBCLogo} width="500" />
        </div>
      </Container>

      
      <Container>
        
        
        <BootcampFaqs className={classes.faqs} faqs={faqs} />
      </Container>
      <BootcampSignup
        className={classes.signup}
        signupMessaging={signupMessaging}
      />
      <Container>
        <BootcampTopics className={classes.topics} topics={topics} />
      </Container>
      <Container>
        <BootcampInstructors
          className={classes.instructors}
          instructors={instructors}
        />
      </Container>
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
}))(Bootcamp);
