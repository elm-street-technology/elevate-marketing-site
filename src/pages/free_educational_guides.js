import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import Guidebg from "../images/guide_bg.jpg";
import Test_pic1 from "../images/test_pic1.png";
import Test_pic2 from "../images/test_pic2.png";
import Test_pic3 from "../images/test_pic3.png";
import Seocover from "../images/seo_cover.png";
import Fadebg from "../images/fadebg.jpg";
import Smcover from "../images/sm101_cover.png";
import Btccover from "../images/btc_cover.png";
import Emailcover from "../images/email_cover.png";
import Kardcover from "../images/kard_cover.png";
import Saucecover from "../images/sauce_cover.png";
import Testa from "../images/testa.png";
import Testb from "../images/testb.png";
import Testc from "../images/testc.png";
import SEO from "../components/SEO";

const Educationalguides = ({ children, classes, data, tags }) => {
  const postNode = {
      title: `Free Educational Guides - ${config.siteTitle}`,
  };

  return (
<div className={classes.root}>
      <Helmet>
              <title>{`Free Educational Guides - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="educationalguides" customTitle />

<div style={{backgroundImage:"url("+Guidebg+")", backgroundSize:"cover", backgroundPosition:"centerTop"}}>
<Container>
      <div className={classes.top} style={{paddingBottom:"80px", paddingRight:"25px", paddingLeft:"25px", paddingTop:"75px"}}>
          <div className={classes.centerHeading}>
                            <div className={classes.heading} style={{color:"#ffffff"}}>FREE Educational Guides</div>
                            <div className={classes.subtext} style={{color:"#ffffff"}}>Feed your brain &amp; fuel your online marketing with these great resources
                            </div>
          </div>
      </div>
</Container>
</div>




<div style={{backgroundImage:"url("+Fadebg+")", backgroundSize:"cover", backgroundPosition:"centerBottom", textAlign:"center"}}>
      <Container>
                   

        <div className={classes.top} style={{paddingTop:"50px"}}>

                <div className={classes.column3} style={{ textAlign: "center", paddingTop: "22px" }}>
                                    
                                    <div className={classes.centerheading2}>Awesome Email<br />
                                    Marketing Guide</div><br />
                                    <div className={classes.centersubtext} >Download Your FREE Guide Including The 6 Emails That Agents SHOULD<br />
                                    Be Sending To Their Audience! Download this FREE GUIDE<br />
                                    and get the tips,tricks, and strategies from the pros
                                    to elevate your email marketing content today!</div>
                                    
                                    
                                    <a target="_blank" href="/emailmarketingguide" className={classes.ctabutton}>
                                    Download Now</a>
                                    <div style={{ textAlign: "center",paddingTop:"35px" }}>
                                          <img src={Emailcover} width="300"/>
                                    </div>
                  </div>

                  <div className={classes.column3} style={{ textAlign: "center", paddingTop: "22px" }}>
                                    
                                    <div className={classes.centerheading2}>Social Media<br />
                                    Marketing 101 Guide</div><br />
                                    <div className={classes.centersubtext}>What makes for awesome social media marketing content? It's not as time-consuming or difficult as you might think. Download this FREE GUIDE and get the tips, tricks, and strategies from the pros to elevate your social media marketing content today!</div>
                                    
                                    
                                    <a target="_blank" href="/socialmediamarketingguide" className={classes.ctabutton}>
                                    Download Now</a>
                                    <div style={{ textAlign: "center",paddingTop:"35px" }}>
                                          <img src={Smcover} width="300"/>
                                    </div>
                  </div>

                  <div className={classes.column3} style={{ textAlign: "center", paddingTop: "22px" }}>
                 
                                    <div className={classes.centerheading2}>ROCKIN' Website<br />
                                    SEO Guide</div><br />
                                    <div className={classes.centersubtext}>93% of buyers looking for a home use online searches for listings and information during their home-buying journey. What does it take to be seen on the first page of Google, and what can you do to get there?  This FREE GUIDE is your key to SEO success!</div>
                                   
                                    <a target="_blank" href="/websiteseoguide" className={classes.ctabutton}>
                                    Download Today</a>
                                    <div style={{ textAlign: "center",paddingTop:"35px" }}>
                                          <img src={Seocover} width="300" />
                                    </div>
                  </div>


                  
        </div>
    </Container>
    </div>


    <div style={{backgroundImage:"url("+Fadebg+")", backgroundSize:"cover", backgroundPosition:"centerBottom", textAlign:"center", paddingTop:"40px"}}>
      <Container>
                    

        <div className={classes.top}>


                  <div className={classes.column3} style={{ textAlign: "center", paddingTop: "22px" }}>
                                    
                                    <div className={classes.centerheading2}>Lead Generation<br />
                                    "Secret Sauce"</div><br />
                                    <div className={classes.centersubtext}>Your FREE GUIDE is packed full of tips, tricks &amp; strategies, an overview of how Elevate’s lead generation technology does 90% of the work for busy real estate pros, and special offers.</div>
                                    
                                 
                                    
                                    <a target="_blank" href="/leadgenguide" className={classes.ctabutton}>
                                    Download Now</a>
                                    <div style={{ textAlign: "center",paddingTop:"35px" }}>
                                          <img src={Saucecover} width="300" />
                                    </div>
                  </div>

                  <div className={classes.column3} style={{ textAlign: "center", paddingTop: "22px" }}>
                 
                                    <div className={classes.centerheading2}>The Brokerage<br />
                                    Technology Checklist</div><br />
                                    <div className={classes.centersubtext} >Download this guide to selecting the right technology partner for your brokerage. Includes a checklist of features &amp; functionality every brokerage must have!</div>
                                   
                                    <a target="_blank" href="/brokeragetechchecklist" className={classes.ctabutton}>
                                    Download Today</a>
                                    <div style={{ textAlign: "center",paddingTop:"35px" }}>
                                          <img src={Btccover} width="300" />
                                    </div>
                  </div>

                  <div className={classes.column3} style={{ textAlign: "center", paddingTop: "22px" }}>
                 
                                    <div className={classes.centerheading2}>6 Estate Marketing Lessons<br />
                                    From Kim Kardashian Guide</div><br />
                                    <div className={classes.centersubtext} >What can Kim Kardashian teach real estate agents about marketing? A lot! Download your free guide, filled with real life examples to take your real estate brand to the next level.</div>
                                   
                                    <a target="_blank" href="/kardashian" className={classes.ctabutton}>
                                    Download Today</a>
                                    <div style={{ textAlign: "center",paddingTop:"35px" }}>
                                          <img src={Kardcover} width="300" />
                                    </div>
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
    paddingTop: "50px",
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

  centerheading2: {
    color: "#52B1AD",
    fontSize: "20px",
    fontWeight: "700",
    letterSpacing: ".25px",
    fontWeight: "700",
    lineHeight: "1.4",
    textAlign: "center",
  
    [theme.breakpoints[900]]: {
        fontSize: "20px",
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
    fontWeight: "700",
    minWidth: "300px",
    letterSpacing: ".25px",
    backgroundColor: "#52B1AD",
    color: "#FFF",
    display: "block",
    marginTop: "30px",
    maxWidth: "300px",
    textDecoration: "none",
    padding: "12px 14px",
    borderRadius: "3px",
    display: "inline-block",
},

  column3:{
    width:"345px",
    maxWidth: "100%",
    paddingRight:"20px",
    paddingLeft:"20px",
    verticalAlign: "top",
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
}))(Educationalguides);
