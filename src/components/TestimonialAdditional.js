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
}))(TestimonialAdditional);
