import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";

import config from "../utils/siteConfig";
import Container from "../components/Container";
import CallToAction from "../components/CallToAction";
import ProductHero from "../components/ProductHero";
import ProductSectionPrimary from "../components/ProductSectionPrimary";
import ProductSectionSecondary from "../components/ProductSectionSecondary";
import ProductSectionTertiary from "../components/ProductSectionTertiary";
import CTASecondary from "../components/CTASecondary";
// import SEO from '../components/SEO'

const Product = ({ classes, data: { contentfulProduct } }) => {
  const {
    heroImage,
    heroText,
    primaryFeatures,
    primaryInformation,
    secondaryInformation,
    // slug,
    tertiaryInformation,
    tertiaryFeatures,
    title,
  } = contentfulProduct;
  // const postNode = contentfulProduct;

  return (
    <div className={classes.root}>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      {/* <SEO pagePath={slug} postNode={postNode} pageSEO /> */}
      <div>
        <ProductHero
          className={classes.hero}
          heroImage={heroImage}
          heroText={heroText}
          product={title}
        />
        <Container>
          <ProductSectionPrimary
            className={classes.primarySection}
            features={primaryFeatures}
            product={title}
            section={primaryInformation}
          />
        </Container>
        <CallToAction />
        {secondaryInformation ? (
          <ProductSectionSecondary
            className={classes.secondarySection}
            product={title}
            section={secondaryInformation}
          />
        ) : null}
        {tertiaryInformation ? (
          <Container>
            <ProductSectionTertiary
              className={classes.tertiarySection}
              features={tertiaryFeatures}
              section={tertiaryInformation}
            />
          </Container>
        ) : null}
      </div>
      <CTASecondary />
    </div>
  );
};

export const query = graphql`
  query productQuery($slug: String!) {
    contentfulProduct(slug: { eq: $slug }) {
      heroImage {
        file {
          url
        }
      }
      heroText {
        childMarkdownRemark {
          html
        }
      }
      primaryInformation {
        title
        description {
          childMarkdownRemark {
            html
          }
        }
        screenshot {
          file {
            url
          }
        }
      }
      primaryFeatures {
        title
        description {
          childMarkdownRemark {
            html
          }
        }
        icon
      }
      secondaryInformation {
        title
        description {
          childMarkdownRemark {
            html
          }
        }
        screenshots {
          file {
            url
          }
        }
      }
      tertiaryInformation {
        title
        description {
          childMarkdownRemark {
            html
          }
        }
        screenshot {
          file {
            url
          }
        }
      }
      tertiaryFeatures {
        title
        description {
          childMarkdownRemark {
            html
          }
        }
        icon
      }
      slug
      title
    }
  }
`;

export default withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",

    "& h1": {
      color: "#2E2E35",
      fontWeight: "700",
      letterSpacing: ".2px",
      lineHeight: "1.2",
      fontSize: "24px",
      marginTop: "44px",
      marginBottom: "12px",
    },

    "& h2": {
      fontSize: "22px",
      lineHeight: "1.4",
      fontWeight: "700",
      marginTop: "32px",
      marginBottom: "12px",
    },

    "& h3": {
      fontSize: "20px",
      fontWeight: "700",
      marginTop: "32px",
      marginBottom: "12px",
    },

    "& h4": {
      fontSize: "18px",
      fontWeight: "600",
      marginTop: "24px",
      marginBottom: "12px",
    },

    "& em": {
      fontStyle: "italic",
    },

    "& strong": {
      fontWeight: "700",
    },

    "& ol": {
      position: "relative",
      counterReset: "item",
    },

    "& ol li": {
      counterIncrement: "item",
      paddingLeft: "24px",

      "&:before": {
        content: 'counter(item) "."',
        position: "absolute",
        left: "0",
        fontWeight: "700",
      },
    },

    "& ul": {
      listStyleType: "disc",
    },

    "& ul li": {
      marginLeft: "18px",
    },

    "& p": {
      marginTop: "4px",
      marginBottom: "8px",
    },
  },
  hero: {
    paddingTop: "36px",
    paddingBottom: "64px",

    [theme.breakpoints[900]]: {
      paddingTop: "96px",
    },
  },
  primarySection: {
    paddingTop: "92px",
    paddingBottom: "92px",
  },
  secondarySection: {
    paddingTop: "92px",
    paddingBottom: "92px",
  },
  tertiarySection: {
    paddingTop: "54px",
    paddingBottom: "92px",

    [theme.breakpoints[900]]: {
      paddingTop: "92px",
    },
  },
}))(Product);
