import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";

import config from "../utils/siteConfig";
import Container from "../components/Container";
import BootcampFaqs from "../components/BootcampFaqs";
import BootcampSignup from "../components/BootcampSignup";
import BootcampTopics from "../components/BootcampTopics";
import BootcampInstructors from "../components/BootcampInstructors";
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

      <div className={classes.hero}>
        <Container>
          <div
            className={classes.heroImage}
            style={{ backgroundImage: `url('${heroImage.file.url}')` }}
          >
            <div
              className={classes.heroText}
              dangerouslySetInnerHTML={{
                __html:
                  heroText &&
                  heroText.childMarkdownRemark &&
                  heroText.childMarkdownRemark.html,
              }}
            />
          </div>
        </Container>
      </div>
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
    backgroundPosition: "-40px center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "512px",
    minHeight: "360px",
  },
  heroText: {
    maxWidth: "560px",
    fontSize: "36px",
    lineHeight: "48px",
    fontWeight: "700",
    textAlign: "center",
    paddingBottom: "120px",

    "& em": {
      fontStyle: "italic",
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
