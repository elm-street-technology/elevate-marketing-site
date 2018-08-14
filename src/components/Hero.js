import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";

const Hero = (props) => (
  <div className={classNames(props.classes.root, props.className)}>
    <div>{props.title}</div>
  </div>
);

export default withStyles((theme) => ({
  root: {
    fontSize: "1.25rem",
    fontWeight: "800",
    lineHeight: "28px",
    color: "#2E2E35",
    marginBottom: "10px",
  },
}))(Hero);
