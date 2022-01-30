import { Button, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';

export default function NavBar() {
  return (
    <Flex align='center' justify='space-between' maxW='1200px' m='0 auto' padding={10}>
      <Link href={`/`} passHref>
        <Text fontSize='3xl' style={{ cursor: 'pointer' }}>
          Cocktails
        </Text>
      </Link>
      <Link href={`/new`} passHref>
        <Button colorScheme='teal'>Create New</Button>
      </Link>
    </Flex>
  );
}
