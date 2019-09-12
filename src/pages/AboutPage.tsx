import React from 'react';
import About from '../components/about/About';
import { Helmet } from 'react-helmet';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About - 이시국닷컴</title>
        <meta name="description" content="about - 이시국닷컴" />
        <meta name="og:description" content="about - 이시국닷컴" />
        <meta name="og:title" content="about - 이시국닷컴" />
        <meta name="og:url" content="https://www.leesiguk.com/about" />
      </Helmet>
      <About />
    </>
  );
};

export default AboutPage;
