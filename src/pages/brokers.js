import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import SEO from "../components/SEO";
import Row from "../components/Row";
import Col from "../components/Col"
import Screenshot from "../images/pdf_screenshot.png"
import ResponsiveVid from "../components/ResponsiveVid"
import HeadBackground from "../images/broker_bg.jpg"
import BOSSLogo from "../images/elevate_boss_white_logo.png"
import FormBroker from "../components/FormBroker"

const Brokers = ({ children, classes, data, tags }) => {
  const postNode = {
      title: `Your Single Source Solution - ${config.siteTitle}`,
  };

  return (
      <div>
          <div className={classes.headBackground}>
              <div style={{textAlign:"center"}}>
              <img src={BOSSLogo} style={{width:"400px",marginTop:"80px"}}/>
              <div style={{fontWeight:"700",color:"#5bbfb7",margin:"10px",fontSize:"30px"}}>
                The power of PRODUCTIVITY
              </div>
              </div>
          </div>
    <div className={classes.root}>
      <Helmet>
              <title>{`Your Single Source Solution - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="broker" customTitle />

      
      <Container>
       
        <Row>
        <Col>
            
            <div style={{textAlign:"center"}}>
            <div style={{textAlign:"center",margin:"30px"}}>
                
                <h1 className={classes.heading}>Tour the <span style={{color:"#f05953"}}>BOSS</span></h1>
            </div>
            <p>Request your personal consultation with our brokerage development team using the form below,<br/>or call 833.978.1196 to speak to us today.</p>
            </div>
            <div style={{width:"80%",marginLeft:"auto",marginRight:"auto",marginTop:"20px"}}>
                {/*
            <FormLanding firstname={this.state.firstname} lastname={this.state.lastname} email={this.state.email} phone={this.state.phone} />
                */}
                <FormBroker />
            </div>
            
        </Col>
        </Row>

        <Row >
        <Col>
            <hr/>
            <div style={{textAlign:"center",margin:"30px"}}>
                
                <h1 className={classes.heading}>Be the <span style={{color:"#f05953"}}>BOSS</span> (of Recruiting)</h1>
                <p>Free Download: "The 27 Most Influential Words that Brokers Should Use When Recruiting"</p>
            </div>
        </Col>
        </Row>
        <Row>
        <Col md={6} style={{textAlign:"center"}}>
        
            <img src={Screenshot} alt="PDF Screenshot" style={{width:"80%",marginLeft:"auto",marginRight:"auto"}}/>
        
        </Col>
        <Col style={{textAlign:"center"}}>
        Created by VP of Brokerage Development and linguistics expert Frank Chimento, this popular guide will introduce you approaching recruitment and retention conversations from a position of persuasion and influence.  
        A "must-read" for all brokers.
        <div style={{marginTop:"30px",marginBottom:"30px",textAlign:"center"}}>
            <div style={{width:"60%",marginLeft:"auto",marginRight:"auto",marginTop:"40px"}}>
                <a href="/assets/recruiting_influencial_words.pdf" style={{
                    color: "#FFF",
                    padding: "14px 16px",
                    fontSize: "14px",
                    fontWeight: "700",
                    alignContent: "center",
                    borderRadius: "4px",
                    letterSpacing: ".25px",
                    justifyContent: "center",
                    textDecoration: "none",
                    backgroundColor: "#55c3ba",
                }}>Download Now</a></div>
        </div>
        </Col>
        </Row>
        <Row >
        <Col>
            
            <div style={{textAlign:"center",margin:"30px"}}>
                
                <h1 className={classes.heading}>Explore <span style={{color:"#f05953"}}>MORE</span></h1>
                <p>Looking for more information?  Explore below or call 833.978.1196 to speak to a member<br />
                  of our brokerage development team.  We're here to help.</p>
            </div>
        </Col>
        </Row>
        
        
      </Container>
    </div>
    </div>
  );
};

export default withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    padding: "0 8px",
    margin: "0px auto",
    lineHeight: "1.5",
    color: "#212529",
  },
  headBackground:{
    backgroundImage: `url('${HeadBackground}')`,
    backgroundPosition: "bottom",
    width:"100%",
    minHeight:"280px"
  },
  heading: {
    fontSize: "40px",
    fontWeight: "700",
    letterSpacing: ".14px",
    color: "#1e1749",
    textAlign: "center",
    marginBottom: "12px",
  },
  heading2:{
    fontSize: "28px",
    fontWeight: "700",
    letterSpacing: ".14px",
    color: "#5bbfb7",
    textAlign: "center",
    marginBottom: "12px",
  },
  subHeading: {
    fontSize: "18px",
    lineHeight: "28px",
    letterSpacing: ".08px",
    textAlign: "center",
    margin: "0 auto 36px",
  },
  landingHeaderStyle:{
    textAlign:"center",
  },
  fullWidthVid:{
      width: "100%",
      marginLeft:"auto",
      marginRight:"auto",
      [theme.breakpoints[900]]: {
        width: "75%"
    },
  },

}))(Brokers);
