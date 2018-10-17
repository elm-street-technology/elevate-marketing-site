import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";

import Quotation from "../images/test-quotation.png";

const TestimonialCard = ({
  children,
  classes,
  className,
  avatar,
  name,
  title,
  testimonial,
}) => {
  return (
    <div className={classNames(classes.root, className)}>
      {avatar ? (
        <div className={classes.testImage}>
          <img
            style={{ width: "60px" }}
            src={avatar}
            alt={"testimonial author"}
          />
        </div>
      ) : null}

      <div className={classes.testRight}>
        <div className={classes.quotation}>
          <img
            style={{ width: "24px" }}
            src={Quotation}
            alt={"quotation marks"}
          />
        </div>
        <div className={classes.testAuthor}>{name}</div>
        <div className={classes.testTitle}>{title}</div>
        <div className={classes.testBody}>{testimonial}</div>
      </div>
    </div>
  );
};

export default withStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    padding: "20px 0px 30px 12px",
    maxWidth: "500px",
    background: "#ebebeb", // material-design 1dp
    transition: "all 200ms ease-in-out",
    overflow: "hidden",
    userSelect: "none",
    borderRadius: "16px",
    boxShadow: "0px 12px 24px rgba(0, 0, 0, .1)",
  },
  testImage: {
    marginTop: "20px",
    paddingRight: "10px",
  },
  testAuthor: {
    color: "#64616E",
    fontSize: "20px",
    fontWeight: "700",
    paddingBottom: "8px",
  },
  testTitle: {
    color: "#9A94AD",
    fontWeight: "700",
    fontSize: "14px",
    paddingBottom: "16px",
  },
  testBody: {
    color: "#64616E",
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: "26px",
    paddingRight: "24px",
  },
  testRight: {
    display: "flex",
    flexDirection: "column",
  },
  quotation: {
    alignSelf: "flex-end",
    marginRight: "20px",
  },
}))(TestimonialCard);
