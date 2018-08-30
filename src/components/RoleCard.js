import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import Icon from "elevate-ui/Icon/Icon";

const RoleCard = ({ classes, className, role }) => {
  return (
    <div className={classNames(classes.root, className)}>
      {role.topTab && (
        <div className={classes.topTab}>
          <span style={{ zIndex: "1", position: "relative" }}>
            {role.topTab}
          </span>
          <div
            style={{
              backgroundColor: role.color,
              opacity: ".2",
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
            }}
          />
        </div>
      )}
      <div className={classes.roleCard}>
        <div className={classes.roleCardInner}>
          <div className={classes.roleTitle}>
            <div className={classes.iconContainer}>
              <Icon name={role.icon} style={{ color: role.color }} />
              <div
                style={{
                  backgroundColor: role.color,
                  opacity: ".2",
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  top: 0,
                  left: 0,
                }}
              />
            </div>
            <div className={classes.roleHeading}>{role.name}</div>
            <div
              className={classes.roleSubHeading}
              style={{ color: role.color }}
            >
              {role.tagline}
            </div>
          </div>
          <div>
            <ul className={classes.featureList}>
              {role.features.map((feature, i) => (
                <li key={i} className={classes.feature}>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <button
          className={classes.roleBtn}
          style={{ backgroundColor: role.color }}
        >
          {role.btnText}
        </button>
      </div>
    </div>
  );
};

export default withStyles((theme) => ({
  root: {
    display: "flex",
    flex: "1",
    flexWrap: "wrap",
    minWidth: "40%",
    marginLeft: "10px",
    marginRight: "10px",
    marginTop: "14px",
    justifyContent: "space-between",
    flexDirection: "column",
    background: "#fff", // material-design 1dp
    transition: "all 200ms ease-in-out",
    overflow: "hidden",
    userSelect: "none",
    borderRadius: "12px",
    boxShadow: "0px 12px 24px rgba(0, 0, 0, .1)",

    [theme.breakpoints[900]]: {
      width: "340px",
      minWidth: "0%",
      marginTop: "0px",
    },
  },
  topTab: {
    display: "flex",
    fontSize: "13px",
    fontWeight: "600",
    justifyContent: "center",
    padding: "14px 0",
    position: "relative",
  },
  roleTitle: {
    display: "flex",
    flexDirection: "column",
    fontSize: "18px",
    fontWeight: "700",
    paddingTop: "20px",
    paddingBottom: "20px",
  },
  roleHeading: {
    paddingTop: "12px",
    paddingLeft: "10px",
    color: "#2E2E35",
  },
  roleSubHeading: {
    textTransform: "uppercase",
    fontSize: "12px",
    paddingTop: "10px",
    paddingLeft: "10px",
  },
  roleCardInner: {
    paddingLeft: "12px",
  },
  roleCard: {
    padding: "20px 14px 14px 14px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  feature: {
    padding: "10px 0",
    marginLeft: "10px",
    color: "#2E2E35",
    fontWeight: "600",
  },
  featureList: {
    fontSize: "14px",
    marginBottom: "20px",
    listStlye: "none",
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
  personIcon: {
    fill: "#F15953",
  },
  roleBtn: {
    padding: "12px",
    width: "100%",
    color: "#FFF",
    borderRadius: "4px",
    backgroundColor: "#F15953",
    margin: "auto",
    fontSize: "14px",
    fontWeight: "600",
  },
}))(RoleCard);
