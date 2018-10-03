import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import Icon from "elevate-ui/Icon/Icon";

const RoleCard = ({ classes, className, role, handleRoleChange }) => {
  return (
    <div
      className={classNames(classes.root, className)}
      style={{ borderColor: role.borderColor }}
    >
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
          onClick={() => {
            handleRoleChange(role.name);
          }}
          className={classes.roleBtn}
          style={{ backgroundColor: role.color }}
        >
          Get Started
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
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "column",
    transition: "all 200ms ease-in-out",
    overflow: "hidden",
    userSelect: "none",
    border: "12px solid",
    borderRadius: "6px 6px 0 0",
    borderBottom: "none",
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
    fontSize: "20px",
    fontWeight: "700",
    paddingTop: "20px",
    paddingBottom: "20px",
  },
  roleHeading: {
    paddingTop: "12px",
    color: "#5A5B5C",
  },
  roleSubHeading: {
    textTransform: "uppercase",
    fontSize: "18px",
    paddingTop: "10px",
  },
  roleCard: {
    padding: "20px 14px 14px 14px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  feature: {
    padding: "10px 0",
    color: "#5A5B5C",
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
    margin: "auto",
  },
  personIcon: {
    fill: "#F15953",
  },
  roleBtn: {
    padding: "12px",
    width: "50%",
    color: "#FFF",
    borderRadius: "4px",
    margin: "auto",
    fontSize: "14px",
    fontWeight: "600",
  },
}))(RoleCard);
