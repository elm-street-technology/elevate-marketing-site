import React, { Component } from "react";
import classNames from "classnames";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Alert from "elevate-ui/Alert";
import Input from "elevate-ui/Input";
import RadioGroup from "elevate-ui/RadioGroup";
import Typography from "elevate-ui/Typography";
import withStyles from "elevate-ui/withStyles";
import Datetime from "elevate-ui/Datetime";
import moment from "moment";

class Formsellerleads extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formState: null,
      showCalForm: false,
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      market1: '',
      market2: '',
      market3: '',
      company: '',
      calEmbed: '',
    };

    this.showCalForm = this.showCalForm.bind(this);
    this.setFormVal = this.setFormVal.bind(this);
  }

  showCalForm(e) {
    console.log('showcalform');
    console.log(e.target);

    if(e.target.checked){
      var interestedMarkets = "Interested markets: "+this.state.market1+" - "+this.state.market2+" - "+this.state.market3;
      var thisCompany = "Company: "+this.state.company;
      var eventDesc = encodeURIComponent(thisCompany+", "+interestedMarkets);

      this.setState({ showCalForm: true});
    }
    else{
      this.setState({ showCalForm: false});
    }
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
        We'll check availability &amp; reach out to you asap via email or telephone.<br/>
              You can also speak to a lead generation specialist immediately by calling  <a href="tel:18447920260" className={classes.link}>844.792.0260</a>.
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
        <Formik initialValues={{ firstname: "", lastname: "", company: "", email: "", phone: "", market1: "", market2: "", market3: "", form: "sellerleads", list: 106962 }} validationSchema={() => Yup.object().shape(
              {
                firstname: Yup.string().required("First name is required"),
                lastname: Yup.string().required("Last name is required"),
                company: Yup.string(),
                email: Yup.string()
                  .email("Invalid email address")
                  .required("Email is required"),
                phone: Yup.string().required("Phone is required"),
                mls_number: Yup.string(),
              }
            )} onSubmit={(values, { setSubmitting }) => {
            //console.log(values.meetingdate);
            var meeting_request = '';

            let notes = "Interested Markets: " + values.market1 + "," + values.market2 + "," + values.market3;

            Object.keys(values).forEach(function (key, index) {
              // key: the name of the object key
              // index: the ordinal position of the key within the object 
              if(key == 'meetingdate'){
                if (typeof values.meetingdate.format === "function") {
                  meeting_request = values.meetingdate.format("YYYY-MM-DD") + "T" + values.meetingtime.replace(" (EDT)", "") + "-04:00"
                }
              }
              if (key == "demorequest"){
                if(values.demorequest) {
                  notes = notes + ", Requesting 15 min demo";
                }
              }
              if (key == "interestedIn"){
                notes = notes + ", Interested In: " + values.interestedIn;
              }
            });

            const body = { ...values, 
              demo_request_date: meeting_request,
              notes, 
              utm_campaign: window.utm_tags ? window.utm_tags.campaign : "", 
              utm_source: window.utm_tags ? window.utm_tags.source : "", 
              utm_medium: window.utm_tags ? window.utm_tags.medium : "", 
              utm_term: window.utm_tags ? window.utm_tags.term : "", 
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
                    window.ga('send','event','form','form_completed','leadgen');
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
                <Field id="company" name="company" label="Affiliation (optional)" component={Input} className={classes.field} onBlur={this.setFormVal} />
                <div style={{ width: "100%", textAlign: "left", fontWeight: "600", margin: "20px", marginLeft:"5px" }}>
                  What are your top 3 markets of interest? (optional)
                </div>
                <Field id="market1" name="market1" label="City/State" component={Input} className={classes.field} onBlur={this.setFormVal} />
                <Field id="market2" name="market2" label="City/State" component={Input} className={classes.field} onBlur={this.setFormVal} />
                <Field id="market3" name="market3" label="City/State" component={Input} className={classes.field} onBlur={this.setFormVal} />
                <div style={{textAlign: "left",}} className={classes.fieldCenter}>
                  <div style={{ width: "100%", margin: "20px", marginLeft:"5px" }}>
                  I am interested in:
                  </div>
                  <div style={{marginLeft:"20px"}}>
                <Field
                id="interestedIn"
                name="interestedIn"
                label=''
                component={RadioGroup}
                items={[
                  {
                    label: "Seller Only Leads",
                    value: "Seller Only Leads",
                  },
                  {
                    label: "Buyer Only Leads",
                    value: "Buyer Only Leads",
                  },
                  {
                    label: "A Mix of Buyer / Seller Leads",
                    value: "A Mix of Buyer / Seller Leads",
                  },
                ]}
                
              />
              </div>
              </div>
              <div style={{marginTop:"20px"}}>
                Schedule 15 minutes with a Lead Generation Specialist:
                <Field id="demorequest" name="demorequest" type="checkbox" value="yes" className={classes.checkfield}  />
                </div>
                
                <button type="submit" className={classes.signUpBtn} disabled={isSubmitting}>
                  SUBMIT
                </button>
              </div>
            <div style={{ fontSize: "11px", lineHeight:"16px" }}>
            By submitting this form, you are requesting to be contacted by a member of the Elevate Sales Team at the details provided via text, email or call (may involve automated or pre-recorded means).  You may revoke this consent through any reasonable means.
              Existing subscribers seeking support, please visit the <a href="https://elmstreettechnology.zendesk.com/hc/en-us">Elevate Help Center</a>.
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
  fieldCenter: {
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
}))(Formsellerleads);
