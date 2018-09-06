import React from "react";
import Link from "gatsby-link";
import withStyles from "elevate-ui/withStyles";
import classNames from "classnames";
import Close from "elevate-ui/Icon/Close";

const HeaderNavMobile = ({ classes, className, onMenuClose }) => {
  return (
    <nav className={classNames(classes.nav, className)}>
      <div className={classes.topNav}>
        <Link to="/">
          <svg width={140} viewBox="0 0 200 63">
            <defs />
            <path
              fill="#F15953"
              d="M9.33 47.9A15.54 15.54 0 0 1 6 43.05 15.29 15.29 0 0 1 9.33 26.2a15.89 15.89 0 0 1 4.93-3.29 15.14 15.14 0 0 1 6-1.23 15 15 0 0 1 10.97 4.52 15.72 15.72 0 0 1 3.29 4.89 15.09 15.09 0 0 1 1.23 6 2.6 2.6 0 0 1-2.55 2.59h-23a10 10 0 0 0 3.66 5.46 10 10 0 0 0 6.41 2.18q5.67 0 8.75-3.45a2.4 2.4 0 0 1 1.76-.87 2.51 2.51 0 0 1 1.85.61 2.54 2.54 0 0 1 .2 3.58c-3 3.45-7.23 5.17-12.53 5.17a14.71 14.71 0 0 1-11-4.47m21-13.4a10.37 10.37 0 0 0-20.1 0zM42.94 1.71a2.56 2.56 0 0 1 2.55 2.55v45.61a2.58 2.58 0 0 1-.74 1.81 2.49 2.49 0 0 1-1.81.74 2.43 2.43 0 0 1-1.81-.74 2.51 2.51 0 0 1-.74-1.81V4.26a2.56 2.56 0 0 1 .74-1.81 2.43 2.43 0 0 1 1.81-.74M54.61 47.9a15.54 15.54 0 0 1-3.29-4.85 15.29 15.29 0 0 1 3.29-16.85 15.89 15.89 0 0 1 4.93-3.29 15.17 15.17 0 0 1 6-1.23 15 15 0 0 1 10.97 4.52 15.72 15.72 0 0 1 3.29 4.89 15.09 15.09 0 0 1 1.23 6 2.53 2.53 0 0 1-.74 1.81 2.6 2.6 0 0 1-1.81.78H55.56a9.92 9.92 0 0 0 3.65 5.46 10 10 0 0 0 6.41 2.18q5.67 0 8.76-3.45A2.38 2.38 0 0 1 76.1 43a2.49 2.49 0 0 1 1.85.61 2.54 2.54 0 0 1 .21 3.58c-3 3.45-7.24 5.17-12.54 5.17a14.75 14.75 0 0 1-11-4.47m21-13.4a10.37 10.37 0 0 0-20.1 0zM111.56 8.33a2.27 2.27 0 0 1 .21.94 2.18 2.18 0 0 1-.25 1L99.19 35.94a3 3 0 0 1-5.26 0L81.61 10.3a2.18 2.18 0 0 1-.25-1 2.27 2.27 0 0 1 .21-.94 2.69 2.69 0 0 1 1.56-1.4 3.35 3.35 0 0 1 1.11-.21 3 3 0 0 1 1.07.21 2.57 2.57 0 0 1 1.56 1.35l9.69 20.14 9.66-20.14a2.65 2.65 0 0 1 1.56-1.35 3 3 0 0 1 1.07-.21 3.59 3.59 0 0 1 1.15.21 2.61 2.61 0 0 1 1.56 1.4M140 21.64a2.37 2.37 0 0 1 1.8.78 2.45 2.45 0 0 1 .74 1.81v25.64a2.56 2.56 0 0 1-2.54 2.55 2.66 2.66 0 0 1-1.81-.74 2.48 2.48 0 0 1-.78-1.81v-1.32a14.92 14.92 0 0 1-20.67-.61 15.53 15.53 0 0 1 0-21.74 14.89 14.89 0 0 1 20.67-.66v-1.27a2.67 2.67 0 0 1 2.59-2.63m-12.62 25.68a9.55 9.55 0 0 0 7.07-3 10.51 10.51 0 0 0 0-14.55 9.83 9.83 0 0 0-13.93-.2l-.21.2a10.43 10.43 0 0 0 0 14.55 9.55 9.55 0 0 0 7.07 3M161.08 21.64a2.39 2.39 0 0 1 1.81.78 2.6 2.6 0 0 1 0 3.62 2.48 2.48 0 0 1-1.81.78h-4v23.09a2.56 2.56 0 0 1-2.55 2.55 2.4 2.4 0 0 1-1.76-.74 2.42 2.42 0 0 1-.78-1.81V26.78h-3.95a2.45 2.45 0 0 1-1.81-.79 2.58 2.58 0 0 1 0-3.61 2.62 2.62 0 0 1 1.81-.78H152V4.26a2.59 2.59 0 0 1 2.5-2.59 2.46 2.46 0 0 1 1.85.78 2.49 2.49 0 0 1 .74 1.81v17.38zM169.5 47.9a15.54 15.54 0 0 1-3.29-4.85 15.29 15.29 0 0 1 3.29-16.85 15.89 15.89 0 0 1 4.93-3.29 15.17 15.17 0 0 1 6-1.23 15 15 0 0 1 10.97 4.52 15.72 15.72 0 0 1 3.29 4.89 15.09 15.09 0 0 1 1.23 6 2.53 2.53 0 0 1-.74 1.81 2.6 2.6 0 0 1-1.81.78h-23a10 10 0 0 0 3.66 5.46 10.13 10.13 0 0 0 6.41 2.14q5.67 0 8.75-3.45A2.47 2.47 0 0 1 191 43a2.52 2.52 0 0 1 2.05 4.2c-3 3.45-7.23 5.17-12.53 5.17a14.69 14.69 0 0 1-11-4.43m21-13.4a10.37 10.37 0 0 0-20.1 0z"
            />
            <path
              d="M95.56 41.09L81 59.72a1.32 1.32 0 0 0 1 2.14h29.11a1.32 1.32 0 0 0 1-2.14L97.66 41.09a1.32 1.32 0 0 0-2.1 0z"
              fill="#5a5c5d"
            />
          </svg>
        </Link>
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
        </ul>
      </div>
      <div className={classes.link}>
        <div className={classes.navItem}>Support</div>
        <ul className={classes.dropDown}>
          <Link className={classes.listItemLink} to="/terms-of-service">
            <li className={classes.listItem}>Terms of Service</li>
          </Link>
          <Link className={classes.listItemLink} to="/privacy">
            <li className={classes.listItem}>Privacy Policy</li>
          </Link>
          <Link className={classes.listItemLink} to="/dmca">
            <li className={classes.listItem}>DCMA Notice</li>
          </Link>
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
    top: "0",
    right: "0",
    zIndex: "1",
  },

  link: {
    float: "left",
    paddingLeft: "20px",
    padding: "1rem",
    position: "relative",
    textDecoration: "none",
    fontSize: "18px",
    color: "#64616E",
    display: "block",
    borderTop: "1px solid rgba(236,236,236, .6)",
    borderBottom: "1px solid rgba(236,236,236, .6)",

    "&:hover": {
      cursor: "pointer",
    },
  },
  listItem: {
    clear: "both",
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
    backgroundSize: "cover",
    listStyle: "none",
    margin: "0",
    paddingLeft: "0px",
    position: "relative",
    marginTop: "1rem",
    transition: "all .3s ease-in-out",
    zIndex: "999999",
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
