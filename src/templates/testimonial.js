import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";
import phone from "../images/phone.png";
import workChat from "../images/work-chat.png";
import quotation from "../images/quotation.png";
import quotationRed from "../images/quotation-red.png";
import duotone from "../images/duotone.png";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import TestimonialMain from "../components/TestimonialMain";
import TestimonialAdditional from "../components/TestimonialAdditional";
import CallToAction from "../components/CallToAction";
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
        <div className={classes.headingContainer}>
          <div className={classes.headingLeft}>
            <div className={classes.heading}>{title}</div>
            <div className={classes.subHeading}>
              Absolutely amazing experience. So easy to set up and the results
              were immediate.
            </div>
            <button className={classes.mainBtn}>Request a demo</button>
          </div>
          <div className={classes.headingRight}>
            <img
              className={classes.mainTestImg}
              style={{ width: "650px" }}
              src={workChat}
              alt={"co-workers chatting"}
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className={classes.mainTestimonial}>
          <div>
            <img
              className={classes.mainTestImg}
              style={{ width: "450px" }}
              src={phone}
              alt={"phone being held"}
            />
          </div>
          <img
            style={{ height: "30px" }}
            src={quotation}
            alt={"quotation marks"}
          />
          <TestimonialMain
            className={classes.main}
            testimonial={primaryTestimonial}
          />
        </div>
      </Container>
      <div className={classes.additionalContainer}>
        <TestimonialAdditional
          className={classes.additional}
          testimonials={additionalTestimonials}
        />
      </div>
      <Container>
        <div className={classes.mainTestimonial}>
          <img
            style={{ height: "20px" }}
            src={quotationRed}
            alt={"quotation marks"}
          />
          <TestimonialMain
            className={classes.main}
            testimonial={secondaryTestimonial}
            mirrored
          />
          <div>
            <img
              style={{ width: "450px", margin: "40px 0px 0px 34px" }}
              src={duotone}
              alt={"business meeting"}
            />
          </div>
        </div>
      </Container>
      <CallToAction />
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
  headingContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  heading: {
    fontSize: "32px",
    fontWeight: "800",
    color: "#2E2E35",
    marginTop: "180px",
  },
  subHeading: {
    fontSize: "24px",
    marginTop: "24px",
    marginBottom: "50px",
    maxWidth: "380px",
    lineHeight: "32px",
  },
  main: {
    paddingTop: "44px",
    paddingBottom: "92px",
    color: "#64616E",
    fontSize: "18px",
    lineHeight: "28px",

    "& p": {
      marginBottom: "20px",
    },
    "& em": {
      fontStyle: "italic",
    },
    "& strong": {
      fontWeight: "800",
    },
    "& img": {
      marginTop: "30px",
      width: "70px",
    },
    "& h1": {
      color: "#2E2E35",
      fontWeight: "700",
      fontSize: "24px",
      lineHeight: "30px",
      marginBottom: "30px",
    },
    "& h2": {
      color: "#2E2E35",
      fontSize: "20px",
      lineHeight: "28px",
      fontWeight: "600",
      marginBottom: "30px",
    },
  },
  additionalContainer: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#FAF8F6",
    paddingTop: "80px",
    paddingBottom: "80px",
    marginTop: "80px",
  },
  additional: {
    display: "flex",
    maxWidth: "1150px",
    justifyContent: "space-between",
    flexDirection: "row",
    lineHeight: "28px",

    "& img": {
      marginTop: "30px",
      width: "70px",
    },

    "& p": {
      color: "#2E2E35",
    },

    "& div": {
      maxWidth: "325px",
    },
  },
  mainBtn: {
    backgroundColor: "#FFF4F0",
    fontSize: "18px",
    letterSpacing: ".25px",
    color: "#F15953",
    textDecoration: "none",
    fontWeight: "700",
    padding: "16px 16px",
    borderRadius: "6px",
  },
  mainTestimonial: {
    display: "flex",
    marginTop: "180px",
  },
  mainTestImg: {
    marginTop: "100px",
  },
}))(Testimonial);
