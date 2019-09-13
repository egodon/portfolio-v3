import React from 'react';
import App, { Container } from 'next/app';
import Template from 'components/layout/Template';
import { RouterContextProvider } from 'hooks/useRouter';
import { PageTransition } from 'components/PageTransition';

class MyApp extends App {
  render() {
    const { Component: SsrComponent, pageProps: ssrPageProps } = this.props;

    return (
      <Container>
        <RouterContextProvider>
          <Template>
            <PageTransition>
              {({ Component, pageProps }) => {
                return Component ? (
                  <Component {...pageProps} />
                ) : (
                  <SsrComponent {...ssrPageProps} />
                );
              }}
            </PageTransition>
          </Template>
        </RouterContextProvider>
      </Container>
    );
  }
}

export default MyApp;
