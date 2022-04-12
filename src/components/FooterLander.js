import React from "react";
import Link from "gatsby-link";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import Container from "./Container";
import Elevatelogo from "../images/elevate_tagw.svg";
import config from "../utils/siteConfig";
import SocialLinks from "./SocialLinks";

const FooterWelcome = ({ classes }) => (
  <div className={classes.root} style={{alignItems:"center"}}>
    <Container style={{textAlign:"center", marginLeft:"auto", marginRight:"auto",}}>
          <Link to="/">
          <div style={{ width: "170px", paddingBottom:"30px" }}>
                <img src={Elevatelogo} width="100%"/>
                </div>
          </Link>
          

<div style={{color:"#FFFFFF"}}>
      You can speak to a member of our sales team immediately <br/>by calling  <a href="tel:18333031040" className={classes.link}>833.303.1040</a>.
      </div>

    </Container>
  </div>
);

export default withStyles((theme) => ({
  root: {
    textAlign: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#5A5B5C",
    padding: "35px 16px",

    [theme.breakpoints[900]]: {
      padding: "64px 24px",
      textAlign: "center",
      justifyContent: "center",
    },

    [theme.breakpoints[1200]]: {
      padding: "56px 64px",
      textAlign: "center",
      justifyContent: "center",
    },
  },
  grid: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(1, 1fr)",
    gridColumnGap: "44px",
    gridRowGap: "32px",

    [theme.breakpoints[900]]: {
      gridTemplateColumns: "repeat(5, 1fr)",
    },
  },
  column: {
    display: "flex",
    flexDirection: "column",
  },
  copyright: {
    maxWidth: "240px",
    marginTop: "8px",
    textAlign: "center",
  },
  section: {
    fontWeight: "700",
    marginBottom: "8px",
    color: "#FFF",
  },
  link: {
    color: "#FFF",
    textDecoration: "none",
    marginTop: "15px",
    lineHeight: "1.4",
  },
  social: {
    marginTop: "24px",
  },
}))(FooterWelcome);
