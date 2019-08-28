import React from "react";
import Link from "gatsby-link";
import withStyles from "elevate-ui/withStyles";
import Container from "../components/Container";
import SEO from "../components/SEO";
import Logo from "../components/Logo";
import Hr from "elevate-ui/Hr";
import FbTracking from "../components/FbTracking";
import GoogleTracking from "../components/GoogleTracking";


const Calendlythankyou = ({ classes }) => {

  return (
    <div className={classes.root}>
      <FbTracking />
      <GoogleTracking />
      <SEO />
      <Container>
        <div className={classes.top}>
          <div className={classes.centerHeading}>
            <div className={classes.heading}>Thank YOU</div>
            <div className={classes.grayText}>
                <div>We're excited to connect with you and share the power of </div>
                          <div style={{ marginTop: "30px", marginBottom: "10px" }}>
                              <Logo height="120" width="390" />
                          </div>
                
                <div className={classes.subHeading}>
                     Capture, Nurture & Convert Leads. 
                </div>
                
            </div>
                      <div className={classes.boldTextspace}>
                Want to reach us IMMEDIATELY?<br/>
                Give us a call at 844.792.0260
            </div>
            <div>
              <Hr style={{ marginTop: "40px", marginBottom: "40px" }} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};


export default withStyles((theme) => ({
  root: {
    position: "relative",
    paddingTop: "96px",
    paddingBottom: "192px",
    lineHeight: "1.75em",
  },
  top: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
  },
  section:{
    paddingTop: "60px",
  },
  heading: {
    color: theme.colors.secondary,
    fontSize: "32px",
    fontWeight: "700",
    marginRight: "auto",
    paddingBottom: "20px",
  },
  subHeading:{
      color: theme.colors.secondary,
      fontSize: "20px",
      fontWeight: "700"
  },
  centerHeading:{
    alignItems: "center",
    width: "100%",
    textAlign: "center",
  },
  bold:{
    fontWeight:"700",
  },
  boldTextspace:{
    fontWeight:"700",
    marginTop:"30px"
  },
  column:{
    width:"530px",
    maxWidth: "100%",
    paddingRight:"10px",
    paddingLeft:"10px",
    verticalAlign: "top",
  }

}))(Calendlythankyou);
