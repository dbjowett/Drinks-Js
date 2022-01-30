import { Button, FormControl, FormHelperText, FormLabel, Input } from '@chakra-ui/react';
import Router from 'next/router';
import { useState, useRef } from 'react';

export default function New() {
  const titleInputRef = useRef();
  const descInputRef = useRef();

  async function submitHandler(e) {
    e.preventDefault();

    const body = {
      title: titleInputRef.current.value,
      description: descInputRef.current.value
    };

    console.log(body);
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
    <form
      onSubmit={submitHandler}
      style={{
        maxWidth: '500px',
        height: '400px',
        margin: '0 auto',
        border: '1px solid lightgray',
        padding: '20px',
        borderRadius: '10px'
      }}>
      <FormControl style={{ display: 'flex', flexDirection: 'column' }}>
        <FormLabel htmlFor='Title'>Title</FormLabel>
        <Input id='Title' placeholder='Title' isRequired ref={titleInputRef} />
        <FormHelperText>Enter an accurate title.</FormHelperText>

        <FormLabel htmlFor='Description'>Description</FormLabel>
        <Input id='Description' placeholder='Description' isRequired ref={descInputRef} />
        <FormHelperText>Please enter a useful description.</FormHelperText>
      </FormControl>
      <Button type='submit' colorScheme='teal'>
        Submit
      </Button>
    </form>
  );
}
