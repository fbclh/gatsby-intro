// Step 1: Import React
import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

// Step 2: Define your component
const ContactPage = () => {
  return (
    <Layout pageHeading='Contact Us' pageTitle="Contact">
      Contact me at LinkedIn ou Github.
    </Layout>
  );
};

// Step 3: Export your component
export default ContactPage;
