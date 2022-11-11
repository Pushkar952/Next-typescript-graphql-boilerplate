import React, { useEffect } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { SessionProvider, useSession } from 'next-auth/react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@/styles/theme';
import { createApolloClient } from '@/services/graphql/apolloClient';
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import store from 'src/state/store';
import Layout from '@/components/layout';

function MyApp({ pageProps, Component }: any): JSX.Element {
  const { data: session } = useSession();

  console.log('session', session);
  useEffect(() => {
    if (session) {
      console.log('session', session.accessToken);
    }

  }, [session]);

  return (
    <div>
      <ApolloProvider client={createApolloClient(session?.accessToken as string)}>
        <Provider store={store}>
          <Layout>
            <Head>
              <title>NextJs TypeScript with graphql client </title>
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Component pageProps={pageProps} />
          </Layout>
        </Provider>
      </ApolloProvider>
    </div>
  );
}

function App({ Component, pageProps: { session, ...pageProps } }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <SessionProvider session={session}>
        <MyApp pageProps={pageProps} Component={Component} ></MyApp>
      </SessionProvider>
    </ChakraProvider >
  );
}

export default App;