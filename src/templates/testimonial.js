import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import withStyles from "elevate-ui/withStyles";
import phone from "../images/phone.png";
import workChat from "../images/work-chat.png";
import quotation from "../images/quotation.png";
import duotone from "../images/duotone.png";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import TestimonialMain from "../components/TestimonialMain";
import TestimonialAdditional from "../components/TestimonialAdditional";
import CallToAction from "../components/CallToAction";

const Testimonial = ({ classes, data: { contentfulTestimonial } }) => {
  const {
    additionalTestimonials,
    primaryTestimonial,
    secondaryTestimonial,
    tagline,
    title,
  } = contentfulTestimonial;
  // const postNode = contentfulTestimonial;

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
            <div className={classes.subHeading}>{tagline}</div>
            <Link to="/get-started" className={classes.mainBtn}>
              Request a demo
            </Link>
          </div>
          <div className={classes.headingRight}>
            <img
              className={classes.headingImg}
              src={workChat}
              alt={"co-workers chatting"}
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className={classes.mainTestimonial}>
          <div className={classes.mainTestImgContainer}>
            <img
              className={classes.mainTestImg}
              src={phone}
              alt={"phone being held"}
            />
          </div>
          <img
            className={classes.quotationImg}
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
            className={classes.quotationImg}
            // style={{ height: "20px" }}
            src={quotation}
            alt={"quotation marks"}
          />
          <TestimonialMain
            className={classes.main}
            testimonial={secondaryTestimonial}
            mirrored
          />
          <div>
            <img
              className={classes.meetingImg}
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
      tagline
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
    justifyContent: "center",
    flexDirection: "column",
    paddingLeft: "10px",

    [theme.breakpoints[600]]: {
      justifyContent: "space-between",
      flexDirection: "row",
    },
  },
  headingLeft: {
    order: "1",

    [theme.breakpoints[600]]: {
      order: "0",
    },
  },
  heading: {
    fontSize: "24px",
    fontWeight: "800",
    color: "#2E2E35",
    lineHeight: "1.2",

    [theme.breakpoints[600]]: {
      marginTop: "180px",
      fontSize: "32px",
    },
  },
  subHeading: {
    fontSize: "18px",
    marginTop: "24px",
    marginBottom: "30px",
    maxWidth: "280px",
    lineHeight: "26px",

    [theme.breakpoints[600]]: {
      fontSize: "24px",
      lineHeight: "32px",
      maxWidth: "380px",
      marginBottom: "50px",
    },
  },
  headingRight: {
    alignSelf: "flex-end",
  },
  headingImg: {
    width: "350px",
    marginTop: "30px",

    [theme.breakpoints[600]]: {
      width: "450px",
      marginTop: "200px",
    },

    [theme.breakpoints[900]]: {
      width: "650px",
      marginTop: "100px",
    },
  },
  main: {
    padding: "12px 12px 42px 12px",
    color: "#64616E",
    fontSize: "16px",
    lineHeight: "24px",

    [theme.breakpoints[900]]: {
      fontSize: "18px",
      padding: "44px 0px 92px 0px",
      lineHeight: "30px",
    },

    "& p": {
      marginBottom: "20px",
    },
    "& em": {
      fontStyle: "italic",
    },
    "& strong": {
      fontWeight: "800",
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
    paddingTop: "50px",
    paddingBottom: "50px",
    marginTop: "80px",
  },
  additional: {
    padding: "0px 20px",
    display: "flex",
    maxWidth: "1150px",
    justifyContent: "space-between",
    flexDirection: "column",
    lineHeight: "28px",

    [theme.breakpoints[900]]: {
      flexDirection: "row",
    },

    "& > div": {
      padding: "30px 20px",
    },

    "& div": {
      [theme.breakpoints[900]]: {
        maxWidth: "325px",
      },
    },
  },
  mainBtn: {
    backgroundColor: "#FFF4F0",
    fontSize: "14px",
    letterSpacing: ".25px",
    color: "#F15953",
    textDecoration: "none",
    fontWeight: "700",
    padding: "12px 12px",
    borderRadius: "6px",

    [theme.breakpoints[600]]: {
      padding: "16px 16px",
      fontSize: "18px",
    },
  },
  mainTestimonial: {
    display: "flex",
    flexDirection: "column",
    marginTop: "60px",

    [theme.breakpoints[900]]: {
      marginTop: "180px",
      flexDirection: "row",
    },
  },
  mainTestImgContainer: {
    alignSelf: "center",
    [theme.breakpoints[900]]: {
      alignSelf: "auto",
    },
  },
  mainTestImg: {
    marginTop: "100px",
    width: "350px",

    [theme.breakpoints[600]]: {
      width: "450px",
    },
  },
  meetingImg: {
    width: "250px",
    margin: "40px 0px 0px 34px",
    display: "none",

    [theme.breakpoints[900]]: {
      width: "450px",
      display: "flex",
    },
  },
  quotationImg: {
    width: "30px",

    [theme.breakpoints[600]]: {
      height: "30px",
      width: "45px",
    },
  },
}))(Testimonial);
