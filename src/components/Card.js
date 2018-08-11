import React from "react";
import Link from "gatsby-link";
import Img from "gatsby-image";
import withStyles from "elevate-ui/withStyles";

const Card = (props) => {
  return (
    <div className={props.classes.root}>
      <Link to={`/${props.slug}/`}>
        <Img sizes={props.image.sizes} backgroundColor={"#eeeeee"} />
        <div>{props.title}</div>
        <div>{props.date}</div>
        <div
          dangerouslySetInnerHTML={{
            __html: props.excerpt.childMarkdownRemark.excerpt,
          }}
        />
      </Link>
    </div>
  );
};

export default withStyles((theme) => ({
  root: {
    width: "240px",
    background: "red",
  },
}))(Card);
