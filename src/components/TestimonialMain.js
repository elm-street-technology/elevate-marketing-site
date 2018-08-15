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
      <div>
        <div>
          <img
            className={classes.instructorPhoto}
            src={photo.file.url}
            alt={`${name}'s Testimonial Headshot`}
          />
        </div>
        <div>
          <div>{name}</div>
          <div>{jobTitle}</div>
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
}))(TestimonialMain);
