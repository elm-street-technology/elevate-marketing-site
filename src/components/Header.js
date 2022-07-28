import React, { Component } from "react";
import Link from "gatsby-link";
import withStyles from "elevate-ui/withStyles";
import Container from "./Container";
import classNames from "classnames";
import Elevatelogo from "../images/elevate_tag.svg";
import HeaderNavDesktop from "./HeaderNavDesktop";
import HeaderNavMobile from "./HeaderNavMobile";
import Dehaze from "elevate-ui-icons/Dehaze";
import noScroll from "no-scroll";
import Logo from "./Logo";

class Header extends Component {
  state = {
    isMenuOpen: false,
  };

  componentDidMount = () => {
    console.log('make sure noscroll is off');
    noScroll.off();
  }

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
    
    let thisPath = '';
    if(this.props.currentLocation){
      thisPath = this.props.currentLocation.pathname;
    }

    return (
      <div>
      <header className={classes.root}>
        <Container>
          <div className={classes.inner}>
            
            <Link className={classes.logo} to="/">
                
                <div style={{ width: "160px" }}>
                <img src={Elevatelogo} width="100%"/>
                </div>
                
            </Link>
            
            <button onClick={this.onMenuOpen} className={classes.navMobileIcon}>
              <Dehaze size={30} aria-hidden={"true"} />
            </button>
            <HeaderNavDesktop className={classes.navDesktop} />
            <HeaderNavMobile
              className={classNames(
                classes.navMobile,
                this.state.isMenuOpen && classes.navMobileOpen
              )}
              onMenuClose={this.onMenuClose}
            />
            <Link to="/get-started" className={classes.getStartedLink}>
              Schedule Demo
            </Link>
          </div>
        </Container>
        
        <button
          onClick={this.onMenuClose}
          className={classNames(
            classes.navMobileUnderlay,
            this.state.isMenuOpen && classes.navMobileUnderlayOpen
          )}
        />
      </header>
     
        {thisPath != '/leadgen' && thisPath != '/leadgen/' && 
        <div className={classes.violator}>
          <span style={{fontWeight:"bold", fontSize:"14px"}}>Try Elevate's Social Pro&reg; <span  style={{color:"#fdf134",}}>FREE FOR 60-DAYS!</span></span>
          <Link to="/freetrial" target="_blank" style={{color:"#fdf134", fontWeight:"bold", marginLeft:"8px", fontSize:"14px"}}>Create Account</Link>
        </div>
            }
       
      </div>
    
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
  violator:{
    display:"fixed",
    background:"#e72f6c",
    color:"#FFFFFF",
    position:"fixed",
    top:"80px",
    padding:"15px",
    width:"100%",
    textAlign:"center",
    zIndex:"100",
    lineHeight:"22px"
  }
}))(Header);
