import { GridItem, Grid } from '@chakra-ui/react';
import CocktailItem from './Cocktail_Item';

export default function CocktailGrid({ cocktails }) {
  return (
    <Grid gap={10} templateColumns='repeat(3, auto)' padding={10}>
      {cocktails.map((cocktail) => {
        return <CocktailItem key={cocktail._id} title={cocktail.title} description={cocktail.description} />;
      })}
    </Grid>
  );
}
