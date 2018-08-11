import React from "react";
import Helmet from "react-helmet";

const NotFoundPage = () => (
  <div>
    <Helmet>
      <title>404 - Page Not Found</title>
      <meta name="description" content="Page not found" />
    </Helmet>

    <div>
      <div>Error 404</div>
      <div>Sorry, that page can't be found</div>
    </div>
  </div>
);

export default NotFoundPage;
