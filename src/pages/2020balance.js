import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import SignUpFormBalance from "../components/SignUpFormBalance";
import Balancelogo from "../images/balance_logo.jpg";
import Bal1 from "../images/bal1.png";
import Bal2 from "../images/bal2.png";
import Bal3 from "../images/bal3.png";
import Bal4 from "../images/bal4.png";
import Bal5 from "../images/bal5.png";
import SEO from "../components/SEO";

const Balance = ({ children, classes, data, tags }) => {
  const postNode = {
    title: `2020 Balance - ${config.siteTitle}`,
  };

  return (
    <div className={classes.root}>
      <Helmet>
        <title>{`2020 Balance - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="Balance" />


<Container>
    <div style={{paddingBottom:"50px", textAlign:"center"}}>
    <img src={Balancelogo} width="300" style={{paddingBottom:"20px"}}/>
      <br />

      <h1 className={classes.heading}>Stream The Webinar</h1>
            <h2 className={classes.subHeading}>
             Missed the webinar or looking for a replay? We’ve got you covered.</h2>

              <div style={{textAlign: "center", maxWidth:"700px",marginLeft:"auto",marginRight:"auto", paddingBottom:"50px"}}>
                <div style={{ textAlign: "center"}} className={classes.videoEmbed}>
                        <iframe className={classes.videoContainer} src="https://www.youtube.com/embed/LU8XdEbxtxY"
                         frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </div>


              <h1 className={classes.heading}>Poll Results</h1>
            <h2 className={classes.subHeading}>
            Participated in our live survey?  Here’s the group results.</h2>


            <div className={classes.top}>

<div className={classes.column3} style={{ textAlign: "center", paddingTop: "12px" }}>
                  
                  
                
                  <div style={{ textAlign: "center",paddingTop:"12px" }}>
                  <h2 className={classes.subHeading}>How are YOU feeling?<br />
                  (select all that apply)</h2>
                        <img src={Bal1} width="255" />
                  </div>
</div>

<div className={classes.column3} style={{ textAlign: "center", paddingTop: "12px" }}>

               
                  <div style={{ textAlign: "center",paddingTop:"12px" }}>
                  <h2 className={classes.subHeading}>What do you think will be<br />
                  the shape of our industry's recovery?</h2>
                        <img src={Bal2} width="255" />
                  </div>
</div>

<div className={classes.column3} style={{ textAlign: "center", paddingTop: "12px" }}>
                    <div style={{ textAlign: "center",paddingTop:"12px" }}>
                  <h2 className={classes.subHeading}>Are you experiencing<br />
                  buyers/sellers “on hold”?</h2>
                  
                        <img src={Bal3} width="255" />
                  </div>
</div>
</div>



<div className={classes.top}>

<div className={classes.column2} style={{ textAlign: "center", paddingTop: "42px" }}>
                  
                  
                
                  <div style={{ textAlign: "center" }}>
                  <h2 className={classes.subHeading}>What technology are you using<br />
                  MORE of now than previously?</h2>
                        <img src={Bal5} width="355" /><br /><br />
                        <h2 className={classes.subHeading}>
                        <span className={classes.bold} style={{color:"#55c3ba"}}>70%</span> Virtual Tours, etc.<br />
                        <span className={classes.bold} style={{color:"#55c3ba"}}>60%</span> Email, Text, Video Messaging<br />
                        <span className={classes.bold} style={{color:"#55c3ba"}}>55%</span> Social Media - Organic &amp; Paid<br />
                        <span className={classes.bold} style={{color:"#55c3ba"}}>28%</span> Online Lead Gen.
                        </h2>
                  </div>
</div>

<div className={classes.column2} style={{ textAlign: "center", paddingTop: "42px" }}>

               
                  <div style={{ textAlign: "center"}}>
                  <h2 className={classes.subHeading}>What technology do you<br />
                  plan to CONTINUE using?</h2>
                        <img src={Bal5} width="355" /><br /><br />
                        <h2 className={classes.subHeading}>
                        <span className={classes.bold} style={{color:"#55c3ba"}}>78%</span> Virtual Tours, etc.<br />
                        <span className={classes.bold} style={{color:"#55c3ba"}}>74%</span> Email, Text, Video Messaging<br />
                        <span className={classes.bold} style={{color:"#55c3ba"}}>72%</span> Social Media - Organic &amp; Paid<br />
                        <span className={classes.bold} style={{color:"#55c3ba"}}>45%</span> Online Lead Gen.<br />
                        </h2>
                  </div>
</div>

</div>






                  
                  
                
             







    </div>
</Container>



 <div style={{backgroundColor:"#f7f7f7", paddingBottom:"50px"}}>
        <h1 className={classes.heading} style={{paddingTop:"50px"}}>
        Connect with a Success Coach
        </h1>
        <SignUpFormBalance />
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
  );
};

export default withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    padding: "0 0px",
    margin: "40px auto",
  },
  heading: {
    fontSize: "28px",
    fontWeight: "700",
    letterSpacing: ".14px",
    color: "#55c3ba",
    textAlign: "center",
    marginBottom: "12px",
  },
  top: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "top",
  },

  bold:{
    fontWeight:"700",
  },

  column3:{
    width:"350px",
    maxWidth: "100%",
    paddingRight:"10px",
    paddingLeft:"10px",
    verticalAlign: "top",
  },

  column2:{
    width:"520px",
    maxWidth: "100%",
    paddingRight:"10px",
    paddingLeft:"10px",
    verticalAlign: "top",
  },

  subHeading: {
    fontSize: "18px",
    lineHeight: "28px",
    fontWeight: "600",
    letterSpacing: ".08px",
    color: "#888f96",
    textAlign: "center",
    margin: "0 auto 36px",
  },

  covidContainer: {
    width: "70%",
    margin: "16px auto 0 auto",
  },
  covidHeader: {
    width: "100%",
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
  // closingContainer: {
  //   color: "#A9A8B6",
  //   fontWeight: "600",
  //   fontSize: "18px",
  //   textAlign: "center",
  //   margin: "60px auto 0",
  // },
  // emailLink: {
  //   color: "#2E2E35 !important",
  //   textDecoration: "underline",

  //   "&:hover": {
  //     textDecoration: "none !important",
  //   },
  // },
}))(Balance);
