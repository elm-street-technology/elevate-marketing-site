import React, { Component } from "react";
import classNames from "classnames";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Alert from "elevate-ui/Alert";
import CheckboxGroup from "elevate-ui/CheckboxGroup";
import Input from "elevate-ui/Input";
import RadioGroup from "elevate-ui/RadioGroup";
import ResponsiveVid from "../components/ResponsiveVid"
import Typography from "elevate-ui/Typography";
import withStyles from "elevate-ui/withStyles";
import Datetime from "elevate-ui/Datetime";
import moment from "moment";

class FormCRM extends Component {
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

      var tempCode = `
      <!-- Calendly inline widget begin -->
      <iframe style="height:740px" src="https://calendly.com/estsean/15min-1?embed_domain=&amp;embed_type=Inline&amp;name=`;
      
      tempCode += encodeURIComponent(this.state.firstname+" "+this.state.lastname);
      tempCode += `&amp;email=`;
      tempCode += encodeURIComponent(this.state.email);
      tempCode += `&amp;a1=`;
      tempCode += this.state.phone.replace(/\D/g, '');
      tempCode += `&amp;a2=`;
      tempCode += eventDesc;
      tempCode += `" width="100%" height="100%" frameborder="0"></iframe>
          <!--Calendly inline widget end-- >
      `;
      this.setState({ calEmbed: tempCode});

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
              Fantastic! 
            </Typography>
            <Typography type="heading5" gutterTop>
              We’ll reach out to you asap via email or telephone.<br/>
              You can also speak to a member of our sales team immediately by calling  <a href="tel:18447920260" className={classes.link}>844.792.0260</a>.
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
        <Formik initialValues={{ firstname: "", lastname: "", company: "", email: "", phone: "", market1: "", market2: "", market3: "", form: "crm_form", list: 65923 }} validationSchema={() => Yup.object().shape(
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
            Object.keys(values).forEach(function (key, index) {
              // key: the name of the object key
              // index: the ordinal position of the key within the object 
              if (key == 'meetingdate') {
                if (typeof values.meetingdate.format === "function") {
                  meeting_request = values.meetingdate.format("YYYY-MM-DD") + "T" + values.meetingtime.replace(" (EDT)", "") + "-04:00"
                }
              }
            });
            const body = { ...values, notes: values.demorequest == true ? "Requested demo, Interested Markets: " + values.market1 + "," + values.market2 + "," + values.market3 : "Interested Markets: " + values.market1 + "," + values.market2 + "," + values.market3, 
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
              <div style={{ marginBottom: "30px" }}>
                <div className={classes.headingLarge}>
                  Take a Tour of the HOTTEST New CRM in Real Estate.
                </div>
                
                <div className={classes.headingText} style={{ marginTop: "10px", paddingBottom:"25px", }}>
                    Contemporary, intuitive design for broker, agent &amp; team success.<br/>Secure personal data on every level.
                </div>

                <div style={{marginLeft:"auto",marginRight:"auto",}}>
                <div style={{ textAlign: "center" }} className={classes.videoEmbed}>
                      <iframe className={classes.videoContainer} src="https://www.youtube.com/embed/WMqvFA708ss?autoplay=1&rel=0"
                      frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                </div>

                <div className={classes.headingText} style={{ marginTop: "20px", paddingBottom:"25px", }}>
                Learn more, secure leads &amp; conquer your marketing today.
                </div>


              </div>
              <div style={{ maxWidth: "500px", marginLeft: "auto", marginRight: "auto" }}>
                <div className={classes.topRow}>
                  <Field id="firstname" name="firstname" label="First Name" component={Input} className={classes.field} onBlur={this.setFormVal} />
                  <Field id="lastname" name="lastname" label="Last Name" component={Input} className={classes.field} onBlur={this.setFormVal} />
                </div>
                <Field id="email" name="email" label="Email" component={Input} className={classes.field} onBlur={this.setFormVal} />
                <Field id="phone" name="phone" label="Phone" component={Input} className={classes.field} type="tel" onBlur={this.setFormVal} />
                <Field id="company" name="company" label="Affiliation (optional)" component={Input} className={classes.field} onBlur={this.setFormVal} />
                <div style={{ width: "100%", textAlign: "center" }}>
                  Interested in lead generation?<br/>Tell us your top three markets of interest. (optional)
                </div>
                <Field id="market1" name="market1" label="City/State" component={Input} className={classes.field} onBlur={this.setFormVal} />
                <Field id="market2" name="market2" label="City/State" component={Input} className={classes.field} onBlur={this.setFormVal} />
                <Field id="market3" name="market3" label="City/State" component={Input} className={classes.field} onBlur={this.setFormVal} />
                Schedule 15 minute CRM Tour:
                <Field id="demorequest" name="demorequest" type="checkbox" value="yes" className={classes.checkfield} />
                
                <button type="submit" className={classes.signUpBtn} disabled={isSubmitting}>
                  Contact Me TODAY
                </button>
              </div>
            <div style={{ fontSize: "11px" }}>
            By submitting this form, you are requesting to be contacted by a member of the Elevate Sales Team at the details provided via text, email or call (may involve automated or pre-recorded means).  You may revoke this consent through any reasonable means.<br />
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
  fullWidthVid:{
    width: "100%",
    marginLeft:"auto",
    marginRight:"auto",
    [theme.breakpoints[900]]: {
      width: "75%"
  },
},
videoEmbed:{
  position: "relative",
  paddingBottom: "56.25%",
  paddingTop: "30px",
  height: "0",
  overflow: "hidden",
  
},
videoContainer:{
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
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
  
}))(FormCRM);
