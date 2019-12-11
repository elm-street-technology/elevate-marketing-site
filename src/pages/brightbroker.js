import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import FormBrightBroker from "../components/FormBrightBroker";
import Brightlogo from "../images/brightmls_logo.png";
import Bosslogo2 from "../images/eboss_logo2.png";
import Recruit from "../images/recruit_cover.jpg";
import Sprologo from "../images/spro_logo.png";
import Ask from "../images/askhow.png";
import Eboss from "../images/eboss_bg.jpg";
import Spro from "../images/socialpro_bg.jpg";
import BrightBgSectionExternal from "../components/BrightBgSectionExternal";
import SEO from "../components/SEO";

const Brightbroker = ({ children, classes, data, tags }) => {
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
      <SEO postNode={postNode} pagePath="brightbroker" customTitle />

<Container>
      <div className={classes.top} style={{paddingBottom:"35px", paddingRight:"15px", paddingLeft:"15px", paddingTop:"55px"}}>
          <div className={classes.centerHeading}>
                            <div style={{ textAlign: "center",paddingBottom:"22px", paddingTop:"22px" }}>
                            <img src={Bosslogo2} width="300" />
                            </div>
                            <div className={classes.heading}>The Power of PRODUCTIVITY</div>
          </div>
      </div>
</Container>


<div style={{backgroundColor:"#f7f7f7",}}>
<Container>
<div style={{textAlign: "center", maxWidth:"800px", marginLeft:"auto",marginRight:"auto", paddingBottom:"55px", paddingTop:"48px"}}>
                            <div className={classes.heading}>Meet the BOSS</div>
                            
                            <div className={classes.subtext} style={{paddingBottom:"20px"}}>ONE singular solution that empowers brokers (and their agents)<br />
                            with the tools, insights &amp; analytics to manage their business.    
                            </div>      
        
        
        
        
                    <div style={{ textAlign: "center"}} className={classes.videoEmbed}>
                        <iframe className={classes.videoContainer} src="https://www.youtube.com/embed/wUNYSRnAbog?rel=0"
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
            <FormBrightBroker  firstname={firstname} lastname={lastname} email={email} phone={phone}/>
        </div>
        <div>
            
        </div>
    </div>
</div>
</Container>










<div style={{backgroundColor:"#f7f7f7", paddingTop:"25px", paddingBottom:"50px",}}>

        <div style={{textAlign:"center", padding:"25px"}}>  
            <div className={classes.heading}>Explore MORE</div>
            <div className={classes.subtext} style={{paddingBottom:"30px"}}>Looking for more information?  Explore below or call 833.978.1196 to speak<br />
            to an Elevate Success Coach today.  We’re here to help.</div>
        </div>


        <Container>
            <div className={classes.flexContainer}>
                <div className={classes.flexItem}>

                   
                <iframe width="100%" height="330" src="https://www.youtube.com/embed/wUNYSRnAbog?rel=0"
          frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    

                </div>
                <div className={classes.flexItem} style={{paddingLeft:"20px", paddingRight:"20px", paddingBottom:"20px",}}>

                <div className={classes.subtext}>Join Andrew Strauch of Bright MLS and Prem Luthra of Elevate, as they sit down to discuss Elevate BOSS by Bright MLS - the all-in-one productivity and marketing solution that every broker wants...and needs. 
                <br /><br />
                Available to Bright MLS brokers, this intuitive, comprehensive solution allows brokerages insight into the key performance indicators of their office, along with IDX websites, an advanced productivity CRM, dynamic MLS-fed CMA wizards, pay-per-click lead generation services, Voiceover IP, automated email, social media, text and blog campaigns, and more.

                </div>
                    
                </div>
            </div>
        </Container>
</div>



<div style={{backgroundColor:"#17181d", paddingTop:"25px",}}>

        <div style={{textAlign:"center", padding:"25px"}}>  
            <div className={classes.heading}>Be the BOSS (of Recruiting)</div>
            <div className={classes.subtext} style={{paddingBottom:"30px", color:"#c3c3c3"}}>Free Download:  “The 27 Most Influential Words that Brokers Should Use When Recruiting”</div>
        </div>


        <Container>
            <div className={classes.flexContainer}>
                <div className={classes.flexItem} style={{ textAlign:"center", paddingLeft:"20px", paddingRight:"20px", paddingBottom:"20px",}}>

                   
                <div className={classes.subtext} style={{color:"#c3c3c3"}}>Created by VP of Brokerage Development and linguistics<br />
                expert Frank Chimento, this popular guide will introduce you approaching recruitment and retention conversations<br />
                from a position of persuasion and influence.<br />
                A “must-read” for all brokers.
                <br /><br />
                <a target="_blank" href="/assets/elevate_recruiting.pdf" className={classes.buttonLink}>
                 Download Now
                    </a>
                </div>

                </div>
                <div className={classes.flexItem} >

                <div style={{ textAlign: "center"}}>
                            <img src={Recruit} width="370" />
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

  buttonLink: {
    minWidth: "250px",
    textAlign: "center",
    alignContent: "center",
    justifyContent: "center",
    fontSize: "16px",
    fontWeight: "700",
    display: "block",
    letterSpacing: ".25px",
    backgroundColor: "#f15623",
    color: "#FFF",
    textDecoration: "none",
    padding: "14px 16px",
    borderRadius: "4px",
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
}))(Brightbroker);
