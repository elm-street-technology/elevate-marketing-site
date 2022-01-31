import React, { Component } from "react";
import classNames from "classnames";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Alert from "elevate-ui/Alert";
import CheckboxGroup from "elevate-ui/CheckboxGroup";
import Input from "elevate-ui/Input";
import RadioGroup from "elevate-ui/RadioGroup";
import Typography from "elevate-ui/Typography";
import ResponsiveVid from "../components/ResponsiveVid"
import withStyles from "elevate-ui/withStyles";
import Datetime from "elevate-ui/Datetime";
import moment from "moment";

class Formchallenge extends Component {
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
                                  
                      
            <Typography type="heading3" gutterBottom style={{color:"#f15623",}}>
              Fantastic!
            </Typography>
            <div style={{margin:"50px"}}>
            <a className={classes.signUpBtn} href="/assets/30daymarketingchallenge.pdf">Download the PDF</a>
            </div>
            <Typography type="heading5" gutterTop style={{fontSize:"18px"}}>
              You can speak to a member of our sales team immediately <br/>by calling  <a href="tel:18333031040" className={classes.link}>833.303.1040</a>.
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
            mls_number: "",
            form: "30daychallenge",
            list: 134162,
            meetingdate: '',
            meetingtime: '',
            role: "",
            interests: '',
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
            var notes = 'Interests: ';
            Object.keys(values).forEach(function (key, index) {
              // key: the name of the object key
              // index: the ordinal position of the key within the object 
              if (key == 'meetingdate') {
                if (typeof values.meetingdate.format === "function") {
                  meeting_request = values.meetingdate.format("YYYY-MM-DD") + "T" + values.meetingtime.replace(" (EDT)", "") + "-04:00"
                }
              }
              if (key == 'roleOther'){
                if(values.roleOther.length > 0){
                  values.role = values.roleOther;
                }
              }
              if (key == 'interestsOther'){
                if(values.interestsOther.length > 0){
                  //notes = values.interests.join(",");
                  notes = notes + "," + values.interestsOther;
                }
              }
              if (key == "interests"){
                if(values.interests.length > 0){
                  notes = notes + "," + values.interests.join(",");
                }
              }
              if (key == "demorequest"){
                if(values.demorequest) {
                  notes = notes + ", Requesting 15 min demo";
                }
              }
            });
            
            const body = {
              ...values,
              notes: notes,
              utm_campaign: (window.utm_tags) ? window.utm_tags.campaign : "",
              utm_source: (window.utm_tags) ? window.utm_tags.source : "",
              utm_medium: (window.utm_tags) ? window.utm_tags.medium : "",
              utm_term: (window.utm_tags) ? window.utm_tags.term : "",
              demo_request_date: meeting_request
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
                    window.ga('send','event','form','form_completed','bright');
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
                


             

              
                </div>
              <div style={{ maxWidth: "600px",marginLeft:"auto",marginRight:"auto"}}>
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
                  <Field
                      id="mls_number"
                      name="mls_number"
                      label="MLS # (optional)"
                      component={Input}
                      className={classes.field}
                  />
                  <div style={{textAlign:"left",fontSize:"14px",lineHeight:"19px"}}>
                  <Field
                id="role"
                name="role"
                label="I am:"
                component={RadioGroup}
                display="inline"
                items={[
                  {
                    label: "An Existing Client",
                    value: "Existing Client",
                  },
                  {
                    label: "An Agent",
                    value: "Agent",
                  },
                  {
                    label: "A Broker/Owner",
                    value: "Broker/Owner",
                  },
                  {
                    label: "Other (please specify)",
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
             <Field id="demorequest" name="demorequest" type="checkbox" value="yes" className={classes.checkfield} style={{marginLeft:"0px",marginRight:"15px"}} />
              <span style={{fontSize:"16px"}}>Schedule a 15-minute demo of Elevate</span>
              
              </div>
              <button
                type="submit"
                className={classes.signUpBtn}
                disabled={isSubmitting}
              >
                Get Download
              </button>
              </div>
              <div style={{fontSize:"11px", paddingBottom:"35px", lineHeight:"16px"}}>
              By submitting this form, you are requesting to be contacted by a member of the Elevate Sales Team at the details provided via text, email or call (may involve automated or pre-recorded means).  You may revoke this consent through any reasonable means.<br/>
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
  headingSmall:{
    fontSize:"20px",
    textTransform:"uppercase",
    fontWeight:"600",
    color:"#777777",
    textAlign:"center",
    padding:"3px"
  },
  headingLarge:{
    fontSize: "33px",
    fontWeight: "700",
    color: "#5bc0b8",
    textAlign:"center",
    padding:"3px",
    lineHeight:"38px"
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
    width: "60%",
    fontSize: "18px",
    lineHeight: "26px",
    fontWeight: "600",
    color: "#FFF",
    backgroundColor: "#5bc0b8",
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

  fullWidthVid:{
    width: "100%",
    marginLeft:"auto",
    marginRight:"auto",
    [theme.breakpoints[900]]: {
      width: "75%"
  },
},
}))(Formchallenge);
