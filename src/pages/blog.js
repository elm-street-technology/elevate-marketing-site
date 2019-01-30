import React, { Component } from "react";
import withStyles from "elevate-ui/withStyles";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BlogCardGrid from "../components/BlogCardGrid";
import BlogCard from "../components/BlogCard";
import Container from "../components/Container";
import PageTitle from "../components/PageTitle";
import SEO from "../components/SEO";


class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      availablePosts: 6,
    };
  }

  handleLoadPosts = () => {
    this.setState((state) => ({
      availablePosts: state.availablePosts + 6,
    }));
  };

  render() {
    const { classes, tags, data } = this.props;
    const { availablePosts } = this.state;
    const posts = data.allContentfulPost.edges;
    return (
      <div className={classes.root}>
        <Header />
        <SEO />
        <Container>
          <PageTitle className={classes.title}>The Elevate Blog</PageTitle>
          <BlogCardGrid>
            {posts.slice(0, availablePosts).map(({ node: post }) => (
              <BlogCard
                tags={tags}
                key={post.id}
                slug={post.slug}
                image={post.heroImage}
                title={post.title}
                date={post.publishDate}
                excerpt={post.body}
              />
            ))}
          </BlogCardGrid>
          <div className={classes.btnContainer}>
            {posts.length >= availablePosts ? (
              <button className={classes.btn} onClick={this.handleLoadPosts}>
                Load more posts
              </button>
            ) : null}
          </div>
        </Container>
        <Footer />
      </div>
    );
  }
}

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
              excerpt(pruneLength: 140)
            }
          }
          tags {
            title
            id
            slug
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
  title: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  btnContainer: {
    display: "flex",
    justifyContent: "center",
    maxWidth: "100%",
  },
  btn: {
    color: "#EF5A57",
    fontWeight: "600",
    padding: "16px 80px",
    border: "2px solid #EF5A57",
    borderRadius: "8px",
  },
}))(Blog);
