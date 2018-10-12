import React from "react";
import withStyles from "elevate-ui/withStyles";
import classNames from "classnames";

const Container = ({ children, classes, className }) => {
  return <div className={classNames(classes.root, className)}>{children}</div>;
};

export default withStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "1080px",
    margin: "0 auto",
    padding: "0 8px",
  },
}))(Container);
