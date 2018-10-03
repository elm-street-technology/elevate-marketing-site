import React from "react";
import classNames from "classnames";
import Person from "elevate-ui/Icon/Person";
import GroupAdd from "elevate-ui/Icon/GroupAdd";
import People from "elevate-ui/Icon/People";
import withStyles from "elevate-ui/withStyles";
import RoleCard from "../components/RoleCard";

const HomePageHeroFooter = ({
  classes,
  className,
  roles,
  handleRoleChange,
}) => {
  return (
    <div className={classNames(classes.root)}>
      <div className={classes.footerContainer}>
        <div
          className={classNames(
            classes.footerItem,
            classes.itemAgent,
            classes.link
          )}
          onClick={() => {
            handleRoleChange("Agents");
          }}
        >
          <Person className={classes.icon} size={22} />
          <div className={classes.itemText}>Agents</div>
          <div className={classNames(classes.dropDown, classes.agentdropDown)}>
            <RoleCard
              className={classes.roleCard}
              role={roles.Agents}
              handleRoleChange={handleRoleChange}
            />
          </div>
        </div>
        <div
          onClick={() => {
            handleRoleChange("Teams");
          }}
          className={classNames(
            classes.footerItem,
            classes.itemTeam,
            classes.link
          )}
        >
          <People className={classes.icon} size={22} />
          <div className={classes.itemText}>Teams</div>
          <div className={classNames(classes.dropDown, classes.teamdropDown)}>
            <RoleCard
              className={classes.roleCard}
              role={roles.Teams}
              handleRoleChange={handleRoleChange}
            />
          </div>
        </div>
        <div
          onClick={() => {
            handleRoleChange("Brokerages");
          }}
          className={classNames(
            classes.footerItem,
            classes.itemBroker,
            classes.link
          )}
        >
          <GroupAdd className={classes.icon} size={22} />
          <div className={classes.itemText}>Brokers</div>
          <div className={classNames(classes.dropDown, classes.brokerdropDown)}>
            <RoleCard
              className={classes.roleCard}
              role={roles.Brokerages}
              handleRoleChange={handleRoleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "1080px",
    margin: "0 auto",
  },
  footerContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(100px, 1fr))",
  },
  footerItem: {
    display: "grid",
    gridTemplateColumns: "repeat(2, auto)",
    padding: "10px",
    justifyContent: "center",
    alignItems: "center",
    gridGap: "4px",
  },
  itemText: {
    color: "#5A5B5C",
    textTransform: "uppercase",
    fontSize: "14px",
    fontWeight: "700",

    [theme.breakpoints[600]]: {
      fontSize: "18px",
    },
  },
  itemAgent: {
    backgroundColor: "#F15953",
  },
  itemTeam: {
    backgroundColor: "#55C3BA",
  },
  itemBroker: {
    backgroundColor: "#FFC629",
  },
  icon: {
    fill: "#5A5B5C",
  },
  link: {
    position: "relative",
    display: "grid",
    gridGap: "4px",

    "&:hover": {
      cursor: "pointer",
    },

    "&:hover $dropDown": {
      [theme.breakpoints[600]]: {
        visibility: "visible",
      },

      visibility: "hidden",
      opacity: "1",
      zIndex: "999",
      transitionDelay: "0s, 0s, .3s",
    },
  },
  listItem: {
    clear: "both",
    padding: "20px",
    width: "100%",
    fontSize: "15px",
    borderTop: "10px solid rgba(236,236,236, .6)",

    "&:hover": {
      color: "#2E2E35",
      background: "rgba(236,236,236, .4)",
    },
  },
  dropDown: {
    background: "#FFF",
    borderRadius: "6px 6px 0px 0px",
    width: "100%",
    visibility: "hidden",
    opacity: "0",
    position: "absolute",
    transform: "translateY(-54.4%)",
    transition: "all .3s ease-in-out",
    overflow: "hidden",
    zIndex: "999",
  },
}))(HomePageHeroFooter);
