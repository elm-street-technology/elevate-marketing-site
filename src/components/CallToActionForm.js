import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";

const Form = ({ props, children, classes, className }) => {
  return (
    <form className={classNames(classes.root, className)}>
      <input
        className={classes.input}
        placeholder="Enter your email"
        type="text"
      />
      <button className={classes.button}>Request a demo</button>
    </form>
  );
};

export default withStyles((theme) => ({
  root: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "48px",
    borderRadius: "4px",
    overflow: "hidden",
  },
  input: {
    width: "100%",
    height: "48px",
    padding: "18px 0 18px 15px",
    border: "1px solid rgba(100, 97, 110, .36)",
    borderRight: "0",
    color: "#5A5B5C",
    fontSize: "14px",
    fontFamily: "inherit",
    fontWeight: "600",
    borderTopLeftRadius: "4px",
    borderBottomLeftRadius: "4px",
  },
  button: {
    flexShrink: "0",
    fontSize: "13px",
    fontWeight: "700",
    height: "48px",
    backgroundColor: "#F15953",
    color: "#fff",
    padding: "0px 10px",
    margin: "0",
    borderTopRightRadius: "4px",
    borderBottomRightRadius: "4px",
    textAlign: "center",
    cursor: "pointer",
  },
}))(Form);
