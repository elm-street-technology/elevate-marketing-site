import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import People from "elevate-ui-icons/people";
import InfoOutline from "elevate-ui-icons/infooutline";

const HomePageTeamHeading = ({ classes, className }) => {
  return (
    <div className={classNames(classes.root, className)}>
      <div className={classes.teamHeading}>
        <div className={classes.teamHeadingLeft}>
          <div className={classes.iconContainer}>
            <People size={32} style={{ color: "#55C3BA" }} />
          </div>
          <div style={{ paddingLeft: "10px" }}>Teams</div>
        </div>
      </div>
      <div className={classes.teamSubHeading}>
        <h2>
          Everything you and your team need to increase leads and retain
          clients.
        </h2>
      </div>
      <div className={classes.teamIncludesContainer}>
        <InfoOutline style={{ color: "#55C3BA" }} />
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
    fontSize: "26px",
    color: "#55C3BA",
    fontWeight: "800",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",

    [theme.breakpoints[600]]: {
      flexDirection: "row",
    },

    [theme.breakpoints[900]]: {
      fontSize: "30px",
    },
  },
  teamSubHeading: {
    color: "#5A5B5C",
    textAlign: "center",
    fontSize: "17px",
    lineHeight: "24px",
    marginTop: "20px",
    marginBottom: "40px",
    margin: "auto",
    justifyContent: "center",

    [theme.breakpoints[600]]: {
      lineHeight: "30px",
      fontSize: "20px",
      marginTop: "20px",
    },
  },
  iconContainer: {
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
    border: "1px solid #55C3BA",
    padding: "12px 30px",
    fontSize: "14px",
    margin: "auto",
    color: "#55C3BA",
    fontWeight: "600",

    "&:hover": {
      color: "#FFF",
      backgroundColor: "#55C3BA",
      transition: "all .3s ease",
    },
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
    color: "#5A5B5C",
    fontWeight: "700",
    paddingLeft: "6px",
  },
}))(HomePageTeamHeading);
