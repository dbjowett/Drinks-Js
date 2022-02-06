import Link from 'next/link';
import styles from '../styles/component/Navigation_Bar.module.css';

export default function NavBar() {
  return (
    <div className={styles.nav_container}>
      <Link href={`/`} passHref>
        <h1>Cocktails</h1>
      </Link>
      <Link href={`/new`} passHref>
        <button className={styles.nav_btn}>Create New</button>
      </Link>
    </div>
  );
}
