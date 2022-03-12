import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout.js';

function IndexPage() {
  return (
    <Layout>
      <h1>Hello FEM</h1>
      <Link to="/about">About this site</Link>
    </Layout>
  );
}

export default IndexPage;
