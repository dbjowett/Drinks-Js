import { getAllCocktailIds, getCocktailData } from '../../utils/cocktails';
import { Box, Text } from '@chakra-ui/react';
export default function SingleCocktailPage({ cocktail }) {
  return (
    <Box maxW='600px' m='100px 0 0 0'>
      <Text fontSize='3xl'>{cocktail.title}</Text>
      <div>{cocktail.description}</div>
    </Box>
  );
}

export async function getStaticProps({ params }) {
  const data = await getCocktailData(params.id);

  return {
    props: {
      cocktail: data
    }
  };
}

export async function getStaticPaths() {
  const paths = await getAllCocktailIds();
  return {
    paths,
    fallback: false
  };
}
