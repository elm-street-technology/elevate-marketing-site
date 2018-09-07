import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";

const EventCardZero = ({ children, classes, className }) => {
  return (
    <div className={classNames(classes.root, className)}>
      <div className={classes.children}>{children}</div>
    </div>
  );
};

export default withStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    maxWidth: "540px",
    background: "#fff",
    borderRadius: "6px",
    boxShadow: "0 8px 12px rgba(0,0,0,0.1)",
    padding: "16px",
    margin: "0 auto",
  },
  children: {
    fontSize: "18px",
    fontWeight: "700",
    lineHeight: "1.6",
    textAlign: "center",
    margin: "8px auto",

    "& > *": {
      display: "inline-flex",
    },
  },
}))(EventCardZero);
