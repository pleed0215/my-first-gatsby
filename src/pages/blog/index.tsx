import * as React from 'react';
import Layout from '../../components/Layout';
import { graphql, Link, PageProps } from 'gatsby';

const BlogPage: React.FC<PageProps> = ({ data }) => {
    return (
        <Layout pageTitle="My Blog Posts">
            <p>My cool posts will go in here</p>
            {(data as any).allMdx.nodes.map((node) => (
                <article key={node.id}>
                    <h2>
                        <Link to={`/blog/${node.slug}`}>
                            {node.frontmatter.title}
                        </Link>
                    </h2>
                    <p>Posted: {node.frontmatter.date}</p>
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
                slug
            }
        }
    }
`;
