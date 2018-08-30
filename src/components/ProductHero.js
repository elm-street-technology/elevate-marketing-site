import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import Link from "gatsby-link";
import Container from "./Container";

const ProductHero = ({
  children,
  classes,
  className,
  heroImage,
  heroText,
  product,
}) => {
  return (
    <div className={classNames(classes.root, className)}>
      <Container>
        <div className={classes.content}>
          <div>
            <div className={classes.product}>{product}</div>
            <div
              className={classes.heroText}
              dangerouslySetInnerHTML={{
                __html:
                  heroText &&
                  heroText.childMarkdownRemark &&
                  heroText.childMarkdownRemark.html,
              }}
            />
            <Link to="/get-started" className={classes.button}>
              Request a Demo
            </Link>
          </div>
          <img
            className={classes.heroImage}
            src={heroImage.file.url}
            alt="screenshot"
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
    minHeight: "400px",
    overflow: "hidden",
  },
  content: {
    display: "flex",
    alignItems: "center",
  },
  product: {
    fontSize: "20px",
    fontWeight: "700",
    color: theme.colors.primary,
    textTransform: "uppercase",
  },
  heroText: {
    maxWidth: "560px",

    "& h2": {
      fontSize: "32px",
      lineHeight: "40px",
      fontWeight: "700",
      margin: "32px 0 24px",
    },
    "& em": {
      color: theme.colors.primary,
    },
    "& p": {
      fontSize: "20px",
      lineHeight: "32px",
    },
  },
  button: {
    flexShrink: "0",
    display: "inline-flex",
    fontSize: "16px",
    fontWeight: "700",
    backgroundColor: "#F15953",
    color: "#fff",
    padding: "16px 20px",
    margin: "0",
    borderRadius: "4px",
    textAlign: "center",
    textDecoration: "none",
    marginTop: "48px",
  },
  heroImage: {
    display: "flex",
    alignItems: "center",
    maxWidth: "540px",
    boxShadow: "0 8px 12px rgba(0,0,0,0.1)",
    marginLeft: "16px",
    marginRight: "-64px",
  },
}))(ProductHero);
