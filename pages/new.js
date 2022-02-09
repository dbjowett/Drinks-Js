import { Button, FormControl, FormHelperText, FormLabel, Input, Text, Textarea, useToast, Select } from '@chakra-ui/react';
import Creatable from 'react-select/creatable';
import Router from 'next/router';
import { useRef, useState } from 'react';
import styles from '../styles/page/New_Item_Page.module.css';
import IngredientInput from '../components/Ingredient_Input';

import { cocktailOptions } from '../utils/cocktailNames';

export default function New() {
  // const titleInputRef = useRef();
  const descInputRef = useRef();
  const toast = useToast();

  async function submitHandler(e) {
    e.preventDefault();
    const body = {
      // title: titleInputRef.current.value,
      title: 'Whiskey',
      description: descInputRef.current.value
    };
    console.log('Submit handle fired');

    // const res = await fetch('http://localhost:3000/api/cocktails', {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(body)
    // });
    // if (res.status === 400) {
    //   toast({
    //     title: 'Adding Failed! ',
    //     description: 'Your drink has not been added',
    //     status: 'error',
    //     duration: 2000,
    //     isClosable: true
    //   });
    //   return;
    // }
    // toast({
    //   title: 'Cocktail Added',
    //   description: 'Your drink has been added to our database.',
    //   status: 'success',
    //   duration: 2000,
    //   isClosable: true
    // });
    // Router.push('/');
  }

  //// END OF SUBMIT HANDLER

  const handleInputChange = (inputValue, actionMeta) => {
    // console.group('Input Changed');
    // console.log(inputValue);
    // console.log(`action: ${actionMeta.action}`);
    // console.groupEnd();
  };

  const handleChange = (newValue, actionMeta) => {
    // console.group('Value Changed');
    // console.log(newValue?.label);
    // console.log(newValue);
    // console.log(`action: ${actionMeta.action}`);
    // console.groupEnd();
  };

  const [ingredientStore, setIngredientStore] = useState([]);
  const storeIngredientInputs = (amount, title) => {
    const newElement = { amount: amount, title: title };
    setIngredientStore([...ingredientStore, newElement]);
  };
  // For adding Ingredient Inputs on button click
  const [ingredientInputList, setIngredientInputList] = useState([<IngredientInput key={0} store={storeIngredientInputs} />]);

  function onAddIng(e) {
    setIngredientInputList(ingredientInputList.concat(<IngredientInput key={ingredientInputList.length} store={storeIngredientInputs} />));
  }

  return (
    <>
      <form onSubmit={submitHandler} className={styles.formContainer}>
        <Text fontSize='3xl'>Enter a New Cocktail</Text>
        <FormControl>
          <FormLabel htmlFor='Title'>Title</FormLabel>
          <Creatable instanceId isClearable options={cocktailOptions} onChange={handleChange} onInputChange={handleInputChange} />
          <FormHelperText>Please enter an accurate title.</FormHelperText>
        </FormControl>
        <FormControl>
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
          <FormLabel htmlFor='ingredient'>Ingredients (ml)</FormLabel>
          {ingredientInputList}
          <FormHelperText>30ml = 1 ounce / 235ml = 1 cup</FormHelperText>
          <Button className={styles.ingredientAddBtn} onClick={onAddIng}>
            Add ingredient
          </Button>
        </FormControl>
        <Button type='submit' colorScheme='blue'>
          Submit
        </Button>
      </form>
    </>
  );
}
