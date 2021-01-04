import React, { Component } from "react";
import withStyles from "elevate-ui/withStyles";
import classNames from "classnames";
import SEO from "../components/SEO";
import HomePageHero from "../components/HomePageHero";
import HomePageHeroVid from "../components/HomePageHeroVid";
import CallToAction from "../components/CallToAction";
import CTASecondary from "../components/CTASecondary";
import TestimonialCard from "../components/TestimonialCard";
import gridBackgroundImg from "../images/indexbg_aug2019.jpg";
import SolutionsGrid from "../components/SolutionsGrid";
import GridTitle from "../components/GridTitle";
import GridCardIndex from "../components/GridCardIndex";
import DefinitionSection from "../components/DefinitionSection";
import TestimonialCardGrid from "../components/TestimonialCardGrid";
import Link from "gatsby-link";
import Section2Col from "../components/Section2Col";
import Section1Col from "../components/Section1Col";
import Section2ColReverse from "../components/Section2ColReverse";
import BgSection from "../components/BgSection";
import BgSectionExternal from "../components/BgSectionExternal";
import TestImage from "../images/600.jpg";
import Blogbg from "../images/365_bg.jpg";
import Blogpic from "../images/365_blogpic.png";
import Webinarpic from "../images/webinars_pic.png";
import Devices from "elevate-ui-icons/Devices";
import Comment from "elevate-ui-icons/Comment";
import Mail from "elevate-ui-icons/Mail";
import Share from "elevate-ui-icons/Share";
import Timeline from "elevate-ui-icons/Timeline";
import Equalizer from "elevate-ui-icons/Equalizer";
import CheckCircle from "elevate-ui-icons/CheckCircle";
import HeadsetMic from "elevate-ui-icons/HeadsetMic";
import Elevatew from "../images/elevatew.png";
import BottomArrow from "../images/bottom_arrow.png";
import Seocover from "../images/seo_cover.png";
import Fadebg from "../images/fadebg.jpg";
import Smcover from "../images/sm101_cover.png";
import Btccover from "../images/btc_cover.png";
import Emailcover from "../images/email_cover.png";
import Kardcover from "../images/kard_cover.png";
import Saucecover from "../images/sauce_cover.png";
import Modalpic from "../images/nov_pop.gif";
import Modalpic2 from "../images/doubledown.png";
import Container from "../components/Container";
import Bcesw from "../images/bcesw.jpg";

import GroupAdd from "elevate-ui-icons/GroupAdd";
import Forum from "elevate-ui-icons/Forum";
import DeviceHub from "elevate-ui-icons/DeviceHub";
import PieChart from "elevate-ui-icons/PieChart";

import Header from "../components/Header";
import Footer from "../components/Footer";

if (typeof window !== 'undefined')  {
  window.addEventListener("click", function(event) {
    var fullmodal = document.getElementById("myModal");
    var span = document.getElementById("modalClose");
    if (event.target == fullmodal || event.target == span) {
      fullmodal.style.display = "none";
    }
  });
}

class Index extends Component {

  render() {
    const { classes } = this.props;
    

    return (
      <div className={classNames(classes.root)}>
        <Header />
        <SEO />
        <HomePageHeroVid isAlternate={true} />

        



        <Container>
    <div style={{textAlign:"center", paddingTop:"55px", paddingBottom:"60px",}}>

       
    <div className={classes.centerheading}>The power of <span style={{ fontWeight: "bold" }}>ONE.</span></div>
    <div className={classes.centersubtext}><span style={{ fontWeight: "bold" }}>One platform. One vendor.  One point of contact.</span><br />
    For all of your lead generation, digital marketing, &amp; client collaboration.</div>
</div>
        
</Container>



        <div className={classes.solutionsGridContainer}>
        <div style={{alignContent:"center"}}><img src={BottomArrow} style={{width:"100%", maxWidth:"65px", display:"block", marginLeft:"auto", marginRight:"auto", paddingBottom:"22px"}}/></div>
          <SolutionsGrid>
            <GridCardIndex color="rgba(85, 195, 186, 0.8)">
            <Devices color="#FFFFFF" size={50}/><br />
            <span style={{ fontWeight: "bold" }}>IDX<br />
            Websites</span>
            </GridCardIndex>
            <GridCardIndex color="rgba(85, 195, 186, 0.8)">
            <Comment color="#FFFFFF" size={50}/><br />
            <span style={{ fontWeight: "bold" }}>Social Media<br />
            Marketing</span>
            </GridCardIndex>
            <GridCardIndex color="rgba(85, 195, 186, 0.8)">
            <Mail color="#FFFFFF" size={50}/><br />
            <span style={{ fontWeight: "bold" }}>Email Marketing<br />
            Campaigns</span>
            </GridCardIndex>
            <GridCardIndex color="rgba(85, 195, 186, 0.8)">
            <Share color="#FFFFFF" size={50}/><br />
            <span style={{ fontWeight: "bold" }}>Lead<br />
            Generation</span>
            </GridCardIndex>
            <div className={classes.cardroot}>
              <div className={classes.cardinner}>
              <img src={Elevatew} style={{width:"100%", maxWidth:"200px",}}/>
              </div>
            </div>
            <GridCardIndex color="rgba(85, 195, 186, 0.8)">
            <Timeline color="#FFFFFF" size={50}/><br />
            <span style={{ fontWeight: "bold" }}>Powerful<br />
            CRM</span>
            </GridCardIndex>
            <GridCardIndex color="rgba(85, 195, 186, 0.8)">
            <Equalizer color="#FFFFFF" size={50}/><br />
            <span style={{ fontWeight: "bold" }}>Performance<br />
            Metrics</span>
            </GridCardIndex>
            <GridCardIndex color="rgba(85, 195, 186, 0.8)">
            <CheckCircle color="#FFFFFF" size={50}/><br />
            <span style={{ fontWeight: "bold" }}>Easy<br />
            Implementation</span>
            </GridCardIndex>
            <GridCardIndex color="rgba(85, 195, 186, 0.8)">
            <HeadsetMic color="#FFFFFF" size={50}/><br />
            <span style={{ fontWeight: "bold" }}>Fanatical<br />
            Support</span>
            </GridCardIndex>
          </SolutionsGrid>
        </div>


  <Container>
                <div style={{textAlign:"center", paddingTop:"45px", paddingBottom:"10px",}}>

                   
                <div className={classes.centerheading}>The power of <span style={{ fontWeight: "bold" }}>EDUCATION</span></div>
                <div className={classes.centersubtext}><span style={{ fontWeight: "bold" }}>Important COVID-19 update:</span> At this time, ALL educational training series are WEBINAR only.</div>
                    

                </div>
  </Container>



        
      <div style={{paddingTop:"35px", paddingBottom:"50px",}}>
        <Container>
            <div className={classes.flexContainer}>
                <div className={classes.flexItem}>

                {/*
                <iframe width="100%" height="350" src="https://www.youtube.com/embed/fGRZ8-mLwnQ?rel=0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                */}    
                <img src={Bcesw} style={{width:"100%",}}/>

                </div>
                <div className={classes.flexItem} style={{padding:"25px",}}>
                <div className={classes.leftheading} style={{lineHeight:"34px"}}>The Boot Camp Experience...<br />
                via WEBINAR</div><br />
                <div className={classes.leftsubtext}>Designed to energize &amp; empower agents, brokers and teams across the U.S., the Elevate Boot Camp series provides tips, tricks &amp; strategies on everything from social media marketing, lead generation, nurturing &amp; conversion, and much more.</div>

                <Link to="/events_sm" className={classes.ctabutton}>
                  #1 Social Media Boot Camp</Link>
                  <Link to="/events_lg" className={classes.ctabutton}>
                  Let’s Get Social about Lead Gen.</Link>
                    
                </div>
            </div>
        </Container>
        </div>



        <div style={{backgroundImage:"url("+Fadebg+")", backgroundSize:"cover", backgroundPosition:"centerBottom", textAlign:"center"}}>
      <Container>
                    <div style={{paddingTop:"40px", paddingLeft:"45px", paddingRight:"45px", paddingBottom:"20px"}}>
                          <div className={classes.centerheading}>Elevate Educational Guides</div> 
                          <div className={classes.centersubtext}>FREE downloads to feed your brain...and your bottom line.</div>  
                    </div>

        <div className={classes.top}>

                <div className={classes.column3} style={{ textAlign: "center", paddingTop: "22px" }}>
                                    
                                    <div className={classes.centerheading2}>Awesome Email<br />
                                    Marketing Guide</div>
                                    <div className={classes.centersubtext} >Your FREE Guide
                                    For Creating AWESOME Email Marketing!</div>
                                    
                                    
                                    <a target="_blank" href="/emailmarketingguide" className={classes.ctabutton}>
                                    Download Now</a>
                                    <div style={{ textAlign: "center",paddingTop:"35px" }}>
                                          <img src={Emailcover} width="300"/>
                                    </div>
                  </div>

                  <div className={classes.column3} style={{ textAlign: "center", paddingTop: "22px" }}>
                                    
                                    <div className={classes.centerheading2}>Social Media<br />
                                    Marketing 101 Guide</div>
                                    <div className={classes.centersubtext}>Your FREE, All-Inclusive Guide<br />
                                    For Creating GREAT Content!</div>
                                    
                                    
                                    <a target="_blank" href="/socialmediamarketingguide" className={classes.ctabutton}>
                                    Download Now</a>
                                    <div style={{ textAlign: "center",paddingTop:"35px" }}>
                                          <img src={Smcover} width="300"/>
                                    </div>
                  </div>

                  <div className={classes.column3} style={{ textAlign: "center", paddingTop: "22px" }}>
                 
                                    <div className={classes.centerheading2}>ROCKIN' Website<br />
                                    SEO Guide</div>
                                    <div className={classes.centersubtext}>Secrets to Getting<br />
                                    Found on Google</div>
                                   
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
                                    "Secret Sauce"</div>
                                    <div className={classes.centersubtext}>Packed Full of Easy-To-Implement<br />
                                    Tips, Tricks &amp; Strategies</div>
                                    
                                 
                                    
                                    <a target="_blank" href="/leadgenguide" className={classes.ctabutton}>
                                    Download Now</a>
                                    <div style={{ textAlign: "center",paddingTop:"35px" }}>
                                          <img src={Saucecover} width="300" />
                                    </div>
                  </div>

                  <div className={classes.column3} style={{ textAlign: "center", paddingTop: "22px" }}>
                 
                                    <div className={classes.centerheading2}>The Brokerage<br />
                                    Technology Checklist</div>
                                    <div className={classes.centersubtext} >Select The Best Technology<br />
                                    Partner for Your Brokerage</div>
                                   
                                    <a target="_blank" href="/brokeragetechchecklist" className={classes.ctabutton}>
                                    Download Today</a>
                                    <div style={{ textAlign: "center",paddingTop:"35px" }}>
                                          <img src={Btccover} width="300" />
                                    </div>
                  </div>

                  <div className={classes.column3} style={{ textAlign: "center", paddingTop: "22px" }}>
                 
                                    <div className={classes.centerheading2}>6 Estate Marketing Lessons<br />
                                    From Kim Kardashian</div>
                                    <div className={classes.centersubtext} >What can Kim Kardashian teach real estate agents about marketing?</div>
                                   
                                    <a target="_blank" href="/kardashian" className={classes.ctabutton}>
                                    Download Today</a>
                                    <div style={{ textAlign: "center",paddingTop:"35px" }}>
                                          <img src={Kardcover} width="300" />
                                    </div>
                  </div>


                  
        </div>
    </Container>
    </div>





{/*
      <div style={{ backgroundColor:"#f7f7f7", paddingTop:"45px", paddingLeft:"25px", paddingright:"25px",}}>
        <div>
        <Section1Col secTitle="Online Webinars">
        Can’t make one of our in-person Boot Camps? No worries!<br />
        Join one of our upcoming webinars where we cram as much of our great education<br />
        into a one-hour deep dive.  Business suit NOT required!
        
          <div style={{ textAlign: "center", }}>
                <Link to="/upgrade" className={classes.ctabutton}>
                  Upcoming Webinar Schedule</Link>
                <img src={Webinarpic} style={{width:"100%", maxWidth:"900px", display:"block", marginLeft:"auto", marginRight:"auto", paddingTop:"13px",}}/>
          </div>
          
        </Section1Col>
      </div>
      </div>
*/}

        <BgSectionExternal bgImage={Blogbg} secTitle="3sixtyfive.agency Blog" secLink="http://3sixtyfive.agency/blog" secButton="Feed Your Brain" secImage={Blogpic}>
        Join the smarty pants at our full-service creative &amp; digital marketing agency as they interview &amp; interact with marketing minds across industries, and provide tons of insightful, entertaining &amp; inspiring content to help you grow.
        </BgSectionExternal>



        <Container>
                <div style={{textAlign:"center", paddingTop:"45px", paddingBottom:"50px",}}>

                   
                <div className={classes.centerheading}>The power of <span style={{ fontWeight: "bold" }}>SUCCESS</span></div>
                <div className={classes.centersubtext}>Nothing feels better than happy clients celebrating<br />
                their <span style={{ fontWeight: "bold" }}>productivity, success &amp; growth</span> using Elevate.
</div>
                    
<TestimonialCardGrid>
            <TestimonialCard
              avatar=""
              name="Prince Jones"
              title="MBA-ISM / Realtor®"
              testimonial="<p>Social media is a big deal in real estate, and the Elevate Productivity Platform and coaching team has <strong>saved me valuable time and money</strong>, while helping me stand out from the 4,000 other real estate agents in my local area.</p>"
            />
            <TestimonialCard
              avatar=""
              name="The Sohaei Team"
              title="Team"
              testimonial="<p>The <strong>service and professionalism</strong> of the entire Elevate team is well above any experience we’ve had in the industry.  They are the perfect blend of <strong>cutting-edge technology</strong> mixed with <strong>stellar customer support and coaching.</strong></p>"
            />
            <TestimonialCard
              avatar=""
              name="Bob Cross"
              title="Broker"
              testimonial="<p>Impressive results from the start. Not only have I been able to <strong>increase website traffic and capture more leads</strong> with my new website, Elevate has helped increase my entire online social presence.  I’m a client for life!</p>"
            />
            <TestimonialCard
              avatar=""
              name="Sherlock Fenderson"
              title="Realtor®"
              testimonial="<p>I’ve been a successful Realtor® for more than 12-years and Elevate is my <strong>go-to productivity platform</strong> for everything lead management and web presence.  It’s a <strong>vital tool that I use daily</strong> to <strong>drive my business growth</strong>.  I highly recommend Elevate for anyone looking to grow their business.</p>"
            />
          </TestimonialCardGrid>


                </div>


                
        </Container>

        <div id="myModal" className={classes.modal}>
          <div className={classes.modalContent}>
            <span id="modalClose" className={classes.close}>&times;</span>
            <div style={{ textAlign: "center",}}>
                                          <img src={Modalpic} width="100%" style={{maxWidth:"400px", padding:"15px"}}/>
                                    </div>
         
            <div>
            <div className={classes.centerheading} style={{fontSize:"20px"}}>NO CONTRACT COMMITMENT!</div>
              <span style={{fontWeight:"bold"}}>
              on Elevate Social Pro&trade;, DMS&trade;, DMS Plus&trade; &amp; Elite&trade;

              </span>
            </div> 

      
              <div style={{paddingbottom:"22px"}}>
                <Link to="/get-started" target="_blank" className={classes.ctabutton} style={{maxWidth:"550px"}}>
                Connect To Learn More
                </Link>
                <br /><br />
                <span style={{fontSize:"12px"}}>excludes Elite Pro&trade; &amp; brokerage solutions</span>
              </div>

              <div>
             
            </div> 
                    
          </div>
        </div>



      </div>
    );
  }
}

export default withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  top: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "top",
  },

  column2:{
    width:"530px",
    maxWidth: "100%",
    paddingRight:"20px",
    paddingLeft:"20px",
    verticalAlign: "top",
  },

  column3:{
    width:"345px",
    maxWidth: "100%",
    paddingRight:"20px",
    paddingLeft:"20px",
    verticalAlign: "top",
  },

  moreThan: {
    fontSize: "16px",
    color: theme.colors.secondary,
    fontWeight: "bold",
    marginBottom: "4px",

    [theme.breakpoints[900]]: {
      fontSize: "26px",
    },
  },
  testHeading: {
    margin: "0 auto",
    marginBottom: "20px",
    textAlign: "center",
    fontSize: "30px",
    fontWeight: "800",
    color: "#5A5B5C",
    width: "100%",
    maxWidth: "900px",
    lineHeight: "1.3",
  },
  testimonialContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    paddingLeft: "12px",
    paddingRight: "12px",
    paddingTop: "75px",
    paddingBottom: "100px",
    backgroundColor: "#FFF",

    [theme.breakpoints[900]]: {
      paddingBottom: "200px",
      paddingTop: "100px",
    },
  },
  callToAction: {
    paddingTop: "100px",
  },
  red: {
    color: theme.colors.primary,
  },
  icon: {
    width: "56px",
    height: "56px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "4px auto 8px auto",
    color: theme.colors.white,
    backgroundColor: theme.colors.secondary,
    borderRadius: "50%",
    padding: "12px",
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
  solutionsGridContainer: {
    backgroundImage: `url("${gridBackgroundImg}")`,
    backgroundSize: "cover",
  },
  solutionsHeading: {
    textAlign: "center",
    textShadow: "0px 4px 3px rgba(0,0,0,0.05)",
    color: "#fff",
    fontWeight: "700",
    fontSize: "22px",
    marginTop: "60px",
    lineHeight: "1.5",
  },
  moreThanText: {
    color: "#4a4a4a",
    fontSize: "16px",
    fontWeight: "700",
  },
  moreThanContainer: {
    display: "grid",
    gridGap: "40px",
    margin: "40px auto",
    fontSize: "20px",
    maxWidth: "400px",
    width: "100%",

    [theme.breakpoints[600]]: {
      gridGap: "40px",
      gridTemplateColumns: "repeat(2, minmax(180px, 1fr))",
    },

    [theme.breakpoints[900]]: {
      maxWidth: "800px",
      gridGap: "0px",
      gridTemplateColumns: "repeat(4, minmax(180px, 1fr))",
    },
  },
  moreThanCTA: {
    marginTop: "16px",
    color: "#4a4a4a",
    fontSize: "20px",
    lineHeight: "1.4",
  },

  ctabutton: {
    alignContent: "center",
    justifyContent: "center",
    fontSize: "16px",
    textAlign: "center",
    fontWeight: "700",
    minWidth: "300px",
    letterSpacing: ".25px",
    backgroundColor: theme.colors.secondary,
    color: "#FFF",
    display: "block",
    marginTop: "30px",
    maxWidth: "300px",
    textDecoration: "none",
    padding: "12px 14px",
    borderRadius: "3px",
    display: "inline-block",
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

leftsubtext: {
  color: "#5A5B5C",
  fontWeight: "500",
  fontSize: "18px",
  letterSpacing: ".25px",
  lineHeight: "1.6",
  marginbottom: "20px",
  textAlign: "left",
  [theme.breakpoints[900]]: {
      fontSize: "16px",
  },
},
leftheading: {
  color: "#4bbbb1",
  fontSize: "30px",
  fontWeight: "700",
  letterSpacing: ".25px",
  fontWeight: "700",
  lineHeight: "1.6",

  [theme.breakpoints[900]]: {
      fontSize: "28px",
  },
},
centerheading: {
  color: "#4bbbb1",
  fontSize: "30px",
  fontWeight: "700",
  letterSpacing: ".25px",
  fontWeight: "700",
  lineHeight: "1.6",
  textAlign: "center",

  [theme.breakpoints[900]]: {
      fontSize: "28px",
  },
},
centerheading2: {
  color: "#4bbbb1",
  fontSize: "20px",
  fontWeight: "700",
  letterSpacing: ".25px",
  fontWeight: "700",
  lineHeight: "1.6",
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
cardroot: {
  display: "flex",
  flexDirection: "column",
  background: "transparent",
  height: "200px",
  border: "0px solid #fff",
  marginBottom: "30px",
  borderRadius: "6px",

},
cardinner: {
  color: "#fff",
  textAlign: "center",
  lineHeight: "1.5",
  margin: "auto",
  maxWidth: "200px",

  "& strong": {
    fontWeight: "700",
  },
},

modal: {
  display: "none",
  position: "fixed",
  zIndex: "10000",
  paddingTop: "0px",
  left: "0",
  top: "0",
  width: "100%",
  height: "100%",
  overflow: "auto",
  backgroundColor: "rgb(0,0,0)",
  backgroundColor: "rgba(0,0,0,0.4)",
  textAlign: "center",
  color:"#444444",
  lineHeight:"28px"
},
modalContent: {
  backgroundColor:"#fefefe",
  margin: "auto",
  padding: "40px",
  border: "1px solid #888",
  width: "50%",
  minWidth:"400px",
  color:"#888888",
},

close: {
  color: "#aaaaaa",
  float: "right",
  fontSize: "28px",
  fontWeight:" bold",
  textDecoration: "none",
  cursor: "pointer"
},


}))(Index);


