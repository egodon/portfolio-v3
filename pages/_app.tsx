import React from 'react';
import App from 'next/app';
import LogRocket from 'logrocket';
import Template from 'components/layout/Template';
import { RouterContextProvider } from 'hooks/useRouter';
import { PageTransition } from 'components/PageTransition';
import Favicon from 'components/head/Favicon';
import MetaTags from 'components/head/MetaTags';
import { prod } from 'constants/index';

class MyApp extends App {
  componentDidMount() {
    if (prod) {
      LogRocket.init(process.env.LOGROCKET_APP_ID);
      fetch('https://json.geoiplookup.io/')
        .then((res) => res.json())
        .then((data) => {
          LogRocket.identify(
            data.ip === process.env.MY_IP_ADDRESS ? 'Me' : data.ip,
            {
              city: data.city,
              hostname: data.hostname,
            }
          );
        })
        .catch((e) => null);
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
