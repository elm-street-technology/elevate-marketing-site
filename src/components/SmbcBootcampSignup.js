import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import SignUpFormSmbc from "./SignUpFormSmbc";

const SmbcBootcampSignup = ({ classes, className, signupMessaging }) => {
  return (
    <div className={classNames(classes.root, className)}>
      <div>
        <div>
          <div className={classes.signupMessaging}>
            <h2>Take advantange. It’s free!</h2>
            <h3>
              Social media is a powerful tool that many agents aren't taking
              full advantage of to maximize their business.
            </h3>
            <p>
              Let us motivate and empower your agents at your next sales
              meeting! Take advantage of our no cost Social Media Bootcamp
              seminar designed exclusively for real estate professionals.{" "}
            </p>
            <p>
              Our social media specialists will educate agents of all skill
              levels in social media and online marketing. Each in-office
              Bootcamp Seminar runs 30 minutes followed by a Q&amp;A session.
            </p>
            <h4>Sign up now by filling out this form.</h4>
          </div>
        </div>
        <div>
          <SignUpFormSmbc />
        </div>
      </div>
    </div>
  );
};

export default withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    padding: "48px 0px 160px",
  },
  signupMessaging: {
    "& h2": {
      fontSize: "28px",
      lineHeight: "1.4",
      fontWeight: "700",
      marginBottom: "12px",
      color: "#F3574E",
    },

    "& h3": {
      fontSize: "20px",
      lineHeight: "1.4",
      fontWeight: "700",
      marginTop: "32px",
      marginBottom: "12px",
    },

    "& h4": {
      fontSize: "18px",
      lineHeight: "1.2",
      fontWeight: "600",
      marginTop: "24px",
    },

    "& em": {
      fontStyle: "italic",
    },

    "& strong": {
      fontWeight: "700",
    },

    "& p": {
      color: "#413F48",
      fontSize: "18px",
      lineHeight: "1.6",
      marginTop: "4px",
      marginBottom: "8px",
    },

    "& img": {
      display: "block",
      maxWidth: "100%",
      marginBottom: "16px",
    },
  },
}))(SmbcBootcampSignup);
