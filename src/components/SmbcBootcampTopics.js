import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import checkmark from "../images/check-mark.png";

const SmbcBootcampTopics = ({ classes, className }) => {
  return (
    <div className={classNames(classes.root, className)}>
      <div className={classes.heading}>What attendees can expect to learn</div>
      <div className={classes.subheading} style={{ marginBottom: "15px" }}>
        Attendees will leave feeling MOTIVATED, INSPIRED, and EXCITED to use
        social media marketing to grow their business!
      </div>
      <div className={classes.subheading}>
        Topics include but are not limited to:
      </div>
      <div className={classes.topicsGrid}>
        <div className={classes.topicsItem}>
          <div className={classes.topicsItemIcon}>
            <img src={checkmark} />
          </div>
          <div className={classes.topicsItemTextWrapper}>
            <div className={classes.topicsItemTitle}>
              The Basics of Facebook, Twitter, LinkedIn, YouTube
            </div>
            {/* <div className={classes.topicsItemDescription}>
              A crucial skill for any modern real estate professional
            </div> */}
          </div>
        </div>

        <div className={classes.topicsItem}>
          <div className={classes.topicsItemIcon}>
            <img src={checkmark} />
          </div>
          <div className={classes.topicsItemTextWrapper}>
            <div className={classes.topicsItemTitle}>
              How to Be Professional and Personable Online
            </div>
          </div>
        </div>

        <div className={classes.topicsItem}>
          <div className={classes.topicsItemIcon}>
            <img src={checkmark} />
          </div>
          <div className={classes.topicsItemTextWrapper}>
            <div className={classes.topicsItemTitle}>
              Why You Need a Facebook Business Page
            </div>
          </div>
        </div>

        <div className={classes.topicsItem}>
          <div className={classes.topicsItemIcon}>
            <img src={checkmark} />
          </div>
          <div className={classes.topicsItemTextWrapper}>
            <div className={classes.topicsItemTitle}>
              How To Leverage Blogs &amp; Hyperlocal Content
            </div>
          </div>
        </div>

        <div className={classes.topicsItem}>
          <div className={classes.topicsItemIcon}>
            <img src={checkmark} />
          </div>
          <div className={classes.topicsItemTextWrapper}>
            <div className={classes.topicsItemTitle}>
              How to Attract More Followers
            </div>
          </div>
        </div>

        <div className={classes.topicsItem}>
          <div className={classes.topicsItemIcon}>
            <img src={checkmark} />
          </div>
          <div className={classes.topicsItemTextWrapper}>
            <div className={classes.topicsItemTitle}>And Much, Much More!</div>
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
  },
  logo: {
    marginBottom: "36px",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "700",
    marginBottom: "12px",
    color: "#F3574E",
  },
  subheading: {
    fontSize: "18px",
    fontWeight: "500",
    color: "#64616E",
    marginBottom: "64px",
  },
  topicsGrid: {
    flex: "1",
    display: "grid",
    gridTemplateColumns: "repeat(1, 1fr)",
    gridColumnGap: "80px",
    gridRowGap: "48px",

    [theme.breakpoints[600]]: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
  },
  topicsItem: {
    display: "flex",
    width: "100%",
  },

  topicsItemIcon: {
    flexShrink: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "28px",
    height: "28px",
    color: theme.colors.primary,
    background: "#fff4f0",
    borderRadius: "50%",
    marginRight: "16px",
  },
  topicsItemTextWrapper: {
    display: "flex",
    flexDirection: "column",
  },
  topicsItemTitle: {
    fontSize: "15px",
    lineHeight: "20px",
    fontWeight: "700",
    marginBottom: "8px",
  },
  topicsItemDescription: {
    fontSize: "14px",
    lineHeight: "20px",
    fontWeight: "400",
  },
}))(SmbcBootcampTopics);
