const path = require(`path`);

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  const loadBootcamps = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulBootcamp {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then((result) => {
      result.data.allContentfulBootcamp.edges.map(({ node }) => {
        createPage({
          path: `${node.slug}/`,
          component: path.resolve(`./src/templates/bootcamp.js`),
          context: {
            slug: node.slug,
          },
        });
      });
      resolve();
    });
  });

  const loadBundles = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulBundle {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then((result) => {
      result.data.allContentfulBundle.edges.map(({ node }) => {
        createPage({
          path: `${node.slug}/`,
          component: path.resolve(`./src/templates/bundle.js`),
          context: {
            slug: node.slug,
          },
        });
      });
      resolve();
    });
  });

  const loadPages = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulPage {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then((result) => {
      result.data.allContentfulPage.edges.map(({ node }) => {
        createPage({
          path: `${node.slug}/`,
          component: path.resolve(`./src/templates/page.js`),
          context: {
            slug: node.slug,
          },
        });
      });
      resolve();
    });
  });

  const loadPosts = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulPost {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then((result) => {
      result.data.allContentfulPost.edges.map(({ node }) => {
        createPage({
          path: `${node.slug}/`,
          component: path.resolve(`./src/templates/post.js`),
          context: {
            slug: node.slug,
          },
        });
      });
      resolve();
    });
  });

  const loadProducts = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulProduct {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then((result) => {
      result.data.allContentfulProduct.edges.map(({ node }) => {
        createPage({
          path: `${node.slug}/`,
          component: path.resolve(`./src/templates/product.js`),
          context: {
            slug: node.slug,
          },
        });
      });
      resolve();
    });
  });

  const loadTags = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulTag {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then((result) => {
      result.data.allContentfulTag.edges.map(({ node }) => {
        createPage({
          path: `tag/${node.slug}/`,
          component: path.resolve(`./src/templates/tag.js`),
          context: {
            slug: node.slug,
          },
        });
      });
      resolve();
    });
  });

  const loadEventLanders = new Promise((resolve, reject) => {
    graphql(`
    query eventBySlugQuery {
      allContentfulEvent(filter: {slug: {ne: null}}) {
        group(field: slug) {
          fieldValue
          totalCount
          edges {
            node {
              eventType
              mls
              landingLayout
            }
          }
        }
      }
    }
    `).then((result) => {
      result.data.allContentfulEvent.group.map(({ fieldValue, edges }) => {

        console.log(fieldValue);
        console.log(edges);

       // Possible values: SMBC - Supported,SMBC - Unsupported,LGBC - Supported,LGBC - Unsupported,Combined

        if(edges[0].node.landingLayout === 'SMBC - Supported'){
          createPage({
            path: `events/${fieldValue}/`,
            component: path.resolve(`./src/pages/events_sm.js`),
            context: {
              slug: fieldValue,
              eventType: edges[0].node.eventType,
              mls: edges[0].node.mls
            },
          });
        }
        if(edges[0].node.landingLayout === 'LGBC - Supported'){
          createPage({
            path: `events/${fieldValue}/`,
            component: path.resolve(`./src/pages/events_lg.js`),
            context: {
              slug: fieldValue,
              eventType: edges[0].node.eventType,
              mls: edges[0].node.mls
            },
          });
        }
        if(edges[0].node.landingLayout === 'SMBC - Unsupported'){
          createPage({
            path: `events/${fieldValue}/`,
            component: path.resolve(`./src/pages/events_sm_alt.js`),
            context: {
              slug: fieldValue,
              eventType: edges[0].node.eventType,
              mls: edges[0].node.mls
            },
          });
        }
        if(edges[0].node.landingLayout === 'LGBC - Unsupported'){
          createPage({
            path: `events/${fieldValue}/`,
            component: path.resolve(`./src/pages/events_lg_alt.js`),
            context: {
              slug: fieldValue,
              eventType: edges[0].node.eventType,
              mls: edges[0].node.mls
            },
          });
        }
        if(edges[0].node.landingLayout === 'Listings'){
          createPage({
            path: `events/${fieldValue}/`,
            component: path.resolve(`./src/pages/events_listings.js`),
            context: {
              slug: fieldValue,
              eventType: edges[0].node.eventType,
              mls: edges[0].node.mls
            },
          });
        }
        if(edges[0].node.landingLayout === 'FB Ads'){
          createPage({
            path: `events/${fieldValue}/`,
            component: path.resolve(`./src/pages/events_fbads.js`),
            context: {
              slug: fieldValue,
              eventType: edges[0].node.eventType,
              mls: edges[0].node.mls
            },
          });
        }
      });
      resolve();
    });
  });

  return Promise.all([
    loadBootcamps,
    loadBundles,
    loadPages,
    loadPosts,
    loadProducts,
    loadTags,
    loadEventLanders,
  ]);
};
