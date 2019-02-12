import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import Link from "gatsby-link";
import Container from "./Container";

const Section2Col = ({
  children,
  classes,
  className,
  secImage,
  secTitle,
  secLink,
  secButton,
}) => {
    console.log(secImage);
  return (
      
    <div className={classNames(classes.root, className)}>
        <Container>
            <div className={classes.flexContainer}>
                <div className={classes.flexItem}>
                    <h1 className={classes.leftheading}>{secTitle}</h1>
                    <p className={classes.leftsubtext}>
                    {children}</p>

                </div>
                <div className={classes.flexItem}>

                    {secImage && (
                        <img src={secImage} className={classes.image} alt={secTitle} />
                    )}
                </div>
            </div>
        </Container>
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
        padding:"15px",
        width: "100%",
        height: "100%",

        [theme.breakpoints[900]]: {
            padding: "45px",

        },  
    },
    leftheading: {
        color: "#4bbbb1",
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
    }
}))(Section2Col);
