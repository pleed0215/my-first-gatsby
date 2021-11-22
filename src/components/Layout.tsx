import * as React from 'react'
import {Link} from 'gatsby'
import styled from "styled-components"

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

`


const Layout = ({pageTitle, children}) => {
    return (
        <Container>
            <title>{pageTitle}</title>
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
                </ul>
            </nav>
            <main>
                <h1 className="heading">{pageTitle}</h1>
                {children}
            </main>
        </Container>
    )
}
export default Layout
