import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import Printbg from "../images/printtop.jpg";
import Printlogo from "../images/printlogo.png";
import Bundle from "../images/bundle.gif";
import Postcard from "../images/postcard2.gif";
import Test_pic1 from "../images/test_pic1.png";
import Test_pic2 from "../images/test_pic2.png";
import Test_pic3 from "../images/test_pic3.png";
import Testa from "../images/testa.png";
import Testb from "../images/testb.png";
import Testc from "../images/testc.png";
import SEO from "../components/SEO";

const Holidayprint = ({ children, classes, data, tags }) => {
  const postNode = {
      title: `Elevate's Holiday Print Services - ${config.siteTitle}`,
  };

  return (
<div className={classes.root}>
      <Helmet>
              <title>{`Elevate's Holiday Print Services - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="holidayprint" customTitle />

<div style={{backgroundImage:"url("+Printbg+")", backgroundSize:"cover", backgroundPosition:"centerTop"}}>
<Container>
      <div className={classes.top} style={{paddingBottom:"60px", paddingRight:"25px", paddingLeft:"25px", paddingTop:"75px"}}>
          <div className={classes.centerHeading}>
          <img src={Printlogo} width="100%" style={{paddingTop:"20px", maxWidth:"400px"}}/>
          </div>
      </div>
</Container>
</div>




<div style={{paddingTop:"50px", paddingBottom:"30px",}}>
        <Container>
            <div className={classes.flexContainer}>
                <div className={classes.flexItem} style={{paddingBottom:"20px", paddingLeft:"25px", paddingRight:"25px", paddingTop:"30px", textAlign:"center"}}>

                   
                <div className={classes.subtext}>
                <div className={classes.heading}>Branding Bundle</div>
                Tackle 2021 with fresh marketing<br />
                materials at a great price.
                <br /><br />
                <div className={classes.Heading2}>Bundle Includes:</div>
                • 100 Business Cards<br />
                • 100 Double-Sided Door Hangers<br />
                • 10 Yard Signs (18 x 24)*<br />
                • 100 Note Cards (4.25 x 5.5)<br />
                <br />
                <div className={classes.heading2}>ONLY $400</div>
                (savings of $200)<br /><br />


                <a target="_blank" href="" className={classes.buttonLink}>PURCHASE NOW!</a>
                

                *Frame not included, sold separately
                </div>
                    

                </div>
                <div className={classes.flexItem} style={{paddingLeft:"20px", paddingRight:"20px", paddingBottom:"20px",}}>

                <img src={Bundle} width="100%"  style={{maxWidth:"600px"}} />      
                    
                </div>
            </div>
        </Container>
</div>



<div style={{paddingTop:"50px", backgroundColor:"#f7f7f7"}}>
        <Container>
            <div className={classes.flexContainer}>
                <div className={classes.flexItem} style={{paddingBottom:"20px", paddingLeft:"25px", paddingRight:"25px", paddingTop:"30px", textAlign:"center"}}>

                   
                <div className={classes.subtext}>
                <div className={classes.heading}>Holiday Postcards</div>
                Send some holiday cheer to your past,<br />
                present &amp; future clients.
                <br /><br />
                <div className={classes.Heading2}>Includes:</div>
                • 100 full-color, 8.5 x 5.5 postcards<br />
                <br />
                <div className={classes.heading2}>ONLY $25</div>
                (savings of $15)<br /><br />


                <a target="_blank" href="" className={classes.buttonLink}>PURCHASE NOW!</a>
                

                
                </div>
                    

                </div>
                <div className={classes.flexItem} style={{paddingLeft:"20px", paddingRight:"20px",}}>

                <img src={Postcard} width="100%"  style={{maxWidth:"600px", paddingTop:"15px"}} />      
                    
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

  heading2: {
    fontSize: "33px",
    fontWeight: "700",
    lineHeight: "40px",
    letterSpacing: ".14px",
    color: "#5ac0ba",
    marginBottom: "5px",
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
}))(Holidayprint);
