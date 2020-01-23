import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import FormBrightAgent from "../components/FormBrightAgent";
import Brightlogo from "../images/brightmls_logo.png";
import Bosslogo2 from "../images/eboss_logo2.png";
import Sprologo2 from "../images/spro_logo2.png";
import Ask from "../images/askhow.png";
import Eboss from "../images/eboss_bg.jpg";
import Spro from "../images/socialpro_bg.jpg";
import BrightBgSectionExternal from "../components/BrightBgSectionExternal";
import SEO from "../components/SEO";

const Brightagent = ({ children, classes, data, tags }) => {
  const postNode = {
      title: `Your Single Source Solution - ${config.siteTitle}`,
  };

  var firstname = '';
  var lastname = '';
  var email = '';
  var phone = '';
  if(typeof window !== 'undefined'){
    var urlpieces = window.location.href.split('?');
    if(urlpieces[1] != undefined){
      var rawvars = urlpieces[1].split("&");
      rawvars.forEach(function(thisvar){
        var pieces = thisvar.split('=');
        if(pieces[0] == 'f'){
          firstname = pieces[1];
        }
        if(pieces[0] == 'l'){
          lastname = pieces[1];
        }
        if(pieces[0] == 'e'){
          email = pieces[1];
        }
        if(pieces[0] == 'p'){
          phone = pieces[1];
        }
      })
    }
  }

  return (
<div className={classes.root}>
      <Helmet>
              <title>{`Your Single Source Solution - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="brightagent" customTitle />

<Container>
      <div className={classes.top} style={{paddingBottom:"35px", paddingRight:"15px", paddingLeft:"15px", paddingTop:"55px"}}>
          <div className={classes.centerHeading}>
                            <div style={{ textAlign: "center",paddingBottom:"22px", paddingTop:"42px" }}>
                            <img src={Sprologo2} width="320" />
                            </div>
                            <div className={classes.heading}>The Power of MARKETING</div>

                           
          </div>
      </div>
</Container>


<div style={{backgroundColor:"#f7f7f7",}}>
<Container>
<div style={{textAlign: "center", maxWidth:"800px", marginLeft:"auto",marginRight:"auto", paddingBottom:"55px", paddingTop:"48px"}}>
                            <div className={classes.heading}>Elevate Your Biz</div>
                            
                            <div className={classes.subtext} style={{paddingBottom:"20px"}}>Get ready to sell more homes, faster...with this all-in-one marketing solution.  
                            </div>      
        
        
        
        
                    <div style={{ textAlign: "center"}} className={classes.videoEmbed}>
                        <iframe className={classes.videoContainer} src="https://www.youtube.com/embed/v8-mRIoPVNU"
                         frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
</div>
</Container>
</div>



<Container>
<div>
    <div style={{ maxWidth: "900px", marginRight:"auto",marginLeft:"auto", paddingTop:"48px", paddingBottom:"48px"}}>
        <div className={classes.landingHeaderStyle}>
           
        </div>
        <div style={{ paddingLeft: "10px", paddingRight: "10px"}}>
            <FormBrightAgent firstname={firstname} lastname={lastname} email={email} phone={phone}/>
        </div>
        <div>
            
        </div>
    </div>
</div>
</Container>






<div style={{backgroundColor:"#36383a", paddingTop:"25px", paddingBottom:"50px",}}>
<Container>
            <div className={classes.flexContainer}>
                <div className={classes.flexItem3}><div className={classes.sub} style={{paddingTop:"12px"}}>Are You a Broker?</div>
                  <div className={classes.subtext} style={{color:"#ffffff"}}>Do you want ONE singular solution that empowers brokers (and their agents)
                  with the tools, insights &amp; analytics to manage their business?</div></div>
                  <div className={classes.flexItem2}>
                                  <a target="_blank" href="/brightbroker" className={classes.signUpBtn}>
                                    Meet The Boss
                                  </a></div>
            </div>
</Container>
</div>



<div style={{backgroundColor:"#f7f7f7", paddingTop:"25px", paddingBottom:"50px",}}>

        <div style={{textAlign:"center", padding:"25px"}}>  
            <div className={classes.heading}>Explore MORE</div>
            <div className={classes.subtext} style={{paddingBottom:"30px"}}>Looking for more information?  Explore below or call 833.978.1196 to speak<br />
            to an Elevate Success Coach today.  We’re here to help.</div>
        </div>


        <Container>
            <div className={classes.flexContainer}>
                <div className={classes.flexItem}>

                   
                <iframe width="100%" height="330" src="https://www.youtube.com/embed/63j2UGFEfU4?rel=0"
          frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    

                </div>
                <div className={classes.flexItem} style={{paddingLeft:"20px", paddingRight:"20px", paddingBottom:"20px",}}>

                <div className={classes.subtext}>Join Andrew Strauch of Bright MLS and Prem Luthra of Elevate, as they sit down to discuss Elevate SOCIAL PRO by Bright MLS - the all-in-one marketing solution that every agent needs to sell more homes, faster.
                                <br /><br />
                                Available to Bright MLS agents and teams, this intuitive, comprehensive solution offers agents an all-in-one solution including IDX websites, an advanced productivity CRM, dynamic MLS-fed CMA wizards, pay-per-click lead generation services, Voiceover IP, automated email, social media, text and blog campaigns, and more.
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

  sub: {
    fontSize: "20px",
    fontWeight: "700",
    letterSpacing: ".14px",
    color: "#f15623",
    marginBottom: "12px",
  },

  signUpBtn: {
    width: "250px",
    maxWidth: "250px",
    fontSize: "16px",
    lineHeight: "26px",
    fontWeight: "600",
    color: "#FFF",
    backgroundColor: "#f15623",
    borderRadius: "6px",
    padding: "12px",
    marginTop: "30px",
    textDecoration: "none",

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
    paddingBottom: "18px",
  
  
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
    paddingTop:"35px",
  
  
    [theme.breakpoints[900]]: {
        maxWidth: "30%",
        width: "30%",
        paddingRight: "20px",
        paddingBottom: "0px",
        paddingTop:"35px",
    },
  },

  flexItem3: {
    maxWidth: "100%",
    width: "100%",
    paddingRight: "0px",
  
  
    [theme.breakpoints[900]]: {
        maxWidth: "70%",
        width: "70%",
        paddingRight: "20px",
        paddingBottom: "0px",
    },
  },

  videoEmbed:{
    position: "relative",
    paddingBottom: "56.25%",
    paddingTop: "30px",
    height: "0",
    overflow: "hidden",
    
  },
  videoContainer:{
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    
  }
}))(Brightagent);
