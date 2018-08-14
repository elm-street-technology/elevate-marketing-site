import React from "react";
import BlogCardList from "../components/BlogCardList";
import BlogCard from "../components/BlogCard";
import Container from "../components/Container";
import PageTitle from "../components/PageTitle";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import SEO from "../components/SEO";

const Blog = ({ children, classes, className, data }) => {
  const posts = data.allContentfulPost.edges;

  return (
    <div>
      <SEO />
      <Container>
        <PageTitle className={classNames(classes.blogTitle, className)}>
          The Elevate Blog
        </PageTitle>
        <BlogCardList>
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
        </BlogCardList>
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
  blogTitle: {
    width: "100%",
    margin: "90px auto 76px auto",
    maxWidth: "280px",

    [theme.breakpoints[600]]: {
      maxWidth: "584px",
    },

    [theme.breakpoints[900]]: {
      maxWidth: "888px",
    },

    [theme.breakpoints[1200]]: {
      maxWidth: "1192px",
    },
  },
}))(Blog);
