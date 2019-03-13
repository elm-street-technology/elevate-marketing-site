import React, { Component } from "react";
import classNames from "classnames";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Alert from "elevate-ui/Alert";
import CheckboxGroup from "elevate-ui/CheckboxGroup";
import Input from "elevate-ui/Input";
import RadioGroup from "elevate-ui/RadioGroup";
import Typography from "elevate-ui/Typography";
import withStyles from "elevate-ui/withStyles";

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formState: null,
    };
  }

  render() {
    const { formState } = this.state;
    const { classes, className } = this.props;

    if (formState === "success") {
      return (
        <div
          style={{
            maxWidth: "400px",
            textAlign: "center",
            margin: "24px auto",
          }}
        >
          <Alert color="success">
            <Typography type="heading3" gutterBottom>
              We’re here to help!
            </Typography>
            <Typography type="heading6" gutterBottom>
              An Elevate Success Coach will reach out to you asap to start you
              on the path to pure productivity.
            </Typography>
            <Typography type="heading4" gutterTop>
              Can’t wait? Talk NOW at{" "}
              <a href="tel:18883783868" className={classes.link}>
                888.378.3868
              </a>
            </Typography>
          </Alert>
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
      <div className={classNames(classes.root, className)}>
        <Formik
          initialValues={{
            firstname: "",
            lastname: "",
            company: "",
            email: "",
            phone: "",
            role: "",
            roleOther: "",
            interests: [],
            form: "contact_form",
            list: 46483,
            utm_campaign: window ? window.utm_tags.campaign : "",
            utm_source: window ? window.utm_tags.source : "",
            utm_medium: window ? window.utm_tags.medium : "",
            utm_term: window ? window.utm_tags.term : ""
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
              role: Yup.string(),
              roleOther: Yup.string(),
              interests: Yup.array(),
            })
          }
          onSubmit={(values, { setSubmitting }) => {
            const body = {
              ...values,
              roleOther: values.role === "Other" ? values.roleOther : "", // Just in case the user had typed in roleOther then changed their role to something else
            };
            return fetch(
              "https://easyemerge.com/plugins/elevate_form.php",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json; charset=utf-8",
                },
                body: JSON.stringify(body),
              }
            )
              .then((response) => response.json())
              .then((res) => {
                if (res.message === "ok") {
                  this.setState({ formState: "success" });

                  if (window.fbq) {
                    window.fbq("track", "Lead");
                  }
                  if (window.gtag) {
                    window.gtag("event", "conversion", {
                      send_to: "AW-980447970/2_aHCOnsjo8BEOLlwdMD",
                    });
                  }
                } else {
                  this.setState({ formState: "error" });
                }
              })
              .catch((err) => {
                this.setState({ formState: "error" });
              });
          }}
          render={({ values, isSubmitting }) => (
            <Form noValidate>
              <Typography
                type="heading6"
                style={{ textAlign: "center", marginBottom: "32px" }}
              >
                Talk NOW at{" "}
                <a href="tel:18057197394" className={classes.link}>
                  805.719.7394
                </a>{" "}
                or schedule a demo:
              </Typography>
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
              <Field
                id="company"
                name="company"
                label="Affiliation"
                component={Input}
                className={classes.field}
              />
              <Field
                id="role"
                name="role"
                label="I am a(n)"
                component={RadioGroup}
                display="inline"
                items={[
                  {
                    label: "Agent",
                    value: "Agent",
                  },
                  {
                    label: "Team",
                    value: "Team",
                  },
                  {
                    label: "Broker",
                    value: "Broker",
                  },
                  {
                    label: "Other (please specify)*",
                    value: "Other",
                  },
                ]}
                className={classes.field}
              />
              {values.role === "Other" && (
                <Field
                  id="roleOther"
                  name="roleOther"
                  label="Other"
                  component={Input}
                  className={classes.field}
                  autoFocus
                />
              )}
              <Field
                id="interests"
                name="interests"
                label="I am interested in:  (select all that apply)"
                component={CheckboxGroup}
                items={[
                  {
                    label: "Managing my leads from start to close",
                    value: "Managing my leads from start to close",
                  },
                  {
                    label: "Capturing more leads through online marketing",
                    value: "Capturing more leads through online marketing",
                  },
                  {
                    label: "Consolidating my technology into ONE location",
                    value: "Consolidating my technology into ONE location",
                  },
                  {
                    label: "Closing more deals through smart insights",
                    value: "Closing more deals through smart insights",
                  },
                ]}
                className={classes.field}
              />
              <button
                type="submit"
                className={classes.signUpBtn}
                disabled={isSubmitting}
              >
                Please contact me
              </button>
            </Form>
          )}
        />
      </div>
    );
  }
}

export default withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "500px",
    backgroundColor: "#FFF !important",
    margin: "0 auto",
  },
  link: {
    color: "inherit",
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
    backgroundColor: theme.colors.secondary,
    borderRadius: "6px",
    padding: "12px",
    margin: "14px 0",
  },
}))(SignUpForm);
