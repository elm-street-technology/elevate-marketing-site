import React from "react";
import Link from "gatsby-link";

const PostLinks = (props) => {
  return (
    <div>
      {props.previous && <Link to={`/${props.previous.slug}/`}>Prev Post</Link>}
      {props.next && <Link to={`/${props.next.slug}/`}>Next Post</Link>}
    </div>
  );
};

export default PostLinks;
