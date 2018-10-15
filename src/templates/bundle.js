import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";

import Container from "../components/Container";
import config from "../utils/siteConfig";

import BundleHero from "../components/BundleHero";
import BundleSectionStandard from "../components/BundleSectionStandard";
import BundleSectionCentered from "../components/BundleSectionCentered";
import BundleSectionInverted from "../components/BundleSectionInverted";
import BundleCard from "../components/BundleCard";

function getComponentByAlignment(alignment) {
  switch (alignment) {
    case "inverted":
      return BundleSectionInverted;
    case "centered":
      return BundleSectionCentered;
    case "standard":
    default:
      return BundleSectionStandard;
  }
}

const BundleTemplate = ({ classes, data: { contentfulBundle } }) => {
  const { title, sections, cards, hero } = contentfulBundle;

  return (
    <div className={classes.root}>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      <Container>
        <BundleHero hero={hero} />
      </Container>
      <Container>
        {sections && sections.length
          ? sections.map(
              (
                { icon, heading, tagline, description, screenshot, alignment },
                idx
              ) => {
                const Component = getComponentByAlignment(alignment);
                return (
                  <Component
                    key={idx}
                    heading={heading}
                    tagline={tagline}
                    icon={icon}
                    description={description}
                    screenshot={screenshot.file.url}
                  />
                );
              }
            )
          : null}
      </Container>
      <Container className={classes.bundleCardContainer}>
        {cards && cards.length
          ? cards.map(({ heading, tagline, icon, description }, idx) => (
              <BundleCard
                key={idx}
                heading={heading}
                tagline={tagline}
                icon={icon}
                description={description}
              />
            ))
          : null}
      </Container>
    </div>
  );
};

export const query = graphql`
  query bundleQuery($slug: String!) {
    contentfulBundle(slug: { eq: $slug }) {
      title
      slug
      hero {
        icon
        name
        color
        screenshot {
          file {
            url
          }
        }
        tagline
        description {
          childMarkdownRemark {
            html
          }
        }
      }
      sections {
        id
        icon
        heading
        tagline
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
        alignment
      }
      cards {
        id
        heading
        tagline
        description {
          childMarkdownRemark {
            html
          }
        }
        icon
      }
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

    "& a": {
      color: "#2E2E35",
      textDecoration: "underline",
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

    "& img": {
      display: "block",
      maxWidth: "100%",
      marginBottom: "16px",
    },
  },
  backgroundContainer: {
    padding: "60px 0px",
  },
  bundleCardContainer: {
    display: "grid",
    gridGap: "48px",
    gridTemplateColumns: "repeat(auto-fit, minmax(380px, auto))",
    padding: "120px 0px",
  },
}))(BundleTemplate);
