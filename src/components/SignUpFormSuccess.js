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
import Datetime from "elevate-ui/Datetime";
import moment from "moment";

class SignUpFormSuccess extends Component {
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
            maxWidth: "400px",
            textAlign: "center",
            margin: "24px auto",
          }}
        >
          <Alert color="success">
            <Typography type="heading3" gutterBottom>
              AWESOME.
            </Typography>
            <Typography type="heading6" gutterBottom>
              An Elevate sales representative will be in touch with you shortly.
            </Typography>
            <Typography type="heading4" gutterTop>
              If you'd like to speak to a sales representative NOW, please call{" "}
              <a href="tel:18447920260" className={classes.link}>
                844.792.0260
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
            role: "",
            roleOther: "",
            interests: [],
            form: "success_story",
            list: 89309,
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
              roleOther: values.role === "Other" ? values.roleOther : "", // Just in case the user had typed in roleOther then changed their role to something else
              interestStr: values.interests.join(",") + ", Interested Markets: " + values.market1 + ", " + values.market2 + "," + values.market3,
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
                    window.ga('send','event','form','form_completed','get-started');
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
                style={{ textAlign: "center", marginBottom: "32px", color: "#888f96" }}
              >
                Schedule your personal walk-through or call <a href="tel:18447920260" className={classes.link}>
                844.792.0260
                </a> to speak to an Elevate Success Coach today.
                
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
              <Field
                id="mls_number"
                name="mls_number"
                label="MLS # (optional)"
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
                    label: "Digital Marketing Services (Website, Email, Social, Text, Blog, SEO)",
                    value: "Digital Marketing Services (Website, Email, Social, Text, Blog, SEO)",
                  },
                  {
                    label: "Lead Generation, Parsing & Scrubbing Services",
                    value: "Lead Generation, Parsing & Scrubbing Services",
                  },
                  {
                    label: "CRM Solutions",
                    value: "CRM Solutions",
                  },
                  {
                    label: "Custom Creative / Marketing Services",
                    value: "Custom Creative / Marketing Services",
                  },
                ]}
                className={classes.field}
              />
              {values.interests.includes("Lead Generation, Parsing & Scrubbing Services") && (
                <div>
                  <div style={{ width: "100%", textAlign: "center" }}>
                    What are your top 3 markets of interest? (optional)
                  </div>
                  <Field id="market1" name="market1" label="City/State" component={Input} className={classes.field} onBlur={this.setFormVal} />
                  <Field id="market2" name="market2" label="City/State" component={Input} className={classes.field} onBlur={this.setFormVal} />
                  <Field id="market3" name="market3" label="City/State" component={Input} className={classes.field} onBlur={this.setFormVal} />
                </div>
              )}



              <div className={classes.selectlabel} style={{marginTop:"40px"}}>
              Select date / time to speak to an Elevate Sales Representative:
              </div>

                <div>
                <div className={classes.topRow}>
                  <Field id="meetingdate" name="meetingdate" label="Call Date" component={Datetime} timeFormat={false} isValidDate={valid} renderDay={renderDay} />
                  <div style={{ margin: "8px auto 16px" }}>
                    <label for="meetingtime" className={classes.selectlabel}>
                      Call Time
                        </label>
                    <select name="meetingtime" value={values.meetingtime} onChange={handleChange} onBlur={handleBlur} style={{ display: "block" }} className={classes.selectfield}>
                      <option value="" label="Select a time slot" />
                      <option value="09:00:00">9:00am (EDT)</option>
                      <option value="09:30:00">9:30am (EDT)</option>
                      <option value="10:00:00">10:00am (EDT)</option>
                      <option value="10:30:00">10:30am (EDT)</option>
                      <option value="11:00:00">11:00am (EDT)</option>
                      <option value="11:30:00">11:30am (EDT)</option>
                      <option value="12:00:00">12:00pm (EDT)</option>
                      <option value="12:30:00">12:30pm (EDT)</option>
                      <option value="13:00:00">1:00pm (EDT)</option>
                      <option value="13:30:00">1:30pm (EDT)</option>
                      <option value="14:00:00">2:00pm (EDT)</option>
                      <option value="14:30:00">2:30pm (EDT)</option>
                      <option value="15:00:00">3:00pm (EDT)</option>
                      <option value="15:30:00">3:30pm (EDT)</option>
                      <option value="16:00:00">4:00pm (EDT)</option>
                      <option value="16:30:00">4:30pm (EDT)</option>
                      <option value="17:00:00">5:00pm (EDT)</option>
                      <option value="17:30:00">5:30pm (EDT)</option>
                    </select>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className={classes.signUpBtn}
                disabled={isSubmitting}
              >
                Tell Me More about Elevate
              </button>
              <div style={{ fontSize: "11px",textAlign: "center" }}>
                By submitting this form, you are requesting to be contacted by a member of the Elevate Sales Team.<br />
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
}))(SignUpFormSuccess);
