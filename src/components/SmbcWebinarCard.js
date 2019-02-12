import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import moment from "moment";
import momentTimezone from "moment-timezone";

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const SmbcWebinarCard = ({ classes, className, webinar }) => {

    var eventDate = momentTimezone.tz(webinar.expires, 'America/New_York');
    //console.log(eventDate);
    var printDate = eventDate.format("dddd, MMMM Do, h:mm a z");
    //console.log(printDate);

    //console.log(momentTimezone.tz('America/New_York').format('z'));
    
  return (
    <div className={classNames(classes.root, className)}>
      <div className={classes.details}>
        <div className={classes.detailsTop}>
          <div className={classes.title}>{printDate}</div>
          <div className={classes.desc}>{webinar.description}</div>
        </div>
        <div className={classes.detailsBottom}>
          <div className={classes.time}>{webinar.time}</div>
        </div>
      </div>
      <div className={classes.buttonFormat}>
          <a
              href={webinar.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.registerLink}
          >
              Register Now
        </a>
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
    fontSize: "14px",
    letterSpacing: ".25px",
    color: "#fff",
    textDecoration: "none",
    fontWeight: "600",
    padding: "12px 16px",
    borderRadius: "6px",
    alignSelf: "flex-end",
    marginLeft: "4px",
    backgroundColor: "#ef5c58"
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
    flex: "1",
    textAlign:"center"
  },
  detailsBottom: {
    marginTop: "auto",
  },
  detailsTop: {
    paddingBottom: "10px",
    textAlign:"center",
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
    buttonFormat:{
        textAlign:"center",
        margin:"20px"
    }
}))(SmbcWebinarCard);
