import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import Link from "gatsby-link";

const PostPagination = (props) => {
  return (
    <div className={classNames(props.classes.root, props.className)}>
      {props.previous && (
        <Link
          className={classNames(
            props.classes.postButton,
            props.classes.postButtonPrevious
          )}
          to={`/${props.previous.slug}/`}
        >
          <svg
            className={props.classes.arrow}
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
          >
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
          </svg>
          <span className={props.classes.postLink}>Prev Post</span>
        </Link>
      )}
      {props.next && (
        <Link
          className={classNames(
            props.classes.postButton,
            props.classes.postButtonNext
          )}
          to={`/${props.next.slug}/`}
        >
          <span className={props.classes.postLink}>Next Post </span>
          <svg
            className={props.classes.arrow}
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            style={{ color: "#F15953" }}
          >
            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
          </svg>
        </Link>
      )}
    </div>
  );
};

export default withStyles((theme) => ({
  root: {
    display: "flex",
    alignContent: "center",
    marginTop: "20px",
  },
  postButton: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#FFF4F0",
    fontSize: "12px",
    letterSpacing: ".25px",
    color: "#F15953",
    textDecoration: "none",
    fontWeight: "700",
    padding: "8px 16px",
    borderRadius: "6px",
  },
  postButtonPrevious: {
    marginRight: "auto",
  },
  postButtonNext: {
    marginLeft: "auto",
  },
  arrow: {
    fill: "#F15953",
  },
  postLink: {
    marginTop: "3px",
    padding: "0 3px",
  },
}))(PostPagination);
