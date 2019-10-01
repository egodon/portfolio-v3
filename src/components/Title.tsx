import React from 'react';
import Head from 'next/head';

type Props = {
  title: string;
  withoutName?: boolean;
};

const Title: React.FC<Props> = ({ title, withoutName = false }) => (
  <Head>
    <title>{title + (withoutName ? '' : ' | Evan Godon')} </title>
  </Head>
);

export default Title;
