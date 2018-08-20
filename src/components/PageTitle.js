import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";

const PageTitle = ({ children, classes, className }) => {
  return <div className={classNames(classes.root, className)}>{children}</div>;
};

export default withStyles((theme) => ({
  root: {
    width: "100%",
    lineHeight: "1.2",
    fontSize: "28px",
    color: "#2E2E35",
    fontWeight: "800",

    [theme.breakpoints[600]]: {
      fontSize: "36px",
    },
  },
}))(PageTitle);
