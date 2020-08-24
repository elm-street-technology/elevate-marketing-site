import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import Link from "gatsby-link";
import Container from "./Container";

const BgSectionExternal3 = ({
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
          <div className={classes.titlearea} style={{ backgroundImage: "url(" + bgImage + ")", backgroundSize:"cover" }}>
            
                <Container>
                <div className={classes.flexContainer}>
                <div className={classes.flexItem} style={{paddingLeft:"20px", paddingRight:"30px", paddingTop:"60px"}}>
                    <h1 className={classes.leftheading}>{secTitle}</h1>
                    <p className={classes.leftsubtext}>
                    {children}</p>
                    
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
        color: "#52B1AD",
        fontSize: "28px",
        lineHeight: "40px",
        fontWeight: "700",
        marginRight: "auto",
        paddingBottom: "20px",

        [theme.breakpoints[900]]: {
            fontSize: "28px",
        },
    },
    leftsubtext: {
        color: "#777777",
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
        fontSize: "14px",
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
        padding: "14px 16px",
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
            maxWidth: "40%",
            width: "40%",
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
            width: "60%",
            paddingTop: "65px",
            padding: "0px",
        },
    }
}))(BgSectionExternal3);