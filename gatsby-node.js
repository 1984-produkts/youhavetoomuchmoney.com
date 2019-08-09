const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: "slug",
      node,
      value: `/episodes${value}`
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild("🚨  ERROR: Loading “createPages” query");
  }

  result.data.allMdx.edges.forEach(({ node }) =>
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/components/episodes-layout.js`),
      context: { id: node.id }
    })
  );
};
