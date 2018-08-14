import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import Link from "gatsby-link";

const TagList = (props) => {
  return (
    <div className={props.classes.postTagsContainer}>
      {props.tags.map((tag) => (
        <div className={props.classes.postTags} key={tag.id}>
          <Link className={props.classes.postTagLink} to={`/tag/${tag.slug}/`}>
            {tag.title}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default withStyles((theme) => ({
  postTags: {
    fontSize: "10px",
    fontWeight: "800",
    color: "#A9A8B6",
    letterSpacing: ".5px",
    padding: "8px",
    borderRadius: "16px",
    backgroundColor: "#ECECEC",
    "&:hover": {
      color: "#A9A8B6",
      textDecoration: "none !important",
    },
  },
  postTagLink: {
    "&:hover": {
      textDecoration: "none !important",
    },
  },
  postTagsContainer: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    padding: "20px 8px",

    [theme.breakpoints[600]]: {
      padding: "20px 0",
    },
  },
}))(TagList);
