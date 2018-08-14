import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";

const BlogCardList = (props) => {
  return (
    <div className={classNames(props.classes.root, props.classes.grid)}>
      {props.children}
    </div>
  );
};

export default withStyles((theme) => ({
  "@global body": {
    backgroundColor: "#fff !important",
    a: {
      textDecoration: "none !important",
      "&:hover": {
        textDecoration: "none !important",
      },
    },
  },
  root: {
    width: "100%",
    margin: "48px auto 96px auto",
    maxWidth: "280px",

    [theme.breakpoints[600]]: {
      maxWidth: "584px",
    },

    [theme.breakpoints[900]]: {
      maxWidth: "888px",
    },

    [theme.breakpoints[1200]]: {
      maxWidth: "1192px",
    },
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "280px",
    gridColumnGap: "24px",
    gridRowGap: "60px",
    justifyItems: "center",

    [theme.breakpoints[600]]: {
      gridTemplateColumns: "repeat(2, 280px)",
    },

    [theme.breakpoints[900]]: {
      gridTemplateColumns: "repeat(3, 280px)",
    },

    [theme.breakpoints[1400]]: {
      gridTemplateColumns: "repeat(4, 280px)",
    },
  },
}))(BlogCardList);
