import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";

import Topography from "../images/topography.svg";

const BootcampSignup = ({ classes, className, signupMessaging }) => {
  return <div className={classNames(classes.root, className)}>asdf</div>;
};

export default withStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    height: "400px",
    backgroundColor: "#fff4f0",
    backgroundImage: `url('${Topography}')`,
    backgroundRepeat: "repeat",
  },
}))(BootcampSignup);
