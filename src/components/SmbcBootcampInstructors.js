import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import ReactCardFlipper from "react-card-flipper";
import ArrowForward from "elevate-ui-icons/ArrowForward";
import Plus from "../images/plus.svg";

const SmbcBootcampInstructors = ({ classes, className, instructors }) => {
  return (
    <div className={classNames(classes.root, className)}>
      <div className={classes.heading}>Meet your instructors</div>
      <div className={classes.instructorsGrid}>
        {instructors.map((item) => (
          <div key={item.id}>
            <ReactCardFlipper
              width={300}
              height={328}
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
                  {item.firstName} {item.lastName}
                </div>
                <div className={classes.instructorTitle}>{item.jobTitle}</div>
                <button className={classes.learnMore}>
                  <span>Learn more about {item.firstName}</span>
                  <ArrowForward size={18} color="#fff" />
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
    alignItems: "center",
    width: "100%",
  },
  heading: {
    width: "100%",
    fontSize: "30px",
    fontWeight: "700",
    color: "#fff",
    marginBottom: "12px",
    textAlign: "center",
  },
  instructorsGrid: {
    position: "relative",
    flex: "1",
    display: "grid",
    gridTemplateColumns: "repeat(1, 1fr)",
    gridColumnGap: "80px",
    gridRowGap: "48px",
    marginTop: "64px",

    [theme.breakpoints[600]]: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },

    "& > *": {
      "&:after": {
        content: '""',
        position: "absolute",
        width: 300,
        height: 328,
        backgroundImage: `url('${Plus}')`,
        backgroundSize: "45px 45px",
        bottom: "-50px",
        zIndex: "-10",
      },
    },

    "& > *:nth-child(odd)": {
      "&:after": {
        left: "-44px",
      },
    },

    "& > *:nth-child(even)": {
      "&:after": {
        right: "-44px",
      },
    },
  },
  instructor: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#fff",
    borderRadius: theme.globalBorderRadius,
    border: "1px solid rgba(94, 94, 94, 0.05)",
    boxShadow: "0 8px 12px rgba(0,0,0,0.1)",
    padding: "24px",
  },
  cardFront: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  instructorPhoto: {
    display: "block",
    margin: "0 auto 20px",
    width: "120px",
    height: "120px",
    borderRadius: "50%",
  },
  instructorName: {
    marginBottom: "16px",
    fontWeight: "700",
    fontSize: "24px",
    color: "#000",
    textAlign: "center",
  },
  instructorTitle: {
    fontSize: "18px",
    color: theme.colors.gray500,
    textAlign: "center",
  },
  instructorBio: {
    "& p": {
      fontSize: "13px",
      lineHeight: "18px",
      marginTop: "4px",
      marginBottom: "8px",
      color: theme.colors.gray800,
    },
  },
  learnMore: {
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    fontSize: "14px",
    lineHeight: "18px",
    fontWeight: "700",
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#55C3BA",
    borderRadius: theme.globalBorderRadius,
    padding: "12px 8px",
    marginTop: "30px",
    marginBottom: "30px",

    "& svg": {
      marginLeft: "10px",
    },
  },
}))(SmbcBootcampInstructors);
