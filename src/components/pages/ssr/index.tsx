
import { Box, Heading, VStack } from '@chakra-ui/react';
import { GridList } from '@/components/gridList';
import React from 'react';
import { LaunchesPast } from '@/types/launche';
import SsrPageComponent from '@/components/pages/ssr/ssr';

const SsrPage = (data: LaunchesPast) => {


  if (!data) return <p>Not found</p>;

  return (
    <Box w="full" py={10}>
      <VStack>
        <Heading size="md" color="gray.500" mb={3}>
          Past SpaceX Launches
        </Heading>
        <GridList>
          {data.launchesPast.map(launche => {
            if (!launche) return;
            return <SsrPageComponent key={launche.id} launche={launche} />;
          })}
        </GridList>
      </VStack>
    </Box>
  );
};

export default SsrPage;
