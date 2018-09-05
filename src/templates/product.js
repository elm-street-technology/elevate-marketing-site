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
        <ProductSectionSecondary
          className={classes.secondarySection}
          product={title}
          section={secondaryInformation}
        />
        <Container>
          <ProductSectionTertiary
            className={classes.tertiarySection}
            features={tertiaryFeatures}
            section={tertiaryInformation}
          />
        </Container>
      </div>
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
  },
  hero: {
    paddingTop: "96px",
    paddingBottom: "64px",
  },
  primarySection: {
    paddingTop: "64px",
    paddingBottom: "92px",
  },
  secondarySection: {
    paddingTop: "64px",
    paddingBottom: "92px",
  },
  tertiarySection: {
    paddingTop: "64px",
    paddingBottom: "92px",
  },
}))(Product);
