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

class Form6Emails extends Component {
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
              Thank you! Click on the link below to download a free copy of "6 Emails Every Real Estate Agent Should Be Sending" now.
            </Typography>
            <Typography type="heading6" gutterBottom>
              Download Now
            </Typography>
            <Typography type="heading4" gutterTop>
              One of our Marketing Success Coaches will be contacting you to see how we can help you take your marketing to the next level! 
                If you'd like to speak with someone now, feel free to call us directly at 
              <a href="tel:18449720260" className={classes.link}>844.972.0260</a>.
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
              
              <button
                type="submit"
                className={classes.signUpBtn}
                disabled={isSubmitting}
              >
                Download
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
}))(Form6Emails);
