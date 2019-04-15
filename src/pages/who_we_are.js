import React from "react";
import Link from "gatsby-link";
import withStyles from "elevate-ui/withStyles";
import Container from "../components/Container";
import SEO from "../components/SEO";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Section2Col from "../components/Section2Col";
import Section1Col from "../components/Section1Col";
import PageTitleImage from "../components/PageTitleImage";
import BgSection from "../components/BgSection";
import TestImage from "../images/600.jpg";
import WideImage from "../images/1200.jpg";
import exImage from "../images/example.png";
import exImage2 from "../images/example2.png";
import exImage3 from "../images/example3.png";
import bgImage from "../images/examplebg.jpg";

const who_we_are = ({ classes }) => {

  return (
    <div className={classes.root}>
      <Header />
      <SEO />

      <PageTitleImage title="The power of PEOPLE" image={WideImage}>
      Our company was founded on the premise of bringing the best technology and the best people together to create one truly unique and powerful experience.
      </PageTitleImage>

      <div style={{ margin: "45px", }}>
        <Section2Col secTitle="Section Header" secImage={TestImage}>
          Our company was founded on the premise of bringing the best technology and the best people together to create one truly unique and powerful experience.
          <Link to="/upgrade" className={classes.ctabutton}>
          Upgrade Button Text2
                    </Link>
                    <Link to="/upgrade" className={classes.ctabutton}>
          Upgrade Button Text3
                    </Link>
        </Section2Col>
      </div>
    
      <div style={{ margin: "45px", }}>
        <Section1Col secTitle="Center Header">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        
          <Link to="/upgrade" className={classes.ctabutton}>
          Upgrade Button Text3
                    </Link>

        </Section1Col>
      </div>

        <BgSection bgImage={bgImage} secTitle="Section Header" secLink="/upgrade" secButton="Upgrade Button Text" secImage={exImage}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </BgSection>


        <BgSection bgImage={bgImage} secTitle="Section Header" secLink="/upgrade" secButton="Upgrade Button Text" secImage={exImage3}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </BgSection>

      <Footer />
    </div>
  );
};







export default withStyles((theme) => ({
  root: {
    position: "relative",
    paddingTop: "0px",
    paddingBottom: "0px",

    [theme.breakpoints[900]]: {
        paddingTop: "48px",
    },
  },
  ctabutton: {
    alignContent: "center",
    justifyContent: "center",
    fontSize: "16px",
    textAlign: "center",
    fontWeight: "500",
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
},





}))(who_we_are);
