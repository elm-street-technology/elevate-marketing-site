import React from "react";

import EUIButton from "elevate-ui/Button";

const Button = ({ href, children, backgroundColor }) => {
  return (
    <EUIButton
      style={{ backgroundColor }}
      onClick={() => {
        if (window) {
          window.location.href = href;
        }
      }}
    >
      {children}
    </EUIButton>
  );
};

export default Button;
