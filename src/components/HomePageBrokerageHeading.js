import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import GroupAdd from "elevate-ui-icons/GroupAdd";

const HomePageBrokerageHeading = ({ classes, className }) => {
  return (
    <div className={classNames(classes.root, className)}>
      <div className={classes.brokerageHeadingContainer}>
        <div className={classes.iconContainer}>
          <GroupAdd name={"PersonAdd"} style={{ color: "#FFC629" }} size={36} />
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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
  },
}))(HomePageBrokerageHeading);
