import Link from 'next/link';
import styles from '../styles/component/Navigation_Bar.module.css';
import { FaPlus } from 'react-icons/fa';
export default function NavBar() {
  return (
    <div className={styles.nav_container}>
      <Link href={`/`} passHref>
        <h1>Cocktails</h1>
      </Link>
      <Link href={`/new`} passHref>
        <button className={styles.nav_btn}>
          Create
          <FaPlus />
        </button>
      </Link>
    </div>
  );
}
