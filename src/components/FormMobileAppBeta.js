import React, { Component } from "react";
import classNames from "classnames";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Alert from "elevate-ui/Alert";
import Input from "elevate-ui/Input";
import Typography from "elevate-ui/Typography";
import withStyles from "elevate-ui/withStyles";
import moment from "moment";

class FormMobileAppBeta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formState: null,
    };
  }

  render() {
    const { formState } = this.state;
    const { classes, className } = this.props;

    var valid = function(current) {
      return current.day() !== 0 && current.day() !== 6;
    };

    var renderDay = function(props, currentDate, selectedDate) {
      if (currentDate.month() == moment().month()) {
        if (currentDate.date() < moment().date()) {
          if (props.className == "rdtDay") {
            props.className = "rdtDay rdtDisabled";
          }
        }
      }
      if (currentDate.month() < moment().month()) {
        props.className = "rdtDay rdtDisabled";
      }

      return <td {...props}>{currentDate.date()}</td>;
    };

    if (formState === "success") {
      return (
        <div
          style={{
            maxWidth: "600px",
            textAlign: "center",
            margin: "24px auto",
          }}
        >
          <div>
            <Typography
              type="heading3"
              gutterBottom
              style={{ color: "#ffffff" }}
            >
              Fantastic!
            </Typography>

            <Typography type="heading5" gutterTop style={{ fontSize: "18px" }}>
              Thank for your interest!<br/>
              We will be reaching out to you soon with more information and the download link to the app.
              {/* 
              You can speak to a member of our support team immediately <br />
              by calling{" "}
              <a href="tel:18447920260" className={classes.link}>
               508.885.2040
              </a>
              .*/}
            </Typography>
          </div>
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
            email: "",
            phone: "",
            mls_number: "",
            form: "form_mobile_app_beta",
            list: this.props.listid,
            subject: this.props.subject,
            webhook: this.props.webhook,
            lead_source: this.props.leadsource,
          }}
          validationSchema={() =>
            Yup.object().shape({
              firstname: Yup.string().required("First name is required"),
              lastname: Yup.string().required("Last name is required"),
              email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
              phone: Yup.string().required("Phone is required"),
            })
          }
          onSubmit={(values, { setSubmitting }) => {
            //if (values.meetingdate != undefined) {
            const body = {
              ...values,
              utm_campaign: window.utm_tags ? window.utm_tags.campaign : "",
              utm_source: window.utm_tags ? window.utm_tags.source : "",
              utm_medium: window.utm_tags ? window.utm_tags.medium : "",
              utm_term: window.utm_tags ? window.utm_tags.term : "",
            };
            return fetch("https://easyemerge.com/plugins/elevate_form.php", {
              method: "POST",
              headers: {
                "Content-Type": "application/json; charset=utf-8",
              },
              body: JSON.stringify(body),
            })
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
                  if (window.ga) {
                    window.ga(
                      "send",
                      "event",
                      "form",
                      "form_completed",
                      "mobile_app_beta"
                    );
                  }
                } else {
                  this.setState({ formState: "error" });
                }
              })
              .catch((err) => {
                this.setState({ formState: "error" });
              });
          }}
          render={({ values, isSubmitting, handleBlur, handleChange }) => (
            <Form noValidate>
              <div style={{ marginBottom: "30px" }}></div>
              <div
                style={{
                  maxWidth: "600px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <div className={classes.topRow}>
                  <Field
                    id="firstname"
                    name="firstname"
                    placeholder="First Name"
                    component={Input}
                    className={classes.field}
                  />
                  <Field
                    id="lastname"
                    name="lastname"
                    placeholder="Last Name"
                    component={Input}
                    className={classes.field}
                  />
                </div>
                <div className={classes.topRow}>
                  <Field
                    id="email"
                    name="email"
                    placeholder="Email"
                    component={Input}
                    className={classes.field}
                  />
                </div>
                <div className={classes.topRow}>
                  <Field
                    id="phone"
                    name="phone"
                    placeholder="Phone"
                    component={Input}
                    className={classes.field}
                    type="tel"
                  />
                </div>
                <button
                  type="submit"
                  className={classes.signUpBtn}
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </div>
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
    maxWidth: "700px",
  },
  link: {
    color: "inherit",
  },
  field: {
    borderRadius: "6px",
    border: "2px solid #ECECEC",
    height: "50px",
    fontWeight: "600",
    textAlign: "left",
  },
  topRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",

    "& > * + *": {
      marginLeft: "12px",
    },
  },
  headingSmall: {
    fontSize: "20px",
    textTransform: "uppercase",
    fontWeight: "600",
    color: "#ffffff",
    textAlign: "center",
    padding: "3px",
  },
  headingLarge: {
    fontSize: "33px",
    fontWeight: "700",
    color: "#5bc0b8",
    textAlign: "center",
    padding: "3px",
    lineHeight: "38px",
  },
  headingText: {
    color: "#fff",
    textAlign: "center",
    padding: "3px",
    lineHeight: "1.4em",
  },
  checkfield: {
    width: "20px",
    height: "20px",
    position: "relative",
    top: "4px",
    marginLeft: "10px",
  },
  signUpBtn: {
    width: "60%",
    fontSize: "18px",
    lineHeight: "26px",
    fontWeight: "600",
    color: "#FFF",
    backgroundColor: "#5A5B5C",
    borderRadius: "6px",
    padding: "12px",
    marginTop: "20px",
    marginBottom: "30px",
    textDecoration: "none",
  },
  fullWidthVid: {
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints[900]]: {
      width: "75%",
    },
  },
}))(FormMobileAppBeta);
