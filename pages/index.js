import { Box } from '@chakra-ui/react';
import CocktailGrid from '../components/Cocktail_Grid';

export default function Home({ data }) {
  return (
    <Box maxW='1200px' m='0 auto'>
      <CocktailGrid cocktails={data} />
    </Box>
  );
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/cocktails');
  const { data } = await res.json();

  return {
    props: {
      data: data
    }
  };
}
