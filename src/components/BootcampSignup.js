import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";

import Topography from "../images/topography.svg";
import BootcampLogo from "./BootcampLogo";

const BootcampSignup = ({ classes, className, signupMessaging }) => {
  return (
    <div className={classNames(classes.root, className)}>
      <BootcampLogo />
      <div className={classes.cardWrapper}>
        <div className={classes.card}>
          <div
            className={classes.heroText}
            dangerouslySetInnerHTML={{
              __html:
                signupMessaging &&
                signupMessaging.childMarkdownRemark &&
                signupMessaging.childMarkdownRemark.html,
            }}
          />
        </div>
        <div className={classes.card}>
          <div>Todo: Form</div>
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
    justifyContent: "space-between",
    width: "100%",
    maxWidth: "1000px",
    marginTop: "48px",
  },
  card: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "450px",
    background: "#fff",
    borderRadius: theme.globalBorderRadius,
    border: "1px solid rgba(94, 94, 94, 0.05)",
    boxShadow: "0 8px 12px rgba(0,0,0,0.1)",
    padding: "24px",
  },
}))(BootcampSignup);
