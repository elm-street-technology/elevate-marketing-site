import React from "react";
import Link from "gatsby-link";
import withStyles from "elevate-ui/withStyles";

const GridCardIndex = ({ classes, children, page }) => {
  return (
    <Link style={{ textDecoration: "none" }} to={page}>
      <div className={classes.root}>
        <div
          className={classes.inner}
        >
        {children}
        </div>
      </div>
    </Link>
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
    color: "#fff",
    textAlign: "center",
    lineHeight: "1.5",
    margin: "auto",
    maxWidth: "200px",

    "& strong": {
      fontWeight: "700",
    },
  },
}))(GridCardIndex);
