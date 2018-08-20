import React from "react";
import withStyles from "elevate-ui/withStyles";

import BlogCardGrid from "../components/BlogCardGrid";
import BlogCard from "../components/BlogCard";
import Container from "../components/Container";
import PageTitle from "../components/PageTitle";
import SEO from "../components/SEO";

const Blog = ({ children, classes, data }) => {
  const posts = data.allContentfulPost.edges;

  return (
    <div className={classes.root}>
      <SEO />
      <Container>
        <PageTitle>The Elevate Blog</PageTitle>
        <BlogCardGrid>
          {posts.map(({ node: post }) => (
            <BlogCard
              key={post.id}
              slug={post.slug}
              image={post.heroImage}
              title={post.title}
              date={post.publishDate}
              excerpt={post.body}
            />
          ))}
        </BlogCardGrid>
      </Container>
    </div>
  );
};

export const query = graphql`
  query indexQuery {
    allContentfulPost(
      limit: 1000
      sort: { fields: [publishDate], order: DESC }
    ) {
      edges {
        node {
          title
          id
          slug
          publishDate(formatString: "MMMM DD, YYYY")
          heroImage {
            title
            sizes(maxWidth: 1800) {
              ...GatsbyContentfulSizes_withWebp_noBase64
            }
          }
          body {
            childMarkdownRemark {
              html
              excerpt(pruneLength: 80)
            }
          }
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
}))(Blog);
