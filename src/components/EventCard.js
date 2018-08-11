import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";

const EventCard = ({ classes, className, event }) => {
  const datetime = new Date(event.datetime);
  return (
    <div className={classNames(classes.root, className)}>
      <div className={classes.date}>
        <div className={classes.month}>
          {datetime.toLocaleDateString("en-us", {
            month: "short",
          })}
        </div>
        <div className={classes.day}>
          {datetime.toLocaleDateString("en-us", {
            day: "2-digit",
          })}
        </div>
      </div>
      <div className={classes.details}>
        <div className={classes.time}>
          {datetime.toLocaleTimeString("en-us", {
            hour: "numeric",
            minute: "numeric",
            timeZoneName: "short",
          })}
        </div>
        <div className={classes.title}>{event.title}</div>
        <div className={classes.location}>{event.location}</div>
      </div>
      <button className={classes.button}>Register</button>
    </div>
  );
};

export default withStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    background: "#fff",
    borderRadius: "6px",
    boxShadow: "0 8px 12px rgba(0,0,0,0.1)",
    padding: "16px",
  },
  date: {
    display: "flex",
    width: "72px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
  },
  month: {
    fontSize: "16px",
    fontWeight: "700",
    textAlign: "center",
    textTransform: "uppercase",
    padding: "4px 8px",
    color: "#fff",
    background: theme.colors.primary,
    borderTopLeftRadius: "4px",
    borderTopRightRadius: "4px",
  },
  day: {
    fontSize: "24px",
    fontWeight: "600",
    textAlign: "center",
    padding: "6px 8px",
    borderLeft: "1px solid #cecece",
    borderRight: "1px solid #cecece",
    borderBottom: "1px solid #cecece",
    borderBottomLeftRadius: "4px",
    borderBottomRightRadius: "4px",
  },
  details: {
    borderLeft: "1px solid #cecece",
    padding: "8px 0 8px 16px",
    marginLeft: "16px",
    marginRight: "auto",
  },
  time: {
    fontSize: "16px",
  },
  title: {
    fontSize: "18px",
    fontWeight: "700",
    margin: "8px 0",
  },
  location: {
    fontSize: "16px",
  },
  button: {
    alignSelf: "flex-end",
  },
}))(EventCard);
