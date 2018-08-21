import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";

const TestimonialCardGrid = ({ classes, className, children }) => {
  return <div className={classNames(classes.root, className)}>{children}</div>;
};

export default withStyles((theme) => ({
  root: {
    display: "grid",
    justifyContent: "center",
    marginTop: "40px",
    gridColumnGap: "40px",
    gridRowGap: "40px",

    [theme.breakpoints[900]]: {
      gridTemplateColumns: "repeat(2, 440px)",
      marginTop: "60px",
    },
  },
}))(TestimonialCardGrid);
