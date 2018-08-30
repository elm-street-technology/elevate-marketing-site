import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";

const FeatureCard = ({
  children,
  classes,
  className,
  feature,
  feature: {
    icon: {
      file: { url },
    },
    title,
    description: {
      childMarkdownRemark: { html },
    },
  },
}) => {
  return (
    <div className={classNames(classes.root, className)}>
      <div className={classes.icon}>
        <img src={url} alt={"feature icon"} style={{ maxWidth: "100%" }} />
      </div>
      <div className={classes.title}>{title}</div>
      <div
        className={classes.description}
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
    </div>
  );
};

export default withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    justifySelf: "center",
    maxWidth: "360px",
  },
  icon: {
    width: "56px",
    height: "56px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.primary,
    borderRadius: "50%",
    padding: "12px",
  },
  title: {
    fontSize: "18px",
    fontWeight: "700",
    marginTop: "24px",
  },
  description: {
    color: "#64616E",
    fontSize: "16px",
    lineHeight: "24px",
    marginTop: "12px",
  },
}))(FeatureCard);
