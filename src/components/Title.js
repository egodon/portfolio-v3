import React from 'react';
import { Head } from 'react-static';

const Title = ({ title, withoutName }) => (
  <Head>
    <title>{title + (withoutName ? '' : ' | Evan Godon')} </title>
  </Head>
);

export default Title;
