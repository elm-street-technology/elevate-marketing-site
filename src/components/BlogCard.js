import React from "react";
import Link from "gatsby-link";
import Img from "gatsby-image";
import withStyles from "elevate-ui/withStyles";
import TagList from "../components/TagList";

const BlogCard = (props) => {
  return (
    <div className={props.classes.root}>
      <Link to={`/${props.slug}/`}>
        {props.image ? (
          <Img
            className={props.classes.postImage}
            sizes={props.image.sizes}
            backgroundColor={"#eeeeee"}
          />
        ) : null}

        <div className={props.classes.postTitle}>{props.title}</div>
        <div className={props.classes.postDate}>{props.date}</div>
        <div
          className={props.classes.postDesc}
          dangerouslySetInnerHTML={{
            __html: props.excerpt.childMarkdownRemark.excerpt,
          }}
        />
        {props.tags && <TagList tags={props.tags} />}
      </Link>
    </div>
  );
};

export default withStyles((theme) => ({
  "@global body": {
    backgroundColor: "#fff !important",
    a: {
      textDecoration: "none !important",
      "&:hover": {
        textDecoration: "none !important",
      },
    },
  },
  root: {
    display: "flex",
    flexDirection: "column",
    width: "280px",
    background: "#fff", // material-design 1dp
    transition: "all 200ms ease-in-out",
    overflow: "hidden",
    userSelect: "none",
    borderRadius: "3px",
    // boxShadow: "0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)", // material-design 8dp
  },
  link: {
    color: "inherit !important", // remove default `a` tag styling, along with :hover/:active/:etc.
    textDecoration: "inherit !important", // remove default `a` tag styling, along with :hover/:active/:etc.
  },
  postImage: {
    marginBottom: "5px",
    width: "280px",
    height: "220px",
    backgroundSize: "cover",
    backgroundPosition: "center center",
  },
  postDate: {
    marginBottom: "6px",
    fontSize: "12px",
    color: "#504E62",
  },
  postTitle: {
    fontSize: "20px",
    fontWeight: "800",
    lineHeight: "28px",
    color: "#2E2E35",
    marginBottom: "4px",

    a: {
      textDecoration: "none",
      "&:hover": {
        textDecoration: "none !important",
      },
    },
  },
  postDesc: {
    display: "flex",
    lineHeight: "21px",
    marginBottom: "8px",
    fontSize: ".875rem",
    color: "#504E62",
  },
  postTagsContainer: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    marginBottom: "30px",
  },
  postTags: {
    marginRight: "6px",
    marginBottom: "4px",
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
  postPlusMore: {
    marginRight: "6px",
    marginLeft: "6px",
    paddingTop: "6px",
    fontSize: "12px",
    fontWeight: "700",
    color: "#A9A8B6",
    letterSpacing: ".5px",
    paddingBottom: "8px",
    display: "block",
  },
  postReadMore: {
    textTransform: "uppercase",
    letterSpacing: ".5px",
    color: "#2E2E35",
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
  },
}))(BlogCard);
