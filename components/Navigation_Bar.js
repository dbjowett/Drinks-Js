import Link from 'next/link';
import styles from '../styles/component/Navigation_Bar.module.css';
import { FaPlus, FaCocktail } from 'react-icons/fa';
import { useSession, signIn, signOut } from 'next-auth/react';
import { Button } from '@chakra-ui/react';

export default function NavBar() {
  const { data: session, status } = useSession();
  console.log(session);

  return (
    <div className={styles.navBlackBar}>
      <div className={styles.nav_container}>
        <Link href={`/`} passHref>
          <h1 className={styles.heading}>
            Cocktails <FaCocktail />
          </h1>
        </Link>
        <div className={styles.nav_btn_container}>
          <Link href={`/new`} passHref>
            <button className={styles.nav_btn}>
              Create
              <FaPlus />
            </button>
          </Link>
          {status === 'loading' && <Button isLoading loadingText='Submitting' colorScheme='teal' variant='outline'></Button>}
          {session ? (
            <button className={styles.nav_btn_signin} onClick={signOut}>
              Sign Out
            </button>
          ) : (
            <button className={styles.nav_btn_signin} onClick={signIn}>
              Sign In
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
