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
import Crm3 from "../images/crm3.png";
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

         

               

<div className={classes.column2} style={{ textAlign: "left", paddingTop: "35px" }}>
                  
<div style={{maxWidth:"800px",marginLeft:"auto",marginRight:"auto",}}>
                <div style={{ textAlign: "center" }} className={classes.videoEmbed}>
                      <iframe className={classes.videoContainer} src="https://www.youtube.com/embed/qtXMvK19Y9c"
                      frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                
                <div className={classes.Heading2} style={{paddingBottom:"14px", paddingTop:"20px"}}>Experience the power<br />
                of pure productivity<br />
                with Elevate! </div>
                
                            <div className={classes.subtext}>Elevate by Elm Street is the ONLY digital marketing solution you need to build and scale your online real estate business.
                            <br /><br /> 
Build your business, increase your sphere, and look like a marketing rockstar with an all-in-one solution designed to capture, engage and convert.
<br /><br />
<div className={classes.bold}>
<img src={Greenc} style={{width:"100%", maxWidth:"14px", marginRight:"6px"}}/>Advanced CRM.<br />
<img src={Greenc} style={{width:"100%", maxWidth:"14px", marginRight:"6px"}}/>Mobile-friendly IDX website.<br />
<img src={Greenc} style={{width:"100%", maxWidth:"14px", marginRight:"6px"}}/>Customized social branding.<br />
<img src={Greenc} style={{width:"100%", maxWidth:"14px", marginRight:"6px"}}/>Automated social and blog content.<br />
<img src={Greenc} style={{width:"100%", maxWidth:"14px", marginRight:"6px"}}/>Intuitive CMA Wizard.<br />
<img src={Greenc} style={{width:"100%", maxWidth:"14px", marginRight:"6px"}}/>Plus Much More! 
</div>
</div>  
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
                      <div className={classes.Heading3}>"Great lead capture website."</div>
"Elevate is everything I need in a lead capture website. I have been using Elevate for three years now and most of my sales have been from the platform. Elevate makes me look like a pro by blogging and posting to my Facebook page, Linked In and Twitter. This leaves me to do what I do best, sell real estate!"
                      <br /><br />
                      <div className={classes.Heading3}>Mark H.</div>
                      Sales Associate<br />
                      Tucson, AZ
                      </div>
                </div>

                <div className={classes.flexItem2} style={{padding:"30px", textAlign:"center"}}>
                <img src={Quote} width="80" style={{paddingBottom:"15px"}}/>
                      <div className={classes.subtext}> 
                      <div className={classes.Heading3}>"Amazing uptick<br />
                      in my business."</div>
                      “Elevate helped me provide quality content to my blog and my social media outlets and grow my on-line business. The ability to post to all of my social media accounts at one time has saved me time and has boosted my on-line profiles.”
                      <br /><br />
                      <div className={classes.Heading3}>Scott S.</div>
                      Licensed Real Estate Agent<br />
                      Denver, CO.
                        </div>
                </div>

                <div className={classes.flexItem2} style={{padding:"30px", textAlign:"center"}}>
                <img src={Quote} width="80" style={{paddingBottom:"15px"}}/>
                      <div className={classes.subtext}>
                      <div className={classes.Heading3}>"Help I didn't<br />
                      know I needed."</div>  
                      “Elevate is helping me post often on social media to stay relevant and be front of mind. The automatic posts are exactly what I need and this frees up my day to do more lead generation. Elevate Customer Service is super responsive and I really like the overall hands off ease of use.”
                      <br /><br />
                      <div className={classes.Heading3}>Brenda T.</div>
                      REALTOR&reg;<br />
                      Atlanta, GA
                        </div>
                </div>


      </div>

        
    </Container>
</div> 






<div style={{paddingTop:"70px", paddingBottom:"60px", backgroundImage:"url("+Bossbg+")", backgroundSize:"cover",}}>
        
<div style={{textAlign:"center",paddingBottom:"25px", paddingLeft:"20px", paddingRight:"20px"}}>
                            <div className={classes.Heading2} style={{color:"#ffffff"}}>The #1 Social Media Marketing CRM in Real Estate</div>
                              
                            
                        </div>      
    <Container>
    <div className={classes.top}>


    <div className={classes.column2} style={{textAlign:"left", paddingBottom:"48px"}}>
    
                      <div className={classes.subtextnew} style={{color:"#ffffff"}}>  
                      <div className={classes.Heading3} style={{color:"#f15a53"}}>Without Elevate</div>
                      <img src={Redx} style={{width:"100%", maxWidth:"14px", marginRight:"3px"}}/> Inability to see how email and social marketing strategies are working.<br /><br />
                      <img src={Redx} style={{width:"100%", maxWidth:"14px", marginRight:"3px"}}/> No knowledge of how your website is performing or if you are getting leads from it.<br /><br />
                      <img src={Redx} style={{width:"100%", maxWidth:"14px", marginRight:"3px"}}/> Spending too much time creating<br />
                      and posting social campaigns.<br /><br />
                      <img src={Redx} style={{width:"100%", maxWidth:"14px", marginRight:"3px"}}/> Struggling to design email campaigns<br />
                      that look professional.
                      
              </div>

               


      </div>



                <div className={classes.column2} style={{textAlign:"left", paddingBottom:"48px"}}>
               
                      <div className={classes.subtextnew} style={{color:"#ffffff"}}>
                      <div className={classes.Heading3}>With Elevate</div>
                      <img src={Greenc} style={{width:"100%", maxWidth:"14px", marginRight:"3px"}}/> Make informed decisions with an advanced, intuitive CRM with powerful metrics.<br /><br />
                      <img src={Greenc} style={{width:"100%", maxWidth:"14px", marginRight:"3px"}}/> Easy-to-use, high SEO IDX website with many lead capture opportunities.<br /><br />
                      <img src={Greenc} style={{width:"100%", maxWidth:"14px", marginRight:"3px"}}/> Automated social, email, and text campaigns that establish credibility and authority.<br /><br />
                      <img src={Greenc} style={{width:"100%", maxWidth:"14px", marginRight:"3px"}}/> Modern, engaging marketing templates, campaigns and robust image library.
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
<div className={classes.subtext}>With the Elevate customizable metrics dashboard, you can keep track of what matters most to your business including lead activity, team performance, and more.
<br /><br />
<div className={classes.bold}>
<img src={Greenc} style={{width:"100%", maxWidth:"14px", marginRight:"6px"}}/>Track KPIs with activity workflows.<br /><br />
<img src={Greenc} style={{width:"100%", maxWidth:"14px", marginRight:"6px"}}/>Task coaching.<br /><br />
<img src={Greenc} style={{width:"100%", maxWidth:"14px", marginRight:"6px"}}/>Agent-protected databases.<br /><br />
<img src={Greenc} style={{width:"100%", maxWidth:"14px", marginRight:"6px"}}/>Lead response routing and tracking.</div>
</div>

</div>


</div>
</Container>
</div>




<div style={{paddingTop:"48px", paddingBottom:"70px"}}>
<Container>
<div className={classes.top} style={{textAlign:"center"}}>

<div className={classes.column1a} style={{ textAlign: "left", paddingTop: "20px", paddingLeft:"30px", paddingRight:"30px" }}>
<div className={classes.subtext}>
Nurture your past, present and future clients with intelligent campaigns and workflows designed to provide insight and engagement with every step of your lead’s life cycle.
<br /><br />
<div className={classes.bold}>
<img src={Greenc} style={{width:"100%", maxWidth:"14px", marginRight:"6px"}}/>Pay-per-click (PPC) capture<br />
&nbsp;&nbsp;&nbsp;&nbsp; of exclusive buyer/seller leads.<br /><br />
<img src={Greenc} style={{width:"100%", maxWidth:"14px", marginRight:"6px"}}/>Morning reports with<br />
&nbsp;&nbsp;&nbsp;&nbsp; the latest activity data.<br /><br />
<img src={Greenc} style={{width:"100%", maxWidth:"14px", marginRight:"6px"}}/>Advanced, intuitive CRM with<br />
&nbsp;&nbsp;&nbsp;&nbsp; powerful performance metrics.</div>
</div>

</div>




<div className={classes.column1} style={{ textAlign: "center", paddingTop: "20px", paddingLeft:"30px", paddingRight:"30px", paddingBottom:"20px" }}>

<div style={{ textAlign: "center",}}>
    <img src={Crm2} width="100%"  style={{maxWidth:"550px"}} />
</div>

</div>




</div>
</Container>
</div>






<div style={{paddingTop:"28px", paddingBottom:"70px"}}>
<Container>
<div className={classes.top} style={{textAlign:"center"}}>


<div className={classes.column1} style={{ textAlign: "center", paddingTop: "20px", paddingLeft:"30px", paddingRight:"30px", paddingBottom:"20px" }}>

<div style={{ textAlign: "center",}}>
    <img src={Crm3} width="100%"  style={{maxWidth:"550px"}} />
</div>

</div>

<div className={classes.column2a} style={{ textAlign: "left", paddingTop: "20px", paddingLeft:"30px", paddingRight:"30px" }}>
<div className={classes.subtext}>Save time spent on hours of tedious social marketing. Elevate handles all of your social marketing needs so you can focus on what matters—selling more homes and growing your business.
<br /><br />
<div className={classes.bold}>
<img src={Greenc} style={{width:"100%", maxWidth:"14px", marginRight:"6px"}}/>Customized branding on social media.<br /><br />
<img src={Greenc} style={{width:"100%", maxWidth:"14px", marginRight:"6px"}}/>Relevant, life-style content<br />
&nbsp;&nbsp;&nbsp;&nbsp; posted weekly.<br /><br />
<img src={Greenc} style={{width:"100%", maxWidth:"14px", marginRight:"6px"}}/>Automated posts of new listings<br />
&nbsp;&nbsp;&nbsp;&nbsp; and listing updates.<br /><br />
<img src={Greenc} style={{width:"100%", maxWidth:"14px", marginRight:"6px"}}/>Automated creation of<br />
&nbsp;&nbsp;&nbsp;&nbsp; YouTube video tours.</div>
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
    fontSize: "40px",
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
    fontSize: "16px",
    fontWeight: "700",
    lineHeight: "24px",
    color: "#ffffff",
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

    [theme.breakpoints[900]]: {
      marginTop: "68px",
  },
  },


  column2a:{
    width:"400px",
    maxWidth: "100%",
    paddingRight:"20px",
    paddingLeft:"20px",
    verticalAlign: "top",


  },

  column2:{
    width:"520px",
    maxWidth: "100%",
    paddingRight:"45px",
    paddingLeft:"45px",
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
    lineHeight: "38px",
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
