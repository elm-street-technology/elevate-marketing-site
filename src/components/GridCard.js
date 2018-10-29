import React from "react";
import Link from "gatsby-link";
import withStyles from "elevate-ui/withStyles";

const GridCard = ({ classes, text, color }) => {
  return (
    <div className={classes.root}>
      <div className={classes.inner}>
        <div className={classes.title}>{text}</div>
      </div>
    </div>
  );
};

export default withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    background: "transparent",
    height: "200px",
    border: "4px solid #fff",
    marginBottom: "30px",
    borderRadius: "6px",

    "&:hover": {
      backgroundColor: (props) => props.color || "transparent",
      transition: ".3s all ease",
      cursor: "pointer",
      borderColor: (props) => props.color || "transparent",
    },
  },
  inner: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#fff",
    textAlign: "center",
    lineHeight: "1.5",
    margin: "auto",
    fontWeight: "600",
    maxWidth: "200px",
  },
}))(GridCard);
