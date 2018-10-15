import React from "react";
import withStyles from "elevate-ui/withStyles";
import * as Icons from "elevate-ui-icons";

const BundleCard = ({ classes, icon, headline, tagline, description }) => {
  const Icon = Icons[icon];
  return (
    <div className={classes.root}>
      <div className={classes.icon}>
        <Icon size={28} />
      </div>
      <div className={classes.heading}>{headline}</div>
      <div className={classes.tagline}>{tagline}</div>
      <div
        className={classes.description}
        dangerouslySetInnerHTML={{
          __html: description.childMarkdownRemark.html,
        }}
      />
    </div>
  );
};

export default withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 8px 12px rgba(0,0,0,.20)",
    padding: "30px 30px 0px 30px",
    textAlign: "center",
    borderRadius: "8px",

    [theme.breakpoints[900]]: {
      padding: "36px",
    },
  },
  icon: {
    width: "56px",
    height: "56px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#55C3BA",
    backgroundColor: "rgba(85, 195, 186, .2)",
    borderRadius: "50%",
    padding: "12px",
  },
  heading: {
    display: "flex",
    alignItems: "center",
    textTransform: "uppercase",
    color: "#55C3BA",
    fontWeight: "700",
    letterSpacing: ".8px",
    fontSize: "18px",
    marginBottom: "24px",
    marginTop: "16px",
  },
  tagline: {
    fontSize: "26px",
    fontWeight: "700",
    color: "#2E2E35",
    lineHeight: "38px",
    marginBottom: "20px",
    maxWidth: "600px",
  },
  description: {
    fontSize: "18px",
    lineHeight: "30px",
    color: "#5A5B5C",
    marginBottom: "60px",

    [theme.breakpoints[900]]: {
      maxWidth: "400px",
      marginBottom: "0px",
    },
  },
}))(BundleCard);
