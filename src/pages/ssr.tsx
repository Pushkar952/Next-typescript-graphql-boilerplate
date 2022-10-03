import { Spinner } from '@chakra-ui/react';
import AccessDenied from '@/components/auth/accessDenied';
import { GetServerSideProps, NextPage } from 'next';
import { QUERY_GET_LAUNCHES } from '@/services/graphql/launches';
import { useSession } from 'next-auth/react';
import SsrPage from '@/components/pages/ssr';
import { createApolloClient } from '@/services/graphql/apolloClient';
import { LaunchesPast } from '@/types/launche';



const Ssr: NextPage<LaunchesPast> = (props: LaunchesPast) => {

  const { data: session, status } = useSession();

  if (status === 'loading') return <Spinner />;
  if (!session) return <AccessDenied />;
  console.log(`ssr`, props);

  return (
    <>
      <SsrPage {...props} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {

  const apolloClient = createApolloClient('');
  const { data } = await apolloClient.query({
    query: QUERY_GET_LAUNCHES,
    variables: { limit: 20 },
  });
  const test: LaunchesPast = data.launchesPast;



  return { props: { launchesPast: test } };
};

export default Ssr;
