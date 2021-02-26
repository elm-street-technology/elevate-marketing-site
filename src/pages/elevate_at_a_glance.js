import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import BgSectionExternal3 from "../components/BgSectionExternal3";
import Glancebg from "../images/glancebg.jpg";
import Glance1 from "../images/glance1.gif";
import Glance2 from "../images/glance2.png";
import Glance3 from "../images/glance3.gif";
import Glance4 from "../images/glance4.png";
import Glance5 from "../images/glance5.png";
import SEO from "../components/SEO";

const Elevateataglance = ({ children, classes, data, tags }) => {
  const postNode = {
      title: `Elevate at a Glance - ${config.siteTitle}`,
  };

  return (
<div className={classes.root}>
      <Helmet>
              <title>{`Elevate at a Glance - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="Elevateataglance" customTitle />

<div style={{backgroundImage:"url("+Glancebg+")", backgroundSize:"cover", backgroundPosition:"centerTop"}}>
<Container>
      <div className={classes.top} style={{paddingBottom:"50px", paddingRight:"35px", paddingLeft:"35px", paddingTop:"55px"}}>
          <div className={classes.centerHeading}>
                            <div className={classes.heading} style={{color:"#ffffff"}}>Elevate At-A-Glance</div>
                            <div className={classes.subtext} style={{color:"#f7f7f7", fontSize:"18px"}}>The Power of Pure <span className={classes.bold} style={{color:"#ffffff",}}>PRODUCTIVITY</span> for agents, brokers &amp; teams
                            </div>
          </div>
      </div>


     
</Container>
</div>


<BgSectionExternal3 secTitle="Advanced, Intuitive CRM with Powerful Metrics" secImage={Glance1}>
Now it’s easier than ever to pay attention to the KPIs (key performance indicators) of your business with activity workflows, task coaching, agent-protected databases, lead response routing &amp; tracking, and a customizable metrics dashboard.
        </BgSectionExternal3>





<div style={{paddingTop:"58px", backgroundColor:"#f7f7f7"}}>

            <Container>

                        <div style={{textAlign:"center", paddingRight:"35px", paddingLeft:"35px"}}>
                            <div className={classes.Heading2}>High SEO IDX Website</div>
                            <div className={classes.subtext}>Designed specifically to be found on search engines, your Elevate IDX&reg; website features rich, relevant content, an intuitive consumer interface
                             with plenty of lead capture opportunity, and an interactive blog with automated ontent posted weekly.</div>     
                            <img src={Glance2} width="100%"  style={{paddingTop:"45px", maxWidth:"700px"}} />
                        </div>
            </Container>

</div>


<BgSectionExternal3 secTitle="Automated Social, Email &amp; Text Campaigns" secImage={Glance3} style={{paddingTop:"20px"}}>
Nurture your past, present &amp; future clients with intelligent campaigns and workflows designed to provide insight and engagement with every step of your lead’s life cycle.
        </BgSectionExternal3>



<div style={{paddingTop:"50px", paddingBottom:"50px", backgroundColor:"#f7f7f7"}}>
    <Container>
            <div className={classes.flexContainer}>
                <div className={classes.flexItem} style={{padding:"30px", textAlign:"center"}}>  
                      <div className={classes.subtext}>
                      <img src={Glance4} width="130" />
                                <div className={classes.Heading2} style={{paddingTop:"15px"}}>Fanatical Support<br />
                                &amp; Training</div>
                                  

                                    Dedicated onboarding and success specialists who will help you every step of the way,
                                    webinars and training on demand, an interactive help center,
                                    accompanied by live chat, email and telephone support.

                      </div>
                </div>
                <div className={classes.flexItem} style={{padding:"30px", textAlign:"center"}}>
                      <div className={classes.subtext}>
                                 <img src={Glance5} width="130" />
                                  <div className={classes.Heading2} style={{paddingTop:"15px"}}>Custom Consulting<br />
                                  &amp; Creative Services</div>
                                
                                  
                                 Looking to deliver a truly custom &amp; unique brand experience? Visit <a href="https://3sixtyfive.agency" target="_blank" className={classes.bold}>3sixtyfive.agency</a>,
                                 our full service digital and creative ad agency offering a variety of services including brand consulting,
                                 creative design, campaign development, execution and analysis, copywriting, and more.
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
    lineHeight: "40px",
    letterSpacing: ".14px",
    color: "#52B1AD",
    marginBottom: "12px",
  },

  subtext: {
    fontSize: "16px",
    fontWeight: "300",
    lineHeight: "24px",
    color: "#777777",
  },

  bold:{
    fontWeight:"700",
  },

  centerHeading:{
    alignItems: "center",
    width: "100%",
    textAlign: "center",
  },

  Heading2: {
    fontSize: "28px",
    paddingBottom: "20px",
    fontWeight: "700",
    lineHeight: "34px",
    color: "#52B1AD",
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
}))(Elevateataglance);
