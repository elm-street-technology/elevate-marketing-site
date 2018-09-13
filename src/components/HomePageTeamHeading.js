import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import Icon from "elevate-ui/Icon/Icon";

const HomePageTeamHeading = ({ classes, className }) => {
  return (
    <div className={classNames(classes.root, className)}>
      <div className={classes.teamHeading}>
        <div className={classes.teamHeadingLeft}>
          <div className={classes.iconContainer}>
            <Icon name={"People"} style={{ color: "#0092FF" }} />
            <div
              style={{
                backgroundColor: "#0092FF",
                opacity: ".2",
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
              }}
            />
          </div>
          <div style={{ paddingLeft: "10px" }}>Teams</div>
        </div>
        <div className={classes.teamBtnContainer}>
          <button className={classes.teamBtn}>More Teams Features</button>
        </div>
      </div>
      <div className={classes.teamSubHeading}>
        <h2>
          Everything you and your team need to increase leads and retain
          clients.
        </h2>
      </div>
      <div className={classes.teamIncludesContainer}>
        <Icon name={"InfoOutline"} style={{ color: "#0092FF" }} />
        <div className={classes.teamIncludes}>
          Includes all Agents features plus
        </div>
      </div>
    </div>
  );
};

export default withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  teamHeadingLeft: {
    display: "flex",
    alignItems: "center",
    paddingBottom: "16px",

    [theme.breakpoints[600]]: {
      paddingBottom: "0px",
    },
  },
  teamHeading: {
    fontSize: "28px",
    color: "#0092FF",
    fontWeight: "800",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",

    [theme.breakpoints[600]]: {
      flexDirection: "row",
    },

    [theme.breakpoints[900]]: {
      fontSize: "36px",
    },
  },
  teamSubHeading: {
    color: "#2E2E35",
    fontSize: "17px",
    maxWidth: "440px",
    lineHeight: "24px",
    marginTop: "20px",
    margin: "auto",
    textAlign: "center",

    [theme.breakpoints[600]]: {
      maxWidth: "320px",
      lineHeight: "30px",
      fontSize: "20px",
      textAlign: "left",
      margin: "0",
      marginTop: "20px",
    },
  },
  iconContainer: {
    width: "55px",
    height: "55px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
  },
  teamBtnContainer: {
    display: "flex",
  },
  teamBtn: {
    borderRadius: "28px",
    border: "1px solid #0092FF",
    padding: "12px 30px",
    fontSize: "14px",
    margin: "auto",
    color: "#0092FF",
    fontWeight: "600",
  },
  teamIncludesContainer: {
    display: "flex",
    alignItems: "center",
    alignSelf: "center",
    paddingTop: "40px",
    fontSize: "15px",
    lineHeight: "20px",

    [theme.breakpoints[600]]: {
      alignSelf: "start",
    },
  },
  teamIncludes: {
    color: "#2E2E35",
    fontWeight: "700",
    paddingLeft: "6px",
  },
}))(HomePageTeamHeading);
