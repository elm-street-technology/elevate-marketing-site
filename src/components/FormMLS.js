import React, { Component } from "react";
import classNames from "classnames";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Alert from "elevate-ui/Alert";
import Input from "elevate-ui/Input";
import Typography from "elevate-ui/Typography";
import withStyles from "elevate-ui/withStyles";
import moment from "moment";

class FormMLS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formState: null,
    };
  }

  render() {
    const { formState } = this.state;
    const { classes, className } = this.props;

    var valid = function (current) {
      return current.day() !== 0 && current.day() !== 6;
    };

    var renderDay = function (props, currentDate, selectedDate) {

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
          <div >
                                  
                      
            <Typography type="heading3" gutterBottom>
            Thank YOU
            </Typography>
            <Typography type="heading5" gutterTop>
                We appreciate your interest in Elevate &amp; will follow up with you after we've had an opportunity to explore the information you've provided.
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
            company: "",
            email: "",
            phone: "",
            title: '',
            mls_website: "",
            mls_state: "",
            form: "mls_form",
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
              mls_number: Yup.string()
            })
          }
          onSubmit={(values, { setSubmitting }) => {
            //if (values.meetingdate != undefined) {
            var meeting_request = '';
            Object.keys(values).forEach(function (key, index) {
              // key: the name of the object key
              // index: the ordinal position of the key within the object 
              if (key == 'meetingdate') {
                if (typeof values.meetingdate.format === "function") {
                  meeting_request = values.meetingdate.format("YYYY-MM-DD") + "T" + values.meetingtime.replace(" (EDT)", "") + "-04:00"
                }
              }
            });
            const body = {
              ...values,
              utm_campaign: (window.utm_tags) ? window.utm_tags.campaign : "",
              utm_source: (window.utm_tags) ? window.utm_tags.source : "",
              utm_medium: (window.utm_tags) ? window.utm_tags.medium : "",
              utm_term: (window.utm_tags) ? window.utm_tags.term : "",
              description: values.mls_state+", "+values.mls_website
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
                    window.ga('send','event','form','form_completed','dms');
                  }
                } else {
                  this.setState({ formState: "error" });
                }
              })
              .catch((err) => {
                this.setState({ formState: "error" });
              });
          }}
          render={({ values, isSubmitting,handleBlur, handleChange }) => (
            <Form noValidate>
              <div style={{marginBottom:"30px"}}>
                <div className={classes.headingLarge}>Interested in joining our MLS partner network?</div>
                </div>
              <div style={{ maxWidth: "500px",marginLeft:"auto",marginRight:"auto"}}>
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
                id="title"
                name="title"
                label="Title"
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
              <div className={classes.topRow}>
              <Field
                id="company"
                name="company"
                label="MLS Name"
                component={Input}
                className={classes.field}
              />
               <Field
                    id="mls_state"
                    name="mls_state"
                    label="State"
                    component={Input}
                    className={classes.field}
                />
              </div>
              
                <Field
                    id="mls_website"
                    name="mls_website"
                    label="MLS Website"
                    component={Input}
                    className={classes.field}
                />
               
                
              <button
                type="submit"
                className={classes.signUpBtn}
                disabled={isSubmitting}
              >
                Submit
              </button>
              </div>
              <div style={{fontSize:"11px"}}>
                By submitting this form, you are requesting to be contacted by a member of the Elevate Sales Team.<br/>
                Existing subscribers seeking support, please visit the <a href="https://elmstreettechnology.zendesk.com/hc/en-us">Elevate Help Center</a>.
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
    margin: "0 auto",
    textAlign: "center"
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
  headingSmall:{
    fontSize:"20px",
    textTransform:"uppercase",
    fontWeight:"600",
    color:"#777777",
    textAlign:"center",
    padding:"3px"
  },
  headingLarge:{
    fontSize: "40px",
    textTransform: "uppercase",
    fontWeight: "700",
    color: "#55c3ba",
    textAlign:"center",
    padding:"3px"
  },
  headingText:{
    color: "#777777",
    textAlign: "center",
    padding: "3px",
    lineHeight: "1.4em"
  },
  checkfield: {
    width: "20px",
    height: "20px",
    position: "relative",
    top: "4px",
    marginLeft: "10px"
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
}))(FormMLS);