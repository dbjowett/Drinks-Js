import NavBar from '../Navigation_Bar';
import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Cocktails</title>
      </Head>
      <NavBar />
      {children}
    </>
  );
}
