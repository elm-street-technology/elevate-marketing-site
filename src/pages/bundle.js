import React from "react";
import withStyles from "elevate-ui/withStyles";
import Container from "../components/Container";
import BundleHero from "../components/Bundlehero";
import BundleSectionStandard from "../components/BundleSectionStandard";
import BundleSectionCentered from "../components/BundleSectionCentered";
import BundleSectionInverted from "../components/BundleSectionInverted";

const Product = ({ classes }) => {
  return (
    <div className={classes.root}>
      {/* <SEO pagePath={slug} postNode={postNode} pageSEO /> */}
      <div>
        <BundleHero />
        <Container>
          <BundleSectionStandard />
        </Container>
        <Container>
          <BundleSectionCentered className={classes.primarySection} />
        </Container>
        <Container>
          <BundleSectionInverted className={classes.primarySection} />
        </Container>
      </div>
    </div>
  );
};

export default withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
}))(Product);
