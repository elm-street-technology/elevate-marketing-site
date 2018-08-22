import React from "react";
import { Formik, Form, Field } from "formik";
import Yup from "yup";
import withStyles from "elevate-ui/withStyles";
import Input from "elevate-ui/Input";
import classNames from "classnames";

type Props = {
  classes: Object,
  className: string,
};

const SignUpForm = ({ classes, className }: Props) => (
  <div className={classNames(classes.root, className)}>
    <Formik
      initialValues={{ firstname: "", lastname: "", email: "", password: "" }}
      validationSchema={() =>
        Yup.object().shape({
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
          password: Yup.string().required("Password is required"),
        })
      }
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 1000);
      }}
      render={({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <Form noValidate style={{ maxWidth: "420px" }}>
          <div className={classes.topRow}>
            <Field
              id="firstname"
              name="firstname"
              label="First Name"
              component={Input}
              className={classes.name}
            />
            <Field
              id="lastname"
              name="lastname"
              label="Last Name"
              component={Input}
              className={classes.name}
            />
          </div>
          <Field
            id="company"
            name="company"
            label="Company"
            component={Input}
            className={classes.field}
          />
          <Field
            id="email"
            name="email"
            label="Email"
            component={Input}
            className={classes.field}
          />
          <Field
            id="phone"
            label="Phone"
            type="number"
            component={Input}
            className={classes.field}
          />
          <button
            className={classes.signUpBtn}
            type="submit"
            disabled={isSubmitting}
          >
            Request a demo
          </button>
        </Form>
      )}
    />
  </div>
);

export default withStyles((theme) => ({
  "@global body": {
    backgroundColor: "#fff !important",
    a: {
      textDecoration: "none",
      "&:hover": {
        textDecoration: "none !important",
      },
    },
  },
  root: {
    display: "flex",
    flexDirection: "column",
    margin: "0 auto",
    maxWidth: "400px",
    backgroundColor: "#FFF !important",
    padding: "0px 12px",
  },
  field: {
    borderRadius: "6px",
    border: "2px solid #ECECEC",
    height: "50px",
    fontWeight: "600",
  },
  topRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",

    "& > * + *": {
      marginLeft: "12px",
    },
  },
  name: {
    height: "50px",
    borderRadius: "6px",
    border: "2px solid #ECECEC",
  },
  signUpBtn: {
    width: "100%",
    height: "64px",
    margin: "14px 0",
    fontSize: "24px",
    fontWeight: "600",
    color: "#FFF",
    backgroundColor: "#40D0A3",
    borderRadius: "6px",
  },
}))(SignUpForm);
