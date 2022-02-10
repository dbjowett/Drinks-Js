import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import styles from '../styles/component/Single_Cocktail.module.css';
import { FaEdit } from 'react-icons/fa';

export default function SingleCocktail({ cocktail: { _id, description, ingredients, rating, title, url } }) {
  console.log(_id, description, ingredients, rating, title, url);
  return (
    <div className={styles.itemContainer}>
      <div>
        <Image src={url} width={300} height={300} alt={description} />
      </div>
      <div className={styles.textContainer}>
        <Text fontSize='3xl'>{title}</Text>
        <div>{description}</div>
        <ul>
          {ingredients.map((ing) => (
            <li key={ing._id}>
              {ing.amount}oz {ing.title}
            </li>
          ))}
        </ul>
        <div className={styles.editBtnContainer}>
          <button className={styles.editBtn}>
            <a href={`/cocktail/edit/${_id}`}>Edit</a>
            <FaEdit />
          </button>
        </div>
      </div>
    </div>
  );
}
