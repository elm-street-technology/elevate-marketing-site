import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";

const Form = ({ props, children, classes, className }) => {
  return (
    <div className={classNames(classes.root, className)}>
      <form className={classes.form}>
        <input placeholder="Enter your email" type="text" />
        <button>Request a demo</button>
      </form>
    </div>
  );
};

export default withStyles((theme) => ({
  root: {
    height: "300px",
  },

  form: {
    border: "1px solid rgba(100, 97, 110, .36)",
    overflow: "hidden",
    height: "48px",
    maxWidth: "400px",
    position: "relative",
    borderRadius: "4px",

    "& input": {
      width: "100%",
      borderRadius: "4px",
      height: "48px",
      padding: "18px 0 18px 15px",
      outline: "none",
      border: "none",
      color: "#64616E",
      fontSize: "14px",
      fontFamily: "Open Sans, sans-serif",
      fontWeight: "600",
    },

    "& button": {
      position: "absolute",
      fontSize: "13px",
      fontWeight: "700",
      zIndex: "999",
      right: "0px",
      top: "0px",
      height: "48px",
      border: "none",
      backgroundColor: "#E46457",
      color: "white",
      padding: "0px 10px",
      margin: "0",
      borderTopRightRadius: "4px",
      borderBottomRightRadius: "4px",
      width: "130px",
      textAlign: "center",
      cursor: "pointer",
    },
  },
}))(Form);
