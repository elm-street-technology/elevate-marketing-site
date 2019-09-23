import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import Link from "gatsby-link";
import Container from "./Container";

const BgSectionExternal = ({
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
                    <h1 className={classes.leftheading}>{secTitle}</h1>
                    <p className={classes.leftsubtext}>
                    {children}</p>
                    <a href={secLink} className={classes.ctabutton} target="_blank">
                    {secButton}
                    </a>
                    <br />
                    <span className={classes.leftsubtext2} style={{color:"#cccccc"}}>
                    or call 833-978-1196
                    </span>
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
        backgroundPosition: "bottom",
        width:"100%",
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
        color: "#cccccc",
        fontWeight: "500",
        fontSize: "16px",
        letterSpacing: ".25px",
        lineHeight: "24px",
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
        fontWeight: "600",
        minWidth: "250px",
        letterSpacing: ".25px",
        backgroundColor: "#f15623",
        color: "#FFF",
        display: "block",
        marginTop: "30px",
        maxWidth: "250px",
        textDecoration: "none",
        padding: "12px 14px",
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
}))(BgSectionExternal);
