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
            <div className={classes.buttonContainer}>
              <Link to="/get-started" className={classes.button}>
                Request a Demo
              </Link>
            </div>
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
    flexDirection: "column",
    alignItems: "center",

    [theme.breakpoints[900]]: {
      flexDirection: "row",
    },
  },
  product: {
    fontSize: "16px",
    fontWeight: "700",
    color: theme.colors.primary,
    textTransform: "uppercase",
    textAlign: "center",

    [theme.breakpoints[900]]: {
      textAlign: "left",
      fontSize: "20px",
    },
  },
  heroText: {
    maxWidth: "650px",
    textAlign: "center",

    "& h2": {
      fontSize: "28px",
      lineHeight: "36px",
      fontWeight: "700",
      margin: "20px 0 24px",
    },
    "& em": {
      color: theme.colors.primary,
    },
    "& p": {
      fontSize: "20px",
      lineHeight: "28px",
      display: "none",

      [theme.breakpoints[600]]: {
        display: "flex",
      },
    },

    [theme.breakpoints[900]]: {
      maxWidth: "560px",
      textAlign: "left",

      "& h2": {
        fontSize: "32px",
        lineHeight: "40px",
        margin: "32px 0 24px",
      },
      "& p": {
        fontSize: "20px",
        lineHeight: "32px",
      },
    },
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "30px",

    [theme.breakpoints[900]]: {
      marginTop: "48px",
      justifyContent: "flex-start",
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
  },
  heroImage: {
    display: "flex",
    alignItems: "center",
    maxWidth: "95%",
    boxShadow: "0 8px 12px rgba(0,0,0,0.1)",
    marginTop: "30px",
    padding: "10px",

    [theme.breakpoints[600]]: {
      maxWidth: "600px",
    },

    [theme.breakpoints[900]]: {
      marginLeft: "16px",
      marginRight: "-64px",
      maxWidth: "540px",
    },
  },
}))(ProductHero);
