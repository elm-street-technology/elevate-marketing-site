import React, { Component } from "react";
import Link from "gatsby-link";
import withStyles from "elevate-ui/withStyles";
import Container from "./Container";
import classNames from "classnames";
import HeaderNavDesktop from "./HeaderNavDesktopWelcome";
import HeaderNavMobile from "./HeaderNavMobileWelcome";
import Dehaze from "elevate-ui-icons/Dehaze";
import noScroll from "no-scroll";
import Logo from "./Logo";

class HeaderLander extends Component {
  state = {
    isMenuOpen: false,
  };

  onMenuOpen = () => {
    this.setState({ isMenuOpen: true });
    noScroll.on();
  };

  onMenuClose = () => {
    this.setState({ isMenuOpen: false });
    noScroll.off();
  };

  render() {
    const { classes } = this.props;
    return (
      <header className={classes.root}>
        
      </header>
    );
  }
}

export default withStyles((theme) => ({
  root: {
    zIndex: "9999",
    position: "fixed",
    top: "0",
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "80px",
    backgroundColor: "#fff",
  },
  inner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  logo: {
    marginRight: "auto",
  },
  navDesktop: {
    display: "none",

    [theme.breakpoints[900]]: {
      display: "block",
    },
  },
  navMobileIcon: {
    margin: "10px 20px",
    color: "#2E2E35",
    display: "inline-flex",

    "&:focus": {
      outline: "1px solid #fff",
    },

    [theme.breakpoints[900]]: {
      display: "none",
    },
  },
  getStartedLink: {
    display: "none",
    alignContent: "center",
    justifyContent: "center",
    fontSize: "14px",
    fontWeight: "700",
    letterSpacing: ".25px",
    backgroundColor: theme.colors.secondary,
    color: "#FFF",
    textDecoration: "none",
    padding: "14px 16px",
    borderRadius: "4px",

    [theme.breakpoints[900]]: {
      display: "block",
    },
  },

  navMobile: {
    visibility: "hidden",
    transform: "translateX(100vw)",
    transition: "all .5s ease",
  },

  navMobileOpen: {
    visibility: "visible",
    transform: "translateX(calc(100vw - 280px))",
  },

  navMobileUnderlay: {
    display: "flex",
    width: "100%",
    height: "100%",
    position: "fixed",
    visibility: "hidden",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    backgroundColor: "rgba(0,0,0, 0.5)",
    zIndex: "5",
  },
  navMobileUnderlayOpen: {
    visibility: "visible",
  },
}))(HeaderLander);
