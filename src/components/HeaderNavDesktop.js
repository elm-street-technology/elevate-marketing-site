import React from "react";
import Link from "gatsby-link";
import withStyles from "elevate-ui/withStyles";
import classNames from "classnames";
import ArrowDropDown from "elevate-ui-icons/ArrowDropDown";

const HeaderNavDesktop = ({ classes, className }) => {
  return (
    <nav className={classNames(classes.nav, className)}>
      <div className={classes.link}>
        <div className={classes.navItem}>
          Solutions
          <ArrowDropDown size={20} />
        </div>
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
        <div className={classes.navItem}>
          Products
          <ArrowDropDown size={20} />
        </div>
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
        <div className={classes.navItem}>
          Support
          <ArrowDropDown size={20} />
        </div>
        <ul className={classes.dropDown}>
          <a
            className={classes.listItemLink}
            href="https://elmstreettechnology.zendesk.com/hc/en-us"
            target="_blank"
            rel="noreferrer noopener"
          >
            <li className={classes.listItem}>Help Center</li>
          </a>
          <Link className={classes.listItemLink} to="/webinars">
            <li className={classes.listItem}>Webinars</li>
          </Link>
          <Link className={classes.listItemLink} to="/blog">
            <li className={classes.listItem}>Blog</li>
          </Link>
        </ul>
      </div>
      <div className={classes.link}>
        <div className={classes.navItem}>
          Explore
          <ArrowDropDown size={20} />
        </div>
        <ul className={classes.dropDown}>
          <Link className={classes.listItemLink} to="/bootcamp">
            <li className={classes.listItem}>Social Media Boot Camp</li>
          </Link>
          <Link className={classes.listItemLink} to="/events">
            <li className={classes.listItem}>Upcoming Events</li>
          </Link>
          <Link className={classes.listItemLink} to="/testimonials">
            <li className={classes.listItem}>Happy Clients</li>
          </Link>
          <Link className={classes.listItemLink} to="/get-started">
            <li className={classes.listItem}>Schedule a Demo</li>
          </Link>
          <Link className={classes.listItemLink} to="/markets">
            <li className={classes.listItem}>MLS Markets</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default withStyles((theme) => ({
  nav: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    marginRight: "8px",
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
}))(HeaderNavDesktop);
