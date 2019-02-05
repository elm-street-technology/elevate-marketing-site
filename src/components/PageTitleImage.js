import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import Link from "gatsby-link";
import Container from "./Container";

const PageTitleImage = ({
  children,
  classes,
  className,
  image,
  title,
}) => {
  return (
      
      <div className={classNames(classes.root, className)}>
          <div className={classes.titlearea} style={{ backgroundImage: "url(" + image + ")" }}>
            <Container>
                <h1 className={classes.titleheading}>{title}</h1>
                <p className={classes.titlesubtext}>
                {children}
                </p>
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
    },
    image:{
        paddingLeft:"15px",
        
    },
    titleheading: {
        color: "#ffffff",
        fontSize: "24px",
        letterSpacing: ".25px",
        fontWeight: "700",
        lineHeight: "1.45",
        textAlign: "center",

        [theme.breakpoints[900]]: {
            fontSize: "44px",
        },
    },

    titlesubtext: {
        color: "#dbe1e5",
        fontSize: "18px",
        letterSpacing: ".25px",
        lineHeight: "1.6",
        textAlign: "center",

        [theme.breakpoints[900]]: {
            fontSize: "16px",
        },
    },

    titlearea: {
        backgroundColor: "#404548",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        padding: "55px",

        [theme.breakpoints[900]]: {
            padding: "125px",
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


        [theme.breakpoints[900]]: {
            maxWidth: "50%",
            width: "50%",
        },
    }
}))(PageTitleImage);
