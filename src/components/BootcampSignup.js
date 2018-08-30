import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";

import Topography from "../images/topography.svg";
import BootcampLogo from "./BootcampLogo";
import SignUpForm from "./SignUpForm";

const BootcampSignup = ({ classes, className, signupMessaging }) => {
  return (
    <div className={classNames(classes.root, className)}>
      <BootcampLogo />
      <div className={classes.cardWrapper}>
        <div className={classes.card}>
          <div
            className={classes.signupMessaging}
            dangerouslySetInnerHTML={{
              __html:
                signupMessaging &&
                signupMessaging.childMarkdownRemark &&
                signupMessaging.childMarkdownRemark.html,
            }}
          />
        </div>
        <div className={classes.card}>
          <SignUpForm />
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
    backgroundColor: "#fff4f0",
    backgroundImage: `url('${Topography}')`,
    backgroundRepeat: "repeat",
    padding: "48px 32px 160px",
  },
  cardWrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "100%",
    maxWidth: "1000px",
    marginTop: "48px",

    "& > * + *": {
      marginTop: "24px",
    },

    [theme.breakpoints[900]]: {
      flexWrap: "nowrap",

      "& > * + *": {
        marginTop: "0",
        marginLeft: "24px",
      },
    },
  },
  card: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "300px",
    maxWidth: "450px",
    background: "#fff",
    borderRadius: theme.globalBorderRadius,
    border: "1px solid rgba(94, 94, 94, 0.05)",
    boxShadow: "0 8px 12px rgba(0,0,0,0.1)",
    padding: "24px",

    [theme.breakpoints[600]]: {
      minWidth: "420px",
    },
  },
  signupMessaging: {
    "& h2": {
      fontSize: "22px",
      lineHeight: "1.4",
      fontWeight: "700",
      marginBottom: "12px",
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
}))(BootcampSignup);
