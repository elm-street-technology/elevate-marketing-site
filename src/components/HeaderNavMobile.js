import React from "react";
import Link from "gatsby-link";
import withStyles from "elevate-ui/withStyles";
import classNames from "classnames";
import Close from "elevate-ui-icons/Close";

const HeaderNavMobile = ({ classes, className, onMenuClose }) => {
  return (
    <nav className={classNames(classes.nav, className)}>
      <div className={classes.topNav}>
        <button onClick={onMenuClose} className={classes.navMobileIcon}>
          <Close size={30} aria-hidden={"true"} />
        </button>
      </div>
      <div className={classes.link}>
        <div className={classes.navItem}>Products</div>
        <ul className={classes.dropDown}>
          <Link className={classes.listItemLink} to="/elevate-dms">
            <li className={classes.listItem}>DMS</li>
          </Link>
          <Link className={classes.listItemLink} to="/elevate-social-pro">
            <li className={classes.listItem}>Social Pro</li>
          </Link>
          <Link className={classes.listItemLink} to="/elevate-idx">
            <li className={classes.listItem}>IDX</li>
          </Link>
          <Link className={classes.listItemLink} to="/elevate-ignite">
            <li className={classes.listItem}>Ignite</li>
          </Link>
          <Link className={classes.listItemLink} to="/elevate-elite">
            <li className={classes.listItem}>Elite</li>
          </Link>
          <Link className={classes.listItemLink} to="/crm">
            <li className={classes.listItem}>CRM</li>
          </Link>
          <Link className={classes.listItemLink} to="/recruiter">
            <li className={classes.listItem}>Recruiter</li>
          </Link>
        </ul>
      </div>
      <div className={classes.link}>
        <div className={classes.navItem}>Solutions</div>
        <ul className={classes.dropDown}>
          <Link className={classes.listItemLink} to="/agents">
            <li className={classes.listItem}>Agents</li>
          </Link>
          <Link className={classes.listItemLink} to="/teams">
            <li className={classes.listItem}>Teams</li>
          </Link>
          <Link className={classes.listItemLink} to="/brokers">
            <li className={classes.listItem}>Brokers</li>
          </Link>
        </ul>
      </div>
      <div className={classes.link}>
        <div className={classes.navItem}>About</div>
        <ul className={classes.dropDown}>
          <Link className={classes.listItemLink} to="/blog">
            <li className={classes.listItem}>Blog</li>
          </Link>
          <Link className={classes.listItemLink} to="/testimonials">
            <li className={classes.listItem}>Testimonials</li>
          </Link>
          <Link className={classes.listItemLink} to="/markets">
            <li className={classes.listItem}>Markets</li>
          </Link>
          <Link className={classes.listItemLink} to="/events">
            <li className={classes.listItem}>Events</li>
          </Link>
          <Link className={classes.listItemLink} to="/webinars">
            <li className={classes.listItem}>Webinars</li>
          </Link>
          <Link className={classes.listItemLink} to="/bootcamp">
            <li className={classes.listItem}>Social Media Bootcamp</li>
          </Link>
        </ul>
      </div>
      <div className={classes.link}>
        <div className={classes.navItem}>Support</div>
        <ul className={classes.dropDown}>
          <a
            className={classes.listItemLink}
            href="https://elmstreettechnology.zendesk.com/hc/en-us"
            target="_blank"
          >
            <li className={classes.listItem}>Help Center</li>
          </a>
        </ul>
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
    color: theme.colors.primary,
    border: `1px solid ${theme.colors.primary}`,
    textDecoration: "none",
    padding: "12px 16px",
    borderRadius: "4px",
    alignSelf: "center",
    marginTop: "20px",
  },
}))(HeaderNavMobile);
