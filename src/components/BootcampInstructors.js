import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import ReactCardFlipper from "react-card-flipper";
import ArrowForward from "elevate-ui/Icon/ArrowForward";

const BootcampInstructors = ({ classes, className, instructors }) => {
  return (
    <div className={classNames(classes.root, className)}>
      <div className={classes.heading}>Meet your instructors</div>
      <div className={classes.instructorsGrid}>
        {instructors.map((item) => (
          <ReactCardFlipper
            key={item.id}
            width={400}
            height={400}
            innerCardClass={classes.instructor}
            levitate
          >
            <div className={classes.cardFront}>
              <img
                className={classes.instructorPhoto}
                src={item.profilePhoto.file.url}
                alt={"nice"}
              />
              <div className={classes.instructorName}>
                <h2>
                  {item.firstName} {item.lastName}
                </h2>
              </div>
              <div className={classes.instructorTitle}>
                <h3>{item.jobTitle}</h3>
              </div>
              <button className={classes.learnMore}>
                Learn more about {item.firstName} <ArrowForward color="#000" />
              </button>
            </div>
            <div>
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
          </ReactCardFlipper>
        ))}
      </div>
    </div>
  );
};

export default withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
    justifyContent: "space-between",
    alignItems: "center",
    background: "#fff",
    borderRadius: theme.globalBorderRadius,
    border: "1px solid rgba(94, 94, 94, 0.05)",
    boxShadow: "0 8px 12px rgba(0,0,0,0.1)",
    padding: "40px",
  },
  cardFront: {
    width: "100%",
    height: "100%",
  },
  instructorPhoto: {
    display: "block",
    margin: "0 auto 20px",
    width: "120px",
    height: "120px",
    borderRadius: "50%",
  },
  instructorName: {
    "& h2": {
      marginBottom: "16px",
      fontWeight: "700",
      fontSize: "24px",
      color: "#000",
      textAlign: "center",
    },
  },
  instructorTitle: {
    "& h3": {
      fontSize: "18px",
      color: theme.colors.gray500,
      textAlign: "center",
    },
  },
  instructorBio: {
    "& p": {
      fontSize: "14px",
      lineHeight: "18px",
      color: theme.colors.gray800,
    },
  },
  learnMore: {
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    maxWidth: "310px",
    margin: "50px auto 10px",
    padding: "23px",
    borderRadius: theme.globalBorderRadius,
    backgroundColor: "rgba(255	244	240)",
    fontWeight: "700",
    fontSize: "18px",
    textAlign: "center",
    color: theme.colors.primary,
    "& svg": {
      marginLeft: "10px",
    },
  },
}))(BootcampInstructors);
