import React from 'react';
import Template from 'components/layout/Template';

export default (WrappedComponent) => () => (
  <Template>
    <WrappedComponent />
  </Template>
);
