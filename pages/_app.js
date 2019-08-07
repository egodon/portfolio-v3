import React from 'react';
import App, { Container } from 'next/app';
import Template from 'components/layout/Template';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Template>
          <Component {...pageProps} />
        </Template>
      </Container>
    );
  }
}

export default MyApp;
