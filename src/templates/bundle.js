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
                    description={description.description}
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
                description={description.description}
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
          description
        }
      }
      sections {
        id
        icon
        heading
        tagline
        description {
          description
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
          description
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
