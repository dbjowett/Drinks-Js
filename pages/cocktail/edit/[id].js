import { getAllCocktailIds, getCocktailData } from '../../../utils/cocktails';
import { Button, ButtonGroup, FormControl, FormHelperText, FormLabel, Input, Text, Textarea, useToast } from '@chakra-ui/react';
import Creatable from 'react-select/creatable';
import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import ReactStars from 'react-rating-stars-component';
import { cocktailOptions } from '../../../utils/SelectOptions/cocktailNames';
import styles from '../../../styles/component/Single_Cocktail.module.css';

import SingleCocktail from '../../../components/Single_Cocktail';
import { FaPlus } from 'react-icons/fa';
import IngredientInput from '../../../components/Ingredient_Input';

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

export default function EditCocktailPage({ cocktail: { _id, title, description, rating, ingredients, url } }) {
  const [titleState, setTitleState] = useState(title);
  const [ratingState, setRatingState] = useState(rating);
  const [instructionsState, setInstructionsState] = useState(description);
  const [ingredientsState, setIngredientsState] = useState([...ingredients]);
  console.log(ingredientsState);

  const cocktail = { _id, title, description, rating, ingredients, url };

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
      title: titleState,
      description: descInputRef.current.value,
      rating: ratingState,
      ingredients: ingredientsState,
      url: url
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

  // Function for adding more ingredients
  const storeIngredientInputs = (amount, title) => {
    const newElement = { amount: amount, title: title };
    setIngredientsState([...ingredientsState, newElement]);
  };

  const [ingredientInputList, setIngredientInputList] = useState([<IngredientInput key={0} store={storeIngredientInputs} />]);

  function onAddIng(e) {
    setIngredientInputList(ingredientInputList.concat(<IngredientInput key={ingredientInputList.length} store={storeIngredientInputs} />));
  }

  return (
    <div>
      <SingleCocktail cocktail={cocktail} />
      <div style={{ marginTop: '50px' }}>
        <form onSubmit={submitHandler.bind({}, cocktail._id)} style={customStyling}>
          <Text fontSize='2xl'>Editing {titleState}</Text>
          <FormControl isRequired>
            <FormLabel htmlFor='Title'>New Title</FormLabel>
            <Creatable
              defaultInputValue={title}
              instanceId
              isClearable
              options={cocktailOptions}
              onChange={(e) => setTitleState(e.label)}
              isRequired
            />
            <FormHelperText>Enter an updated title</FormHelperText>
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor='rating'>Rating</FormLabel>
            <ReactStars count={ratingState} onChange={(e) => setRatingState(e)} size={24} activeColor='#ffd700' />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor='Description'>New Description</FormLabel>
            <Textarea
              id='Description'
              value={instructionsState}
              onChange={(e) => setInstructionsState(e.target.value)}
              placeholder={`${cocktail.description}`}
              ref={descInputRef}
            />
            <FormHelperText>Enter a updated description</FormHelperText>
          </FormControl>

          <FormControl className={(styles.fileUploadContainer, styles.ingredientsContainer)}>
            <FormLabel htmlFor='ingredient'>Ingredients (oz)</FormLabel>
            {ingredientInputList}
            <FormHelperText> 1 oz = 30ml / 8oz = 1 cup</FormHelperText>
            <button type='button' className={styles.ingredientAddBtn} onClick={onAddIng}>
              Add ingredient
              <FaPlus />
            </button>
          </FormControl>
          {/* <FormControl className={styles.fileUploadContainer}>
            <FormLabel htmlFor='Instructions'>Instructions</FormLabel>
            <Textarea id='Instructions' placeholder='Instructions' ref={descInputRef} />
            <FormHelperText>Please enter detailed instructions.</FormHelperText>
          </FormControl>
          <FormControl className={styles.fileUploadContainer}>
            <FormLabel htmlFor='Instructions'>Upload Photo</FormLabel>
            {imageURL && <Success />}
            {!image && !imageURL && (
              <label className={styles.inputLabel}>
                <input type='file' onChange={handleFileUpload} />
              </label>
            )}
            {image && !imageURL && (
              <div>
                <img src={image} alt='Image Preview' style={{ height: '200px', margin: 'auto', padding: '10px' }} />
                <div className={styles.loadingBtnCtn}>
                  <Button
                    isLoading={isUploading}
                    colorScheme='green'
                    className={styles.uploadBtn}
                    type='button'
                    rightIcon={<FaUpload />}
                    onClick={uploadImage.bind({}, image)}>
                    {uploadBtnText}
                  </Button>
                </div>
              </div>
            )}
          </FormControl> */}

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
