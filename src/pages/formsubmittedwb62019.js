import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import Form6Emails from "../components/Form6Emails";
import SEO from "../components/SEO";
import LandingHeader from "../images/6emails_landing_header.jpg";
import { Formik, Form, Field } from "formik";
import CheckboxGroup from "elevate-ui/CheckboxGroup";
import Input from "elevate-ui/Input";
import RadioGroup from "elevate-ui/RadioGroup";
import Typography from "elevate-ui/Typography";

const FormSubmittedWB62019 = ({ children, classes, data, tags }) => {
  const postNode = {
    title: `${config.siteTitle}`,
  };

  return (
    <div className={classes.root}>
      <Helmet>
              <title>{`${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="contact" customTitle />

      <Container>
        <div >
            <div style={{ maxWidth: "900px", paddingBottom: "40px",marginBottom:"40px", marginRight:"auto",marginLeft:"auto"}}>
                <div >
                    <LoadRecip />
                </div> 
                <div className={classes.heading}>
                    Thank you!
                </div>
                <div className={classes.subHeading}>
                    An Elevate team member will be in touch with you shortly!<br/>
                    Please confirm your contact information below.
                </div>
                <form>
                    <div style={{ maxWidth: "400px", marginLeft: "auto", marginRight: "auto" }}>
                        <div>
                            <input type="text" name="first_name" id="first_name" placeholder="First Name" className={classes.field}/>
                        </div>
                        <div>
                            <input type="text" name="last_name" id="last_name" placeholder="Last Name" className={classes.field} />
                        </div>
                        <div>
                            <input type="text" name="email" id="email" placeholder="Email" className={classes.field} />
                        </div>
                        <div>
                            <input type="text" name="phone" id="phone" placeholder="Phone" className={classes.field} />
                        </div>
                        <div>
                                  <button type="button" name="savePhone" id="savePhone" className={classes.signUpBtn}>Contact Me</button>
                        </div>
                        <div className={classes.thankYouMsg} id="submitResult" style={{display:"none"}}></div>
                    </div>

                </form>
                <div className={classes.subHeading}>
                          <br/>
                          <a href="mail:bdaughtry@tryelevate.com">bdaughtry@tryelevate.com</a><br/>
                            XXX-XXX-XXXX
                </div>
            </div>
        </div>
      </Container>
    </div>
  );
};

function LoadRecip(){
    if (typeof window!= 'undefined') {
        window.onload = function (e) {
            findRecipient();

            $("#savePhone").click(function () {
                var first_name = $("#first_name").val();
                var last_name = $("#last_name").val();
                var email = $("#email").val();
                var phone = $("#phone").val();
                var recipient_id = $("#recipient_id").val();
                createNotification(recipient_id, first_name, last_name, email, phone, 'Win Back Campaign Contact Request', 'A new user has completed the Win Back form', ShowThankyouMessage);
            });


        };
    }

    return null;
}

function ShowThankyouMessage(){
    $('#submitResult').html("Thank you. I'll be in touch asap.");
    $('#submitResult').show();
}

export default withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    padding: "0 8px",
    margin: "70px auto",
  },
  heading: {
    fontSize: "28px",
          fontWeight: "800",
          letterSpacing: ".14px",
          color: "#2E2E35",
          textAlign: "center",
          marginBottom: "12px",
        },

  field: {
        borderRadius: "6px",
    border: "2px solid #ECECEC",
    height: "30px",
    fontSize:"14px",
    margin:"4px",
    padding:"2px",
    width:"100%"
},
  subHeading: {
    fontSize: "18px",
    lineHeight: "28px",
    letterSpacing: ".08px",
    textAlign: "center",
    margin: "0 auto 36px",
  },
  landingHeaderStyle:{
    textAlign:"center",
    marginBottom:"30px"
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
    thankYouMsg: {
        backgroundColor:"#eaeaea",
        padding:"10px",
        textAlign:"center"
    }
}))(FormSubmittedWB62019);
