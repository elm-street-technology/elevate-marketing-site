import React from "react";
import withStyles from "elevate-ui/withStyles";
import classNames from "classnames";

const Row = ({ children, classes, className }) => {
  return <div className={classNames(classes.root, className)}>{children}</div>;
};

export default withStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap:"wrap"
  },
}))(Row);
