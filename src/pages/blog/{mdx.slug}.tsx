import * as React from 'react';
import Layout from '../../components/Layout';
import { graphql, PageProps } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const BlogPost: React.FC<PageProps> = ({ data }: { data: any }) => {
    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <p>{data.mdx.frontmatter.date}</p>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </Layout>
    );
};

export default BlogPost;

export const query = graphql`
    query ($id: String) {
        mdx(id: { eq: $id }) {
            frontmatter {
                title
                date(formatString: "YYYY-MM-DD")
            }
            body
        }
    }
`;
