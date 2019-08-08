import React, { Component } from "react";
import classNames from "classnames";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Alert from "elevate-ui/Alert";
import Input from "elevate-ui/Input";
import Typography from "elevate-ui/Typography";
import withStyles from "elevate-ui/withStyles";

class FormRefer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formState: null,
      firstName: '',
    };
  }

  render() {
    const { formState } = this.state;
    const { classes, className } = this.props;

    if (formState === "success") {
      return (
        <div
          style={{
            maxWidth: "600px",
            textAlign: "center",
            margin: "24px auto",
          }}
        >
          <div >
                                  
                      
            <Typography type="heading3" gutterBottom>
                Thank YOU, {this.state.firstName}
            </Typography>
            <Typography type="heading5" gutterTop>
                We will reach out to your friends &amp; colleagues and let you know when they join Elevate. Feel free to return to tryelevate.com/refer any time you have others to invite..
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
            form: "refer_form",
          }}
          validationSchema={() =>
            Yup.object().shape({
              firstname: Yup.string().required("First name is required"),
              lastname: Yup.string().required("Last name is required"),
              email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
            })
          }
          onSubmit={(values, { setSubmitting }) => {
            const body = {
              ...values,
              utm_campaign: (window.utm_tags) ? window.utm_tags.campaign : "",
              utm_source: (window.utm_tags) ? window.utm_tags.source : "",
              utm_medium: (window.utm_tags) ? window.utm_tags.medium : "",
              utm_term: (window.utm_tags) ? window.utm_tags.term : "",
              notes: (values.demorequest == true) ? "Requested demo" : ""
            };
            return fetch(
              "https://easyemerge.com/plugins/elevate_form2.php",
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
                  this.setState({ firstName: values.firstname });

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
              <div style={{ maxWidth: "800px", marginLeft: "auto", marginRight: "auto" }}>
              <div className={classes.topRow}>
                <Field
                  id="firstname"
                  name="firstname"
                  label="YOUR First Name"
                  component={Input}
                  className={classes.field}
                />
                <Field
                  id="lastname"
                  name="lastname"
                  label="YOUR Last Name"
                  component={Input}
                  className={classes.field}
                />
              </div>
              <Field
                id="email"
                name="email"
                label="YOUR Email"
                component={Input}
                className={classes.field}
              />
              
              <div className={classes.topRow}>
                <div className={classes.friendNumber}>1.</div>
                <Field
                  id="firstname1"
                  name="firstname1"
                  label="First Name"
                  component={Input}
                  className={classes.smallField}
                />
                <Field
                  id="lastname1"
                  name="lastname1"
                  label="Last Name"
                  component={Input}
                  className={classes.smallField}
                />
                <Field
                id="email1"
                name="email1"
                label="Email"
                component={Input}
                className={classes.smallField}
                />
                <Field
                    id="phone1"
                    name="phone1"
                    label="Telephone"
                    component={Input}
                    className={classes.smallField}
                />
              </div>
              <div className={classes.topRow}>
                <div className={classes.friendNumber}>2.</div>
                <Field
                  id="firstname2"
                  name="firstname2"
                  label="First Name"
                  component={Input}
                  className={classes.smallField}
                />
                <Field
                  id="lastname2"
                  name="lastname2"
                  label="Last Name"
                  component={Input}
                  className={classes.smallField}
                />
                <Field
                id="email2"
                name="email2"
                label="Email"
                component={Input}
                className={classes.smallField}
                />
                <Field
                    id="phone2"
                    name="phone2"
                    label="Telephone"
                    component={Input}
                    className={classes.smallField}
                />
              </div>
              <div className={classes.topRow}>
                <div className={classes.friendNumber}>3.</div>
                <Field
                  id="firstname3"
                  name="firstname3"
                  label="First Name"
                  component={Input}
                  className={classes.smallField}
                />
                <Field
                  id="lastname3"
                  name="lastname3"
                  label="Last Name"
                  component={Input}
                  className={classes.smallField}
                />
                <Field
                id="email3"
                name="email3"
                label="Email"
                component={Input}
                className={classes.smallField}
                />
                <Field
                    id="phone3"
                    name="phone3"
                    label="Telephone"
                    component={Input}
                    className={classes.smallField}
                />
              </div>
              <div className={classes.topRow}>
                <div className={classes.friendNumber}>4.</div>
                <Field
                  id="firstname4"
                  name="firstname4"
                  label="First Name"
                  component={Input}
                  className={classes.smallField}
                />
                <Field
                  id="lastname4"
                  name="lastname4"
                  label="Last Name"
                  component={Input}
                  className={classes.smallField}
                />
                <Field
                id="email4"
                name="email4"
                label="Email"
                component={Input}
                className={classes.smallField}
                />
                <Field
                    id="phone4"
                    name="phone4"
                    label="Telephone"
                    component={Input}
                    className={classes.smallField}
                />
              </div>
              <div className={classes.topRow}>
                <div className={classes.friendNumber}>5.</div>
                <Field
                  id="firstname5"
                  name="firstname5"
                  label="First Name"
                  component={Input}
                  className={classes.smallField}
                />
                <Field
                  id="lastname5"
                  name="lastname5"
                  label="Last Name"
                  component={Input}
                  className={classes.smallField}
                />
                <Field
                id="email5"
                name="email5"
                label="Email"
                component={Input}
                className={classes.smallField}
                />
                <Field
                    id="phone5"
                    name="phone5"
                    label="Telephone"
                    component={Input}
                    className={classes.smallField}
                />
              </div>

              <button
                type="submit"
                className={classes.signUpBtn}
                disabled={isSubmitting}
              >
                Refer My Friends NOW
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
    maxWidth: "800px",
    margin: "0 auto",
    textAlign: "center"
  },
  link: {
    color: "inherit",
  },
  field: {
    borderRadius: "6px",
    border: "1px solid #ECECEC",
    height: "50px",
    fontWeight: "600",
  },
  smallField: {
    borderRadius: "4px",
    border: "1px solid #ECECEC",
    height: "30px",
    fontWeight: "600",
    fontSize:"12px",
  },
  friendNumber: {
    paddingTop: "34px",
    fontWeight: "700",
  },
  checkfield:{
    width:"20px",
    height:"20px",
    position: "relative",
    top: "4px",
    marginLeft: "10px"
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
    marginTop: "30px",
    marginBottom: "30px",
    textDecoration: "none",

  },
}))(FormRefer);
