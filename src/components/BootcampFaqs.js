import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";

const BootcampFaqs = ({ classes, className, faqs }) => {
  return (
    <div className={classNames(classes.root, className)}>
      <div className={classes.faqsHeading}>FAQs</div>
      <div className={classes.faqsGrid}>
        {faqs.map((item) => (
          <div key={item.id} className={classes.faqsItem}>
            <div className={classes.faqsItemQuestion}>{item.question}</div>
            <div
              className={classes.faqsItemAnswer}
              dangerouslySetInnerHTML={{
                __html:
                  item.answer &&
                  item.answer.childMarkdownRemark &&
                  item.answer.childMarkdownRemark.html,
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
    width: "100%",
  },
  faqsHeading: {
    fontSize: "24px",
    fontWeight: "700",
    width: "92px",
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
    [theme.breakpoints[900]]: {
      gridTemplateColumns: "repeat(3, 1fr)",
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
}))(BootcampFaqs);
