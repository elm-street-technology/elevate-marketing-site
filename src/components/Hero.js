import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import PostSocialLinks from "./PostSocialLinks";

const Hero = ({
  classes,
  className,
  post,
  post: { publishDate, heroImage, title },
}) => (
  <div className={classNames(classes.root, className)}>
    <div>
      <h1 className={classes.title}>{title}</h1>
      {publishDate && (
        <div className={classes.postDate}>
          <span>Published:</span> {publishDate}
        </div>
      )}
      <PostSocialLinks post={post} className={classes.social} />
    </div>
    {heroImage && <img src={heroImage.file.url} className={classes.image} />}
  </div>
);

export default withStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",

    [theme.breakpoints[600]]: {
      flexWrap: "nowrap",
    },
  },
  title: {
    fontSize: "28px",
    fontWeight: "800",
    lineHeight: "36px",
    color: "#2E2E35",
  },
  postDate: {
    fontSize: "14px",
    color: "#9594A4",
    marginTop: "16px",
  },
  social: {
    marginTop: "32px",
  },
  image: {
    flexShrink: "0",
    maxWidth: "300px",
    marginTop: "24px",

    [theme.breakpoints[600]]: {
      marginTop: "0",
      marginLeft: "24px",
    },
  },
}))(Hero);
