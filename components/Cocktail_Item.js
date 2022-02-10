import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/component/Cocktail_Item.module.css';
import { FaArrowRight } from 'react-icons/fa';
import ReactStars from 'react-rating-stars-component';

export default function CocktailItem({ cocktail: { _id, title, description, rating, ingredients, url } }) {
  let imgUrl = url || '/../public/images/WhiskeySour.png';
  return (
    <div className={styles.container}>
      <Image src={imgUrl} width='300' height='300' alt='Cocktail Image' layout='responsive' objectFit='cover' objectPosition='center top' />
      <div className={styles.desc_container}>
        <div className={styles.desc}>
          <div>
            <h1>{title}</h1>
            <p>{description.length > 30 ? description.substring(0, 140) + '...' : description}</p>
          </div>
          <span className={styles.starsAndBtn}>
            <ReactStars value={rating} size={18} activeColor='#c69f6a' edit={false} />
            <Link href={`/cocktail/${_id}`} passHref>
              <button>
                <div>Learn More</div>
                <FaArrowRight />
              </button>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
