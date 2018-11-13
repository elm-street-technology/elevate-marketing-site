import React from "react";
import Link from "gatsby-link";
import withStyles from "elevate-ui/withStyles";
import Container from "../components/Container";
import SEO from "../components/SEO";
import Logo from "../components/Logo";
import Hr from "elevate-ui/Hr";

const Migration = ({ classes }) => {

  return (
    <div className={classes.root}>
      <SEO />
      <Container>
        <div className={classes.top}>
          <div className={classes.centerHeading}>
            <div className={classes.heading}>Everything you need to know…</div>
            <div className={classes.bold}>about migrating from Listingbook to Elevate</div>
          </div>
        </div>
      </Container>
      <Container>
        <div className={classes.section}></div>
        <div className={classes.top}>
          <div className={classes.column}> 
            <div className={classes.grayText}>
              <div className={classes.heading}>What is Elevate?</div>
              Developed by Elm Street Technology, Elevate is the <span className={classes.bold}>1st true Productivity Platform for real estate</span> and the next 
              evolution of all of the features and functionality that you love with Listingbook...plus many more.
            </div>
            <br/>
            <div className={classes.bold}>What does this migration mean if I’m an MLS?</div>
            You will receive all of the technology and support that you’ve always received, along with many new enhancements.  
            All migrations will take place by December 31, 2018, and the Elevate team will work closely with you on your communication rollout, 
            as well as sales &amp; support strategies.  In the meantime, please explore this page for an introduction to Elevate.
            <div style={{paddingTop:"30px"}}>
             <a target="_blank" href="/assets/Elevate_Listingbook_Feature_Comparison.pdf" className={classes.getStartedLink}>
              View Feature Comparison Chart
            </a>
            </div>
            <div>
            <Hr style={{ marginTop: "40px",marginBottom: "40px" }}/>
            </div>
            <div className={classes.bold}>What does this migration mean if I’m an agent?</div>
            <div style={{paddingBottom:"30px"}}>
            You will receive all of the technology and support that you’ve always received, but with more features, more power, 
            and more ease-of-use.  All migrations will take place by December 31, 2018, and the Elevate team will communicate 
            with you throughout this process with more definitive timelines.  In the meantime, please explore this page for an introduction to Elevate.
            </div>
            <div>
             <a target="_blank" href="https://elmstreettechnology.zendesk.com/hc/en-us/sections/360002618972-Listingbook-to-Elevate-" className={classes.getStartedLink}>
              FAQ's and Getting Started Guide
            </a>
            </div>

          </div>
          
          <div className={classes.column}>
            <div className={classes.infoboxGray}>
                <div>
                <div className={classes.heading}>HELP CENTER</div>
                <span className={classes.bold}>Transitioning from Listingbook to Elevate?</span>
                <br/>
                Start here…
                </div>
                <div style={{paddingTop:"30px",paddingBottom:"30px"}}>
                <a target="_blank" href="https://elmstreettechnology.zendesk.com/hc/en-us/articles/360018375372-Listingbook-to-Elevate-FAQs" className={classes.getStartedLink}>Frequently Asked Questions</a>
                </div>
                <div >
                <a target="_blank" href="https://elmstreettechnology.zendesk.com/hc/en-us/articles/360018360772-Upgrade-from-Listingbook-Getting-Started-With-Elevate" className={classes.getStartedLink}>Getting Started with Elevate</a>
                </div>
            </div>
            <div className={classes.infoboxTeal}>
              <div>
                <div className={classes.heading} style={{color:"#FFFFFF"}}>ATTEND A WEBINAR</div>
                <span className={classes.bold}>Live training webinars every <br/>Monday at 10am &amp; 4pm EST</span>
              </div>
                <div style={{paddingTop:"30px"}}>
                <a target="_blank" href="https://elmstreettechnology.zendesk.com/hc/en-us/articles/360019751351-Live-Training-Webinars-for-Former-Listingbook-Agents" 
                    className={classes.darkTealLink} style={{backgroundColor:"#3e928b"}}>Sign Up Now</a>
                </div>
                <div style={{paddingTop:"30px"}}>
                <span className={classes.bold} style={{color:"#FFFFFF"}}>Can’t attend a live training?</span>
                </div>
                No worries, here’s a recording…
                <div style={{paddingTop:"30px"}} >
                  <a target="_blank" href="#" className={classes.grayLink}>Coming Soon</a>
                </div>
            </div>

            <div style={{textAlign:"center"}}>
              <div className={classes.heading}>Have Questions Now?</div>
              <button className={classes.getStartedLink} onClick={() => { if (window.zE) window.zE.activate() }}>
                Chat with Success Coach
              </button>
            </div>

          </div>

        </div>
      </Container>
      <Container>
      <div className={classes.section}></div> 
        <div className={classes.top}>
          <div className={classes.centerHeading}>
            <div className={classes.heading}>
              <div style={{display:"inline",top: "-8px",marginRight:"6px", position:"relative"}}>Welcome to</div>
              <Logo />
            </div>
            <div className={classes.bold}>More features.  More support.  More speed.<br/>
            Easier than ever before.
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <div className={classes.section}></div>
        <div className={classes.top}>
          <div className={classes.column}>
            <div className={classes.videoBorder}>
              <iframe src="//fast.wistia.net/embed/iframe/ecdwsmxj9y?videoFoam=true"
              allowtransparency="true" frameborder="0" scrolling="no" className="wistia_embed"
              name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen
              oallowfullscreen msallowfullscreen width="100%" height="290"></iframe>
              <script src="//fast.wistia.net/assets/external/iframe-api-v1.js"></script>
            </div>
            <div style={{fontSize:"12px",paddingRight:"30px",paddingLeft:"30px"}}>
              <span className={classes.bold}>An Introduction to Elevate CRM</span>
              <div style={{float:"right",display:"inline"}}>runtime:  20:12</div>

            </div>
          </div>
          <div className={classes.column}>
            <div className={classes.videoBorder}>
              <iframe src="//fast.wistia.net/embed/iframe/xhsd39wnip?videoFoam=true"
              allowtransparency="true" frameborder="0" scrolling="no" className="wistia_embed"
              name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen
              oallowfullscreen msallowfullscreen width="100%" height="290"></iframe>
              <script src="//fast.wistia.net/assets/external/iframe-api-v1.js"></script>
            </div>
            <div style={{fontSize:"12px",paddingRight:"30px",paddingLeft:"30px"}}>
              <span className={classes.bold}>An Introduction to the Site Editor</span>
              <div style={{float:"right",display:"inline"}}>runtime:  13:14</div>

            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};


export default withStyles((theme) => ({
  root: {
    position: "relative",
    paddingTop: "96px",
    paddingBottom: "192px",
    lineHeight: "1.75em",
  },
  top: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
  },
  section:{
    paddingTop: "60px",
  },
  heading: {
    color: theme.colors.secondary,
    fontSize: "32px",
    fontWeight: "700",
    marginRight: "auto",
    paddingBottom: "20px",
  },
  centerHeading:{
    alignItems: "center",
    width: "100%",
    textAlign: "center",
  },
  bold:{
    fontWeight:"700",
  },
  column:{
    width:"530px",
    maxWidth: "100%",
    paddingRight:"10px",
    paddingLeft:"10px",
    verticalAlign: "top",
  },
  getStartedLink: {
    width: "250px",
    alignContent: "center",
    justifyContent: "center",
    fontSize: "14px",
    fontWeight: "700",
    letterSpacing: ".25px",
    backgroundColor: theme.colors.secondary,
    color: "#FFF",
    textDecoration: "none",
    padding: "14px 16px",
    borderRadius: "4px",
    margin: "16px auto",
  },
  darkTealLink: {
    width: "250px",
    alignContent: "center",
    justifyContent: "center",
    fontSize: "14px",
    fontWeight: "700",
    letterSpacing: ".25px",
    backgroundColor: theme.colors.secondaryDark,
    color: "#FFF",
    textDecoration: "none",
    padding: "14px 16px",
    borderRadius: "4px",
    margin: "16px auto",
  },
  grayLink: {
    width: "250px",
    alignContent: "center",
    justifyContent: "center",
    fontSize: "14px",
    fontWeight: "700",
    letterSpacing: ".25px",
    backgroundColor: theme.colors.gray400,
    color: "#FFF",
    textDecoration: "none",
    padding: "14px 16px",
    borderRadius: "4px",
    margin: "16px auto",
  },
  grayText:{
    color: theme.colors.gray800,
  },
  infoboxGray: {
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.gray100,
    color: theme.colors.gray800,
    textDecoration: "none",
    padding: "40px 36px",
    borderRadius: "4px",
    margin: "30px auto",
    textAlign: "center",
  },
  infoboxTeal: {
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.secondary,
    color: theme.colors.gray800,
    textDecoration: "none",
    padding: "40px 36px",
    borderRadius: "4px",
    margin: "30px auto",
    textAlign: "center",
  },
  videoBorder: {
    borderStyle:"solid",
    borderWidth: "1px",
    borderColor: theme.colors.gray400,
  },

}))(Migration);
