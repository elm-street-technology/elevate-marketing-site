import React from "react";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";
import Header from "../components/Header";
import Footer from "../components/Footer";
import config from "../utils/siteConfig";
import Container from "../components/Container";
import PageTitle from "../components/PageTitle";
import PageBody from "../components/PageBody";
import SEO from "../components/SEO";


const PageTemplate = ({ classes, data: { contentfulPage } }) => {
  const { title, slug, body } = contentfulPage;
  const postNode = contentfulPage;

  return (
    <div className={classes.root}>
      <Header />
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO pagePath={slug} postNode={postNode} pageSEO />
      <h1> test </h1>
      <Container>
        <PageTitle>{title}</PageTitle>
        <PageBody body={body} />
      </Container>
      <Footer />
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

export default withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    padding: "0 8px",
    margin: "72px auto 96px auto",
  },
}))(PageTemplate);
