import { Button, FormControl, FormHelperText, FormLabel, Input, Text, Textarea, useToast, Select } from '@chakra-ui/react';
import Router from 'next/router';
import { useRef } from 'react';

const customStyling = {
  maxWidth: '600px',
  width: '80%',
  minHeight: '700px',
  marginTop: '100px',
  margin: '0 auto',
  border: '1px solid lightgray',
  padding: '25px 45px',
  borderRadius: '10px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
};

export default function New() {
  const titleInputRef = useRef();
  const descInputRef = useRef();
  const toast = useToast();

  async function submitHandler(e) {
    e.preventDefault();
    toast({
      title: 'Cocktail Added',
      description: 'Your drink has been added to our database.',
      status: 'success',
      duration: 2000,
      isClosable: true
    });

    const body = {
      title: titleInputRef.current.value,
      description: descInputRef.current.value
    };

    const res = await fetch('http://localhost:3000/api/cocktails', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    Router.push('/');
  }

  return (
    <>
      <form onSubmit={submitHandler} style={customStyling}>
        <Text fontSize='2xl'>Enter a New Cocktail</Text>
        <FormControl isRequired>
          <FormLabel htmlFor='Title'>Title</FormLabel>
          <Input id='Title' placeholder='Title' ref={titleInputRef} />
          <FormHelperText>Enter an accurate title.</FormHelperText>
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor='Description'>Description</FormLabel>
          <Textarea id='Description' placeholder='Description' isRequired ref={descInputRef} />
          <FormHelperText>Please enter a useful description.</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor='rating'>Rating</FormLabel>
          <Select name='Rating' id='rating' variant='flushed' placeholder='Rating out of 5'>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor='ingredient'>Ingredients</FormLabel>
          <Button>Add new ingredient</Button>
          <Input id='ingredient' placeholder='Title' />
        </FormControl>
        <Button type='submit' colorScheme='blue'>
          Submit
        </Button>
      </form>
    </>
  );
}
