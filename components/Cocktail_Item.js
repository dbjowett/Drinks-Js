import { GridItem, Button, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/component/Cocktail_Item.module.css';
import { FaArrowRight } from 'react-icons/fa';

export default function CocktailItem({ id, title, description }) {
  return (
    <div className={styles.container}>
      <Image src='/../public/images/WhiskeySour.png' width='300' height='300' alt='' />
      <div className={styles.desc_container}>
        <div className={styles.desc}>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div className={styles.btn_container}>
          <Link href={`/cocktail/${id}`} passHref>
            <button>
              <div>Learn More</div>
              <FaArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
