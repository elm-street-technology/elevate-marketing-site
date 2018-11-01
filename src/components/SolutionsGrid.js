import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";

const SolutionsGrid = ({ classes, className, children }) => {
  return <div className={classNames(classes.root, className)}>{children}</div>;
};

export default withStyles((theme) => ({
  root: {
    display: "grid",
    margin: "auto",
    padding: "24px 16px 60px",

    maxWidth: "1080px",
    gridGap: "30px",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  },
}))(SolutionsGrid);
