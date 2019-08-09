import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const EpisodeIndex = ({ data }) => {
  const { edges: episodes } = data.allMdx;

  return (
    <Layout>
      <SEO title="Episode Index" />
      <article className="items-center w-full">
        <h1 className="text-5xl">Episode Index</h1>
        {episodes.map(({ node: episode }) => (
          <section key={episode.id} className="w-100 mb-12 flex">
            <div className="p-3 bg-gray-400">
              <img src="https://source.unsplash.com/random/150x150" />
            </div>
            <div className="p-3 bg-gray-200 w-full">
              <Link to={episode.fields.slug}>
                <h2 className="text-2xl">{episode.frontmatter.title} - ({episode.frontmatter.date})</h2>
              </Link>
              <p>{episode.excerpt}</p>
            </div>
          </section>
        ))}
      </article>
    </Layout>
  );
};

export const pageQuery = graphql`
  query episodeIndex {
    allMdx {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default EpisodeIndex;
