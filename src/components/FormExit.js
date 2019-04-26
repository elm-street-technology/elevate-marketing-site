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
import _ from 'lodash';
import url from 'url';

class FormExit extends Component {
  constructor(props) {
    super(props);

    // Checking to see if the email was submitted
    var presetEmail = '';
    if (typeof window !== 'undefined'){
      let urlObj = url.parse(window.location.href, true);
      if (urlObj.query.e != undefined) {
        presetEmail = urlObj.query.e;
      }
    }

    this.state = {
      formState: null,
      showOtherProduct: false,
      showUnhappyReason: false,
      showWhereFound: false,
      presetEmail: presetEmail,
    };
    this.handleOtherProduct = this.handleOtherProduct.bind(this);
    this.handleUnhappyReason = this.handleUnhappyReason.bind(this);
    this.handleWhereFound = this.handleWhereFound.bind(this);

    
  }

  handleOtherProduct(e) {
    this.setState({ showOtherProduct: e.target.checked });
  }
  handleUnhappyReason(e) {
    this.setState({ showUnhappyReason: e.target.checked });
  }
  handleWhereFound(e) {
    this.setState({ showWhereFound: e.target.checked });
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
          <div>
            <Typography type="heading3" gutterBottom>
              Thank you for submitting this survey. We hope you will consider Elevate in the future.
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
          initialValues={{ email: this.state.presetEmail, survey: 645, customer: 6180, sendmail: 0, opt63978: '', opt63979: '', opt63981: '', opt63980: '', opt63982: '' }}
          validationSchema={() =>
            Yup.object().shape({
              email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
            })
          }
          onSubmit={(values, { setSubmitting }) => {
            const body = { ...values };
            let formData = new FormData();
            const elements = Object.entries(body)
            for (const element of elements) {
              formData.append(element[0], element[1]);
            }

            return fetch("https://secure.systememerge.com/plugins/submit_survey.php", {
              method: "POST",
              body: formData,
            })
              .then((response) => response.json())
              .then((res) => {
                  this.setState({ formState: "success" });
              })
              .catch((err) => {
                this.setState({ formState: "success" });
              });
          }}
          render={({ values, isSubmitting}) => (
            <Form noValidate>
              <div
                style={{
                  maxWidth: "500px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <Field
                  id="email"
                  name="email"
                  label="Email"
                  component={Input}
                  className={classes.field}
                  type="hidden"
                />
                <div style={{ textAlign: "left", lineHeight: "1.4em", paddingTop: "20px" }}>
                  <span className={classes.labelStyle}>
                    Reason for Cancellation
                  </span>
                  <div>
                    <Field type="radio" name="opt63978" value="7531" /> I have
                    closed / left my business &nbsp;
                  </div>
                  <div>
                    <Field type="radio" name="opt63978" value="7532" /> I no
                    longer need this product / service &nbsp;
                  </div>
                  <div>
                    <Field
                      type="radio"
                      name="opt63978"
                      value="7533"
                      onClick={this.handleOtherProduct}
                    /> I am using another product &nbsp;
                    {this.state.showOtherProduct ? (
                      <div>
                      <Field
                        type="text"
                        id="opt63980"
                        name="opt63980"
                        placeholder="Which product are you using?"
                        className={classes.field} style={{ width: "100%" }}
                      />
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div>
                    <Field
                      type="radio"
                      name="opt63978"
                      value="7534"
                      onClick={this.handleUnhappyReason}
                    /> I am
                    unhappy with this product / service &nbsp;

                    {this.state.showUnhappyReason ? (
                      <div>
                      <Field
                        type="text"
                        id="opt63981"
                        name="opt63981"
                        placeholder="Reason why?"
                          className={classes.field} style={{ width: "100%" }}
                      />
                      </div>
                    ) : (
                        ""
                      )}
                  </div>
                </div>
                <div style={{ textAlign: "left", lineHeight: "1.4em", paddingTop: "20px" }}>
                  <span className={classes.labelStyle}>
                    How did you originally hear about Elevate?
                  </span>
                  <div>
                    <Field type="radio" name="opt63979" value="7535" /> I
                    attended an educational boot camp
                  </div>
                  <div>
                    <Field type="radio" name="opt63979" value="7536" /> I
                    received an email and/or social media invitation
                  </div>
                  <div>
                    <Field type="radio" name="opt63979" value="7537" /> I met
                    the team at a tradeshow / event
                  </div>
                  <div>
                    <Field
                      type="radio"
                      name="opt63979"
                      value="7538"
                      onClick={this.handleWhereFound}
                    /> Other

                    {this.state.showWhereFound ? (
                      <div>
                      <Field
                        type="text"
                        id="opt63982"
                        name="opt63982"
                        placeholder="Where did you find us?"
                        className={classes.field} style={{ width: "100%" }}
                      />
                      </div>
                    ) : (
                        ""
                      )}


                  </div>
                </div>
                <div style={{ textAlign: "left", lineHeight: "1.4em",paddingTop:"20px" }}>
                  <span className={classes.labelStyle}>
                    Comments / Suggestions
                  </span>
                  <Field component="textarea" rows="4" id="opt63983" name="opt63983" className={classes.field} style={{width:"100%",height:"120px"}}/>
                </div>
                <button
                  type="submit"
                  className={classes.signUpBtn}
                  disabled={isSubmitting}
                >
                  Submit
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
    maxWidth: "500px",
    margin: "0 auto",
    textAlign: "center"
  },
  link: {
    color: "inherit",
  },
  labelStyle:{
    width: "100%",
    color: "#888f96",
    display: "flex",
    fontSize: "18px",
    alignItems: "center",
    lineHeight: "18px",
    fontWeight: "700",
    marginBottom: "4px",
  },
  field: {
    borderRadius: "6px",
    border: "2px solid #ECECEC",
    height: "50px",
    fontWeight: "600",
    fontSize: "14px",
    padding: "4px"
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
}))(FormExit);
