import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import Icon from "elevate-ui/Icon/Icon";

const HomePageBrokerageHeading = ({ classes, className }) => {
  return (
    <div className={classNames(classes.root, className)}>
      <div className={classes.brokerageHeadingContainer}>
        <div className={classes.iconContainer}>
          <Icon name={"PersonAdd"} style={{ color: "#FFC629" }} />
          <div
            style={{
              backgroundColor: "#FFC629",
              opacity: ".2",
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
            }}
          />
        </div>
        <div className={classes.brokerageHeading}>Brokers</div>
      </div>
      <div className={classes.brokerageSubHeading}>
        Everything you and your brokerage need to increase leads and retain
        clients.
      </div>
    </div>
  );
};

export default withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  brokerageHeadingContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
  brokerageSubHeading: {
    display: "flex",
    alignSelf: "center",
    paddingTop: "16px",
    fontSize: "20px",
    color: "#5A5B5C",
    textAlign: "center",
    maxWidth: "400px",
    lineHeight: "28px",
    marginBottom: "40px",

    [theme.breakpoints[600]]: {
      maxWidth: "700px",
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
}))(HomePageBrokerageHeading);
