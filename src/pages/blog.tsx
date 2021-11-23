import * as React from 'react';
import Layout from '../components/layout';
import { graphql, PageProps } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const BlogPage: React.FC<PageProps> = ({ data }) => {
    return (
        <Layout pageTitle="My Blog Posts">
            <p>My cool posts will go in here</p>
            {(data as any).allMdx.nodes.map((node) => (
                <article key={node.id}>
                    <h2>{node.frontmatter.title}</h2>
                    <p>Posted: {node.frontmatter.date}</p>
                    <MDXRenderer>{node.body}</MDXRenderer>
                </article>
            ))}
        </Layout>
    );
};
export default BlogPage;

export const query = graphql`
    query {
        allMdx(sort: { fields: frontmatter___date, order: DESC }) {
            nodes {
                frontmatter {
                    date(formatString: "YYYY-MM-DD")
                    title
                }
                id
                body
            }
        }
    }
`;
