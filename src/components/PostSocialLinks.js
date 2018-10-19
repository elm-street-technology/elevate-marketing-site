import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";

import Facebook from "elevate-ui-icons/Facebook";
import Twitter from "elevate-ui-icons/Twitter";
import LinkedIn from "elevate-ui-icons/LinkedIn";
import Pinterest from "elevate-ui-icons/Pinterest";
import GooglePlus from "elevate-ui-icons/GooglePlus";

import config from "../utils/siteConfig";

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
        href={`https://www.facebook.com/sharer/sharer.php?u=${config.siteUrl}/${
          post.slug
        }&title=${post.title}`}
        target="_blank"
        rel="noreferrer noopener"
      >
        <Facebook size={32} />
      </a>
      <a
        className={classNames(classes.icon, classes.twitter)}
        href={`https://twitter.com/intent/tweet?status=${post.title}+${
          config.siteUrl
        }/${post.slug}`}
        target="_blank"
        rel="noreferrer noopener"
      >
        <Twitter size={32} />
      </a>
      <a
        className={classNames(classes.icon, classes.linkedin)}
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${
          config.siteUrl
        }/${post.slug}&title=${post.title}`}
        target="_blank"
        rel="noreferrer noopener"
      >
        <LinkedIn size={32} />
      </a>
      {post.heroImage ? (
        <a
          className={classNames(classes.icon, classes.pinterest)}
          href={`https://pinterest.com/pin/create/bookmarklet/?media=${
            post.heroImage.file.url
          }?itok=cNTqvOf8&url=${config.siteUrl}/${
            post.slug
          }&is_video=false&description=${post.title}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <Pinterest size={32} />
        </a>
      ) : null}

      <a
        className={classNames(classes.icon, classes.google)}
        href={`https://plus.google.com/share?url=${config.siteUrl}/${
          post.slug
        }`}
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
