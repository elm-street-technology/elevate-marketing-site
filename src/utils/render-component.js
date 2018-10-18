// @flow
import React from "react";
import get from "lodash/get";

import BorderTitleBlock from "../components/BorderTitleBlock";
import Markdown from "../components/Markdown";
import Button from "../components/Button";
import Parallax from "../components/Parallax";
import Container from "../components/Container";
import CallToAction from "../components/CallToAction";
import ProductSectionPrimary from "../components/ProductSectionPrimary";
import BundleSectionStandard from "../components/BundleSectionStandard";
import BundleSectionCentered from "../components/BundleSectionCentered";
import BundleSectionInverted from "../components/BundleSectionInverted";

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

export default function renderSection(section, classes, idx) {
  switch (section.__typename) {
    case "ContentfulParallax":
      return (
        <Parallax
          key={idx}
          backgroundImage={get(section, "backgroundImage.file.url")}
          title={section.title}
          tagline={section.tagline}
          icon={section.icon}
        />
      );
    case "ContentfulBundleSection":
      const Component = getComponentByAlignment(section.alignment);
      return (
        <Container>
          <Component
            key={idx}
            heading={section.heading}
            tagline={section.tagline}
            icon={section.icon}
            description={section.description}
            screenshots={
              section.screenshots && section.screenshots.length
                ? section.screenshots.map((screenshot) =>
                    get(screenshot, "file.url")
                  )
                : []
            }
          />
        </Container>
      );

    case "ContentfulBorderTitleBlock":
      return (
        <Container key={idx}>
          <BorderTitleBlock borderColor={section.borderColor}>
            {section.title.childMarkdownRemark.html}
          </BorderTitleBlock>
        </Container>
      );
    case "ContentfulCallToAction":
      return (
        <Container key={idx}>
          <CallToAction />
        </Container>
      );
    case "ContentfulProductSectionPrimary":
      return (
        <Container key={idx}>
          <ProductSectionPrimary
            className={classes.primarySection}
            features={section.primaryFeatures}
            section={section.primaryInformation}
          />
        </Container>
      );
    case "ContentfulMarkdown":
      return (
        <Container key={idx}>
          <Markdown html={section.childMarkdownRemark.html} />
        </Container>
      );
    case "ContentfulButton":
      return (
        <Container key={idx}>
          <Button backgroundColor={section.backgroundColor} href={section.href}>
            {section.text}
          </Button>
        </Container>
      );
    default:
      return null;
  }
}
