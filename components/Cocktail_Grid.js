import { GridItem, Grid } from '@chakra-ui/react';
import CocktailItem from './Cocktail_Item';
import styles from '../styles/component/Cocktail_Grid.module.css';

export default function CocktailGrid({ cocktails }) {
  return (
    <div className={styles.grid_container}>
      <div className={styles.grid}>
        {cocktails.map((cocktail) => {
          return <CocktailItem key={cocktail._id} id={cocktail._id} title={cocktail.title} description={cocktail.description} />;
        })}
      </div>
    </div>

    // </Grid>
  );
}
