import { Main } from '@/components';
import { Flex, Spacer } from '@chakra-ui/react';
import React from 'react';

type indexProps = {};

const HomePageComponent: React.FC<indexProps> = () => {
  return (
    <Flex direction="column" minH="calc(100vh - 122px)">
      <Main />
      <Spacer />
    </Flex>
  );
};

export default HomePageComponent;
