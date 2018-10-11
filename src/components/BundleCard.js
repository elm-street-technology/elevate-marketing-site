import React from "react";
import withStyles from "elevate-ui/withStyles";
import GroupAdd from "elevate-ui-icons/GroupAdd";

const BundleCard = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.icon}>
        <GroupAdd size={28} />
      </div>
      <div className={classes.heading}>Asset Management</div>
      <div className={classes.tagline}>
        Consolidate all your marketing collateral in one storage space.
      </div>
      <div className={classes.description}>
        Our asset management library makes it simple and fast to store marketing
        collateral and important documentation and be able to "push" to offices
        and agents.
      </div>
    </div>
  );
};

export default withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 8px 12px rgba(0,0,0,.20)",
    padding: "30px 30px 0px 30px",
    textAlign: "center",
    borderRadius: "8px",

    [theme.breakpoints[900]]: {
      padding: "36px",
    },
  },
  icon: {
    width: "56px",
    height: "56px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#55C3BA",
    backgroundColor: "rgba(85, 195, 186, .2)",
    borderRadius: "50%",
    padding: "12px",
  },
  heading: {
    display: "flex",
    alignItems: "center",
    textTransform: "uppercase",
    color: "#55C3BA",
    fontWeight: "700",
    letterSpacing: ".8px",
    fontSize: "18px",
    marginBottom: "24px",
    marginTop: "16px",
  },
  tagline: {
    fontSize: "26px",
    fontWeight: "700",
    color: "#2E2E35",
    lineHeight: "38px",
    marginBottom: "20px",
    maxWidth: "600px",
  },
  description: {
    fontSize: "18px",
    lineHeight: "30px",
    color: "#5A5B5C",
    marginBottom: "60px",

    [theme.breakpoints[900]]: {
      maxWidth: "400px",
      marginBottom: "0px",
    },
  },
}))(BundleCard);
