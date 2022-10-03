import { Spinner } from '@chakra-ui/react';
import AccessDenied from '@/components/auth/accessDenied';
import Counter from '@/components/counter';
import { useSession } from 'next-auth/react';


const CsrPage = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') return <Spinner />;
  if (!session) return <AccessDenied />;

  return (
    <>
      <Counter />
    </>
  );
};


export default CsrPage;
