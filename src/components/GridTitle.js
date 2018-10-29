import React from "react";
import Link from "gatsby-link";
import withStyles from "elevate-ui/withStyles";
import Icon from "elevate-ui-icons/Icon";

const GridCard = ({ classes, name, icon, color }) => {
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <div className={classes.icon}>
          <Icon size={24} color={color} name={icon} />
        </div>
        <div style={{ color }} className={classes.name}>
          {name}
        </div>
      </div>
    </div>
  );
};

export default withStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    padding: "30px",
  },
  name: {
    fontWeight: "700",
    textTransform: "uppercase",
    paddingBottom: "3px",
  },
  title: {
    fontSize: "22px",
    letterSpacing: ".3px",
    display: "flex",
    alignItems: "center",
  },
  icon: {
    marginRight: "6px",
  },
}))(GridCard);
