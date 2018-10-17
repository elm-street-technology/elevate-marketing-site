import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";

import config from "../utils/siteConfig";
import renderComponent from "../utils/render-component";
// import ProductSectionSecondary from "../components/ProductSectionSecondary";
// import ProductSectionTertiary from "../components/ProductSectionTertiary";

const Product = ({ classes, data: { contentfulProduct } }) => {
  const {
    // secondaryInformation,
    // slug,
    // tertiaryInformation,
    // tertiaryFeatures,
    title,
    sections,
  } = contentfulProduct;
  // const postNode = contentfulProduct;

  return (
    <div className={classes.root}>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      {/* <SEO pagePath={slug} postNode={postNode} pageSEO /> */}
      <div>
        {sections.map((section, idx) => renderComponent(section, classes, idx))}
      </div>
    </div>
  );
};

export const query = graphql`
  query productQuery($slug: String!) {
    contentfulProduct(slug: { eq: $slug }) {
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
