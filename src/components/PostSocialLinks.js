import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";

import Facebook from "elevate-ui/Icon/Facebook";
import Twitter from "elevate-ui/Icon/Twitter";
import LinkedIn from "elevate-ui/Icon/LinkedIn";
import Pinterest from "elevate-ui/Icon/Pinterest";
import GooglePlus from "elevate-ui/Icon/GooglePlus";

type Props = {
  classes: Object,
  className: string,
  post: Object,
};

const PostSocialLinks = ({ classes, className, post }: Props) => {
  return (
    <div className={classNames(classes.root, className)}>
      <a
        className={classNames(classes.icon, classes.facebook)}
        href={`https://www.facebook.com/sharer/sharer.php?u=${
          window.location.href
        }&title=${post.title}`}
        target="_blank"
        rel="noreferrer noopener"
      >
        <Facebook size={32} />
      </a>
      <a
        className={classNames(classes.icon, classes.twitter)}
        href={`https://twitter.com/intent/tweet?status=${post.title}+${
          window.location.href
        }`}
        target="_blank"
        rel="noreferrer noopener"
      >
        <Twitter size={32} />
      </a>
      <a
        className={classNames(classes.icon, classes.linkedin)}
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${
          window.location.href
        }&title=${post.title}`}
        target="_blank"
        rel="noreferrer noopener"
      >
        <LinkedIn size={32} />
      </a>
      <a
        className={classNames(classes.icon, classes.pinterest)}
        href={`https://pinterest.com/pin/create/bookmarklet/?media=${
          post.heroImage.file.url
        }?itok=cNTqvOf8&url=${
          window.location.href
        }&is_video=false&description=${post.title}`}
        target="_blank"
        rel="noreferrer noopener"
      >
        <Pinterest size={32} />
      </a>
      <a
        className={classNames(classes.icon, classes.google)}
        href={`https://plus.google.com/share?url=${window.location.href}`}
        target="_blank"
        rel="noreferrer noopener"
      >
        <GooglePlus size={32} />
      </a>
    </div>
  );
};

export default withStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  icon: {
    margin: "0 2px",

    "&:hover": {
      color: "inherit",
      opacity: "0.6",
    },
  },
  facebook: {
    color: theme.colors.facebook || "#000",
  },
  twitter: {
    color: theme.colors.twitter || "#000",
  },
  linkedin: {
    color: theme.colors.linkedin || "#000",
  },
  pinterest: {
    color: theme.colors.pinterest || "#000",
  },
  google: {
    color: theme.colors.google || "#000",
  },
}))(PostSocialLinks);
