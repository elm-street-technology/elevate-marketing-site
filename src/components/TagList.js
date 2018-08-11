import React from "react";
import Link from "gatsby-link";

const TagList = (props) => {
  return (
    <div>
      {props.tags.map((tag) => (
        <div key={tag.id}>
          <Link to={`/tag/${tag.slug}/`}>{tag.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default TagList;
