import React from "react";

const Markdown = ({ classes, icon, headline, tagline, description }) => {
  return (
    <div
      className={classes.description}
      dangerouslySetInnerHTML={{
        __html: description.childMarkdownRemark.html,
      }}
    />
  );
};

export default Markdown;
