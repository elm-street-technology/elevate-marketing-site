import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import Check from "elevate-ui-icons/Check";
import BootcampLogo from "./BootcampLogo";

const BootcampTopics = ({ classes, className, topics }) => {
  return (
    <div className={classNames(classes.root, className)}>
      <BootcampLogo className={classes.logo} />
      <div className={classes.heading}>What attendees can expect to learn</div>
      <div className={classes.subheading}>
        Topics include but are not limited to:
      </div>
      <div className={classes.topicsGrid}>
        {topics.map((item) => (
          <div key={item.id} className={classes.topicsItem}>
            <div className={classes.topicsItemIcon}>
              <Check size={18} />
            </div>
            <div className={classes.topicsItemTextWrapper}>
              <div className={classes.topicsItemTitle}>{item.title}</div>
              <div
                className={classes.topicsItemDescription}
                dangerouslySetInnerHTML={{
                  __html:
                    item.description &&
                    item.description.childMarkdownRemark &&
                    item.description.childMarkdownRemark.html,
                }}
              />
            </div>
          </div>
        ))}
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
    [theme.breakpoints[900]]: {
      gridTemplateColumns: "repeat(3, 1fr)",
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
}))(BootcampTopics);
