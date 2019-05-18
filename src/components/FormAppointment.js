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

class FormAppointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formState: null,
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
    };

    this.setFormVal = this.setFormVal.bind(this);
  }


  setFormVal(e){
    console.log(e.target.name);
    var tempObj = {};
    tempObj[e.target.name] = e.target.value;
    this.setState(tempObj);
  }

  

  render() {
    const { formState } = this.state;
    const { classes, className } = this.props;

    var valid = function (current) {
      return current.day() !== 0 && current.day() !== 6;
    };

    var renderDay = function(props, currentDate, selectedDate) {

      if(currentDate.month() == moment().month()){
        if (currentDate.date() < moment().date()) {
          if(props.className == "rdtDay"){
            props.className = "rdtDay rdtDisabled";
          }
        }
      }
      if(currentDate.month() < moment().month()){
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
              Got it!
            </Typography>
            <Typography type="heading5" gutterTop>
You can also speak to a member of our lead generation team immediately by calling <a href="tel:18449720260" className={classes.link}>844.972.0260</a>.
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

    

    return <div className={classNames(classes.root, className)}>
        <Formik initialValues={{ firstname: "", lastname: "", company: "", email: "", phone: "", form: "appointment_form" }} validationSchema={() => Yup.object().shape(
              {
                firstname: Yup.string().required("First name is required"),
                lastname: Yup.string().required("Last name is required"),
                company: Yup.string(),
                email: Yup.string()
                  .email("Invalid email address")
                  .required("Email is required"),
                phone: Yup.string().required("Phone is required"),
              }
            )} onSubmit={(values, { setSubmitting }) => {
            //console.log(values.meetingdate);
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
            const body = { ...values,  
            utm_campaign: window.utm_tags ? window.utm_tags.campaign : "", 
            utm_source: window.utm_tags ? window.utm_tags.source : "", 
            utm_medium: window.utm_tags ? window.utm_tags.medium : "", 
            utm_term: window.utm_tags ? window.utm_tags.term : "", 
            demo_request_date: meeting_request};
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
          }} render={({ values, isSubmitting, handleBlur, handleChange }) => <Form noValidate>
              <div style={{ maxWidth: "500px", marginLeft: "auto", marginRight: "auto" }}>
                <div className={classes.topRow}>
                  <Field id="firstname" name="firstname" label="First Name" component={Input} className={classes.field} onBlur={this.setFormVal} />
                  <Field id="lastname" name="lastname" label="Last Name" component={Input} className={classes.field} onBlur={this.setFormVal} />
                </div>
                <Field id="email" name="email" label="Email" component={Input} className={classes.field} onBlur={this.setFormVal} />
                <Field id="phone" name="phone" label="Phone" component={Input} className={classes.field} type="tel" onBlur={this.setFormVal} />
                <div>
                    <div className={classes.topRow}>
                          <div style={{ width: "60%", display: "inline-block"}}>
                      <Field id="meetingdate" name="meetingdate" label="Requested Call Date" component={Datetime} timeFormat={false} isValidDate={valid} renderDay={renderDay} 
                        />
                      </div>
                      <div style={{width:"40%",display:"inline-block"}}>
                        <div style={{ margin: "8px auto 16px" }}>
                            <label for="meetingtime" className={classes.selectlabel}>
                            Requested Call Time
                            </label>
                            <select name="meetingtime" value={values.meetingtime} onChange={handleChange} onBlur={handleBlur} style={{ display: "block",width:"100%" }} className={classes.selectfield}>
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
                  </div>
                <button type="submit" className={classes.signUpBtn} disabled={isSubmitting}>
                  Schedule Call
                </button>
              </div>
            </Form>} />
      </div>;
  }
}



export default withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "700px",
    margin: "0 auto",
    textAlign: "center",
  },
  link: {
    color: "inherit",
  },
  rdtDay: {
    backgroundColor: "#CCC",
  },
  field: {
    borderRadius: "6px",
    border: "2px solid #ECECEC",
    height: "50px",
    fontWeight: "600",
  },
  selectfield: {
    borderRadius: "6px",
    border: "2px solid #ECECEC",
    height: "40px"
  },
  selectlabel:{
    width: "100%",
    color: "#888f96",
    display: "flex",
    fontSize: "14px",
    alignItems: "center",
  lineHeight: "18px",
  fontWeight: "700",
  marginBottom: "4px",
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
  headingSmall: {
    fontSize: "20px",
    textTransform: "uppercase",
    fontWeight: "600",
    color: "#55c3ba",
    textAlign: "center",
    padding: "3px",
  },
  headingLarge: {
    fontSize: "40px",
    textTransform: "uppercase",
    fontWeight: "700",
    color: "#55c3ba",
    textAlign: "center",
    padding: "3px",
  },
  headingText: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#777777",
    textAlign: "center",
    padding: "3px",
    lineHeight: "1.4em",
  },
}))(FormAppointment);
