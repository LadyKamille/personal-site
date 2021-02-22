import React from 'react';
import Layout from '../components/layout';

const Home = ({ ...props }) => (
  <Layout {...props}>
    <h1>Welcome!</h1>
    <p>This website is currently under development</p>
  </Layout>
);

export default Home;
