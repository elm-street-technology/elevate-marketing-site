import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";

const PostDate = (props) => {
  return (
    <div className={classNames(props.classes.postDate, props.className)}>
      <span>Published:</span> {props.date}
    </div>
  );
};

export default withStyles((theme) => ({
  postDate: {
    fontSize: "14px",
    color: "#9594A4",
  },
}))(PostDate);
