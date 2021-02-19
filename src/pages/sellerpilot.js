import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import List from "../images/listwithme.jpg";
import FormSellerOptin from "../components/FormSellerOptin";
import SEO from "../components/SEO";

const Sellerpilot = ({ children, classes, data, tags }) => {
  const postNode = {
    title: `Seller Leads Pilot - ${config.siteTitle}`,
  };

  return (
    <div className={classes.root}>
      <Helmet>
              <title>{`Seller Leads Pilot - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="sellerpilot" customTitle />


    <a id="refer_form"></a>


    <div style={{paddingTop:"50px", paddingBottom:"50px",}}>
        
        
        <Container>
                        
   
            <div className={classes.flexContainer}>
                <div className={classes.flexItem} style={{padding:"30px", textAlign:"left"}}>
                <div className={classes.Heading2}>You're invited to participate...</div>
                <div className={classes.subtext} style={{paddingBottom:"25px"}}>in an exciting SELLER LEADS PILOT program, you lucky human!  Please verify that all of your contact information below is correct.  The address noted below will be used as the return address on your postcards.  If the information is NOT correct, please log into your Elevate account to update your account credentials or contact Customer Experience:  508-885-2040.</div>
                <FormSellerOptin/>
                </div>

                <div className={classes.flexItem} style={{padding:"30px", textAlign:"center"}}>
                <img src={List} width="100%" style={{paddingBottom:"15px"}}/>
                </div>

  


      </div>

        
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
    padding: "0px",
    margin: "2px auto",
  },
  heading: {
    fontSize: "28px",
    fontWeight: "800",
    letterSpacing: ".14px",
    color: "#2E2E35",
    textAlign: "center",
    marginBottom: "12px",
  },

  subtext: {
    fontSize: "16px",
    fontWeight: "300",
    lineHeight: "24px",
    color: "#777777",
  },

  Heading2: {
    fontSize: "28px",
    paddingBottom: "20px",
    fontWeight: "700",
    lineHeight: "40px",
    color: "#52B1AD",
    letterSpacing: ".14px",
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

  column2:{
    width:"520px",
    maxWidth: "100%",
    paddingRight:"10px",
    paddingLeft:"10px",
    verticalAlign: "top",
  },

  centerHeading:{
    alignItems: "center",
    width: "100%",
    textAlign: "center",
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

  heading: {
    color: theme.colors.secondary,
    fontSize: "32px",
    lineHeight: "40px",
    fontWeight: "700",
    marginRight: "auto",
    paddingBottom: "20px",
  },

  top: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "top",
  },
  bold:{
    fontWeight:"700",
  },
}))(Sellerpilot);
