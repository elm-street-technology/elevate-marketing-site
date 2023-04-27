import React from "react";
import Link from "gatsby-link";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import Container from "./Container";
import Elevatelogo from "../images/elevate_tagw.svg";
import config from "../utils/siteConfig";
import SocialLinks from "./SocialLinks";

const Footer = ({ classes }) => (
  <div className={classes.root}>
    <Container>
      <div className={classes.grid}>
        <div className={classNames(classes.column, classes.logo)}>
          <Link to="/">
          <div style={{ width: "170px", paddingBottom:"30px" }}>
                <img src={Elevatelogo} width="100%"/>
                </div>
          </Link>
   
        </div>

        <div className={classes.column}>
          <div className={classes.section}>Products</div>
          <Link className={classes.link} to="/elevate_at_a_glance">
            Elevate At-A-Glance
          </Link>
          <Link className={classes.link} to="/socialpro">
            Social Pro&reg;
          </Link>
       
          <Link className={classes.link} to="/elevatedms">
            DMS&reg;
          </Link>
          <Link className={classes.link} to="/dmsplus">
            DMS PLUS&reg;
          </Link>
          <Link className={classes.link} to="/elite">
            Elite&reg;
          </Link>
          <Link className={classes.link} to="/elitepro">
            Elite Pro&trade;
          </Link>
          <Link className={classes.link} to="/boss">
            BOSS&reg;
          </Link>
          <Link className={classes.link} to="/compare_products">
            Compare Products
          </Link>
        </div>

        {/*
        <div className={classes.column}>
          <div className={classes.section}>Solutions</div>
          <Link className={classes.link} to="/agents">
            Agents
          </Link>
          <Link className={classes.link} to="/brokers">
            Brokers
          </Link>
          <Link className={classes.link} to="/teams">
            Teams
          </Link>
        </div>
        */}
      

        <div className={classes.column}>
          <div className={classes.section}>Explore</div>
          <Link className={classes.link} to="/events">
            Educational Programs
          </Link>
          <Link className={classes.link} to="/events_sm">
            Social Media Boot Camp
          </Link>
          <Link className={classes.link} to="/events_lg">
            Lead Gen. Boot Camp
          </Link>
          <Link className={classes.link} to="/events_listings">
            Listings Boot Camp
          </Link>
          <Link className={classes.link} to="/events_referrals">
            Referrals Boot Camp
          </Link>
          <Link className={classes.link} to="/markets">
            MLS Markets
          </Link>
          <Link className={classes.link} to="/testimonials">
            Happy Clients
          </Link>
          
        </div>


        <div className={classes.column}>
          <div className={classes.section}>Support</div>
          <a
            className={classes.link}
            href="https://support.tryelevate.com/s/"
            target="_blank"
          >
            Help Center
          </a>
          <Link className={classes.link} to="/webinars">
            Training Webinars
          </Link>
          <Link className={classes.link} to="/blog">
            Blog
          </Link>
          <Link className={classes.link} to="/dailymarketingtips">
            Daily Marketing Tips
          </Link>
          <Link className={classes.link} to="/free_educational_guides">
            Free Educational Guides
          </Link>
          <a className={classes.link} href="https://elmstreet.com/terms" target="_blank">
            Terms of Service
          </a>
          <a className={classes.link} href="https://elmstreet.com/terms" target="_blank">
            Pricing &amp; Refund Policy
          </a>
          <a className={classes.link} href="https://elmstreet.com/privacy" target="_blank">
            Privacy Policy
          </a>
          <a className={classes.link} href="https://elmstreet.com/dmca" target="_blank">
            DMCA Notice
          </a>
          <SocialLinks className={classes.social} />
        </div>
      </div>
    </Container>
  </div>
);

export default withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#5A5B5C",
    padding: "48px 16px",

    [theme.breakpoints[900]]: {
      padding: "64px 24px",
    },

    [theme.breakpoints[1200]]: {
      padding: "96px 64px",
    },
  },
  grid: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(1, 1fr)",
    gridColumnGap: "25px",
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
}))(Footer);
