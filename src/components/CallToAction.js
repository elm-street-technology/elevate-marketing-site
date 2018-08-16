import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";

const CallToAction = (props) => (
  <div className={classNames(props.classes.root, props.className)}>
    <div className={props.classes.contentBlock}>
      <h1>Let us give you the full tour 👋</h1>
      <p>
        Get a free and in-depth tour from one of our Elevate Agent Success
        coaches.
      </p>
      <form className={props.classes.form}>
        <input placeholder="Enter your email" type="text" />
        <button>Request a demo</button>
      </form>
    </div>
  </div>
);

export default withStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#FFF4F0",
    height: "300px",
    padding: "0 18px",
  },
  contentBlock: {
    textAlign: "center",
    marginTop: "70px",
    lineHeight: "1.6",

    "& h1": {
      fontSize: "20px",

      [theme.breakpoints[900]]: {
        fontSize: "24px",
      },
    },

    "& p": {
      marginTop: "12px",
      fontSize: "14px",

      [theme.breakpoints[900]]: {
        fontSize: "16px",
        marginTop: "26px",
      },
    },
  },
  form: {
    boxShadow: "0px 4px 8px rgba(0,0,0,.1)",
    overflow: "hidden",
    height: "48px",
    maxWidth: "400px",
    margin: "0 auto",
    position: "relative",
    marginTop: "28px",
    border: "none",
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
      padding: "0 10px",
      margin: "0",
      borderTopRightRadius: "4px",
      borderBottomRightRadius: "4px",
      width: "130px",
      textAlign: "center",
      cursor: "pointer",
    },
  },
}))(CallToAction);
