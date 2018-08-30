import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import CallToActionForm from "../components/CallToActionForm";

const CallToAction = ({ classes, className }) => (
  <div className={classNames(classes.root, className)}>
    <h1 className={classes.heading}>
      Let us give you the full tour{" "}
      <span role="img" aria-label="hand waving emoji">
        👋
      </span>
    </h1>
    <p className={classes.description}>
      Get a free and in-depth tour from one of our Elevate Agent Success
      coaches.
    </p>
    <CallToActionForm className={classes.form} />
  </div>
);

export default withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#FFF4F0",
    padding: "48px 12px",
  },
  formContainer: {
    display: "flex",
  },
  form: {
    maxWidth: "360px",
    margin: "32px auto 0 auto",
  },
  heading: {
    fontSize: "20px",
    fontWeight: "600",
    lineHeight: "1.6",
    textAlign: "center",

    [theme.breakpoints[900]]: {
      fontSize: "24px",
    },
  },
  description: {
    fontSize: "14px",
    lineHeight: "1.6",
    marginTop: "12px",
    textAlign: "center",

    [theme.breakpoints[900]]: {
      fontSize: "16px",
    },
  },
}))(CallToAction);
