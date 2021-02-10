import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import ResponsiveVid from "../components/ResponsiveVid"
import Formlistingguide from "../components/Formlistingguide";
import SEO from "../components/SEO";
import List from "../images/lll.png";


const Listingsguide = ({ children, classes, data, tags }) => {
  const postNode = {
      title: `Listings Guide - ${config.siteTitle}`,
  };

  return (
    <div className={classes.root}>
      <Helmet>
              <title>{`Listings Guide - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="Listings Guide" customTitle />

      <Container>
        <div >
                  <div style={{ maxWidth: "900px", backgroundColor: "#f7f7f7", marginRight:"auto",marginLeft:"auto",paddingTop:"35px", textAlign:"center"}}>
                
                <div style={{paddingLeft:"65px", paddingRight:"65px",}}>
                <img src={List} width="100%" style={{paddingBottom:"20px", maxWidth:"550px"}}/>
                   <h1 className={classes.Heading}>Download Your Free, All-Inclusive Guide!<br />
Listings, Listings, Listings!<br />
Marketing to Capture &amp; Convert Seller Leads!</h1>
                  <div style={{color:"#495050", lineHeight:"26px", textAlign:"center", paddingBottom:"35px"}}>
                  Whether you want to capture seller leads, are trying to create a killer
listing presentation, or are looking for unique ways to make your
listings stand out, we've got you covered!
<br /><br />
Download this educational guide and get the tips, tricks,
and strategies from the pros to make the lead capture-to-conversion
process as seamless, scalable, and successful as possible.
                 </div>
                 </div>

                 


                <div style={{ paddingLeft: "20px", paddingRight: "20px", paddingBottom:"40px"}}>
                    <Formlistingguide />
                </div>
                
            </div>
        </div>
      </Container>
      
    </div>
  );
};

export default withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    padding: "0 8px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "0px",
    marginBottom: "70px",
  },

Heading: {
  fontSize: "28px",
  fontWeight: "700",
  lineHeight: "36px",
  letterSpacing: ".14px",
  color: "#55c3ba",
  textAlign: "center",
  marginBottom: "18px",
  },

  fullWidthVid:{
    width: "100%",
    marginLeft:"auto",
    marginRight:"auto",
    [theme.breakpoints[900]]: {
      width: "75%"
  },
},

subHeading: {
    fontSize: "18px",
    lineHeight: "28px",
    fontWeight: "600",
    letterSpacing: ".08px",
    color: "#888f96",
    textAlign: "center",
    margin: "0 auto 36px",
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
    marginBottom:"30px"
  },
}))(Listingsguide);
