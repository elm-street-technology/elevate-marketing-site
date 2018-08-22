import React from "react";
import withStyles from "elevate-ui/withStyles";
import Link from "gatsby-link";

const TagList = (props) => {
  return (
    <div className={props.classes.postTagsContainer}>
      {props.tags.map((tag) => (
        <Link
          key={tag.id}
          className={props.classes.postTagLink}
          to={`/tag/${tag.slug}/`}
        >
          {tag.title}
        </Link>
      ))}
    </div>
  );
};

export default withStyles((theme) => ({
  postTags: {},
  postTagLink: {
    fontSize: "10px",
    lineHeight: "16px",
    fontWeight: "800",
    letterSpacing: ".5px",
    textAlign: "center",
    textDecoration: "none",
    marginRight: "4px",
    color: "#A9A8B6",
    backgroundColor: "#ECECEC",
    padding: "6px 12px",
    borderRadius: "14px",

    "&:hover": {
      textDecoration: "none",
      color: "#A9A8B6",
      backgroundColor: "#dfdfdf",
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
