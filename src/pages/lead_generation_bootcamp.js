import React from "react";
import Link from "gatsby-link";
import withStyles from "elevate-ui/withStyles";
import Container from "../components/Container";
import SEO from "../components/SEO";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Section2Col from "../components/Section2Col";
import Section1Col from "../components/Section1Col";
import PageTitleImage from "../components/PageTitleImage";
import BgSection from "../components/BgSection";
import TestImage from "../images/600.jpg";
import WideImage from "../images/leadbg.jpg";
import exImage from "../images/example.png";
import exImage2 from "../images/example2.png";
import exImage3 from "../images/example3.png";
import Slidegif from "../images/slide.gif";
import bgImage from "../images/examplebg.jpg";

const lead_generation_bootcamp = ({ classes }) => {

  return (
    <div className={classes.root}>
      <Header />
      <SEO />

      <PageTitleImage title="The power of SHARING" image={WideImage}>
      The latest in Elevate’s boot camp series, agents learn the secrets of <span style={{ fontWeight: "bold" }}>capturing and converting online leads</span><br />
      from industry experts sharing their expertise.
      </PageTitleImage>







      <div style={{paddingTop:"30px", paddingBottom:"60px",}}>
        <Container>
            <div className={classes.flexContainer}>
                <div className={classes.flexItem}>

                   
                <iframe width="100%" height="350" src="https://www.youtube.com/embed/fGRZ8-mLwnQ?autoplay=1&rel=0"
          frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    

                </div>
                <div className={classes.flexItem} style={{paddingLeft:"25px", paddingRight:"25px", paddingBottom:"25px"}}>
                <div className={classes.leftsubtext}>Developed by popular demand, the “Secrets of Lead Generation” Boot Camp deep dives into capturing, nurturing &amp; converting more leads...faster.
                <br /><br />
                <span style={{ fontWeight: "bold" }}>Are we coming to your town?</span>
                <Link to="/upgrade" className={classes.ctabutton}>
                  View Upcoming Schedule</Link>
                </div>

                </div>
            </div>
        </Container>
        </div>











        <div style={{backgroundColor:"#f7f7f7"}}><Container>
                <div style={{textAlign:"center", paddingTop:"45px", paddingBottom:"10px",}}>

                   
                <div className={classes.centerheading}><span style={{ fontWeight: "bold" }}>Frequently Asked Questions</span></div>
                <div className={classes.centersubtext}>about our Boot Camp Series</div>
                    

                </div>
  </Container>
  </div>


        <div style={{paddingTop:"20px", paddingBottom:"50px", backgroundColor:"#f7f7f7"}}>
        <Container>
            <div className={classes.flexContainer}>
                <div className={classes.flexItem} style={{padding:"25px",}}>  
                <div className={classes.leftsubheading}>Who should attend?</div>
                <div className={classes.leftsubtext}>Our Boot Camps are designed to energize, educate &amp; empower real estate agents across the U.S.</div>
                <br />
                <div className={classes.leftsubheading}>What will we learn?</div>
                <div className={classes.leftsubtext}>Agents will learn tips, tricks &amp; strategies in a fast-paced, easy-to-digest environment that will help them grow their online brand through intelligent, thoughtful marketing.</div>
                <br />
                <div className={classes.leftsubheading}>How long is the event?</div>
                <div className={classes.leftsubtext}>Our Boot Camp usually runs about 2-hours and 15 minutes.</div>
                </div>
                <div className={classes.flexItem} style={{padding:"25px",}}>
                <div className={classes.leftsubheading}>Is there a cost to participate?</div>
                <div className={classes.leftsubtext}>No. All of our Boot Camp events are FREE for attendees.</div>
                <br />
                <div className={classes.leftsubheading}>How do I register?</div>
                <div className={classes.leftsubtext}>Click here to view our upcoming tour schedule. Select an event you’d like to attend and follow the online registration process...and be sure to invite your friends &amp; colleagues who may also be interested!</div>
                <br />
                <div className={classes.leftsubheading}>How do I book a boot camp for my agents?</div>
                <div className={classes.leftsubtext}>That’s easy.  Fill out the request form above OR contact Todd Colthorp, Director of Elevate Events at XXX.XXX.XXXX | todd@tryelevate.com to start the conversation.</div>
                </div>
            </div>
        </Container>
        </div>

      <Footer />
    </div>
  );
};







export default withStyles((theme) => ({
  root: {
    position: "relative",
    paddingTop: "0px",
    paddingBottom: "0px",

    [theme.breakpoints[900]]: {
        paddingTop: "48px",
    },
  },
  leftsubheading: {
    color: "#4bbbb1",
    fontSize: "18px",
    fontWeight: "900",
    letterSpacing: ".25px",
    fontWeight: "600",
    lineHeight: "1.6",
  
    [theme.breakpoints[900]]: {
        fontSize: "18px",
    },
  },
  leftsubtext: {
    color: "#5A5B5C",
    fontWeight: "500",
    fontSize: "18px",
    letterSpacing: ".25px",
    lineHeight: "1.6",
    marginbottom: "20px",
    textAlign: "left",
    [theme.breakpoints[900]]: {
        fontSize: "16px",
    },
  },

  flexContainer: {
    padding: "0",
    margin: '0',
  
    display: "-webkit-box",
    display: "-moz-box",
    display: "-ms-flexbox",
    display: "-webkit-flex",
    display: "flex",
    flexWrap: "wrap",
  
  },

  flexItem: {
    maxWidth: "100%",
    width: "100%",
    paddingRight: "0px",
    paddingBottom: "25px",
  
  
    [theme.breakpoints[900]]: {
        maxWidth: "50%",
        width: "50%",
        paddingRight: "20px",
        paddingBottom: "0px",
    },
  },
  centerheading: {
    color: "#4bbbb1",
    fontSize: "30px",
    fontWeight: "700",
    letterSpacing: ".25px",
    fontWeight: "600",
    lineHeight: "1.6",
    textAlign: "center",
  
    [theme.breakpoints[900]]: {
        fontSize: "28px",
    },
  },
  centersubtext: {
    color: "#5A5B5C",
    fontWeight: "500",
    fontSize: "16px",
    letterSpacing: ".25px",
    lineHeight: "1.6",
    marginbottom: "20px",
    textAlign: "center",
  
    [theme.breakpoints[900]]: {
        fontSize: "16px",
    },
  },

  leftsubtext: {
    color: "#5A5B5C",
    fontWeight: "500",
    fontSize: "18px",
    letterSpacing: ".25px",
    lineHeight: "1.6",
    marginbottom: "20px",
    textAlign: "left",
    [theme.breakpoints[900]]: {
        fontSize: "16px",
    },
  },

  leftheading: {
    color: "#4bbbb1",
    fontSize: "30px",
    fontWeight: "700",
    letterSpacing: ".25px",
    fontWeight: "600",
    lineHeight: "1.6",
  
    [theme.breakpoints[900]]: {
        fontSize: "28px",
    },
  },

  ctabutton: {
    alignContent: "center",
    justifyContent: "center",
    fontSize: "16px",
    textAlign: "center",
    fontWeight: "500",
    minWidth: "300px",
    letterSpacing: ".25px",
    backgroundColor: theme.colors.secondary,
    color: "#FFF",
    display: "inline-block",
    marginTop: "30px",
    maxWidth: "300px",
    textDecoration: "none",
    padding: "12px 14px",
    borderRadius: "3px",
},





}))(lead_generation_bootcamp);
