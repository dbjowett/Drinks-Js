import { GridItem, Button, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/component/Cocktail_Item.module.css';

export default function CocktailItem({ id, title, description }) {
  return (
    <div className={styles.container}>
      <Image src='/../public/images/WhiskeySour.png' width='300' height='300' alt='' />
      <Text fontSize='2xl'>{title}</Text>
      <div>{description}</div>
      <div className={styles.btn_container}>
        <Link href={`/cocktail/${id}`} passHref>
          <button> Learn More </button>
        </Link>
        {/* <Link href={`/cocktail/edit/${id}`} passHref>
          <button>Edit</button>
        </Link> */}
      </div>
    </div>
  );
}
