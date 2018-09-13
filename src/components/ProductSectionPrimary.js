import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import FeatureCardGrid from "../components/FeatureCardGrid";
import FeatureCard from "../components/FeatureCard";

const ProductSectionPrimary = ({
  children,
  classes,
  className,
  features,
  product,
  section: {
    title,
    description: {
      childMarkdownRemark: { html },
    },
    screenshot: {
      file: { url },
    },
  },
}) => {
  return (
    <div className={classNames(classes.root, className)}>
      <div className={classes.top}>
        <div className={classes.product}>{product}</div>
        <div className={classes.title}>{title}</div>
        <div
          className={classes.description}
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        />
        <div className={classes.screenshot}>
          <img src={url} alt={"screenshot"} style={{ maxWidth: "100%" }} />
        </div>
      </div>
      <FeatureCardGrid className={classes.grid}>
        {features.map((feature, i) => (
          <FeatureCard key={i} feature={feature} />
        ))}
      </FeatureCardGrid>
    </div>
  );
};

export default withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  top: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  product: {
    fontSize: "18px",
    fontWeight: "700",
    color: theme.colors.primary,
    textTransform: "uppercase",
  },
  title: {
    fontSize: "28px",
    lineHeight: "36px",
    fontWeight: "700",
    margin: "32px 0 24px",
  },
  description: {
    fontSize: "20px",
    lineHeight: "32px",
    maxWidth: "740px",
  },
  screenshot: {
    display: "flex",
    alignItems: "center",
    margin: "48px 0 24px",
    boxShadow: "0 8px 12px rgba(0,0,0,0.1)",
  },
  grid: {
    padding: "0 14px",
  },
}))(ProductSectionPrimary);
