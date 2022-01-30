import { GridItem, Button, Text } from '@chakra-ui/react';

export default function CocktailItem({ title, description }) {
  return (
    <GridItem
      w='100%'
      minH='200px'
      shadow='base'
      display='flex'
      flexDir='column'
      alignItems='center'
      padding='20px'
      justifyContent='space-between'
      borderRadius='10px'>
      <Text fontSize='2xl'>{title}</Text>
      <Text fontSize='md'>{description}</Text>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
        <Button colorScheme='teal' w='40%' size='sm'>
          View
        </Button>
        <Button colorScheme='red' w='40%' size='sm'>
          Edit
        </Button>
      </div>
    </GridItem>
  );
}
