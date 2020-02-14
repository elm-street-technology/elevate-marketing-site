import React, { Component } from "react";
import classNames from "classnames";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Input from "elevate-ui/Input";
import withStyles from "elevate-ui/withStyles";

class FormGoalsInitial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formState: null,
      showError: false,
    };
  }

  componentDidMount(){
    // Get the modal
    var modal = document.getElementById("myModal");

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        //modal.style.display = "none";
      }
    }
  }

  render() {
    const { formState } = this.state;
    const { classes, className } = this.props;
    var showError = false;

    if (formState === "success") {
      return (
        <div>
        </div>
      );
    } else if (formState === "error") {
        showError = this.state.showError;
    }

    return (
      <div className={classes.modalTakeover} id="myModal">
          <div className={classes.modalTakeoverInner}>

          
      <div className={classNames(classes.root, className)}>
        <Formik
          initialValues={{
            firstname: "",
            lastname: "",
            email: "",
            form: "goals_form_initial",
            list: 95172,
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
                    console.log("success");
                    this.setState({ showError: false });

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
                    this.setState({ showError: true });
                    setSubmitting(false);
                    console.log('error');
                }
              })
              .catch((err) => {
                this.setState({ formState: "error" });
                this.setState({ showError: true });
                setSubmitting(false);
              });
          }}
          render={({ values, isSubmitting,handleBlur, handleChange }) => (
            <Form noValidate>
              <div style={{marginBottom:"30px"}}>
                <div className={classes.headingLarge}>2020 Goal Setting Exercise with #1 team leader, Matt O'Neill</div>
                
                <div className={classes.headingText} style={{ marginTop: "20px" }}>
                    Download your "Wheel of Life" self-evaluation and stream Matt's 60-minute walk-through to help you focus on what's most important in life.
                </div>
                <p className={classes.standardText} style={{marginTop:"20px"}}>
                Tell us where we should email your downloads…
                </p><p>
                { showError && (
                    <p>There was an error processing your form</p>
                ) }
                </p>
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
              

              <button
                type="submit"
                className={classes.signUpBtn}
                disabled={isSubmitting}
              >
                Inspire Me
              </button>
              </div>
            </Form>
          )}
        />
      </div>
      </div>
      </div>
    );
  }
}

export default withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "1000px",
    margin: "0 auto",
    textAlign: "center"
  },
  modalTakeover: {
    position: "absolute",
    width: "100%",
    height: "300%",
    
    top: "0",
    left: "0",
    background: "rgba(0,0,0,.5)",
    zIndex: "10000",
    },
    modalTakeoverInner: {
        background: "#FFFFFF",
        position: "absolute",
        left: "2%",
        width: "96%",
        top: "20px",
        paddingLeft: "20px",
        paddingRight: "20px",
        paddingBottom: "30px",
        paddingTop: "30px",
        textAlign:" center",
        [theme.breakpoints[900]]: {
            left: "15%",
            top: "60px",
            width: "70%",
            paddingLeft: "50px",
            paddingRight: "50px",
            },
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
    fontSize: "33px",
    fontWeight: "700",
    color: "#55c3ba",
    textAlign:"center",
    padding:"3px",
    paddingTop:"20px",
    lineHeight:"38px"
  },

  bold:{
    fontWeight:"700",
  },

  subHeading2: {
    fontSize: "18px",
    fontWeight: "700",
    lineHeight: "28px",
    color: "#373b3b",
    letterSpacing: ".14px",
    textAlign: "center",
    margin: "0 auto 5px",
  },


  headingText:{
    color: "#777777",
    textAlign: "center",
    padding: "3px",
    lineHeight: "1.4em",
    fontWeight:"700",
  },
  standardText:{
      color:"#777777",
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
    backgroundColor: "#55c3ba",
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
}))(FormGoalsInitial);
