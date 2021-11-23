import * as React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const Container = styled.div`
    margin: auto;
    max-width: 500px;
    font-family: sans-serif;

    .heading {
        color: rebeccapurple;
    }

    .nav-links {
        display: flex;
        list-style: none;
        padding-left: 0;
    }

    .nav-link-item {
        padding-right: 2rem;
    }

    .nav-link-text {
        color: black;
    }

    .site-title {
        font-size: 3rem;
        color: gray;
        font-weight: 700;
        margin: 3rem 0;
    }
`;

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    siteUrl
                }
            }
        }
    `);
    return (
        <Container>
            <title>
                {pageTitle} | {data.site.siteMetadata.title}
            </title>
            <header className={'site-title'}>
                {data.site.siteMetadata.title}
            </header>
            <nav>
                <ul className="navLinks">
                    <li className="navLinkItem">
                        <Link to="/" className="navLinkText">
                            Home
                        </Link>
                    </li>
                    <li className="navLinkItem">
                        <Link to="/about" className="navLinkText">
                            About
                        </Link>
                    </li>
                    <li className="navLinkItem">
                        <Link to="/blog" className="navLinkItem">
                            Blog
                        </Link>
                    </li>
                </ul>
            </nav>
            <main>
                <h1 className="heading">{pageTitle}</h1>
                {children}
            </main>
        </Container>
    );
};
export default Layout;
