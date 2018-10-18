import React from "react";

import Icons from "elevate-ui-icons";

const ParallaxHero = ({
  href,
  children,
  backgroundImage,
  title,
  tagline,
  icon,
}) => {
  let Icon = null;
  if (icon) {
    Icon = Icons[icon];
  }

  return (
    <div>
      <div>{Icon}</div>
      {title ? <div>{title}</div> : null}
      {tagline ? <div>{tagline}</div> : null}
    </div>
  );
};

export default ParallaxHero;
