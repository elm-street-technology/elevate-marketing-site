import React from "react";
import withStyles from "elevate-ui/withStyles";
import classNames from "classnames";

const Col = ({ children, classes, className, style }) => {
  return <div className={classNames(classes.root, className)} style={style}>{children}</div>;
};

export default withStyles((theme) => ({
  root: {
    flex: "1",
    alignSelf: "flex-start",
    margin:"15px",
    minWidth:"400px",
  },
}))(Col);
