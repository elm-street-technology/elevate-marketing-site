import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import BgSectionExternal3 from "../components/BgSectionExternal3";
import FormSuccess from "../components/FormSuccess";
import Bossbg from "../images/bossbg.jpg";
import Fadebg from "../images/fadebg2.jpg";
import Dmslogo from "../images/dmslogo.png";
import Dmsstar from "../images/dmsstar.png";
import Quote from "../images/quote.png";
import Sp1 from "../images/sp1.png";
import Cma from "../images/prodcma.png";
import Dms2 from "../images/dms2.png";
import Dms3 from "../images/dms3.png";
import Dms5 from "../images/dms5.gif";
import Dms7 from "../images/dms7.png";
import Elevate from "../images/elevate_tag.svg";
import Redx from "../images/redx.png";
import Greenc from "../images/greenc.png";
import Crm1 from "../images/crm1.png";
import Crm2 from "../images/crm2.png";
import Glance4 from "../images/glance4.png";
import Glance5 from "../images/glance5.png";
import SEO from "../components/SEO";

const Success = ({ children, classes, data, tags }) => {
  const postNode = {
      title: `CRM Success with Elevate - ${config.siteTitle}`,
  };

  return (
<div className={classes.root}>
      <Helmet>
              <title>{`CRM Success with Elevate - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="Success" customTitle />

<div style={{backgroundImage:"url("+Fadebg+")", backgroundSize:"cover", backgroundPosition:"centerBottom",}}>
<Container>
      <div className={classes.top} style={{paddingBottom:"60px",}}>
          <div className={classes.centerHeading}>
          <img src={Elevate} style={{width:"100%", maxWidth:"250px", paddingBottom:"20px"}}/>           
          </div>

         

               

<div className={classes.column2} style={{ textAlign: "center", paddingTop: "35px" }}>
                  
<div style={{maxWidth:"800px",marginLeft:"auto",marginRight:"auto",}}>
                <div style={{ textAlign: "center" }} className={classes.videoEmbed}>
                      <iframe className={classes.videoContainer} src="https://www.youtube.com/embed/qtXMvK19Y9c"
                      frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className={classes.heading} style={{paddingTop:"25px"}}>The Power of Marketing</div>
                            <div className={classes.subtext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>  
                </div>
              
</div>

<div className={classes.column2} style={{ textAlign: "center", }}>

                 
                  <div style={{ textAlign: "center", }}>
                  <FormSuccess
          subject="Elevate Success"
          listid="107387"
          webhook="b1452e08-f398-11ea-9d14-bc764e046a9d"
          leadsource="googleads" />
        {/* <div className={classes.closingContainer}>
          For Media Inquiries, {""} Please {""}
          <a
            className={classes.emailLink}
            href="mailto:ekaplan@elmstreettechnology.com"
          >
            Email Us
          </a>
        </div> */}
                  </div>
</div>




      </div>

         



</Container>
</div>



<div style={{paddingTop:"75px", paddingBottom:"55px", backgroundColor:"#ffffff"}}>
        
                        <div style={{textAlign:"center", paddingRight:"35px", paddingLeft:"35px",}}>
                            <div className={classes.Heading2}>The Power of Success</div>   
                        </div>
    <Container>
            <div className={classes.flexContainer}>
                <div className={classes.flexItem2} style={{padding:"30px", textAlign:"center"}}>
                        <img src={Quote} width="80" style={{paddingBottom:"15px"}}/>
                      <div className={classes.subtext}>
                      “My Elevate website is so easy for my customers to use...and I LOVE the daily marketing report emails.”
                      <br /><br />
                      <div className={classes.Heading3}>Mark H.</div>
                      REALTOR&reg; - Tucson, AZ
                      </div>
                </div>

                <div className={classes.flexItem2} style={{padding:"30px", textAlign:"center"}}>
                <img src={Quote} width="80" style={{paddingBottom:"15px"}}/>
                      <div className={classes.subtext}>  
                      “For the first time ever, I actually like using a CRM!  Elevate automates so much of my day-to-day.  It’s simple!”
                      <br /><br />
                      <div className={classes.Heading3}>Kendra D.</div>
                      REALTOR&reg; - Denver, CO.
                        </div>
                </div>

                <div className={classes.flexItem2} style={{padding:"30px", textAlign:"center"}}>
                <img src={Quote} width="80" style={{paddingBottom:"15px"}}/>
                      <div className={classes.subtext}>  
                      “All of my social media is done for me, and I love the email drip campaigns and newsletters for my clients.”
                      <br /><br />
                      <div className={classes.Heading3}>Brenda T.</div>
                      REALTOR&reg; -  Atlanta, GA
                        </div>
                </div>


      </div>

        
    </Container>
</div> 






<div style={{paddingTop:"70px", paddingBottom:"80px", backgroundImage:"url("+Bossbg+")", backgroundSize:"cover", paddingLeft:"20px", paddingRight:"20px"}}>
        
<div style={{textAlign:"center",paddingBottom:"25px", paddingLeft:"20px", paddingRight:"20px"}}>
                            <div className={classes.Heading2} style={{color:"#ffffff"}}>The #1 Social Media Marketing CRM in Real Estate</div>
                              
                            
                        </div>      
    <Container>
    <div className={classes.top}>
                <div className={classes.column2} style={{textAlign:"left", paddingBottom:"24px"}}>
                       
                      <div className={classes.subtextnew} style={{color:"#ffffff"}}>
                      <div className={classes.Heading3}>With Elevate</div>
                      <img src={Greenc} style={{width:"100%", maxWidth:"18px", marginRight:"6px"}}/> Lorem ipsum dolor sit amet, consectetur.<br />
                      <img src={Greenc} style={{width:"100%", maxWidth:"18px", marginRight:"6px"}}/> Lorem ipsum dolor sit amet, consectetur.<br />
                      <img src={Greenc} style={{width:"100%", maxWidth:"18px", marginRight:"6px"}}/> Lorem ipsum dolor sit amet, consectetur.<br />
                      <img src={Greenc} style={{width:"100%", maxWidth:"18px", marginRight:"6px"}}/> Lorem ipsum dolor sit amet, consectetur.<br />
                      </div>
                </div>

                <div className={classes.column2} style={{textAlign:"left", paddingBottom:"24px"}}>
                
                      <div className={classes.subtextnew} style={{color:"#ffffff"}}>  
                      <div className={classes.Heading3} style={{color:"#f15a53"}}>Without Elevate</div>
                      <img src={Redx} style={{width:"100%", maxWidth:"18px", marginRight:"6px"}}/> Lorem ipsum dolor sit amet, consectetur.<br />
                      <img src={Redx} style={{width:"100%", maxWidth:"18px", marginRight:"6px"}}/> Lorem ipsum dolor sit amet, consectetur.<br />
                      <img src={Redx} style={{width:"100%", maxWidth:"18px", marginRight:"6px"}}/> Lorem ipsum dolor sit amet, consectetur.<br />
                      <img src={Redx} style={{width:"100%", maxWidth:"18px", marginRight:"6px"}}/> Lorem ipsum dolor sit amet, consectetur.<br />
                        </div>
              

               


      </div>

        </div>
    </Container>
</div> 











<div style={{paddingTop:"68px",}}>
<Container>
<div className={classes.top} style={{textAlign:"center"}}>


<div className={classes.column1} style={{ textAlign: "center", paddingTop: "20px", paddingLeft:"30px", paddingRight:"30px", paddingBottom:"20px" }}>

<div style={{ textAlign: "center",}}>
    <img src={Crm1} width="100%"  style={{maxWidth:"550px"}} />
</div>

</div>

<div className={classes.column1a} style={{ textAlign: "left", paddingTop: "20px", paddingLeft:"30px", paddingRight:"30px" }}>
<div className={classes.subtext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div><br />
<div className={classes.subtext2} style={{paddingBottom:"14px"}}>Key Highlights:</div>
<div className={classes.subtext}>+ Advanced CRM with powerful metrics.<br />
+ Mobile-friendly IDX website.<br />
+ Robust blog with automated posts.<br />
+ Intuitive CMA Wizard.<br />
+ Email marketing campaigns.</div>

</div>


</div>
</Container>
</div>




<div style={{paddingTop:"48px", paddingBottom:"70px"}}>
<Container>
<div className={classes.top} style={{textAlign:"center"}}>

<div className={classes.column1a} style={{ textAlign: "left", paddingTop: "20px", paddingLeft:"30px", paddingRight:"30px" }}>
<div className={classes.subtext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div><br />
<div className={classes.subtext2} style={{paddingBottom:"14px"}}>Key Highlights:</div>
<div className={classes.subtext}>+ Advanced CRM with powerful metrics.<br />
+ Mobile-friendly IDX website.<br />
+ Robust blog with automated posts.<br />
+ Intuitive CMA Wizard.<br />
+ Email marketing campaigns.</div>

</div>




<div className={classes.column1} style={{ textAlign: "center", paddingTop: "20px", paddingLeft:"30px", paddingRight:"30px", paddingBottom:"20px" }}>

<div style={{ textAlign: "center",}}>
    <img src={Crm2} width="100%"  style={{maxWidth:"550px"}} />
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
    marginTop: "0px",
    paddingTop:"0px",
  },

  top: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "top",
  },

  heading: {
    fontSize: "44px",
    fontWeight: "700",
    lineHeight: "52px",
    letterSpacing: ".14px",
    color: "#52B1AD",
    marginBottom: "12px",
  },

  subtext: {
    fontSize: "16px",
    fontWeight: "300",
    lineHeight: "24px",
    color: "#5A5B5C",
  },

  subtextnew: {
    fontSize: "18px",
    fontWeight: "300",
    lineHeight: "36px",
    color: "#5A5B5C",
  },

  subtext2: {
    fontSize: "24px",
    fontWeight: "700",
    lineHeight: "33px",
    color: "#52B1AD",
  },


  column1:{
    width:"650px",
    maxWidth: "100%",
    paddingRight:"20px",
    paddingLeft:"20px",
    verticalAlign: "top",
  },


  column1a:{
    width:"400px",
    maxWidth: "100%",
    paddingRight:"20px",
    paddingLeft:"20px",
    verticalAlign: "top",
  },


  column2:{
    width:"520px",
    maxWidth: "100%",
    paddingRight:"20px",
    paddingLeft:"20px",
    verticalAlign: "top",
  },

  column3:{
    width:"350px",
    maxWidth: "100%",
    paddingRight:"10px",
    paddingLeft:"10px",
    verticalAlign: "top",
    textAlign: "center",
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
    fontSize: "30px",
    paddingBottom: "20px",
    fontWeight: "700",
    lineHeight: "42px",
    color: "#52B1AD",
    letterSpacing: ".14px",
  },

  Heading3: {
    fontSize: "20px",
    paddingBottom: "5px",
    fontWeight: "700",
    lineHeight: "26px",
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
    fontSize: "16px",
    fontWeight: "700",
    display: "block",
    letterSpacing: ".25px",
    backgroundColor: "#52B1AD",
    color: "#FFF",
    textDecoration: "none",
    padding: "16px",
    borderRadius: "4px",
    margin: "16px auto",
    marginBottom: "10px",
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
}))(Success);
