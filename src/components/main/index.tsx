import { Box, Container, useTheme } from '@chakra-ui/react';
import React from 'react';

export const Main: React.FC = () => {
  const theme = useTheme();

  return (
    <Box bg="gradient" color="white" textAlign="center" py={10}>
      <h1 color="textColor" style={{ fontSize: theme.fontSizes['5xl'] }}>
        NextJs TypeScript GraphQl Boilerplate
      </h1>
      <Container w="500px" mb="10" fontStyle="italic">
        NextJs Typescript GraphQl Boilerplate to qucikly get started with production
        ready app.
      </Container>
    </Box>
  );
};
