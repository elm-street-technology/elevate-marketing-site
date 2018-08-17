import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import Form from "../components/Form";

const CallToAction = (props) => (
  <div className={classNames(props.classes.root, props.className)}>
    <div className={props.classes.contentBlock}>
      <h1>Let us give you the full tour 👋</h1>
      <p>
        Get a free and in-depth tour from one of our Elevate Agent Success
        coaches.
      </p>
    </div>
    <div className={props.classes.formContainer}>
      <Form className={props.classes.form} />
    </div>
  </div>
);

export default withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#FFF4F0",
    height: "300px",
    padding: "0 18px",
  },
  formContainer: {
    display: "flex",
    margin: "0 auto",
  },
  form: {
    marginTop: "28px",
    width: "350px",
    padding: "0 18px",

    [theme.breakpoints[600]]: {
      width: "400px",
    },
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
}))(CallToAction);
