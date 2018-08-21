import React from "react";
import Container from "../components/Container";
import withStyles from "elevate-ui/withStyles";
import classNames from "classnames";
import SEO from "../components/SEO";
import CallToActionForm from "../components/CallToActionForm";
import analysisHero from "../images/analysis-hero.png";
import arrowDown from "../images/arrow-down.svg";
import ProductCard from "../components/ProductCard";
import FeatureCardGrid from "../components/FeatureCardGrid";
import FeatureCard from "../components/FeatureCard";
import TestimonialCard from "../components/TestimonialCard";
import TestimonialCardGrid from "../components/TestimonialCardGrid";

const Index = ({ classes, data }) => {
  return (
    <div className={classNames(classes.root)}>
      <SEO />
      <Container>
        <div className={classes.headingContainer}>
          <div className={classes.headingLeft}>
            <div className={classes.heading}>
              The easiest way to generate leads and retain clients.
            </div>
            <div className={classes.subHeading}>
              Elevate is the only fully integrated single system on the market
              today that does everything real estate professionals need.
            </div>
            <CallToActionForm className={classes.form} />
          </div>
          <div className={classes.headingRight}>
            <img
              className={classes.headingImg}
              src={analysisHero}
              alt={"co-workers chatting"}
            />
          </div>
        </div>
        <div className={classes.learnMore}>
          <h2>Learn More</h2>
          <img
            className={classes.arrowDown}
            src={arrowDown}
            alt={"arrow pointing down"}
          />
        </div>
      </Container>
      <div className={classes.productContainer}>
        <h1 className={classes.productHeading}>
          Which Elevate Product is Right For You?
        </h1>
        <div className={classes.productCardContainer}>
          <ProductCard className={classes.productCard} />
          <ProductCard className={classes.productCard} />
          <ProductCard className={classes.productCard} />
        </div>
      </div>
      <div className={classes.featureContainer}>
        <div className={classes.featureHeading}>
          <h1>Features included in Elevate DMS</h1>
          <h2 className={classes.featureSubHeading}>
            The all-in-one solution for real estate professionals
          </h2>
        </div>
        <FeatureCardGrid>
          <FeatureCard className={classes.featureCard} />
          <FeatureCard className={classes.featureCard} />
          <FeatureCard className={classes.featureCard} />
          <FeatureCard className={classes.featureCard} />
          <FeatureCard className={classes.featureCard} />
          <FeatureCard className={classes.featureCard} />
          <FeatureCard className={classes.featureCard} />
          <FeatureCard className={classes.featureCard} />
        </FeatureCardGrid>
      </div>
      <div className={classes.testimonialContainer}>
        <div className={classes.testHeading}>
          <h1>What Our Customers Are Saying</h1>
        </div>
        <TestimonialCardGrid>
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </TestimonialCardGrid>
      </div>
    </div>
  );
};

export default withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  headingContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    paddingLeft: "10px",
    paddingRight: "10px",
    paddingBottom: "100px",

    [theme.breakpoints[900]]: {
      justifyContent: "space-between",
      flexDirection: "row",
      paddingBottom: "0px",
    },
  },
  headingLeft: {
    order: "1",
    zIndex: "1",

    [theme.breakpoints[900]]: {
      order: "0",
    },
  },
  heading: {
    fontSize: "24px",
    fontWeight: "800",
    color: "#2E2E35",
    lineHeight: "1.2",
    maxWidth: "500px",
    marginTop: "0px",

    [theme.breakpoints[600]]: {
      marginTop: "0px",
      fontSize: "32px",
    },

    [theme.breakpoints[900]]: {
      marginTop: "140px",
    },
  },
  subHeading: {
    fontSize: "18px",
    color: "#64616E",
    marginTop: "16px",
    marginBottom: "20px",
    lineHeight: "26px",

    [theme.breakpoints[600]]: {
      fontSize: "24px",
      maxWidth: "600px",
      lineHeight: "32px",
      marginBottom: "36px",
      marginTop: "24px",
    },
  },
  headingRight: {
    alignSelf: "flex-end",
    zIndex: "0",
  },
  headingImg: {
    width: "350px",
    marginBottom: "0px",

    [theme.breakpoints[600]]: {
      width: "450px",
      marginTop: "40px",
    },

    [theme.breakpoints[900]]: {
      width: "550px",
      marginBottom: "140px",
    },
  },
  learnMore: {
    display: "none",

    [theme.breakpoints[900]]: {
      display: "block",
      textAlign: "center",
      paddingBottom: "80px",
      color: "#64616E",
    },
  },
  arrowDown: {
    marginTop: "0px",
  },
  form: {
    maxWidth: "400px",
  },
  productContainer: {
    display: "flex",
    flexDirection: "column",
    paddingTop: "100px",
    paddingLeft: "12px",
    paddingRight: "12px",
    background: "linear-gradient(#F15953, #F39D90)",

    [theme.breakpoints[900]]: {
      paddingBottom: "140px",
    },
  },
  productHeading: {
    margin: "0 auto",
    fontSize: "28px",
    textAlign: "center",
    lineHeight: "45px",
    padding: "0 12px",
    color: "#FFF",
    width: "100%",
    maxWidth: "700px",

    [theme.breakpoints[900]]: {
      fontSize: "36px",
    },
  },
  productCardContainer: {
    display: "flex",
    flexDirection: "column",
    margin: "60px auto",
    justifyContent: "center",

    [theme.breakpoints[900]]: {
      margin: "80px auto",
      flexDirection: "row",
    },
  },
  featureContainer: {
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    paddingTop: "75px",
    paddingBottom: "100px",
    backgroundColor: "#FFF4F0",

    [theme.breakpoints[900]]: {
      paddingTop: "100px",
      paddingBottom: "200px",
    },
  },
  featureHeading: {
    margin: "0 auto",
    fontSize: "28px",
    color: "#F15953",
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    flexDirection: "column",

    [theme.breakpoints[900]]: {
      fontSize: "36px",
    },
  },
  featureSubHeading: {
    color: "#64616E",
    fontSize: "20px",
    margin: "16px auto",
    width: "100%",
    textAlign: "center",
  },
  testHeading: {
    margin: "0 auto",
    marginBottom: "20px",
    textAlign: "center",
    fontSize: "32px",
    fontWeight: "800",
    color: "#413F48",
    width: "100%",
    maxWidth: "900px",
  },
  testimonialContainer: {
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
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
}))(Index);
