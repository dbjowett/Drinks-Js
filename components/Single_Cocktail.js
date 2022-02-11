import { Text } from '@chakra-ui/react';
import Image from 'next/image';
import styles from '../styles/component/Single_Cocktail.module.css';
import { FaEdit } from 'react-icons/fa';
import ReactStars from 'react-rating-stars-component';
import { useRouter } from 'next/router';

export default function SingleCocktail({ cocktail: { _id, description, ingredients, rating, title, url } }) {
  const Router = useRouter();

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
        <ReactStars value={rating} size={18} activeColor='#c69f6a' edit={false} />
        {Router.pathname === '/cocktail/[id]' && (
          <div className={styles.editBtnContainer}>
            <a href={`/cocktail/edit/${_id}`}>
              <button className={styles.editBtn}>
                Edit
                <FaEdit />
              </button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
