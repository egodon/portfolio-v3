import React from 'react';
import App from 'next/app';
import Template from 'components/layout/Template';
import { RouterContextProvider } from 'hooks/useRouter';
import { PageTransition } from 'components/PageTransition';
import Favicon from 'components/Favicon';

class MyApp extends App {
  render() {
    const { Component: SsrComponent, pageProps: ssrPageProps } = this.props;

    return (
      <RouterContextProvider>
        <Favicon />
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
    );
  }
}

export default MyApp;
