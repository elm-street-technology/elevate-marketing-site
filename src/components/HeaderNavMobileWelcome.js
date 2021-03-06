import React from "react";
import Link from "gatsby-link";
import withStyles from "elevate-ui/withStyles";
import classNames from "classnames";
import Close from "elevate-ui-icons/Close";

const HeaderNavMobileWelcome = ({ classes, className, onMenuClose }) => {
  return (
    <nav className={classNames(classes.nav, className)}>
      <div className={classes.topNav}>
        <button onClick={onMenuClose} className={classes.navMobileIcon}>
          <Close size={30} aria-hidden={"true"} />
        </button>
      </div>
      <div className={classes.link}>
      <Link className={classes.listItemLink} to="/events"><div className={classes.navItem}>Upcoming Events</div></Link>
     
      </div>
      <div className={classes.link}>
      <Link className={classes.listItemLink} to="/webinars"><div className={classes.navItem}>Webinars</div></Link>
      </div>
      <div className={classes.link}>
      <Link className={classes.listItemLink} to="https://elmstreettechnology.zendesk.com/hc/en-us" target="_blank"><div className={classes.navItem}>Help Center</div></Link>
      </div>

      <div className={classes.link}>
      <Link className={classes.listItemLink} to="/blog"><div className={classes.navItem}>Blog</div></Link>
      </div>
      <Link to="/get-started" className={classes.getStartedLink}>
        Get Started
      </Link>
    </nav>
  );
};

export default withStyles((theme) => ({
  nav: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "280px",
    width: "100%",
    paddingTop: "30px",
    paddingBottom: "30px",
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    background: "#FFF",
    zIndex: "9999999",
    overflowY: "scroll",
    boxShadow: "0 1px 3px 0 rgba(0,0,0,.1), 0 5px 20px 0 rgba(0,0,0,.2)",
  },
  topNav: {
    display: "flex",
    alignItems: "center",
  },
  navItem: {
    display: "flex",
    fontWeight: "600",
    fontSize: "16px",
  },

  navMobileIcon: {
    color: "#2E2E35",
    position: "fixed",
    display: "inline-flex",
    top: "26px",
    right: "26px",
    zIndex: "1",

    "&:focus": {
      outline: "1px solid #fff",
    },
  },

  link: {
    paddingLeft: "20px",
    padding: "1rem",
    fontSize: "18px",
    color: "#64616E",
    borderBottom: "1px solid rgba(236,236,236, .6)",
  },
  listItem: {
    padding: "15px",
    width: "100%",
    fontSize: "14px",
  },
  listItemLink: {
    color: "#64616E",
    textDecoration: "none",
  },
  dropDown: {
    background: "#FFF",
    display: "flex",
    flexDirection: "column",
    marginTop: "1rem",
  },

  getStartedLink: {
    display: "flex",
    flexShrink: "0",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    fontSize: "14px",
    fontWeight: "700",
    letterSpacing: ".25px",
    color: theme.colors.secondary,
    border: `1px solid ${theme.colors.secondary}`,
    textDecoration: "none",
    padding: "12px 16px",
    borderRadius: "4px",
    alignSelf: "center",
    marginTop: "20px",
  },
}))(HeaderNavMobileWelcome);
