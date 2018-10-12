import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";

import Facebook from "elevate-ui-icons/Facebook";
import Twitter from "elevate-ui-icons/Twitter";
import LinkedIn from "elevate-ui-icons/LinkedIn";
import Instagram from "elevate-ui-icons/Instagram";

const SocialLinks = ({ classes, className }) => {
  return (
    <div className={classNames(classes.root, className)}>
      <a
        className={classNames(classes.icon, classes.facebook)}
        href="https://www.facebook.com/ElevateRET"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Facebook size={32} color="#FFF" />
      </a>
      <a
        className={classNames(classes.icon, classes.twitter)}
        href="https://twitter.com/ElmStreetRE"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Twitter size={32} color="#FFF" />
      </a>
      <a
        className={classNames(classes.icon, classes.linkedin)}
        href="https://www.linkedin.com/company/elm-street-technology"
        target="_blank"
        rel="noreferrer noopener"
      >
        <LinkedIn size={32} color="#FFF" />
      </a>
      <a
        className={classNames(classes.icon, classes.instagram)}
        href="https://www.instagram.com/elmstreettechnologyre/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Instagram size={32} color="#FFF" />
      </a>
    </div>
  );
};

export default withStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  icon: {
    margin: "0 2px",

    "&:hover": {
      color: "inherit",
      opacity: "0.6",
    },
  },
  facebook: {
    color: "#3b5998",
  },
  twitter: {
    color: "#1da1f2",
  },
  linkedin: {
    color: "#007bb5",
  },
  instagram: {
    color: "#517fa4",
  },
}))(SocialLinks);
