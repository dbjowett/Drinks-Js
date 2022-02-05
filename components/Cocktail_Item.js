import { GridItem, Button, Text } from '@chakra-ui/react';
import Link from 'next/link';
import styles from '../styles/component/Cocktail_Item.module.css';

export default function CocktailItem({ id, title, description }) {
  return (
    // <GridItem
    //   w='100%'
    //   minH='200px'
    //   shadow='base'
    //   display='flex'
    //   flexDir='column'
    //   alignItems='center'
    //   padding='20px'
    //   justifyContent='space-between'
    //   borderRadius='10px'>
    //   <Text fontSize='2xl'>{title}</Text>
    //   <Text fontSize='md'>{description}</Text>
    //   <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
    //     <Link href={`/cocktail/${id}`} passHref>
    //       <Button colorScheme='teal' w='40%' size='sm'>
    //         View
    //       </Button>
    //     </Link>
    //     <Link href={`/cocktail/edit/${id}`} passHref>
    //       <Button colorScheme='red' w='40%' size='sm'>
    //         Edit
    //       </Button>
    //     </Link>
    //   </div>
    // </GridItem>
    <div className={styles.container}>
      <h1>{title}</h1>
      <div>{description}</div>
      <Link href={`/cocktail/${id}`} passHref>
        <button>View</button>
      </Link>
      <Link href={`/cocktail/edit/${id}`} passHref>
        <button>Edit</button>
      </Link>
    </div>
  );
}
