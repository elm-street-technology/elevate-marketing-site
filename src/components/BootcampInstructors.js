import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";

const BootcampInstructors = ({ classes, className, instructors }) => {
  return (
    <div className={classNames(classes.root, className)}>
      <div className={classes.heading}>Meet your instructors</div>
      <div className={classes.instructorsGrid}>
        {instructors.map((item) => (
          <div key={item.id} className={classes.instructor}>
            <img
              className={classes.instructorPhoto}
              src={item.profilePhoto.file.url}
              alt={"nice"}
            />
            <div className={classes.instructorName}>
              {item.firstName} {item.lastName}
            </div>
            <div className={classes.instructorTitle}>{item.jobTitle}</div>
            <div
              className={classes.instructorBio}
              dangerouslySetInnerHTML={{
                __html:
                  item.bio &&
                  item.bio.childMarkdownRemark &&
                  item.bio.childMarkdownRemark.html,
              }}
            />
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
  heading: {
    width: "100%",
    fontSize: "30px",
    fontWeight: "700",
    color: theme.colors.primary,
    marginBottom: "12px",
    textAlign: "center",
  },
  instructorsGrid: {
    flex: "1",
    display: "grid",
    gridTemplateColumns: "repeat(1, 1fr)",
    gridColumnGap: "80px",
    gridRowGap: "48px",
    marginTop: "64px",

    [theme.breakpoints[600]]: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
  },
  instructor: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#fff",
    borderRadius: "6px",
    boxShadow: "0 8px 12px rgba(0,0,0,0.1)",
    padding: "16px",
  },
  instructorPhoto: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
  },
  instructorName: {},
  instructorTitle: {},
}))(BootcampInstructors);
