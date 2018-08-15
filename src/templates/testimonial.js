import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";

import config from "../utils/siteConfig";
import Container from "../components/Container";
import TestimonialMain from "../components/TestimonialMain";
import TestimonialAdditional from "../components/TestimonialAdditional";
// import SEO from '../components/SEO'

const Testimonial = ({ classes, data: { contentfulTestimonial } }) => {
  const {
    additionalTestimonials,
    primaryTestimonial,
    secondaryTestimonial,
    title,
  } = contentfulTestimonial;
  // const postNode = contentfulTestimonial;
  console.log(contentfulTestimonial);

  return (
    <div className={classes.root}>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      {/* <SEO pagePath={slug} postNode={postNode} pageSEO /> */}

      <Container>
        <div>{title}</div>
        <div>
          Absolutely amazing experience. So easy to set up and the results were
          immediate.
        </div>
        <button>Request a demo</button>
      </Container>
      <Container>
        <TestimonialMain
          className={classes.main}
          testimonial={primaryTestimonial}
        />
      </Container>
      <TestimonialAdditional
        className={classes.additional}
        testimonials={additionalTestimonials}
      />
      <Container>
        <TestimonialMain
          className={classes.main}
          testimonial={secondaryTestimonial}
          mirrored
        />
      </Container>
    </div>
  );
};

export const query = graphql`
  query testimonialQuery($slug: String!) {
    contentfulTestimonial(slug: { eq: $slug }) {
      slug
      title
      primaryTestimonial {
        id
        name
        jobTitle
        photo {
          file {
            url
          }
        }
        testimonial {
          childMarkdownRemark {
            html
            excerpt(pruneLength: 320)
          }
        }
      }
      secondaryTestimonial {
        id
        name
        jobTitle
        photo {
          file {
            url
          }
        }
        testimonial {
          childMarkdownRemark {
            html
            excerpt(pruneLength: 320)
          }
        }
      }
      additionalTestimonials {
        id
        name
        photo {
          file {
            url
          }
        }
        testimonial {
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
  main: {
    paddingTop: "64px",
    paddingBottom: "92px",
  },
  additional: {
    paddingTop: "64px",
    paddingBottom: "92px",
  },
}))(Testimonial);
