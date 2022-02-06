import NavBar from '../Navigation_Bar';
import Head from 'next/head';
import { VStack } from '@chakra-ui/react';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Cocktails</title>
      </Head>
      <NavBar />
      <VStack spacing='30px'>{children}</VStack>
    </div>
  );
}
