import * as React from "react";
import Layout from "../components/layout";
import { graphql, PageProps } from "gatsby";
const BlogPage: React.FC<PageProps> = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <p>My cool posts will go in here</p>
      <ul>
        {(data as any).allFile.nodes.map((node) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  );
};
export default BlogPage;

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;
