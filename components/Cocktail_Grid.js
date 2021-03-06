import CocktailItem from './Cocktail_Item';
import styles from '../styles/component/Cocktail_Grid.module.css';

export default function CocktailGrid({ cocktails }) {
  return (
    <div className={styles.grid_container}>
      <div className={styles.grid}>
        {cocktails.map((cocktail) => {
          return <CocktailItem key={cocktail._id} cocktail={cocktail} />;
        })}
      </div>
    </div>
  );
}
