import React from "react";
import Link from "gatsby-link";
import withStyles from "elevate-ui/withStyles";
import Icon from "elevate-ui-icons/Icon";

const GridCard = ({ classes, name, icon, color }) => {
  return (
    <div className={classes.root}>
      <Icon size={24} color={color} name={icon} />
      <div style={{ color }} className={classes.name}>
        {name}
      </div>
    </div>
  );
};

export default withStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    padding: "30px",
    alignItems: "center",
  },
  name: {
    fontWeight: "700",
    textTransform: "uppercase",
    paddingBottom: "3px",
    marginLeft: "6px",
    fontSize: "22px",
    letterSpacing: ".3px",
  },
}))(GridCard);
