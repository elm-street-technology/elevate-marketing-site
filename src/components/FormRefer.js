import React, { Component } from "react";
import classNames from "classnames";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Alert from "elevate-ui/Alert";
import Input from "elevate-ui/Input";
import Header from "../images/refer_ty.jpg"
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

    var errorMessage = '';
    var showError = false;

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
                                  
          <div style={{PaddingBottom:"13px"}}>
                    <img src={Header} style={{width:"100%"}} />
                </div><br />     
            <Typography type="heading3" gutterBottom>
                AWESOME! YOU ARE A GOOD FRIEND!
            </Typography>
            <Typography type="heading5" gutterTop>
            Your referrals will receive an email letting them know that you referred them to Elevate. 
            When any of them subscribe to Elevate, we’ll let you know and provide the credit to your account.
            <br /><br />
            You can come back to this form again and again to refer MORE friends!  We hope you do!
            </Typography>
          </div>
        </div>
      );
    } else if (formState === "error") {
      showError = true;
      errorMessage = 'Please make sure each referral has at least an email or phone number.';
      console.log(formState);
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

            var that = this;
            var referError = false;

            Object.keys(values).forEach(function (key, index) {
              // key: the name of the object key
              // index: the ordinal position of the key within the object 
              if(key == 'firstname1'){
                if (values.lastname1 === undefined || (values.email1 === undefined && values.phone1 === undefined)) {
                  referError = true;
                }
              }
              if(key == 'firstname2'){
                if (values.lastname2 === undefined || (values.email2 === undefined && values.phone2 === undefined)) {
                  referError = true;
                }
              }
              if(key == 'firstname3'){
                if (values.lastname3 === undefined || (values.email3 === undefined && values.phone3 === undefined)) {
                  referError = true;
                }
              }
              if(key == 'firstname4'){
                if (values.lastname4 === undefined || (values.email4 === undefined && values.phone4 === undefined)) {
                  referError = true;
                }
              }
              if(key == 'firstname5'){
                if (values.lastname5 === undefined || (values.email5 === undefined && values.phone5 === undefined)) {
                  referError = true;
                }
              }
            });

            if(referError){
              that.setState({ formState: "error" });
              setSubmitting(false);
              return false;
            }

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
                  this.setState({ firstName: values.firstname });

                  if (window.fbq) {
                    window.fbq("track", "Lead");
                  }
                  if (window.gtag) {
                    window.gtag("event", "conversion", {
                      send_to: "AW-980447970/2_aHCOnsjo8BEOLlwdMD",
                    });
                  }
                  if (window.ga) {
                    window.ga('send','event','form','form_completed','refer');
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
                {showError && (
                <div style={{color:"#7a2892",fontWeight:"bold",marginBottom:"20px"}}>
                  {errorMessage}
                </div>
                )}
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
                Refer My Friends!
              </button>
              <div style={{fontSize:"12px", color:"#5A5B5C"}}>
              *Referred party must sign up for a DMS-level account or higher.
              </div>
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
    width: "55%",
    fontSize: "18px",
    lineHeight: "26px",
    fontWeight: "700",
    backgroundColor: "#f6fb18",
    color: "#8649cf",
    borderRadius: "6px",
    padding: "12px",
    marginTop: "30px",
    marginBottom: "30px",
    textDecoration: "none",
    marginLeft:"auto",
    marginRight:"auto"
  },
}))(FormRefer);
