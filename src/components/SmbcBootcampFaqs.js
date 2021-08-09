import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";

const SmbcBootcampFaqs = ({ classes, className }) => {
  return (
    <div className={classNames(classes.root, className)}>
      <div className={classes.faqsHeading}>FAQs</div>
      <div className={classes.faqsGrid}>
        <div className={classes.faqsItem}>
          <div className={classes.faqsItemQuestion}>Is there a cost?</div>
          <div className={classes.faqsItemAnswer}>
            There is no cost for our Social Media Bootcamps. We teach you
            everything you need to know, free of charge.
          </div>
        </div>

        <div className={classes.faqsItem}>
          <div className={classes.faqsItemQuestion}>
            How long is the seminar?
          </div>
          <div className={classes.faqsItemAnswer}>
            Each seminar runs roughly 30 minutes with a question and answer
            session at the end of the presentation.
          </div>
        </div>

        <div className={classes.faqsItem}>
          <div className={classes.faqsItemQuestion}>What’s in it for me?</div>
          <div className={classes.faqsItemAnswer}>
            Key takeaways and best practices that you can start implementing
            today. <span style={{ fontWeight: "700" }}>But that’s not all</span>
            ! Current Elevate clients will receive a free month of service for
            every agent in your office that signs up for one of our products
            during the seminar.
          </div>
        </div>

        <div className={classes.faqsItem}>
          <div className={classes.faqsItemQuestion}>How many can attend?</div>
          <div className={classes.faqsItemAnswer}>
            There is no limit on the number of attendees! We have presented to
            large and small real estate offices.
          </div>
        </div>

        <div className={classes.faqsItem}>
          <div className={classes.faqsItemQuestion}>Is it educational?</div>
          <div className={classes.faqsItemAnswer}>
            Yes, this seminar is designed to educate and motivate your agents on
            the power of social media marketing for real estate.
          </div>
        </div>
      </div>
    </div>
  );
};

export default withStyles((theme) => ({
  root: {
    borderTop: "unset !important",
    width: "100%",
    color: "#707070",
  },
  faqsHeading: {
    fontSize: "24px",
    fontWeight: "700",
    width: "92px",
    color: "#F3574E",
    marginBottom: "30px",
    marginTop: "30px",
  },
  faqsGrid: {
    flex: "1",
    display: "grid",
    gridTemplateColumns: "repeat(1, 1fr)",
    gridColumnGap: "46px",
    gridRowGap: "32px",

    [theme.breakpoints[600]]: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
  },
  faqsItem: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  faqsItemQuestion: {
    fontSize: "17px",
    fontWeight: "700",
    marginBottom: "8px",
  },
  faqsItemAnswer: {
    fontSize: "14px",
    lineHeight: "20px",
    fontWeight: "400",
  },
}))(SmbcBootcampFaqs);
