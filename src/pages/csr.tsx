import { Spinner } from '@chakra-ui/react';
import AccessDenied from '@/components/auth/accessDenied';
import LaunchesPageComponent from '@/components/pages/csr';
import { GetStaticProps, NextPage } from 'next';
import { useSession } from 'next-auth/react';
// import Head from 'next/head';
import SessionType from 'src/types/session';

type Props = {
  session: SessionType;
};

const CsrPage: NextPage<Props> = props => {
  const { data: session, status } = useSession();

  if (status === 'loading') return <Spinner />;
  if (!session) return <AccessDenied />;

  return (
    <>
      <LaunchesPageComponent />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export default CsrPage;
