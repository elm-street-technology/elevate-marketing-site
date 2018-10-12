import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";

const WebinarCard = ({ classes, className, webinar }) => {
  return (
    <div className={classNames(classes.root, className)}>
      <div className={classes.top}>
        <div className={classes.day}>{webinar.day}</div>
        <a
          href={webinar.registrationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={classes.registerLink}
        >
          Register
        </a>
      </div>
      <div className={classes.details}>
        <div className={classes.detailsTop}>
          <div className={classes.title}>{webinar.title}</div>
          <div className={classes.desc}>{webinar.description}</div>
        </div>
        <div className={classes.detailsBottom}>
          <div className={classes.time}>{webinar.time}</div>
        </div>
      </div>
    </div>
  );
};

export default withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "stretch",
    width: "100%",
    background: "#fff",
    borderRadius: "6px",
    boxShadow: "0 8px 12px rgba(0,0,0,0.1)",
  },
  top: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: "12px 20px",
    borderBottom: "2px solid rgba(100, 97, 110, .10)",
  },
  day: {
    fontSize: "18px",
    fontWeight: "700",
  },
  registerLink: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#55C3BA",
    fontSize: "14px",
    letterSpacing: ".25px",
    color: "#fff",
    textDecoration: "none",
    fontWeight: "600",
    padding: "12px 16px",
    borderRadius: "6px",
    alignSelf: "flex-end",
    marginLeft: "4px",
  },
  desc: {
    color: "#64616E",
    lineHeight: "22px",
    paddingBottom: "4px",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    padding: "12px 20px",
    marginRight: "auto",
    flex: "1",
  },
  detailsBottom: {
    marginTop: "auto",
  },
  detailsTop: {
    paddingBottom: "10px",
  },
  time: {
    fontSize: "16px",
    fontWeight: "600",
  },
  title: {
    fontSize: "18px",
    fontWeight: "600",
    paddingBottom: "8px",
  },
}))(WebinarCard);
