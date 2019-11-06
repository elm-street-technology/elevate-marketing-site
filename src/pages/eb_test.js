import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import FormBright from "../components/FormBright";
import Brightlogo from "../images/brightmls_logo.png";
import Bosslogo from "../images/eboss_logo.png";
import Sprologo from "../images/spro_logo.png";
import Ask from "../images/askhow.png";
import Eboss from "../images/eboss_bg.jpg";
import Spro from "../images/socialpro_bg.jpg";
import BrightBgSectionExternal from "../components/BrightBgSectionExternal";
import SEO from "../components/SEO";

const EbTest = ({ children, classes, data, tags }) => {
  const postNode = {
      title: `Your Single Source Solution - ${config.siteTitle}`,
  };

  return (
<div className={classes.root}>
      <Helmet>
              <title>{`Your Single Source Solution - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="eb_test" customTitle />

        <Container>
            <div className={classes.top} style={{paddingBottom:"40px", paddingRight:"15px", paddingLeft:"15px", paddingTop:"55px"}}>
                <div className={classes.centerHeading}>
                                    <div className={classes.heading}>THE POWER OF</div>
                                    <div style={{ textAlign: "center",paddingBottom:"22px" }}>
                                    <img src={Brightlogo} width="180" />
                                    </div>
                                    <div className={classes.subtext}>Introducing a partnership designed to provide Bright MLS brokers,<br />
                                    agents &amp; teams with the best marketing and productivity tools on the market.
                                    </div>
                </div>
            </div>
        </Container>




        <div style={{paddingTop:"20px", paddingBottom:"50px", backgroundColor:"#ffffff"}}>
            <Container>
            <div id="eventbrite-widget-container-74152533223"></div>

            

            <script type="text/javascript" dangerouslySetInnerHTML={{ __html: `
                var exampleCallback = function() {
                    console.log('Order complete!');
                };
            
                window.EBWidgets.createWidget({
                    // Required
                    widgetType: 'checkout',
                    eventId: '74152533223',
                    iframeContainerId: 'eventbrite-widget-container-74152533223',
            
                    // Optional
                    iframeContainerHeight: 425,  // Widget height in pixels. Defaults to a minimum of 425px if not provided
                    onOrderComplete: exampleCallback  // Method called when an order has successfully completed
                });
            ` }}>
            </script>

                
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
    margin: "auto",
  },

  top: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "top",
  },

  heading: {
    fontSize: "33px",
    fontWeight: "700",
    letterSpacing: ".14px",
    color: "#f15623",
    textAlign: "center",
    marginBottom: "12px",
  },

  subtext: {
    fontSize: "16px",
    fontWeight: "300",
    lineHeight: "24px",
    color: "#777777",
  },

  centerHeading:{
    alignItems: "center",
    width: "100%",
    textAlign: "center",
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

  flexItem2: {
    maxWidth: "100%",
    width: "100%",
    paddingRight: "0px",
    paddingBottom: "25px",
  
  
    [theme.breakpoints[900]]: {
        maxWidth: "26%",
        width: "26%",
        paddingRight: "20px",
        paddingBottom: "0px",
    },
  },

  flexItem3: {
    maxWidth: "100%",
    width: "100%",
    paddingRight: "0px",
    paddingBottom: "25px",
  
  
    [theme.breakpoints[900]]: {
        maxWidth: "40%",
        width: "40%",
        paddingRight: "20px",
        paddingBottom: "0px",
    },
  },
}))(EbTest);
