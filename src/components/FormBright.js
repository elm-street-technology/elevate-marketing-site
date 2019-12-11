import React, { Component } from "react";
import classNames from "classnames";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Alert from "elevate-ui/Alert";
import Input from "elevate-ui/Input";
import withStyles from "elevate-ui/withStyles";

class FormBright extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formState: null,
      leadType: 'Agent/Team',
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
    };
  }

  render() {
    const { formState,leadType,firstname,lastname,email,phone } = this.state;
    const { classes, className } = this.props;


    if (formState === "success") {
      if(leadType == 'Agent/Team'){
        if (typeof window !== 'undefined') {
          window.location = '/brightagent?f='+firstname+'&l='+lastname+'&e='+email+'&p='+phone;
        }
      }
      if(leadType == 'Broker'){
        if (typeof window !== 'undefined') {
          window.location = '/brightbroker?f='+firstname+'&l='+lastname+'&e='+email+'&p='+phone;
        }
      }
      return null;
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
            form: "bright_form",
            list: 85576,
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
            var notes = 'Notes: ';
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
                  notes = values.interests.join(",");
                  notes = notes + "," + values.interestsOther;
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
                  this.setState({ leadType: values.role});
                  this.setState({firstname:values.firstname});
                  this.setState({lastname:values.lastname});
                  this.setState({email:values.email});
                  this.setState({phone:values.phone});

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
                <div className={classes.headingLarge}>PICK YOUR PATH</div>
            
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
              <div style={{margin:"20px"}} className={classes.headingMedium}>I am a Bright MLS...</div>
              <div className={classes.topRow}>
                <div style={{backgroundColor:"#e6e6e6", textAlign:"center",flex:"1",padding:"20px",paddingBottom:"26px"}}>
                  <Field
                  id="role1"
                  name="role"
                  type="radio"
                  display="inline"
                  value="Broker"
                  className={classes.radioField}
                  />
                  <div className={classes.radioLabel}>Broker</div>
                  
                </div>
                <div style={{backgroundColor:"#e6e6e6", textAlign:"center",flex:"1",padding:"20px",paddingBottom:"26px"}}>
                  <Field
                  id="role2"
                  name="role"
                  type="radio"
                  display="inline"
                  value="Agent/Team"
                  className={classes.radioField}
                  /> 
                  <span className={classes.radioLabel}>Agent/Team</span> 
                  
                </div>
              </div>
              <button
                type="submit"
                className={classes.signUpBtn}
                disabled={isSubmitting}
              >
                Let's Go
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
  fieldLarge: {
    borderRadius: "6px",
    border: "2px solid #ECECEC",
    height: "50px",
    fontWeight: "600",
    fontSize:"30px"
  },
  radioField: {
    marginRight:"20px"
  },
  radioLabel:{
    display:"inline",
    fontWeight:"600",
    fontSize:"20px",
    position: "relative",
    top: "2px"
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
    color: "#f15623",
    textAlign:"center",
    padding:"3px",
    lineHeight:"38px"
  },
  headingMedium:{
    fontSize: "28px",
    fontWeight: "700",
    color: "#f15623",
    textAlign:"center",
    padding:"3px",
    lineHeight:"33px"
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
    backgroundColor: "#f15623",
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
}))(FormBright);
