import { counterActions } from 'src/state/actions';
import { RootState } from 'src/state/reducers';
import { useAppDispatch } from 'src/state/store';
import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';

export default function Counter() {
  const dispatch = useAppDispatch();
  const count = useSelector((state: RootState) => state.counter.count);

  return (
    <Flex direction="column" justify="center">
      <Heading size="lg" my={3} textAlign="center">
        Counter
      </Heading>
      <Flex justifyContent="center">
        <Button size="sm" onClick={() => dispatch(counterActions.decrease())}>
          -
        </Button>
        <Text mx={10}>{count}</Text>
        <Button size="sm" onClick={() => dispatch(counterActions.increase())}>
          +
        </Button>
      </Flex>
    </Flex>
  );
}
