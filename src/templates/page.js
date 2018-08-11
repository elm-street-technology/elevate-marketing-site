import React from "react";
import Helmet from "react-helmet";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import PageTitle from "../components/PageTitle";
import PageBody from "../components/PageBody";
import SEO from "../components/SEO";

const PageTemplate = ({ data: { contentfulPage } }) => {
  const { title, slug, body } = contentfulPage;
  const postNode = contentfulPage;

  return (
    <div>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO pagePath={slug} postNode={postNode} pageSEO />

      <Container>
        <PageTitle>{title}</PageTitle>
        <PageBody body={body} />
      </Container>
    </div>
  );
};

export const query = graphql`
  query pageQuery($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      title
      slug
      metaDescription {
        internal {
          content
        }
      }
      body {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 320)
        }
      }
    }
  }
`;

export default PageTemplate;
