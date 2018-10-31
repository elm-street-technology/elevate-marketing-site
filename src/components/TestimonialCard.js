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
        <svg
          className={classes.quotation}
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
        >
          <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
        </svg>
        <div className={classes.testAuthor}>{name}</div>
        <div className={classes.testTitle}>{title}</div>
        <div
          className={classes.testBody}
          dangerouslySetInnerHTML={{
            __html: testimonial,
          }}
        />
      </div>
    </div>
  );
};

export default withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    background: "#f4f4f4",
    transition: "all 200ms ease-in-out",
    overflow: "hidden",
    borderRadius: "16px",
    padding: "30px 40px 40px",
  },
  testImage: {
    marginTop: "20px",
    paddingRight: "10px",
  },
  testAuthor: {
    color: theme.colors.secondary,
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
    fontSize: "15px",
    lineHeight: "1.7",

    "& strong": {
      fontWeight: "700",
    },
  },
  testRight: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  quotation: {
    marginBottom: "8px",
    fill: theme.colors.secondary,
    width: "60px",
  },
}))(TestimonialCard);
