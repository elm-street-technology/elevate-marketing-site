import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import PeopleOutline from "elevate-ui/Icon/PeopleOutline";

const BootcampFaqs = ({ classes, className }) => {
  return (
    <div className={classNames(classes.root, className)}>
      <div className={classes.icon}>
        <PeopleOutline />
      </div>
      <div className={classes.text}>Social Media Bootcamp</div>
    </div>
  );
};

export default withStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "36px",
    height: "36px",
    color: "#fff",
    background: theme.colors.primary,
    borderRadius: "50%",
    marginRight: "8px",
  },
  text: {
    fontSize: "18px",
    fontWeight: "700",
    color: theme.colors.primary,
  },
}))(BootcampFaqs);
