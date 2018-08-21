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
    // gridTemplateColumns: "repeat(1, 1fr)",
    marginTop: "60px",
    gridColumnGap: "32px",
    gridRowGap: "50px",

    [theme.breakpoints[600]]: {
      gridTemplateColumns: "repeat(2, 220px)",
    },

    [theme.breakpoints[900]]: {
      gridTemplateColumns: "repeat(4, 280px)",
      gridColumnGap: "0px",
    },
  },
}))(FeatureCardGrid);
