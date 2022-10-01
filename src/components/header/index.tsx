import { ColorModeSwitcher, NavBar } from '@/components';
import { Box, Spacer } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useMemo } from 'react';
import { Logo } from '../logo';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

export const Header: React.FC = () => {

  const { data: session } = useSession();

  const AuthInfo = useMemo(() => {
    if (session) {
      console.log('session', session);
      return (
        <Box display="flex" alignItems="center">
          <Image src={session.user?.image ?? ""} alt="Logged in user" width={30} height={30} />
          <Box px={2} mr="5">{session.user ? session.user.email : 'ERROR'}</Box>
          <LogoutButton />
        </Box>
      );
    } else {
      return <LoginButton />;
    }
  }, [session]);

  return (
    <Box h="58" bg="headerBg" display="flex" px="10" alignItems="center">
      <Box>
        <Logo />
      </Box>
      <Box ml="10" >
        <NavBar href='/launches' feature='CSR' />
      </Box>
      <Box ml="10" >
        <NavBar href='/launches' feature='SSR' />
      </Box>
      <Box ml="10" >
        <NavBar href='/launches' feature='REDUX' />
      </Box>
      <Spacer />
      <ColorModeSwitcher mr="5" />
      {AuthInfo}
    </Box>
  );
};
