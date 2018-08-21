import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";

const TestimonialAdditional = ({ classes, className, testimonials }) => {
  return (
    <div className={classNames(classes.root, className)}>
      {testimonials.map(({ testimonial, photo, name, jobTitle }) => (
        <div className={classes.testimonial}>
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
      ))}
    </div>
  );
};

export default withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  testimonial: {
    color: "#2E2E35",
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
    width: "56px",
    height: "56px",
    marginRight: "12px",
  },
  authorName: {
    color: "#64616E",
    fontSize: "18px",
    lineHeight: "1.4",
    fontWeight: "700",
  },
  authorTitle: {
    fontSize: "14px",
    lineHeight: "1.4",
    fontWeight: "600",
    color: "#9a94ad",
  },
}))(TestimonialAdditional);
