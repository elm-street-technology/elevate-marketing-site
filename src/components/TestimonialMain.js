import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";

const TestimonialMain = ({
  classes,
  className,
  mirrored, // stylistically flips the content
  testimonial: { testimonial, photo, name, jobTitle },
}) => {
  return (
    <div className={classNames(classes.root, className)}>
      <div
        dangerouslySetInnerHTML={{
          __html:
            testimonial &&
            testimonial.childMarkdownRemark &&
            testimonial.childMarkdownRemark.html,
        }}
      />
      <div className={classes.author}>
        <img
          className={classes.authorPhoto}
          src={photo.file.url}
          alt={`${name}'s Testimonial Headshot`}
        />
        <div className={classes.authorDetails}>
          <div className={classes.authorName}>{name}</div>
          <div className={classes.authorTitle}>{jobTitle}</div>
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
  author: {
    display: "flex",
    alignItems: "flex-start",
    marginTop: "24px",

    [theme.breakpoints[900]]: {
      marginTop: "32px",
    },
  },
  authorPhoto: {
    flexShrink: "0",
    width: "72px",
    height: "72px",
    borderRadius: "50%",
    marginRight: "12px",
  },
  authorName: {
    color: "#64616E",
    fontSize: "20px",
    lineHeight: "1.4",
    fontWeight: "700",
  },
  authorTitle: {
    fontSize: "16px",
    lineHeight: "1.4",
    fontWeight: "600",
    color: "#9a94ad",
  },
}))(TestimonialMain);
