import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";

import config from "../utils/siteConfig";
import Container from "../components/Container";
import SmbcBootcampFaqs from "../components/SmbcBootcampFaqs";
import SmbcBootcampSignup from "../components/SmbcBootcampSignup";
import SmbcBootcampTopics from "../components/SmbcBootcampTopics";
import SmbcBootcampInstructors from "../components/SmbcBootcampInstructors";
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

      <div
        style={{
          background:
            "transparent linear-gradient(360deg, #55C3BA 0%, #D8F2F4 100%) 0% 0% no-repeat padding-box",
          textAlign: "center",
          paddingTop: "80px",
          paddingBottom: "80px",
        }}
      >
        <Container>
          <div className={classes.heroVideo}>
            <iframe
              width="100%"
              height="328"
              src="https://www.youtube.com/embed/kPz3JM4dv-I"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className={classes.titleText}>
            Free Social Media Seminar Exclusively for Real Estate Professionals
          </div>
        </Container>
      </div>
      <div
        style={{
          backgroundColor: "#f5f5f5",
          paddingBottom: "60px",
          paddingTop: "40px",
          textAlign: "left",
          paddingRight: "30px",
          paddingLeft: "30px",
        }}
      >
        <Container>
          <SmbcBootcampSignup
            className={classes.signup}
            signupMessaging={signupMessaging}
          />
        </Container>
      </div>
      <Container>
        <SmbcBootcampTopics className={classes.topics} topics={topics} />
      </Container>
      <div
        style={{
          backgroundColor: "#F15953",
          color: "#ffffff !important",
          paddingBottom: "60px",
          paddingTop: "40px",
          textAlign: "left",
          paddingRight: "30px",
          paddingLeft: "30px",
        }}
      >
        <Container>
          <SmbcBootcampInstructors
            className={classes.instructors}
            instructors={instructors}
          />
        </Container>
      </div>
      <Container>
        <SmbcBootcampFaqs className={classes.faqs} faqs={faqs} />
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
  heroVideo: {
    width: "100%",
    [theme.breakpoints[900]]: {
      width: "50%",
      float: "left",
    },
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
    textAlign: "left",
    paddingBottom: "60px",
    paddingTop: "40px",
    [theme.breakpoints[900]]: {
      width: "50%",
      float: "right",
      paddingLeft: "80px",
    },
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
