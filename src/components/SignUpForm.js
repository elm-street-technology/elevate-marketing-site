import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import withStyles from "elevate-ui/withStyles";
import Input from "elevate-ui/Input";
import classNames from "classnames";

const SignUpForm = ({ classes, className }) => (
  <div className={classNames(classes.root, className)}>
    <Formik
      initialValues={{
        firstname: "",
        lastname: "",
        company: "",
        email: "",
        phone: "",
      }}
      validationSchema={() =>
        Yup.object().shape({
          firstname: Yup.string().required("First name is required"),
          lastname: Yup.string().required("Last name is required"),
          company: Yup.string(),
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
          phone: Yup.string().required("Phone is required"),
        })
      }
      onSubmit={(values, { setSubmitting }) => {
        return fetch("https://relegate.herokuapp.com/marketing/sign-up", {
          method: "POST",
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
          body: JSON.stringify({
            firstname: values.firstname,
            lastname: values.lastname,
            company: values.company,
            email: values.email,
            phone: values.phone,
          }),
        })
          .then((response) => response.json())
          .then((res) => {
            if (res.message === "ok") {
              setSubmitting(false); // success
            } else {
              // bad things happened, we don't know what, show generic error flash
            }
          })
          .catch((err) => {
            // bad things happened, we don't know what, show generic error flash
          });
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
              className={classes.field}
            />
            <Field
              id="lastname"
              name="lastname"
              label="Last Name"
              component={Input}
              className={classes.field}
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
            name="phone"
            label="Phone"
            component={Input}
            className={classes.field}
            type="tel"
          />
          <button
            type="submit"
            className={classes.signUpBtn}
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
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "400px",
    backgroundColor: "#FFF !important",
    margin: "0 auto",
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
  signUpBtn: {
    width: "100%",
    fontSize: "20px",
    lineHeight: "26px",
    fontWeight: "600",
    color: "#FFF",
    backgroundColor: "#40D0A3",
    borderRadius: "6px",
    padding: "12px",
    margin: "14px 0",
  },
}))(SignUpForm);
