import React from "react";
import Link from "gatsby-link";
import withStyles from "elevate-ui/withStyles";
import Container from "../components/Container";
import SEO from "../components/SEO";
import Logo from "../components/Logo";
import FormExplore from "../components/FormExplore";
import QuestionAnswer from "elevate-ui-icons/QuestionAnswer";
import ViewCarousel from "elevate-ui-icons/ViewCarousel";
import PlayCircleFilled from "elevate-ui-icons/PlayCircleFilled";
import CheckCircle from "elevate-ui-icons/CheckCircle";
import SMBCLogo from "../images/smbcLogo.jpg";
import Elite from "../images/elite.jpg";
import Social_pro from "../images/social_pro.jpg";
import Dms from "../images/dms.jpg";
import Ignite from "../images/ignite.jpg";
import Pro from "../images/pro.jpg";
import Tour from "../images/tour_icon.png";
import Web from "../images/webinar_icon.png";
import Social from "../images/social_pic.jpg";
import Leadpic from "../images/leadpic.jpg";
import Email from "../images/email.jpg";
import Star from "../images/star.png";
import Encore from "../images/encore_icon.png";
import Emails from "../images/6emails_pic.png";
import Dose from "../images/dose_pic.png";
import Line from "../images/line.png";
import Explore_title from "../images/explore_title.png";
import Freebg from "../images/free_bg.jpg";
import Topbg from "../images/explore_topbg.jpg";
import Bottombg from "../images/explore_bottombg.jpg";
import Exp1 from "../images/ex_promo1.jpg";
import Exp2 from "../images/ex_promo2.jpg";
import Exp3 from "../images/ex_promo3.jpg";
import Exarrow from "../images/ex_arrow.png";
import Exhost from "../images/ex_host.png";
import Exschedule from "../images/ex_schedule.png";
import Exsearch from "../images/ex_search.png";

const leadGenSpecialOffer = ({ classes }) => {

  return (
    <div className={classes.root}>
      <SEO />
    
 <div style={{backgroundColor:"white",backgroundImage:"url("+Topbg+")", backgroundPosition:"bottom"}}>
          <Container>
                <div className={classes.top}>
                    <div className={classes.centerHeading} style={{paddingBottom:"35px", paddingTop:"65px"}}>
                                        <div style={{ textAlign: "center",paddingBottom:"10px" }}>
                                        <img src={Explore_title} style={{ width:"100%", maxWidth:"280px"}}/>
                                        </div>
                                        <div style={{paddingBottom:"35px"}}>Lead generation. Intuitive CRM.  Email, text &amp; social marketing.<br />
                                        Custom marketing campaigns. And so much more.
                                        </div>
                    </div>
                </div>
         </Container>
</div>


<Container>
                <div className={classes.top}>
                    <div className={classes.centerHeading} style={{paddingBottom:"5px", paddingTop:"45px"}}>
                                <div className={classes.heading2} style={{color:"#48b8ac"}}>
                                How can we help YOU today?
                                </div>
                    </div>
                </div>
         </Container>






<div className={classes.top}>
  <div className={classes.column60p}>
    <div style={{backgroundColor:"#ffffff",}}>
          <Container>
                <div className={classes.section}></div>
            <div className={classes.top}>
              <div className={classes.centerHeading} style={{paddingBottom:"55px",}}>
                <div className={classes.heading}>
                Request Personal Demo
                </div>
                Schedule 15-minutes of one-on-one time with an Elevate coach.
                <br />
                <br />
                
              <FormExplore />
                
              </div>

              </div>
              </Container>
            </div>
    </div>
    <div className={classes.column40p}>
<Container>
        <div className={classes.infoboxGray2}>
          <div className={classes.column3} style={{ textAlign: "center", paddingBottom: "35px", }}>
                    <div style={{ textAlign: "center",paddingBottom:"20px" }}>
                    <img src={Exsearch} style={{ width:"100%", maxWidth:"150px"}}/>
                    </div>
            
                    <div style={{ textAlign: "center", paddingLeft:"10px", paddingRight:"10px" }}>
                    Want to register for an<br />
                    upcoming boot camp in your area?<br />

                    <a target="_blank" href="https://tryelevate.com/events/" className={classes.getStartedLinkpro}>
                    Search NOW
                    </a>
                    </div>


            </div>
        </div>


        <div className={classes.infoboxGray2}>
            <div className={classes.column3} style={{ textAlign: "center", paddingBottom: "35px" }}>
          
                    <div style={{ textAlign: "center",paddingBottom:"20px" }}>
                    <img src={Exhost} style={{ width:"100%", maxWidth:"150px"}}/>
                    </div>

                    <div style={{ textAlign: "center", paddingLeft:"10px", paddingRight:"10px"}}>
                    Interested in hosting an<br/>
                    educational boot camp in your<br/>
                    MLS and/or office?<br/><br/>
                    CALL 844.812.8914
                    </div>


            </div>
        </div>


        <div className={classes.infoboxGray2}>
          <div className={classes.column3} style={{ textAlign: "center", paddingBottom: "35px" }}>
                    <div style={{ textAlign: "center",paddingBottom:"20px" }}>
                    <img src={Exschedule} style={{ width:"100%", maxWidth:"150px"}}/>
                    </div>

                    <div style={{ textAlign: "center", paddingLeft:"10px", paddingRight:"10px"}}> 
                    Talk one-on-one with an<br />
                    Elevate Success Coach by<br />
                    completing the “Request a Personal Demo”<br />
                    form on this page.<br />
                    
                    </div>

                
          </div>
        </div>
        </Container>
        </div>
</div>
 















<div style={{backgroundColor:"gray",backgroundImage:"url("+Bottombg+")", backgroundPosition:"bottom"}}>
                <Container>
                            
                            <div className={classes.top}>
                            <div className={classes.centerHeading} style={{paddingBottom:"25px",}}>
                                <div style={{ textAlign: "center",paddingBottom:"35px",}}>
                                <img src={Exarrow} style={{ width:"100%", maxWidth:"35px"}}/>
                                </div>
                                <div className={classes.heading} style={{color:"#48b8ac"}}>
                                Special offers for YOU!
                                </div>
                            </div>
                            </div>
      
      
<div className={classes.top}>
          <div className={classes.column50p} style={{ textAlign: "center", paddingBottom: "45px" }}>
                <div style={{ textAlign: "center",paddingBottom:"20px" }}>
                <img src={Exp1} style={{ width:"100%", maxWidth:"300px"}}/>
                </div>
            
                <div className={classes.heading2} style={{color:"#48b8ac"}}>
                ATTENTION BROKERS!<br />
                Want FREE Pizza?</div>

                <div style={{color:"#ffffff"}}> 
                Bring at least 10 agents to an<br />
                upcoming boot camp &amp; receive<br />
                a FREE PIZZA for your office! 
                </div>
                

          </div>


          <div className={classes.column50p} style={{ textAlign: "center", paddingBottom: "45px" }}>
                <div style={{ textAlign: "center",paddingBottom:"20px" }}>
                <img src={Exp2} style={{ width:"100%", maxWidth:"300px"}}/>
                </div>

                <div className={classes.heading2} style={{color:"#48b8ac"}}>
                Get FREE $50<br />
                in Facebook Ads!</div>

                <div style={{color:"#ffffff"}}> 
                Kick off your Elevate Lead Generation<br />
                campaign with over $50 in value<br />
                on Facebook advertising. WOW!<br />
                </div>
               
          </div>


          <div className={classes.column50p} style={{ textAlign: "center", paddingBottom: "45px" }}>
                <div style={{ textAlign: "center",paddingBottom:"20px" }}>
                <img src={Exp3} style={{ width:"100%", maxWidth:"300px"}}/>
                </div>
                <div className={classes.heading2} style={{color:"#48b8ac"}}>
                Want a FREE<br />
                Website/Social Audit?
                </div>

                <div style={{color:"#ffffff"}}> 
                Improve your online marketing success<br />
                when an Elevate Success Coach<br />
                reviews YOUR website &amp; social channels.<br />
                </div>

          </div>



          </div>

          <div className={classes.top}>
                            <div className={classes.centerHeading} style={{paddingBottom:"45px",}}>
                                <div className={classes.heading2} style={{color:"#48b8ac"}}>
                                Are YOU interested?</div>
                                <div style={{color:"#ffffff"}}> 
                                Fill out the "Request a Personal Demo" form above or call 844.812.8914 to speak to an Elevate Success Coach today.<br />
                                We’re excited to help you and your business grow!
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
    position: "relative",
    paddingTop: "20px",
    paddingBottom: "0px",
    lineHeight: "1.75em",
  },
  top: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "top",
    maxWidth: "960px",
    marginRight: "auto",
    marginLeft: "auto"
  },
  column50p: {
    flex: "1",
    marginLeft:'10px',
    marginRight:'10px'
  },
  column60p: {
    flex: "6",
    marginLeft:'10px',
    marginRight:'10px'
  },
  column40p: {
    flex: "4",
    marginLeft:'10px',
    marginRight:'10px'
  },
  section:{
    paddingTop: "50px",
  },
  heading: {
    color: theme.colors.secondary,
    fontSize: "32px",
    lineHeight: "40px",
    fontWeight: "700",
    marginRight: "auto",
    paddingBottom: "20px",
  },
  heading2: {
    color: theme.colors.secondary,
    fontSize: "22px",
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
    width:"525px",
    maxWidth: "100%",
    paddingRight:"18px",
    paddingLeft:"18px",
    verticalAlign: "top",
  },
  
  column2:{
    width:"710px",
    maxWidth: "100%",
    paddingRight:"10px",
    paddingLeft:"10px",
    verticalAlign: "top",
  },

  column3:{
    maxWidth: "100%",
    paddingRight:"10px",
    paddingLeft:"10px",
    verticalAlign: "top",
  },

  column3a:{
    width:"330px",
    maxWidth: "100%",
    paddingRight:"10px",
    paddingLeft:"10px",
    verticalAlign: "top",
  },

  getStartedLink: {
    minWidth: "300px",
    maxWidth: "300px",
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
  getStartedLinksp: {
    minWidth: "200px",
    maxWidth: "200px",
    alignContent: "center",
    justifyContent: "center",
    fontSize: "14px",
    fontWeight: "700",
    display: "block",
    letterSpacing: ".25px",
    backgroundColor: "#56595B",
    color: "#FFF",
    textDecoration: "none",
    padding: "12px 14px",
    borderRadius: "4px",
    margin: "14px auto",
    marginBottom: "20px",
  },
  getStartedLinkdms: {
    minWidth: "200px",
    maxWidth: "200px",
    alignContent: "center",
    justifyContent: "center",
    fontSize: "14px",
    fontWeight: "700",
    display: "block",
    letterSpacing: ".25px",
    backgroundColor: "#5BC1B8",
    color: "#FFF",
    textDecoration: "none",
    padding: "12px 14px",
    borderRadius: "4px",
    margin: "14px auto",
    marginBottom: "20px",
  },
  getStartedLinkignite: {
    minWidth: "200px",
    maxWidth: "200px",
    alignContent: "center",
    justifyContent: "center",
    fontSize: "14px",
    fontWeight: "700",
    display: "block",
    letterSpacing: ".25px",
    backgroundColor: "#f99406",
    color: "#FFF",
    textDecoration: "none",
    padding: "12px 14px",
    borderRadius: "4px",
    margin: "14px auto",
    marginBottom: "20px",
  },
  getStartedLinkelite: {
    minWidth: "200px",
    maxWidth: "200px",
    alignContent: "center",
    justifyContent: "center",
    fontSize: "14px",
    fontWeight: "700",
    display: "block",
    letterSpacing: ".25px",
    backgroundColor: "#EE5A55",
    color: "#FFF",
    textDecoration: "none",
    padding: "12px 14px",
    borderRadius: "4px",
    margin: "14px auto",
    marginBottom: "20px",
  },
  getStartedLinkpro: {
    minWidth: "200px",
    maxWidth: "200px",
    alignContent: "center",
    justifyContent: "center",
    fontSize: "14px",
    fontWeight: "700",
    display: "block",
    letterSpacing: ".25px",
    backgroundColor: theme.colors.secondary,
    color: "#FFF",
    textDecoration: "none",
    padding: "12px 14px",
    borderRadius: "4px",
    margin: "14px auto",
    marginBottom: "20px",
  },

  getStartedLink2: {
    minWidth: "300px",
    maxWidth: "300px",
    alignContent: "center",
    justifyContent: "center",
    fontSize: "14px",
    fontWeight: "700",
    display: "block",
    letterSpacing: ".25px",
    backgroundColor: "#ffffff",
    color: "#5dc4ba",
    textDecoration: "none",
    padding: "14px 16px",
    borderRadius: "4px",
    margin: "16px auto",
    marginBottom: "20px",
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
    backgroundColor: "#1f194c",
    color: theme.colors.gray800,
    textDecoration: "none",
    padding: "40px 15px 15px 15px",
    borderRadius: "4px",
    margin: "30px auto",
    textAlign: "center",
  },
  infoboxGray2: {
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#fafafa",
    color: theme.colors.gray800,
    border:"3px solid #e5ecf2",
    textDecoration: "none",
    padding: "30px 15px 15px 15px",
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
    padding: "40px 25px 25px 25px",
    borderRadius: "4px",
    margin: "30px auto",
    textAlign: "center",
  },
  videoBorder: {
    borderStyle:"solid",
    borderWidth: "1px",
    borderColor: theme.colors.gray400,
  },
  iconPosition:{
    position: "relative",
    top:"12px",
    right:"4px"
  },
  productCol: {
    minHeight: "160px",

    [theme.breakpoints[900]]: {
      minHeight: "200px",
    },
  },
}))(leadGenSpecialOffer);
