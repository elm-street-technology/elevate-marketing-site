import React from "react";
import sortBy from "lodash/sortBy";
import Helmet from "react-helmet";

import config from "../utils/siteConfig";
import BlogCard from "../components/BlogCard";
import BlogCardGrid from "../components/BlogCardGrid";
import PageTitle from "../components/PageTitle";
import Container from "../components/Container";

const TagTemplate = ({ data: { contentfulTag } }) => {
  const { title, slug } = contentfulTag;

  const posts = sortBy(contentfulTag.post, "publishDate").reverse();

  return (
    <div>
      <Helmet>
        <title>{`Tag: ${title} - ${config.siteTitle}`}</title>
        <meta
          property="og:title"
          content={`Tag: ${title} - ${config.siteTitle}`}
        />
        <meta property="og:url" content={`${config.siteUrl}/tag/${slug}/`} />
      </Helmet>

      <Container>
        <PageTitle>{`Tag: “${title}”`}</PageTitle>
        <BlogCardGrid>
          {posts.map((post) => (
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
  query tagQuery($slug: String!) {
    contentfulTag(slug: { eq: $slug }) {
      title
      id
      slug
      post {
        id
        title
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
`;

export default TagTemplate;
