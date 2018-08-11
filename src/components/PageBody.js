import React from "react";
require("prismjs/themes/prism.css");

const PageBody = (props) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: props.body.childMarkdownRemark.html }}
    />
  );
};

export default PageBody;
