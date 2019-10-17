import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useTransition, animated } from 'react-spring';
import { useRouter } from 'hooks/useRouter';
import { isSSR } from 'constants/index';

type RenderPropArgs = {
  Component?: any;
  pageProps?: any;
};

type Props = {
  children: ({ Component, pageProps }: RenderPropArgs) => React.ReactNode;
};

export const PageTransition: React.FC<Props> = ({ children, ...props }) => {
  const isFirstRender = useRef(true);
  const router = useRouter();

  useEffect(() => {
    isFirstRender.current = false;
  }, []);

  const transitions = useTransition(router, (router) => router.pathname, {
    from: { opacity: isSSR || isFirstRender.current ? 1 : 0 },
    enter: { opacity: 1 },
    leave: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      opacity: 0,
    },
    config: {
      duration: 250,
    },
  });

  return (
    <>
      {transitions.map(({ item, props: style, key }) => {
        const { Component, props } = item.components
          ? item.components[item.pathname]
          : { Component: null, props: null };

        return (
          <Page key={key} style={style}>
            {children(
              item ? { Component, pageProps: props && props.pageProps } : {}
            )}
          </Page>
        );
      })}
    </>
  );
};

const Page = styled(animated.div)`
  min-height: 100%;
  height: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
`;
