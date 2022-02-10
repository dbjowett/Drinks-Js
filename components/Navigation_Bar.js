import Link from 'next/link';
import styles from '../styles/component/Navigation_Bar.module.css';
import { FaPlus, FaCocktail } from 'react-icons/fa';
export default function NavBar() {
  return (
    <div className={styles.navBlackBar}>
      <div className={styles.nav_container}>
        <Link href={`/`} passHref>
          <h1 className={styles.heading}>
            Cocktails <FaCocktail />
          </h1>
        </Link>
        <Link href={`/new`} passHref>
          <button className={styles.nav_btn}>
            Create
            <FaPlus />
          </button>
        </Link>
      </div>
    </div>
  );
}
