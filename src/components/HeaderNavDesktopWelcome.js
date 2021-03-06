import React from "react";
import Link from "gatsby-link";
import withStyles from "elevate-ui/withStyles";
import classNames from "classnames";
import ArrowDropDown from "elevate-ui-icons/ArrowDropDown";

const HeaderNavDesktopWelcome = ({ classes, className }) => {
  return (
    <nav className={classNames(classes.nav, className)}>
      <div className={classes.link}>
        <div className={classes.navItem}>
        <Link className={classes.listItemLink} to="/events">Upcoming Events</Link>
        </div>
      </div>
      <div className={classes.link}>
        <div className={classes.navItem}>
        <Link className={classes.listItemLink} to="/webinars">Webinars</Link>
        </div>
      </div>
      <div className={classes.link}>
        <div className={classes.navItem}>
        <Link className={classes.listItemLink} to="https://elmstreettechnology.zendesk.com/hc/en-us" target="_blank">Help Center</Link>
        </div>
      </div>
      <div className={classes.link}>
        <div className={classes.navItem}>
        <Link className={classes.listItemLink} to="/blog">Blog</Link>
        </div>
      </div>
    </nav>
  );
};

export default withStyles((theme) => ({
  nav: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    marginRight: "16px",
    alignSelf: "flex-end",

    "& > * + *": {
      marginLeft: "16px",
    },
  },
  navItem: {
    display: "flex",
  },

  link: {
    float: "left",
    padding: "1rem",
    position: "relative",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "500",
    color: "#64616E",
    display: "block",

    "&:hover": {
      cursor: "pointer",
    },

    "&:hover $dropDown": {
      visibility: "visible",
      opacity: "1",
      zIndex: "999",
      transitionDelay: "0s, 0s, .3s",
    },
  },
  listItem: {
    clear: "both",
    padding: "20px",
    width: "100%",
    fontSize: "15px",
    borderTop: "1px solid rgba(236,236,236, .6)",

    "&:hover": {
      color: "#2E2E35",
      background: "rgba(236,236,236, .4)",
    },
  },
  listItemLink: {
    color: "#64616E",
    textDecoration: "none",
  },
  dropDown: {
    background: "#FFF",
    borderRadius: "6px",
    boxShadow: "0 1px 3px 0 rgba(0,0,0,.05), 0 5px 20px 0 rgba(0,0,0,.15)",
    listStyle: "none",
    minWidth: "220px",
    margin: "0",
    paddingLeft: "0px",
    visibility: "hidden",
    opacity: "0",
    position: "absolute",
    marginTop: "1rem",
    left: "0",
    transform: "translateY(0%)",
    transition: "all .3s ease-in-out",
    overflow: "hidden",
    zIndex: "999",
  },
}))(HeaderNavDesktopWelcome);
