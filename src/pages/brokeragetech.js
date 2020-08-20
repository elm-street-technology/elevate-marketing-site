import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import SignUpFormBrokerageTech from "../components/SignUpFormBrokerageTech";
import Covid from "../images/covid_header.jpg";
import Ss1 from "../images/ss_chart1.jpg";
import Ss2 from "../images/ss_chart2.jpg";
import SEO from "../components/SEO";

const Brokeragetech = ({ children, classes, data, tags }) => {
  const postNode = {
    title: `The Value of Brokerage Technology Consolidation - ${config.siteTitle}`,
  };

  return (
    <div className={classes.root}>
      <Helmet>
        <title>{`The Value of Brokerage Technology Consolidation - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="The Value of Brokerage Technology Consolidation" />


<Container>
    <div style={{paddingBottom:"50px", textAlign:"center", paddingTop:"20px"}}>
    <h1 className={classes.heading} style={{color:"#38195f",}}>The Value of Brokerage<br />
    Technology Consolidation</h1>
      <br />

      <h1 className={classes.heading}>Stream The Webinar</h1>
            <h2 className={classes.subHeading}>
             Missed the webinar or looking for a replay?<br />
             We’ve got you covered.</h2>

              <div style={{textAlign: "center", maxWidth:"700px",marginLeft:"auto",marginRight:"auto", paddingBottom:"50px"}}>
                <div style={{ textAlign: "center"}} className={classes.videoEmbed}>
                        <iframe className={classes.videoContainer} src="https://www.youtube.com/embed/FqD9H3ieORw"
                         frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </div>


              <h1 className={classes.heading}>Poll Results</h1>
            <h2 className={classes.subHeading}>
            Participated in our live survey?<br />
            Here’s the group results.</h2>


        












              <div className={classes.top}>

<div className={classes.column2} style={{ textAlign: "center", paddingTop: "12px" }}>
                  
                  
                
                  <div style={{ textAlign: "center",paddingTop:"12px" }}>
                  <h2 className={classes.subHeading}>How would you rate the current state<br />
                  of your lead generation?</h2>
                        <img src={Ss1} width="255" style={{ paddingBottom:"12px" }}/>
                        <h2 className={classes.subHeading}>
                        <span className={classes.bold} style={{color:"#55c3ba"}}>27%</span> No Sauce (Nothing Happening)<br />
                        <span className={classes.bold} style={{color:"#55c3ba"}}>49%</span> Mild (Weak)<br />
                        <span className={classes.bold} style={{color:"#55c3ba"}}>23%</span> Medium (Ok, but could use some help)<br />
                        <span className={classes.bold} style={{color:"#55c3ba"}}>1%</span> Spicy (I'm rocking it!)
                        </h2>
                  </div>
</div>




<div className={classes.column2} style={{ textAlign: "center", paddingTop: "12px" }}>

               
                  <div style={{ textAlign: "center",paddingTop:"12px" }}>
                  <h2 className={classes.subHeading}>How much are you investing<br />
                  in lead generation?</h2>
                        <img src={Ss2} width="255" style={{ paddingBottom:"12px" }}/>
                        <h2 className={classes.subHeading}>
                        <span className={classes.bold} style={{color:"#55c3ba"}}>51%</span> Less than $1,000/m<br />
                        <span className={classes.bold} style={{color:"#55c3ba"}}>9%</span> More than $1,000/m<br />
                        <span className={classes.bold} style={{color:"#55c3ba"}}>40%</span> Nothing</h2>
                  </div>
</div>


</div>    


            






                  
                  
                
             







    </div>
</Container>



 <div style={{backgroundColor:"#f7f7f7", paddingBottom:"70px"}}>
        <h1 className={classes.heading} style={{paddingTop:"65px"}}>
        Connect with a Success Coach
        </h1>
        <h2 className={classes.subHeading}>Learn more about Elevate’s lead generation by connecting with a Success Coach.</h2>
        <SignUpFormBrokerageTech />
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
    paddingTop: "53px",
 
  },
  heading: {
    fontSize: "28px",
    fontWeight: "700",
    letterSpacing: ".14px",
    color: "#55c3ba",
    textAlign: "center",
    lineHeight: "35px",
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

  getStartedLink: {
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
    padding: "14px 16px",
    borderRadius: "4px",
    margin: "16px auto",
    marginBottom: "20px",
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
}))(Brokeragetech);
