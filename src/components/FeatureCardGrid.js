import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";

const FeatureCardGrid = ({ classes, className, children }) => {
  return <div className={classNames(classes.root, className)}>{children}</div>;
};

export default withStyles((theme) => ({
  root: {
    display: "grid",
    justifyContent: "center",
    alignItems: "flex-start",
    gridTemplateColumns: "repeat(1, 1fr)",
    gridColumnGap: "40px",
    gridRowGap: "48px",
    marginTop: "60px",

    [theme.breakpoints[600]]: {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
  },
}))(FeatureCardGrid);
