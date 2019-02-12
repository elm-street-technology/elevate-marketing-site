import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import Link from "gatsby-link";
import Container from "./Container";

const BgSection = ({
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
          <div className={classes.titlearea} style={{ backgroundImage: "url(" + bgImage + ")" }}>
            
                <Container>
                <div className={classes.flexContainer}>
                <div className={classes.flexItem} style={{paddingLeft:"20px", paddingRight:"20px", paddingTop:"45px"}}>
                    <h1 className={classes.leftheading}>{secTitle}</h1>
                    <p className={classes.leftsubtext}>
                    {children}</p>
                    <Link to={secLink} className={classes.ctabutton}>
                        {secButton}
                    </Link>
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
        minHeight: "200px",
        overflow: "hidden",

        [theme.breakpoints[900]]: {
            minHeight: "400px",
        },
    },

    image:{
        paddingLeft:"15px",
        width: "100%",
        height: "100%",
        paddingTop:"10px",
        display: "block",
    },
    leftheading: {
        color: "#ffffff",
        fontSize: "30px",
        fontWeight: "700",
        letterSpacing: ".25px",
        fontWeight: "600",
        lineHeight: "1.6",

        [theme.breakpoints[900]]: {
            fontSize: "28px",
        },
    },
    leftsubtext: {
        color: "#ffffff",
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
}))(BgSection);
