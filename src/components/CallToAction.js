import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import CallToActionForm from "../components/CallToActionForm";

const CallToAction = ({ classes, className }) => (
  <div className={classNames(classes.root, className)}>
    <h1 className={classes.heading}>Take a tour</h1>
    <p className={classes.description}>
      Explore pure productivity with an Elevate Success Coach today
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
    backgroundColor: "#FFF",
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
    color: "#5A5B5C",
    fontSize: "24px",
    fontWeight: "600",
    lineHeight: "1.6",
    textAlign: "center",

    [theme.breakpoints[900]]: {
      fontSize: "28px",
    },
  },
  description: {
    color: "#5A5B5C",
    fontSize: "16px",
    lineHeight: "1.6",
    marginTop: "12px",
    textAlign: "center",

    [theme.breakpoints[900]]: {
      fontSize: "16px",
    },
  },
}))(CallToAction);
