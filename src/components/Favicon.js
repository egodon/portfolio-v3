import React from 'react';
import Head from 'next/head';

const Favicon = () => {
  return (
    <Head>
      <link rel="shortcut icon" type="image/x-icon" href="/static/favion/favicon.ico" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/static/favicon/favicon-32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="64x64"
        href="/static/favicon/favicon-64.png"
      />
    </Head>
  );
};

export default Favicon;
