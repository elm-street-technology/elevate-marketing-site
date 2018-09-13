import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import TeamsLaptop from "../images/teams-laptop.png";
import Icon from "elevate-ui/Icon/Icon";

const HomePageTeamFeatures = ({ classes, className }) => {
  return (
    <div className={classNames(classes.root, className)}>
      <div className={classes.teamDetailsLeft}>
        <div className={classes.teamFeaturesContainer}>
          <div className={classes.teamFeatures}>
            <div className={classes.teamFeatureHead}>
              <Icon name={"RecordVoiceOver"} style={{ color: "#0092FF" }} />
              <div className={classes.teamFeatureHeading}>Lead routing</div>
            </div>
            <div className={classes.teamFeatureDesc}>
              Sed nibh lacus, lobortis et ipsum sit amet, luctus dapibus purus.
              Morbi.
            </div>
          </div>
          <div className={classes.teamFeatures}>
            <div className={classes.teamFeatureHead}>
              <Icon name={"LocationSearching"} style={{ color: "#0092FF" }} />
              <div className={classes.teamFeatureHeading}>Lead parsing</div>
            </div>
            <div className={classes.teamFeatureDesc}>
              Etiam sit amet elit dictum, fermentum nibh quis, pellentesque
              ante. Aliquam quis leo elit.
            </div>
          </div>
          <div className={classes.teamFeatures}>
            <div className={classes.teamFeatureHead}>
              <Icon name={"Dashboard"} style={{ color: "#0092FF" }} />
              <div className={classes.teamFeatureHeading}>Team dashboard</div>
            </div>
            <div className={classes.teamFeatureDesc}>
              Etiam sit amet elit dictum, fermentum nibh quis, pellentesque
              ante. Aliquam quis leo elit.
            </div>
          </div>
        </div>
      </div>
      <div className={classes.teamsLaptop}>
        <img
          src={TeamsLaptop}
          style={{ width: "100%" }}
          alt={"Laptop screenschot"}
        />
      </div>
    </div>
  );
};

export default withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",

    [theme.breakpoints[900]]: {
      flexDirection: "row",
    },
  },
  teamDetailsLeft: {
    display: "flex",
    flexDirection: "column",
    flex: "1 50%",
  },
  teamFeaturesContainer: {
    display: "flex",
    flexDirection: "row",
    paddingTop: "0px",
    flexWrap: "wrap",
    paddingBottom: "20px",

    [theme.breakpoints[600]]: {
      flexWrap: "nowrap",
    },

    [theme.breakpoints[900]]: {
      flexDirection: "column",
      paddingTop: "20px",
    },
  },
  teamFeatureHead: {
    display: "flex",
    alignItems: "center",
  },
  teamFeatureHeading: {
    color: "#2E2E35",
    fontWeight: "700",
    fontSize: "15px",
    paddingLeft: "6px",
  },
  teamFeatures: {
    paddingTop: "40px",
  },
  teamFeatureDesc: {
    fontSize: "13px",
    color: "#64616E",
    paddingTop: "15px",
    paddingLeft: "30px",
    lineHeight: "18px",
  },
}))(HomePageTeamFeatures);
