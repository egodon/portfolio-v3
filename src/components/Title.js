import React from 'react';
import Head from 'next/head';

const Title = ({ title, withoutName }) => (
  <Head>
    <title>{title + (withoutName ? '' : ' | Evan Godon')} </title>
  </Head>
);

export default Title;
