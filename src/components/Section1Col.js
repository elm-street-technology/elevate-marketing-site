import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import Link from "gatsby-link";
import Container from "./Container";

const Section1Col = ({
  children,
  classes,
  className,
  secTitle,
  secLink,
  secButton,
}) => {
  return (
      
    <div className={classNames(classes.root, className)}>
          <Container>
            <div>
                <h1 className={classes.centerheading}>Section Header</h1>
                <p className={classes.centersubtext} >
                {children}
                </p>
                  <div className={classes.buttoncontainer}>
                    <Link to={secLink} className={classes.ctabutton}>
                        {secButton}
                    </Link>
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
        minHeight: "400px",
        overflow: "hidden",
    },
    centerheading: {
        color: "#4bbbb1",
        fontSize: "30px",
        fontWeight: "700",
        letterSpacing: ".25px",
        fontWeight: "600",
        lineHeight: "1.6",
        textAlign: "center",

        [theme.breakpoints[900]]: {
            fontSize: "28px",
        },
    },
    centersubtext: {
        color: "#5A5B5C",
        fontWeight: "500",
        fontSize: "18px",
        letterSpacing: ".25px",
        lineHeight: "1.6",
        marginbottom: "20px",
        textAlign: "center",

        [theme.breakpoints[900]]: {
            fontSize: "16px",
        },
    },
    buttoncontainer:{
        textAlign: "center",
        contentAlign: "center"
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
        display: "inline-block",
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

    },
    flexItem: {
        maxWidth: "100%",
        width: "100%",


        [theme.breakpoints[900]]: {
            maxWidth: "50%",
            width: "50%",
        },
    }
}))(Section1Col);
