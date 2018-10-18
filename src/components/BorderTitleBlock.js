import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";

const BorderTitleBlock = ({ borderColor, children, classes, className }) => {
  console.log("====> children", children);
  return (
    <div className={classNames(classes.root, className)}>
      <div className={classes.leftWing} style={{ borderColor }} />
      <div
        className={classes.center}
        dangerouslySetInnerHTML={{
          __html: children,
        }}
      />
      <div className={classes.rightWing} style={{ borderColor }} />
    </div>
  );
};

export default withStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    alignItems: "center",
  },
  leftWing: {
    flexGrow: "1",
    borderTop: "3px solid #b9b8b8",
    borderLeft: "3px solid #b9b8b8",
    height: "33px",
  },
  center: {
    paddingBottom: "30px",
    paddingLeft: "8px",
    paddingRight: "8px",
    fontWeight: "bold",
  },
  rightWing: {
    flexGrow: "1",
    borderTop: "3px solid #b9b8b8",
    borderRight: "3px solid #b9b8b8",
    height: "32px",
  },
}))(BorderTitleBlock);
