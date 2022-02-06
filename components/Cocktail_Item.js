import { GridItem, Button, Text } from '@chakra-ui/react';
import Link from 'next/link';
import styles from '../styles/component/Cocktail_Item.module.css';

export default function CocktailItem({ id, title, description }) {
  return (
    <div className={styles.container}>
      <Text textSize='5xl'>{title}</Text>
      <div>{description}</div>
      <Link href={`/cocktail/${id}`} passHref>
        <button> Learn More </button>
      </Link>
      <Link href={`/cocktail/edit/${id}`} passHref>
        <button>Edit</button>
      </Link>
    </div>
  );
}
