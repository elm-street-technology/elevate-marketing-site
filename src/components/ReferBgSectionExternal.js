import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import Referlogo from "../images/refer_logo.png";
import Link from "gatsby-link";
import Container from "./Container";

const ReferBgSectionExternal = ({
  children,
  classes,
  className,
  image,
  secImage,
  secTitle,
  secLink,
  secButton,
  bgImage
}) => {
  return (
      
      <div className={classNames(classes.root, className)}>
          <div className={classes.titlearea} style={{ backgroundImage: "url(" + bgImage + ")",backgroundSize:"cover", backgroundPosition:"centerTop" }}>
            
                <Container>
                <div className={classes.flexContainer}>
                <div className={classes.flexItem} style={{paddingLeft:"40px", paddingRight:"30px", paddingTop:"55px", paddingBottom:"65px",}}>
                    <img src={Referlogo} width="100%" style={{ paddingBottom:"22px", maxWidth:"350px" }}/><br />
                    <span className={classes.leftsubtext}>
                    “You can have everything you want in life if you just help enough people get what they want in life.” - ZIG ZIGLAR
                    </span>
                    <br /><br />
                    <span className={classes.leftsubtext}>
                    Do you have friends &amp; colleagues that could benefit from the tools &amp; services of Elevate? You can spread the love by referring them today!
                    </span>
                    <br /><br />
                    <span className={classes.leftsubtext} style={{fontWeight:"700", color:"#eefb18"}}>
                    IT'S SUPER EASY...
                    </span>
                    <p className={classes.leftsubtext}>
                    {children}</p>
                    <a href={secLink} className={classes.ctabutton}>
                    {secButton}
                    </a>
                    
                
                </div>
                <div className={classes.flexItem2}>
                    {secImage && (<img src={secImage} className={classes.image} 
                        alt={secTitle} />)}
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
        minHeight: "400px",
        overflow: "hidden",

        [theme.breakpoints[900]]: {
            minHeight: "250px",
        },
    },

    image:{
        backgroundPosition: "centertop",
        backgroundSize: "cover",
        
        },

    leftheading: {
        color: "#ffffff",
        fontSize: "30px",
        fontWeight: "700",
        letterSpacing: ".25px",
        fontWeight: "600",
        paddingBottom:"20px",
        lineHeight: "38px",

        [theme.breakpoints[900]]: {
            fontSize: "30px",
        },
    },
    leftsubtext: {
        color: "#ffffff",
        fontWeight: "500",
        fontSize: "16px",
        letterSpacing: ".25px",
        lineHeight: "22px",
        marginbottom: "20px",
        textAlign: "left",
        [theme.breakpoints[900]]: {
            fontSize: "16px",
        },
    },
    ctabutton: {
        alignContent: "center",
        justifyContent: "center",
        fontSize: "16px",
        textAlign: "center",
        fontWeight: "700",
        minWidth: "250px",
        letterSpacing: ".25px",
        backgroundColor: "#eefb18",
        color: "#8776c7",
        display: "block",
        marginTop: "30px",
        maxWidth: "250px",
        textDecoration: "none",
        padding: "12px 16px",
        borderRadius: "3px",
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
        alignItems: "stretch",
    },
    flexItem: {
        height: "100%",
        maxWidth: "100%",
        width: "100%",
        paddingTop: "45px",
        paddingBottom: "45px",


        [theme.breakpoints[900]]: {
            maxWidth: "50%",
            width: "50%",
            paddingTop: "65px",
            paddingRight: "25px",
            
        },
    },

    flexItem2: {
        height: "100%",
        width: "100%",
        paddingTop: "48px",
        padding: "0px",
        margin:"0",
        alignSelf: "flex-end",

        [theme.breakpoints[900]]: {
            width: "50%",
            paddingTop: "65px",
            padding: "0px",
        },
    }
}))(ReferBgSectionExternal);
