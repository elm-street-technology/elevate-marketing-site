import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import Icon from "elevate-ui-icons/Icon";

const RoleCard = ({
  classes,
  className,
  role,
  handleRoleChange,
  isAlternate,
}) => {
  return (
    <div
      className={classNames(classes.root, className)}
      style={{ borderColor: role.borderColor }}
    >
      <div className={classes.roleCard}>
        <div className={classes.roleCardInner}>
          <div className={classes.roleTitle}>
            <div className={classes.iconContainer}>
              <Icon name={role.icon} style={{ color: role.color }} size={48} />
            </div>
            <div className={classes.roleHeading}>{role.name}</div>
            <div
              className={classes.roleSubHeading}
              style={{ color: role.color }}
            >
              {role.tagline}
            </div>
          </div>
          <div className={classes.descriptionContainer}>
            <p className={classes.description}>{role.description}</p>
          </div>
        </div>
        <button
          onClick={() => {
            handleRoleChange(role.name);
          }}
          className={classes.roleBtn}
          style={{ backgroundColor: role.color }}
        >
          Explore
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
    border: "12px solid",
    borderRadius: "6px 6px 0 0",
    borderBottom: "none",
    // height: "440px",
  },
  roleTitle: {
    display: "flex",
    flexDirection: "column",
    fontSize: "20px",
    fontWeight: "700",
    padding: "10px 0px",
  },
  roleHeading: {
    paddingTop: "12px",
    color: "#5A5B5C",
  },
  roleSubHeading: {
    fontSize: "18px",
    paddingTop: "10px",
    lineHeight: "1.4",
  },
  roleCard: {
    padding: "20px 14px 14px 14px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  description: {
    padding: "6px 10px",
    color: "#5A5B5C",
    fontSize: "14px",
    marginBottom: "20px",
    lineHeight: "1.6",
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    margin: "auto",
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
