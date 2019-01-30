import React from "react";
import find from "lodash/find";
import Helmet from "react-helmet";
import withStyles from "elevate-ui/withStyles";
import Header from "../components/Header";
import Footer from "../components/Footer";
import config from "../utils/siteConfig";
import Hero from "../components/Hero";
import Container from "../components/Container";
import PageBody from "../components/PageBody";
import TagList from "../components/TagList";
import PostPagination from "../components/PostPagination";
import SEO from "../components/SEO";
import PostSocialLinks from "../components/PostSocialLinks";

const PostTemplate = ({
  children,
  classes,
  data: { allContentfulPost, contentfulPost },
}) => {
  const { title, slug, id, body, tags } = contentfulPost;
  const postNode = contentfulPost;

  const postIndex = find(
    allContentfulPost.edges,
    ({ node: post }) => post.id === id
  );

  return (
    <div className={classes.root}>
      <Header />
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO pagePath={slug} postNode={postNode} postSEO />

      <Container>
        <Hero post={contentfulPost} />
        <PageBody body={body} />
        {tags && <TagList tags={tags} />}
        <PostSocialLinks className={classes.social} post={contentfulPost} />
        <PostPagination previous={postIndex.previous} next={postIndex.next} />
      </Container>
      <Footer />
    </div>
  );
};

export const query = graphql`
  query postQuery($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      id
      slug
      metaDescription {
        internal {
          content
        }
      }
      publishDate(formatString: "MMMM DD, YYYY")
      publishDateISO: publishDate(formatString: "YYYY-MM-DD")
      tags {
        title
        id
        slug
      }
      heroImage {
        title
        file {
          url
        }
        sizes(maxWidth: 1800) {
          ...GatsbyContentfulSizes_withWebp_noBase64
        }
        ogimg: resize(width: 1800) {
          src
          width
          height
        }
      }
      body {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 320)
        }
      }
    }
    allContentfulPost(
      limit: 1000
      sort: { fields: [publishDate], order: DESC }
    ) {
      edges {
        node {
          id
        }
        previous {
          slug
        }
        next {
          slug
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

    [theme.breakpoints[600]]: {
      maxWidth: "584px",
    },

    [theme.breakpoints[900]]: {
      maxWidth: "700px",
    },
  },
  social: {
    justifyContent: "flex-end",
    marginBottom: "24px",
  },
}))(PostTemplate);
