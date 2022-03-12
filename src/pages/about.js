import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout.js';

function AboutPage() {
  return (
    <Layout
      title="About this site"
      description="More information about this site"
    >
      <h1>About this site</h1>
      <Link to="/">Back to homepage</Link>
    </Layout>
  );
}

export default AboutPage;
