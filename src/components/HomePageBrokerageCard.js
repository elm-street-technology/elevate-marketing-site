import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import Icon from "elevate-ui-icons/Icon";
import BrokerDash from "../images/broker-dash-listings.png";

const HomePageBrokerageCard = ({ classes, className, role }) => {
  return (
    <div className={classNames(classes.root, className)}>
      <div className={classes.brokerageCard}>
        <div className={classes.brokerageCardLeft}>
          <div className={classes.teamFeatureHead}>
            <Icon name={"Dashboard"} style={{ color: "FFC629" }} />
            <div className={classes.teamFeatureHeading}>Dashboard</div>
          </div>
          <div className={classes.teamFeatureDesc}>
            Mauris viverra molestie tempus. Proin quam dui, accumsan eget dui a,
            tempus fermentum neque. Proin fringilla imperdiet lacinia. Mauris
            lacinia, dui quis auctor sollicitudin, nisi magna maximus sapien,
            vel commodo mauris sem et dui.
          </div>
          <div className={classes.bottomTab}>
            <span style={{ zIndex: "1", position: "relative" }}>
              👍 includes all agents and teams features
            </span>
            <div
              style={{
                backgroundColor: "#FFC629",
                opacity: ".2",
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                borderTopRightRadius: "6px",
                borderBottomRightRadius: "6px",
              }}
            />
          </div>
        </div>
        <img src={BrokerDash} style={{ width: "50%" }} alt={"App Dashboard"} />
      </div>
    </div>
  );
};

export default withStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    padding: "40px",
  },
  teamFeatureHead: {
    display: "flex",
    alignItems: "center",
  },
  teamFeatureHeading: {
    color: "#5A5B5C",
    fontWeight: "700",
    fontSize: "15px",
    paddingLeft: "6px",
  },
  brokerageHeading: {
    fontSize: "26px",
    fontWeight: "800",
    textAlign: "center",
    lineHeight: "45px",
    padding: "0 12px",
    color: "#FFC629",
    maxWidth: "700px",
    [theme.breakpoints[900]]: {
      fontSize: "30px",
    },
  },
  brokerageCard: {
    display: "flex",
    background: "#fff",
    justifyContent: "space-between", // material-design 1dp
    transition: "all 200ms ease-in-out",
    overflow: "hidden",
    userSelect: "none",
    borderRadius: "12px",
    boxShadow: "0px 12px 24px rgba(0, 0, 0, .1)",

    [theme.breakpoints[900]]: {
      width: "655px",
      height: "300px",
    },
  },
  brokerageCardLeft: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    marginTop: "60px",
    paddingLeft: "26px",
    paddingRight: "22px",
  },
  teamFeatureDesc: {
    fontSize: "13px",
    color: "#5A5B5C",
    paddingTop: "15px",
    paddingLeft: "30px",
    lineHeight: "18px",
  },
  bottomTab: {
    color: "#5A5B5C",
    display: "flex",
    fontSize: "12px",
    fontWeight: "600",
    justifyContent: "center",
    padding: "12px 0",
    position: "relative",
    marginLeft: "-26px",
    marginTop: "30px",
  },
}))(HomePageBrokerageCard);
