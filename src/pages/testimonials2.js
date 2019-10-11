import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import FormBright from "../components/FormBright";
import Brightlogo from "../images/brightmls_logo.png";
import Bosslogo from "../images/eboss_logo.png";
import Sprologo from "../images/spro_logo.png";
import Ask from "../images/askhow.png";
import Test from "../images/test_bg.jpg";
import Test_pic1 from "../images/test_pic1.png";
import Test_pic2 from "../images/test_pic2.png";
import Test_pic3 from "../images/test_pic3.png";
import Testa from "../images/testa.png";
import Testb from "../images/testb.png";
import Testc from "../images/testc.png";
import Spro from "../images/socialpro_bg.jpg";
import BrightBgSectionExternal from "../components/BrightBgSectionExternal";
import SEO from "../components/SEO";

const Testimonials2 = ({ children, classes, data, tags }) => {
  const postNode = {
      title: `Your Single Source Solution - ${config.siteTitle}`,
  };

  return (
<div className={classes.root}>
      <Helmet>
              <title>{`Your Single Source Solution - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="contact" customTitle />

<div style={{backgroundImage:"url("+Test+")", backgroundSize:"cover", backgroundPosition:"centerTop"}}>
<Container>
      <div className={classes.top} style={{paddingBottom:"80px", paddingRight:"25px", paddingLeft:"25px", paddingTop:"75px"}}>
          <div className={classes.centerHeading}>
                            <div className={classes.heading} style={{color:"#ffffff"}}>The Power of SUCCESS</div>
                            <div className={classes.subtext} style={{color:"#ffffff"}}>Nothing feels better than happy clients celebrating their productivity,<br />
                            success &amp; growth using Elevate. Are you going to be the next success story?
                            </div>
          </div>
      </div>
</Container>
</div>




<div style={{paddingTop:"50px", paddingBottom:"50px",}}>
        <Container>
            <div className={classes.flexContainer}>
                <div className={classes.flexItem} style={{paddingBottom:"20px", paddingLeft:"15px", paddingRight:"15px"}}>

                   
                <iframe width="100%" height="270" src="https://www.youtube.com/embed/py5fhtASVPY?rel=0"
                frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    

                </div>
                <div className={classes.flexItem} style={{paddingLeft:"20px", paddingRight:"20px", paddingBottom:"20px",}}>

                            <div className={classes.subtext}>
                                <div className={classes.Heading2}>Tina Minshall, Agent</div>
                                Shoe Realty<br />
                                Jacksonville, FL<br /><br />

                                New agent, TIna Minshall chats about the balance between being a mom and a successful agent, being yourself with your clients, and how Elevate helps her do both...and so much more.
                            </div>
                    
                </div>
            </div>
        </Container>
</div>



<div style={{paddingTop:"20px", paddingBottom:"13px", backgroundColor:"#f7f7f7"}}>

            <Container>

                        <div style={{textAlign:"center", paddingBottom:"5px", padding:"25px"}}>
                            <div className={classes.Heading2}>Ready to turn your social media from a toy into a tool?</div>
                            <div className={classes.subtext}>Explore the 1st true productivity platform in real estate to capture, nurture &amp; convert leads.</div>     
                            <a target="_blank" href="https://tryelevate.com/get-started/" className={classes.buttonLink}>Take an Elevate Tour</a>
                        </div>
            </Container>

</div> 


<div style={{paddingTop:"50px", paddingBottom:"50px",}}>
        <Container>
            <div className={classes.flexContainer}>
                <div className={classes.flexItem}>

                   
                <div style={{ textAlign: "center",paddingBottom:"22px", paddingRight:"20px", paddingLeft:"20px" }}>
                            <div style={{paddingLeft:"20px", paddingRight:"20px"}}><img src={Test_pic1} width="280" /></div>
                            <div className={classes.Heading2}>Terry Naber</div>
                            <div className={classes.subtext}>Broker Associate | REALTOR<br />
                            Colorado Springs Homes<br />
                            RE/MAX Properties, Inc.<br />
                            Colorado Springs, CO</div>

                </div>
                    

                </div>
                <div className={classes.flexItem} style={{paddingLeft:"20px", paddingRight:"20px", paddingBottom:"20px",}}>

                            <div className={classes.subtext}>
                                <div className={classes.heading}>Lead generation ROI recognized in 1st month.</div>
                                <br />
                                "We are very pleased with our website and lead generation program from Elevate!  We recently switched our website and CRM database to Elevate, and once their team started putting the “non-live” website together for us to review, we started getting leads in the system right away.  The website wasn't even live yet!  I reached out to one of those leads immediately and, long story short, we closed on their new home in Colorado Springs in less than one month!  
                                <br /><br />
                                Thank you so very much for the constant communication and assistance to get us up and running.  And thank you for the online advertising that started sending us leads before<br />
                                our website went live.”
                            </div>
                    
                </div>
            </div>
        </Container>
</div>



<div style={{paddingBottom:"20px",}}>
        <Container>
            <div className={classes.flexContainer}>
                <div className={classes.flexItem} style={{textAlign:"right", paddingBottom:"20px", paddingLeft:"20px", paddingRight:"20px"}}>

                            <div className={classes.subtext}>
                                <div className={classes.Heading2}>Denis Pepin, Broker/Owner</div>
                                United Real Estate Professionals<br />
                                Huntington Beach, CA<br /><br />

                                A seasoned broker/owner who’s been burned by lead generation solutions in the past, discusses his experience with Elevate’s lead generation and scrubbing services, along with an almost immediate ROI. 
                            </div>
                
                    

                </div>

                <div className={classes.flexItem} style={{paddingBottom:"20px", paddingLeft:"15px", paddingRight:"15px"}}>
                
                            <iframe width="100%" height="270" src="https://www.youtube.com/embed/XpCfCopNLlA?rel=0"
                            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                </div>
            </div>
        </Container>
</div>


<div style={{paddingTop:"20px", paddingBottom:"10px", backgroundColor:"#f7f7f7"}}>

            <Container>

                        <div style={{textAlign:"center", paddingBottom:"5px", padding:"25px"}}>
                            <div className={classes.Heading2}>Interested in lead generation?</div>
                            <div className={classes.subtext}>Check availability in your markets.</div>     
                            <a target="_blank" href="https://tryelevate.com/leadgen/" className={classes.buttonLink}>I Want Leads</a>
                        </div>
            </Container>

</div> 



<div style={{paddingTop:"50px", paddingBottom:"50px",}}>
        <Container>
            <div className={classes.flexContainer}>
                <div className={classes.flexItem}>

                   
                <div style={{ textAlign: "center",paddingBottom:"22px", paddingRight:"20px", paddingLeft:"20px" }}>
                <div style={{paddingLeft:"20px", paddingRight:"20px"}}><img src={Test_pic2} width="280" /></div>
                            <div className={classes.Heading2}>Jennifer Pecora, Agent</div>
                            <div className={classes.subtext}>Pecora Properties, Watson Realty Corp.<br />
                            Palm Bay, FL</div>

                </div>
                    

                </div>
                <div className={classes.flexItem} style={{paddingLeft:"20px", paddingRight:"20px", paddingBottom:"20px",}}>

                            <div className={classes.subtext}>
                                <div className={classes.heading}>More leads.  More listings.  More buyers.</div>
                                <br />
                                “I love Elevate! Their Elite solution provides me exactly what I needed to give my business a boost. Right from the beginning of my Elevate experience, I began connecting with leads, receiving more listings, showing more properties, and closing more business.
                                <br /><br />
                                Having my own coach is amazing!  I talk to them weekly and that one phone call projects me into a zone of optimism. They are great, kind, professional, and encouraging, and it is wonderful that they are available at any time for guidance.
                                <br /><br />
                                There are no magic wands in real estate prospecting, but Elevate has come as close as it gets for my business.”

                            </div>
                    
                </div>
            </div>
        </Container>
</div>


<div style={{paddingTop:"50px", paddingBottom:"50px",}}>
        <Container>
            <div className={classes.flexContainer}>
                         <div className={classes.flexItem} style={{paddingLeft:"20px", paddingRight:"20px", paddingBottom:"20px", textAlign:"right"}}>

                        <div className={classes.subtext}>
                                    <div className={classes.heading}>Stepping up on<br />
                                    social media marketing.</div>
                                    <br />
                                    “I thought I was on top of my social media game, but after taking a Social Media Boot Camp at the Coastal Carolina Association of REALTORS, I knew I needed to step up my game!  Thank you for taking the time to teach me valuable, easy-to-implement techniques for managing social media, and providing a solution that gives agents all of the tools needed to succeed.”

                        </div>

                        </div>
                
<div className={classes.flexItem}>

                   
<div style={{ textAlign: "center",paddingBottom:"22px", paddingRight:"20px", paddingLeft:"20px" }}>
<div style={{paddingLeft:"20px", paddingRight:"20px"}}><img src={Test_pic3} width="280" /></div>
                        <div className={classes.Heading2}>Heather Paukova, REALTOR&reg;</div>
                        <div className={classes.subtext}>RE/MAX Southern Shores<br />
                        Myrtle Beach, SC</div>

</div>
    

</div>
            </div>
        </Container>
</div>


<div style={{paddingTop:"20px", paddingBottom:"10px", backgroundColor:"#f7f7f7"}}>

            <Container>

                        <div style={{textAlign:"center", paddingBottom:"5px", padding:"25px"}}>
                            <div className={classes.Heading2}>More love from happy clients.</div>
                            <div className={classes.subtext}>Are you ready for your happy dance?</div>     
                            <a target="_blank" href="https://tryelevate.com/get-started/" className={classes.buttonLink}>Connect with a Success Coach</a>
                        </div>
            </Container>

</div> 





<div style={{paddingTop:"20px", paddingBottom:"50px", backgroundColor:"#ffffff"}}>
    <Container>
            <div className={classes.flexContainer}>
                <div className={classes.flexItem2} style={{padding:"20px", textAlign:"center"}}>  
                      <div className={classes.subtext}>
                      <img src={Testa} width="170" />
                                <div className={classes.Heading2}>
                                  Joloyce Egbert-Palmer<br />
                                  REALTOR&reg;</div>
                                  KRCH Realty<br />
                                  Reno, NV<br /><br />

                                  “Elevate created my amazing website and launched my lead program. My website is professional and easy to use, plus Elevate automatically posts content on all my social media channels...something that<br />
                                  I don’t have time to do, and now<br />
                                  I don’t need to!”

                      </div>
                </div>
                <div className={classes.flexItem2} style={{padding:"20px", textAlign:"center"}}>
                      <div className={classes.subtext}>
                                 <img src={Testb} width="170" />
                                  <div className={classes.Heading2}>Prince Jones<br />
                                  Broker Associate, REALTOR&reg;</div>
                                  RE/MAX Realty Team <br />
                                  Cape Coral, FL<br /><br />
                                  
                                  “As a REALTOR&reg;, you will find that there are a vast number of companies trying to make money off your hard work. They promise the world, and they do not deliver. Elevate is not one of those companies. To quote Tony Robbins, using Elevate...”life will never be the same.”
                        </div>
                </div>

                <div className={classes.flexItem2} style={{padding:"20px", textAlign:"center"}}>
                      <div className={classes.subtext}>
                                <img src={Testc} width="170" />
                                <div className={classes.Heading2}>
                                  Tracy Anne Madden<br />
                                  REALTOR&reg;</div>
                                  Tracy Madden Homes<br />
                                  Temecula, CA<br /><br />

                                  “I am a new REALTOR&reg; and I was really struggling with managing my social media in a professional way, and I desperately needed my own website. I attended a Social Media Boot Camp and learned about the services these guys had to offer and I was blown away<br />
                                  by the fact that they literally<br />
                                  covered everything."
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
    color: "#5ac0ba",
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

  Heading2: {
    fontSize: "20px",
    fontWeight: "700",
    lineHeight: "26px",
    color: "#5ac0ba",
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
}))(Testimonials2);
