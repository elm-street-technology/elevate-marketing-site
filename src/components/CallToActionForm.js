import React from "react";
import withStyles from "elevate-ui/withStyles";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import classNames from "classnames";
import Alert from "elevate-ui/Alert";

class CTAForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formState: null,
    };
  }

  render() {
    const formState = this.state.formState;
    const { classes, className } = this.props;
    if (formState === "success") {
      return (
        <div style={{ maxWidth: "400px", margin: "24px auto" }}>
          <Alert color="success">We'll be in touch shortly!</Alert>
        </div>
      );
    } else if (formState === "error") {
      return (
        <div style={{ maxWidth: "400px", margin: "24px auto" }}>
          <Alert color="error">An error occurred.</Alert>
        </div>
      );
    }
    return (
      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={() =>
          Yup.object().shape({
            email: Yup.string()
              .email("Invalid email address")
              .required("Email is required"),
          })
        }
        onSubmit={(values, { setSubmitting }) => {
          return fetch(
            "https://relegate.herokuapp.com/marketing/request-a-demo",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json; charset=utf-8",
              },
              body: JSON.stringify({
                email: values.email,
              }),
            }
          )
            .then((response) => response.json())
            .then((res) => {
              if (res.message === "ok") {
                this.setState({ formState: "success" });
              } else {
                this.setState({ formState: "error" });
              }
            })
            .catch((err) => {
              this.setState({ formState: "error" });
            });
        }}
        render={({ isSubmitting }) => (
          <Form noValidate className={classNames(classes.root, className)}>
            <Field id="email" name="email" className={classes.input} />
            <button
              type="submit"
              className={classes.button}
              disabled={isSubmitting}
            >
              Request a demo
            </button>
          </Form>
        )}
      />
    );
  }
}

export default withStyles((theme) => ({
  root: {
    position: "relative",
    display: "flex",
    alignItems: "flex-start",
    width: "100%",
    margin: "0",
    height: "48px",
    borderRadius: "4px",
    overflow: "hidden",
  },
  input: {
    width: "100%",
    height: "48px",
    margin: "0",
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
}))(CTAForm);
