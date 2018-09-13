import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import Container from "./Container";

const ProductSectionSecondary = ({
  children,
  classes,
  className,
  product,
  section: {
    title,
    description: {
      childMarkdownRemark: { html },
    },
    screenshots,
  },
}) => {
  return (
    <div className={classNames(classes.root, className)}>
      <Container>
        <div className={classes.product}>{product}</div>
        <div className={classes.title}>{title}</div>
        <div
          className={classes.description}
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        />
        <div className={classes.screenshot}>
          <img
            src={screenshots[0].file.url}
            alt={"screenshot"}
            style={{ maxWidth: "100%" }}
          />
        </div>
      </Container>
    </div>
  );
};

export default withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#faf8f6",
  },
  product: {
    fontSize: "20px",
    fontWeight: "700",
    color: theme.colors.primary,
    textTransform: "uppercase",
    paddingLeft: "8px",
  },
  title: {
    fontSize: "32px",
    lineHeight: "45px",
    fontWeight: "700",
    margin: "32px 0 24px",
    paddingLeft: "8px",
  },
  description: {
    fontSize: "20px",
    lineHeight: "32px",
    color: "#64616e",
    maxWidth: "620px",
    paddingLeft: "8px",
  },
  screenshot: {
    display: "flex",
    alignItems: "center",
    margin: "48px 8px 24px",
    boxShadow: "0 8px 12px rgba(0,0,0,0.1)",
  },
}))(ProductSectionSecondary);
