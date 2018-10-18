import React from "react";

import * as Icons from "elevate-ui-icons";
import withStyles from "elevate-ui/withStyles";

const Parallax = ({
  children,
  backgroundImage,
  title,
  tagline,
  icon,
  classes,
}) => {
  let Icon = null;
  if (icon) {
    Icon = Icons[icon];
  }

  return (
    <div
      className={classes.root}
      style={{ backgroundImage: `url("${backgroundImage}")` }}
    >
      {Icon ? <Icon size="72" /> : null}
      {title ? <div className={classes.title}>{title}</div> : null}
      {tagline ? <div className={classes.tagline}>{tagline}</div> : null}
    </div>
  );
};

export default withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    minHeight: "300px",
    height: "100%",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "top",
    color: "#FFF",
    marginBottom: "30px",
  },
  title: {
    fontSize: "32px",
    fontWeight: "bold",
    paddingLeft: "32px",
    paddingRight: "32px",
    textAlign: "center",
    [theme.breakpoints[600]]: {
      fontSize: "46px",
    },
  },
  tagline: {
    marginTop: "24px",
    fontSize: "24px",
    paddingLeft: "32px",
    paddingRight: "32px",
    textAlign: "center",
    [theme.breakpoints[600]]: {
      fontSize: "28px",
    },
  },
}))(Parallax);
