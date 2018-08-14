import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
require("prismjs/themes/prism.css");

const PageBody = (props) => {
  return (
    <div
      className={classNames(props.classes.post, props.className)}
      dangerouslySetInnerHTML={{ __html: props.body.childMarkdownRemark.html }}
    />
  );
};

export default withStyles((theme) => ({
  post: {
    color: "#121130",
    fontSize: "18px",
    lineHeight: "1.6",

    [theme.breakpoints[600]]: {
      padding: "0px",
    },

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

    "& a": {
      color: "#2E2E35",
      textDecoration: "underline",
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
}))(PageBody);
