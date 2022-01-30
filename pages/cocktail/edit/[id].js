import { getAllCocktailIds, getCocktailData } from '../../../utils/cocktails';
import { Button, ButtonGroup, FormControl, FormHelperText, FormLabel, Input, Text, Textarea, useToast } from '@chakra-ui/react';
import { useRef } from 'react';
import { useRouter } from 'next/router';

const customStyling = {
  maxWidth: '500px',
  minHeight: '400px',
  marginTop: '100px',
  margin: '0 auto',
  border: '1px solid lightgray',
  padding: '25px 45px',
  borderRadius: '10px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
};

export default function EditCocktailPage({ cocktail }) {
  const titleInputRef = useRef();
  const descInputRef = useRef();
  const toast = useToast();
  const Router = useRouter();

  async function deleteCocktail(id) {
    const res = await fetch(`http://localhost:3000/api/cocktails/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });
    toast({
      title: 'Cocktail Deleted',
      description: 'Your drink has been deleted.',
      status: 'error',
      duration: 2000,
      isClosable: true
    });
    Router.push('/');
  }

  async function submitHandler(id, e) {
    e.preventDefault();
    console.log(id);
    toast({
      title: 'Cocktail Updated!',
      description: 'Your drink has been updated.',
      status: 'success',
      duration: 2000,
      isClosable: true
    });

    const body = {
      title: titleInputRef.current.value,
      description: descInputRef.current.value
    };

    const res = await fetch(`http://localhost:3000/api/cocktails/${id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    Router.push('/');
  }
  return (
    <div>
      <form onSubmit={submitHandler.bind({}, cocktail._id)} style={customStyling}>
        <Text fontSize='2xl'>Editing {cocktail.title}</Text>
        <FormControl isRequired>
          <FormLabel htmlFor='Title'>New Title</FormLabel>
          <Input id='Title' placeholder={`${cocktail.title}`} ref={titleInputRef} />
          <FormHelperText>Enter an updated title</FormHelperText>
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor='Description'>New Description</FormLabel>
          <Textarea id='Description' placeholder={`${cocktail.description}`} isRequired ref={descInputRef} />
          <FormHelperText>Enter a updated description</FormHelperText>
        </FormControl>
        <ButtonGroup style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button type='submit' colorScheme='blue'>
            Update
          </Button>
          <Button colorScheme='red' variant='outline' onClick={deleteCocktail.bind({}, cocktail._id)}>
            Delete
          </Button>
        </ButtonGroup>
      </form>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const data = await getCocktailData(params.id);

  return {
    props: {
      cocktail: data
    }
  };
}

export async function getStaticPaths() {
  const paths = await getAllCocktailIds();
  return {
    paths,
    fallback: false
  };
}
