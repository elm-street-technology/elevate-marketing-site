import React from "react";
import find from "lodash/find";
import Helmet from "react-helmet";
import config from "../utils/siteConfig";
import Hero from "../components/Hero";
import Container from "../components/Container";
import PageBody from "../components/PageBody";
import TagList from "../components/TagList";
import PostLinks from "../components/PostLinks";
import PostDate from "../components/PostDate";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import SEO from "../components/SEO";

const PostTemplate = ({
  children,
  classes,
  className,
  data: { allContentfulPost, contentfulPost },
}) => {
  const {
    title,
    slug,
    id,
    heroImage,
    body,
    publishDate,
    tags,
  } = contentfulPost;
  const postNode = contentfulPost;

  const postIndex = find(
    allContentfulPost.edges,
    ({ node: post }) => post.id === id
  );

  return (
    <div className={classNames(classes.root, className)}>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO pagePath={slug} postNode={postNode} postSEO />

      <Container>
        <Hero title={title} image={heroImage} height={"50vh"} />
        <PostDate date={publishDate} />
        <PageBody body={body} />
        {tags && <TagList tags={tags} />}
        <PostLinks previous={postIndex.previous} next={postIndex.next} />
      </Container>
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
}))(PostTemplate);
