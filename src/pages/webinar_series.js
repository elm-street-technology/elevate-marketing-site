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
import WideImage from "../images/1200.jpg";
import exImage from "../images/example.png";
import exImage2 from "../images/example2.png";
import exImage3 from "../images/example3.png";
import Slidegif from "../images/slide.gif";
import bgImage from "../images/examplebg.jpg";

const Demo = ({ classes }) => {

  return (
    <div className={classes.root}>
      <Header />
      <SEO />

      <PageTitleImage title="The power of LEARNING" image={WideImage}>
      Explore our <span style={{ fontWeight: "bold" }}>online education series</span><br />
      from the comfort of your couch!
      </PageTitleImage>










      <div style={{ paddingTop:"35px", paddingLeft:"25px", paddingright:"25px",}}>
        <div>
        <Section1Col>
        Can’t make one of our in-person Boot Camps? No worries!<br />
        Join one of our upcoming webinars where we cram as much of our great education<br />
        into a one-hour deep dive.  Business suit NOT required!
        
          <div style={{ textAlign: "center", }}>
                <Link to="/upgrade" className={classes.ctabutton}>
                  Register TODAY</Link>
                  <br /><br />
                <img src={Slidegif} style={{width:"100%", maxWidth:"1100px", display:"block", marginLeft:"auto", marginRight:"auto", paddingTop:"13px",}}/>
          </div>
          
        </Section1Col>
      </div>
      </div>








        <div style={{backgroundColor:"#f7f7f7"}}><Container>
                <div style={{textAlign:"center", paddingTop:"45px", paddingBottom:"10px",}}>

                   
                <div className={classes.centerheading}><span style={{ fontWeight: "bold" }}>Frequently Asked Questions</span></div>
                <div className={classes.centersubtext}>about our Webinar Series</div>
                    

                </div>
  </Container>
  </div>


        <div style={{paddingTop:"20px", paddingBottom:"50px", backgroundColor:"#f7f7f7"}}>
        <Container>
            <div className={classes.flexContainer}>
                <div className={classes.flexItem} style={{padding:"25px",}}>  
                <div className={classes.leftsubheading}>Who should attend?</div>
                <div className={classes.leftsubtext}>Our Webinars are designed to energize, educate &amp; empower real estate agents across the U.S.</div>
                <br />
                <div className={classes.leftsubheading}>What will we learn?</div>
                <div className={classes.leftsubtext}>Agents will learn tips, tricks &amp; strategies in a fast-paced, easy-to-digest environment that will help them grow their online brand through intelligent, thoughtful marketing.</div>
                <br />
                <div className={classes.leftsubheading}>How long is the event?</div>
                <div className={classes.leftsubtext}>Our webinars run 1-hour ent usually runs about 2-hours, complete with breakfast and/or lunch, Q&amp;A and exciting giveaways (like an Amazon Fire Tablet to help agents stay mobile).</div>
                </div>
                <div className={classes.flexItem} style={{padding:"25px",}}>
                <div className={classes.leftsubheading}>Is there a cost to participate?</div>
                <div className={classes.leftsubtext}>No.  All of our Boot Camp events are FREE for attendees.</div>
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





}))(Demo);
