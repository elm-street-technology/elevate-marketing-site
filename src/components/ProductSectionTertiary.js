import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import Link from "gatsby-link";
import FeatureCard from "../components/FeatureCard";

const ProductSectionTertiary = ({
  children,
  classes,
  className,
  features,
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
    <div>
      <div className={classNames(classes.root, className)}>
        <div className={classes.features}>
          <div className={classes.featuresHeading}>Features</div>
          <div className={classes.featuresGrid}>
            {features.map((feature, i) => (
              <FeatureCard key={i} feature={feature} />
            ))}
          </div>
        </div>
        <div>
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
          <Link to="/get-started" className={classes.link}>
            Let us show you around →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default withStyles((theme) => ({
  root: {
    display: "flex",
  },
  features: {
    flexShrink: "0",
    maxWidth: "440px",
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 8px 12px rgba(0,0,0,0.1)",
    border: "6px solid #FFF4F0",
    padding: "60px 48px",
    marginRight: "64px",
  },
  featuresHeading: {
    color: theme.colors.primary,
    fontWeight: "800",
    textTransform: "uppercase",
  },
  featuresGrid: {
    display: "grid",
    justifyContent: "center",
    gridTemplateColumns: "repeat(1, 1fr)",
    gridColumnGap: "40px",
    gridRowGap: "48px",
    marginTop: "48px",
  },
  title: {
    fontSize: "36px",
    lineHeight: "44px",
    fontWeight: "600",
    margin: "32px 0 24px",
  },
  description: {
    fontSize: "20px",
    lineHeight: "32px",
    color: "#64616e",
    maxWidth: "480px",
  },
  screenshot: {
    margin: "48px 0",
    boxShadow: "0 8px 12px rgba(0,0,0,0.1)",
  },
  link: {
    color: "inherit",
    textDecoration: "none",

    "&:hover": {
      textDecoration: "underline",
    },
  },
}))(ProductSectionTertiary);
