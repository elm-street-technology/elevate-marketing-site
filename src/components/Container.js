import React from "react";
import withStyles from "elevate-ui/withStyles";

const Container = ({ children, classes }) => {
  return <div className={classes.root}>{children}</div>;
};

export default withStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "1080px",
    margin: "0 auto",
    padding: "0 8px",
  },
}))(Container);
