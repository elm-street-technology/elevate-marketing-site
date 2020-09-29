import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import Formchecklist from "../components/Formchecklist";
import SEO from "../components/SEO";
import Checklistlogo from "../images/checklist_logo.png";
import Checklistbottom from "../images/checklist_bottom.jpg";


const Brokeragetechchecklist = ({ children, classes, data, tags }) => {
  const postNode = {
      title: `Brokerage Technology Checklist - ${config.siteTitle}`,
  };

  return (
    <div className={classes.root}>
      <Helmet>
              <title>{`Brokerage Technology Checklist - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="Brokerage Technology Checklist" customTitle />

      <Container>
        <div >
                  <div style={{ maxWidth: "900px", backgroundColor: "#f7f7f7", marginRight:"auto",marginLeft:"auto",paddingTop:"35px", textAlign:"center"}}>
                
                <div style={{paddingLeft:"65px", paddingRight:"65px",}}>
                    <img src={Checklistlogo} width="100%"  style={{paddingBottom:"25px", paddingTop:"20px", maxWidth:"450px", textAlign:"center"}}  />
                   <h1 className={classes.Heading}>Brokerage Technology Checklist<br />
                    FREE DOWNLOAD</h1>
                  <div style={{color:"#495050", lineHeight:"26px", textAlign:"center", paddingBottom:"30px"}}>
                  Your comprehensive guide to selecting the right technology partner for your brokerage.  Includes the top 4 questions to ask tech companies to separate potential partners from vendors, and a checklist of features &amp; functionality to explore.
                 </div>
                 </div>


                <div style={{ paddingLeft: "30px", paddingRight: "30px", paddingBottom:"20px"}}>
                    <Formchecklist />
                </div>
                <div>
                    <img src={Checklistbottom} style={{ width: "100%" }} />
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
}))(Brokeragetechchecklist);
