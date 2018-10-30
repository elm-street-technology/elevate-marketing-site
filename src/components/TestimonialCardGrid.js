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
    gridColumnGap: "40px",
    gridRowGap: "40px",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 380px))",
    marginTop: "40px",
    maxWidth: "1080px",
    width: "100%",
  },
}))(TestimonialCardGrid);
