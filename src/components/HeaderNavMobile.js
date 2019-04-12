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
        <div className={classes.navItem}>Solutions</div>
        <ul className={classes.dropDown}>
          <Link className={classes.listItemLink} to="/bootcamp">
            <li className={classes.listItem}>Social Media Boot Camp</li>
          </Link>
          <Link className={classes.listItemLink} to="/lead_generation">
            <li className={classes.listItem}>Lead Generation Boot Camp</li>
          </Link>
          <Link className={classes.listItemLink} to="/webinar_series">
            <li className={classes.listItem}>Webinar Series</li>
          </Link>
          <Link className={classes.listItemLink} to="/brokers">
            <li className={classes.listItem}>Speaking Engagements</li>
          </Link>
          <a
            className={classes.listItemLink}
            href="http://3sixtyfive.agency/blog"
            target="_blank"
          >
            <li className={classes.listItem}>3sixtyfive Blog</li>
          </a>
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
          <Link className={classes.listItemLink} to="/elevate-social-pro">
            <li className={classes.listItem}>Training Webinars</li>
          </Link>
          <a
            className={classes.listItemLink}
            href="https://elmstreettechnology.zendesk.com/hc/en-us"
            target="_blank"
          >
            <li className={classes.listItem}>Live Chat</li>
          </a>
        </ul>
      </div>
      <div className={classes.link}>
        <div className={classes.navItem}>Explore</div>
        <ul className={classes.dropDown}>
        <Link className={classes.listItemLink} to="/markets">
            <li className={classes.listItem}>About Us</li>
          </Link>
          <Link className={classes.listItemLink} to="/webinars">
            <li className={classes.listItem}>MLS Markets</li>
          </Link>
          <Link className={classes.listItemLink} to="/blog">
            <li className={classes.listItem}>Happy Clients</li>
          </Link>
          <Link className={classes.listItemLink} to="/blog">
            <li className={classes.listItem}>Partnerships &amp; Alliances</li>
          </Link>
          <Link className={classes.listItemLink} to="/blog">
            <li className={classes.listItem}>Job Opportunities</li>
          </Link>
        </ul>
      </div>
      <div className={classes.link}>Connect</div>
      
      <div style={{textAlign:"center"}}>
      <Link to="/get-started" className={classes.ctabutton}>
        Schedule a Demo
      </Link>

      <Link to="/get-started" className={classes.ctabutton}>
        Take a Tour
      </Link>
      </div>
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

  ctabutton: {
    alignContent: "center",
    justifyContent: "center",
    fontSize: "16px",
    textAlign:"center",
    fontWeight: "500",
    minWidth: "200px",
    letterSpacing: ".25px",
    backgroundColor: theme.colors.secondary,
    color: "#FFF",
    display: "block",
    marginTop:"30px",
    maxWidth: "200px",
    textDecoration: "none",
    padding: "12px 14px",
    borderRadius: "3px",
    display: "inline-block",
  },
}))(HeaderNavMobile);
