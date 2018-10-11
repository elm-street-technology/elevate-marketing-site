import React, { Component } from "react";
import withStyles from "elevate-ui/withStyles";
import Container from "../components/Container";
import BundleHero from "../components/BundleHero";
import BundleSectionStandard from "../components/BundleSectionStandard";
import BundleSectionCentered from "../components/BundleSectionCentered";
import BundleSectionInverted from "../components/BundleSectionInverted";
import BundleCard from "../components/BundleCard";

class Bundle extends Component {
  render() {
    const { classes } = this.props;
    const bundles = {
      Brokers: {
        name: "Brokers",
        color: "#FFC629",
        hero: {
          tagline:
            "Discover a platform to help you and your agents sell more homes, faster!",
          description:
            "Access all your core services in one business operating system.",
        },
      },
    };

    return (
      <div className={classes.root}>
        {/* <SEO pagePath={slug} postNode={postNode} pageSEO /> */}
        <div>
          <BundleHero bundles={bundles} />
          <Container>
            <BundleSectionStandard />
          </Container>
          <Container>
            <BundleSectionCentered className={classes.primarySection} />
          </Container>
          <Container>
            <BundleSectionStandard />
          </Container>
          <Container>
            <BundleSectionInverted className={classes.primarySection} />
          </Container>
          <div
            style={{ backgroundColor: "rgba(255, 198, 41, .2)" }}
            className={classes.backgroundContainer}
          >
            <Container>
              <BundleSectionStandard />
            </Container>
          </div>
          <Container>
            <div className={classes.bundleCardContainer}>
              <BundleCard />
              <BundleCard />
            </div>
          </Container>
        </div>
      </div>
    );
  }
}

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
}))(Bundle);
