import React from 'react';

import HomeContent from '../components/HomeContent/HomeContent';
import Layout from '../components/layout';

const Home = ({ ...props }) => (
  <Layout {...props}>
    <HomeContent></HomeContent>
  </Layout>
);

export default Home;
