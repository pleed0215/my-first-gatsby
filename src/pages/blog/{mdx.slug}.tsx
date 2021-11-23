import * as React from 'react';
import Layout from '../../components/Layout';
import { graphql, PageProps } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const BlogPost: React.FC<PageProps> = ({ data }: { data: any }) => {
    const image = getImage(data.mdx.frontmatter.hero_image);
    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <p>{data.mdx.frontmatter.date}</p>
            <GatsbyImage
                alt={data.mdx.frontmatter.hero_image_alt}
                image={image}
            />
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
                hero_image_alt
                hero_image_credit_link
                hero_image_credit_text
                hero_image {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
            body
        }
    }
`;
