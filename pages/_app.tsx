import React from 'react';
import App from 'next/app';
import Template from 'components/layout/Template';
import { RouterContextProvider } from 'hooks/useRouter';
import { PageTransition } from 'components/PageTransition';
import Favicon from 'components/head/Favicon';
import MetaTags from 'components/head/MetaTags';
import { initLogRocket } from 'utils/initLogRocket';
import { prod } from 'constants/index';

class MyApp extends App {
  componentDidMount() {
    if (prod || true) {
      initLogRocket();
    }
  }

  render() {
    const { Component: SsrComponent, pageProps: ssrPageProps } = this.props;

    return (
      <RouterContextProvider>
        <Favicon />
        <MetaTags />
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
