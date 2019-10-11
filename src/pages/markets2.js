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
import Mlsbg from "../images/mls_bg.jpg";
import MLSHeatMap from "../images/mls-heat-map.jpg";
import Test_pic1 from "../images/test_pic1.png";
import Test_pic2 from "../images/test_pic2.png";
import Test_pic3 from "../images/test_pic3.png";
import Testa from "../images/testa.png";
import Testb from "../images/testb.png";
import Testc from "../images/testc.png";
import Spro from "../images/socialpro_bg.jpg";
import BrightBgSectionExternal from "../components/BrightBgSectionExternal";
import SEO from "../components/SEO";

const Markets2 = ({ children, classes, data, tags }) => {
  const postNode = {
      title: `Your Single Source Solution - ${config.siteTitle}`,
  };

  return (
<div className={classes.root}>
      <Helmet>
              <title>{`Your Single Source Solution - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="contact" customTitle />

<div style={{backgroundImage:"url("+Mlsbg+")", backgroundSize:"cover", backgroundPosition:"centerTop"}}>
<Container>
      <div className={classes.top} style={{paddingBottom:"80px", paddingRight:"25px", paddingLeft:"25px", paddingTop:"75px"}}>
          <div className={classes.centerHeading}>
                            <div className={classes.heading} style={{color:"#ffffff"}}>The Power of PARTNERS</div>
                            <div className={classes.subtext} style={{color:"#ffffff"}}>Our ever-growing network across the U.S. allows us to service more brokers,<br />
                            agents &amp; teams than most any other solution out there.
                            </div>
          </div>
      </div>
</Container>
</div>

<div style={{paddingTop:"50px", paddingBottom:"50px",}}>
        <Container>
                <div className={classes.mlsHeatMapContainer}>
                            <img
                            src={MLSHeatMap}
                            alt="MLS Heat Map"
                            title="MLS Heat Map"
                            className={classes.mlsHeatMap}
                            />
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
    lineHeight: "40px",
    letterSpacing: ".14px",
    color: "#5ac0ba",
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

  Heading2: {
    fontSize: "20px",
    fontWeight: "700",
    lineHeight: "26px",
    color: "#5ac0ba",
    letterSpacing: ".14px",
  },

  landingHeaderStyle:{
    textAlign:"center",
  },

  mlsHeatMapContainer: {
    width: "65%",
    margin: "16px auto 0 auto",
  },
  mlsHeatMap: {
    width: "100%",
  },


  buttonLink: {
    minWidth: "250px",
    maxWidth: "250px",
    alignContent: "center",
    justifyContent: "center",
    fontSize: "14px",
    fontWeight: "700",
    display: "block",
    letterSpacing: ".25px",
    backgroundColor: theme.colors.secondary,
    color: "#FFF",
    textDecoration: "none",
    padding: "16px",
    borderRadius: "4px",
    margin: "16px auto",
    marginBottom: "20px",
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
        maxWidth: "33%",
        width: "33%",
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
}))(Markets2);
