import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import * as Icons from "elevate-ui-icons";

const BundleHero = ({ classes, className, hero }) => {
  if (!hero) {
    return null;
  }
  const IconComponent = Icons[hero.icon];

  return (
    <div className={classNames(classes.root)}>
      <div className={classNames(classes.backgroundContainer)}>
        <div className={classes.headingContainer}>
          <div className={classes.headingIcon}>
            <IconComponent className={classes.icon} size={26} />
            {hero.name}
          </div>
          <div className={classes.heading}>{hero.tagline}</div>
          <div
            className={classes.subHeading}
            dangerouslySetInnerHTML={{
              __html: hero.description.childMarkdownRemark.html,
            }}
          />
          <img
            className={classes.screenshot}
            src={hero.screenshot.file.url}
            alt={"screenshot of bundle"}
          />
        </div>
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
  backgroundContainer: {
    background: "linear-gradient(#FFF, rgba(255,198,41,.2))",
    backgroundSize: "auto 78%",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints[900]]: {
      marginLeft: "calc(-88vw / 3)",
      marginRight: "calc(-88vw / 3)",
    },
  },
  headingContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    maxWidth: "1080px",
    marginTop: "30px",
    margin: "0 auto",
    padding: "0 8px",

    [theme.breakpoints[900]]: {
      paddingBottom: "0px",
    },
  },
  heading: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#2E2E35",
    lineHeight: "38px",
    maxWidth: "710px",
    margin: "24px auto 0px auto",
    textAlign: "center",

    [theme.breakpoints[900]]: {
      fontSize: "32px",
      marginBottom: "10px",
    },
  },
  subHeading: {
    fontSize: "18px",
    color: "#5A5B5C",
    marginTop: "16px",
    marginBottom: "30px",
    lineHeight: "26px",
    textAlign: "center",
    fontWeight: "500",

    [theme.breakpoints[600]]: {
      marginTop: "10px",
      textAlign: "left",
    },
  },
  headingIcon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textTransform: "uppercase",
    fontSize: "20px",
    paddingTop: "10px",
    color: "#FFC629",
    fontWeight: "700",
  },
  icon: {
    fill: "#FFC629",
    marginRight: "6px",
  },
  screenshot: {
    maxWidth: "100%",

    [theme.breakpoints[1200]]: {
      maxWidth: "1400px",
    },
  },
}))(BundleHero);
