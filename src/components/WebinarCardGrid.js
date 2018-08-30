import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";

const WebinarCardGrid = ({ classes, className, children }) => {
  return <div className={classNames(classes.root, className)}>{children}</div>;
};

export default withStyles((theme) => ({
  root: {
    display: "grid",
    justifyContent: "center",
    gridTemplateColumns: "repeat(1, 1fr)",
    gridColumnGap: "44px",
    gridRowGap: "32px",

    [theme.breakpoints[600]]: {
      gridTemplateColumns: "repeat(1, 400px)",
    },

    [theme.breakpoints[900]]: {
      gridTemplateColumns: "repeat(2, 400px)",
    },
  },
}))(WebinarCardGrid);
