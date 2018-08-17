import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";

const Checkmark = (props) => (
  <svg
    className={classNames(props.classes.root, props.className)}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
  </svg>
);

export default withStyles((theme) => ({}))(Checkmark);
