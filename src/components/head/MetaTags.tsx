import React from 'react';
import Head from 'next/head';

const title = 'Evan Godon';
const description =
  'Portfolio of Evan Godon, a front-end web developer and fan of React, NextJs and TypeScript';
const imagePath = 'https://egodon.dev/static/images/logo.jpg';

const MetaTags = () => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href="https://egodon.dev" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={imagePath} />
    <meta property="og:url" content="https://egodon.dev" />
    <meta property="og:site_name" content="Evan Godon portfolio" />
  </Head>
);

export default MetaTags;
