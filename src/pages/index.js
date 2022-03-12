import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

function IndexPage() {
  const data = useStaticQuery(graphql`
    query getSiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const meta = data?.site?.siteMetadata ?? {};

  return (
    <>
    <header>
      <Link to="/">{meta.title}</Link>
    </header>
      <main>
        <h1>Hello FEM</h1>
        <Link to="/about">About</Link>
      </main>
    </>
  );
}

export default IndexPage;


