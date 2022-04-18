import React, { Component } from "react";
import classNames from "classnames";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Alert from "elevate-ui/Alert";
import CheckboxGroup from "elevate-ui/CheckboxGroup";
import Input from "elevate-ui/Input";
import Typography from "elevate-ui/Typography";
import withStyles from "elevate-ui/withStyles";

class FormHostEvent extends Component {
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
            textAlign: "center",
            margin: "24px auto",
          }}
        >
          <Alert color="success">
            <Typography type="heading3" gutterBottom>
            Thank YOU!
            </Typography>
            <div style={{margin:"50px"}}>
            <a className={classes.signUpBtn} href="/assets/est_academy_educational_series.pdf">Download the PDF</a>
            </div>
            <Typography type="heading5" gutterTop>
            A member of the Elevate Educational Field Team will be in touch shortly.
            <br/>
            If you'd like to speak to someone immediately, please call{" "}
              <a href="tel:18448128914" className={classes.link}>
                844.812.8914
              </a>.
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
            interests: [],
            interestsOther: '',
            otherDetails: '',
            city: '',
            state: '',
            form: "hostevent_form",
            list: 0,
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
              interestsOther: Yup.string(),
              interests: Yup.array(),
              otherDetails: Yup.string(),
            })
          }
          onSubmit={(values, { setSubmitting }) => {
            const body = {
              ...values,
              interestStr: values.interests.join(",") + ", Deep Dive: " + values.interestsOther+ ", Other details: "+values.otherDetails,
              utm_campaign: (window.utm_tags) ? window.utm_tags.campaign : "",
              utm_source: (window.utm_tags) ? window.utm_tags.source : "",
              utm_medium: (window.utm_tags) ? window.utm_tags.medium : "",
              utm_term: (window.utm_tags) ? window.utm_tags.term : ""
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
                  if (window.ga) {
                    window.ga('send','event','form','form_completed','host-event');
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
              <Typography
                type="heading6"
                style={{ textAlign: "center", marginBottom: "32px", color: "#55c3ba" }}
              >
                <span style={{fontSize:"24px",fontWeight:"700"}}>Interested in hosting an<br />
                Elevate educational event?</span><br />
                We want to connect with you.
                
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
                label="Affiliation (optional)"
                component={Input}
                className={classes.field}
              />
              <div className={classes.topRow}>
                <Field
                  id="city"
                  name="city"
                  label="City"
                  component={Input}
                  className={classes.field}
                />
                <Field
                  id="state"
                  name="state"
                  label="State"
                  component={Input}
                  className={classes.field}
                />
              </div>
              <div style={{marginLeft:"auto",marginRight:"auto",width:"340px",textAlign:"center"}}>
              <Field
                id="interests"
                name="interests"
                label="I am interested in hosting:"
                component={CheckboxGroup}
                items={[
                  {
                    label: "Social Media Boot Camp",
                    value: "Social Media Boot Camp",
                  },
                  {
                    label: "Lead Generation Boot Camp",
                    value: "Lead Generation Boot Camp",
                  },
                  {
                    label: "Listings Boot Camp",
                    value: "Listings Boot Camp",
                  },
                  {
                    label: "Referrals Boot Camp",
                    value: "Referrals Boot Camp",
                  },
                  {
                    label: " Broker-Only Mastermind",
                    value: " Broker-Only Mastermind",
                  },
                  {
                    label: "Custom Deep Dive (please specify)",
                    value: "Custom Deep Dive (please specify)",
                  },
                ]}
                className={classes.field}
              />
              {values.interests.includes("Custom Deep Dive (please specify)") && (
                <Field
                  id="interestsOther"
                  name="interestsOther"
                  label="Custom Deep Dive"
                  component={Input}
                  className={classes.field}
                  autoFocus
                />
              )}
              </div>
              <div className={classes.selectlabel} style={{display:"block"}}>
                  <div >
                    Anything else we shoud know?<br/>
                    </div>
                   <div>
                    <Field id="otherDetails" name="otherDetails" component="textarea" className={classes.field} style={{width:"100%",height:"100px"}}/>
                    </div>
              </div>
              <div style={{textAlign:"center"}}>
                <button
                    type="submit"
                    className={classes.signUpBtn}
                    disabled={isSubmitting}
                >
                    Submit
                </button>
              </div>
              {/*
              <div style={{ fontSize: "11px",textAlign: "center" }}>
                By submitting this form, you are requesting to be contacted by a member of the Elevate Sales Team.<br />
                Existing subscribers seeking support, please visit the <a href="https://elmstreettechnology.zendesk.com/hc/en-us">Elevate Help Center</a>.
              </div>
              */}
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
    maxWidth: "600px",
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
    width: "60%",
    fontSize: "20px",
    lineHeight: "26px",
    fontWeight: "600",
    color: "#FFF",
    backgroundColor: theme.colors.secondary,
    borderRadius: "6px",
    padding: "12px",
    margin: "14px 0",
  },
  selectfield: {
    borderRadius: "6px",
    border: "2px solid #ECECEC",
    height: "40px"
  },
  selectlabel: {
    width: "100%",
    color: "#888f96",
    display: "flex",
    fontSize: "14px",
    alignItems: "center",
    lineHeight: "18px",
    fontWeight: "700",
    marginBottom: "4px",
  },
}))(FormHostEvent);
