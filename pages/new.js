import { FormControl, FormHelperText, FormLabel, Input, Text, Textarea, useToast, Spinner, Button } from '@chakra-ui/react';
import Creatable from 'react-select/creatable';
import Router from 'next/router';
import { useEffect, useRef, useState } from 'react';
import styles from '../styles/page/New_Item_Page.module.css';
import IngredientInput from '../components/Ingredient_Input';
import ReactStars from 'react-rating-stars-component';

import { cocktailOptions } from '../utils/SelectOptions/cocktailNames';
import { FaPlus, FaUpload } from 'react-icons/fa';
import axios from 'axios';

export default function NewPage() {
  const descInputRef = useRef();
  const [titleState, setTitleState] = useState('');
  const [ratingState, setRatingState] = useState(0);

  const [imgPreviewSrc, setImgPreviewSrc] = useState();
  const [imageURL, setImageURL] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadBtnText, setUploadBtnText] = useState('Upload Image');

  const toast = useToast();

  //// SUBMIT///////////////////
  async function submitHandler(e) {
    e.preventDefault();
    ///////// INFORMATION UPLOAD /////////////////
    const body = {
      title: titleState,
      description: descInputRef.current.value,
      rating: ratingState,
      ingredients: ingredientStore,
      url: imageURL
    };

    const res = await fetch('http://localhost:3000/api/cocktails', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    if (res.status === 400) {
      toast({
        title: 'Adding Failed! ',
        description: 'Your drink has not been added',
        status: 'error',
        duration: 2000,
        isClosable: true
      });
      return;
    }
    toast({
      title: 'Cocktail Added',
      description: 'Your drink has been added to our database.',
      status: 'success',
      duration: 2000,
      isClosable: true
    });

    Router.push('/');
  }
  ///////// END OF SUBMIT FUNCTION ///////////

  /// SEND IMAGE TO BACKEND //////////
  const uploadImage = async (base64EncodedImage) => {
    try {
      setIsUploading(true);
      const res = await axios.post('/api/images', { data: base64EncodedImage });
      setImageURL(res.data.url);
      setIsUploading(false);
      setUploadBtnText('Image Uploaded');
    } catch (error) {
      console.log('There was an error: ' + error);
    }
  };

  // Title and Rating change
  const handleChange = (newValue) => setTitleState(newValue?.label);
  const ratingChanged = (e) => setRatingState(e);

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

  function handleFileUpload(e) {
    const image = e.target.files[0];
    previewImage(image);
  }

  function previewImage(image) {
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = () => {
      setImgPreviewSrc(reader.result);
    };
  }

  return (
    <>
      <form onSubmit={submitHandler} className={styles.formContainer}>
        <Text fontSize='3xl'>Enter a New Cocktail</Text>
        <FormControl isRequired className={styles.fileUploadContainer}>
          <FormLabel htmlFor='Title'>Title</FormLabel>
          <Creatable instanceId isClearable options={cocktailOptions} onChange={handleChange} isRequired />
          <FormHelperText>Please enter an accurate title.</FormHelperText>
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor='rating'>Rating</FormLabel>
          <ReactStars count={5} onChange={ratingChanged} size={24} activeColor='#ffd700' />
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
        <FormControl className={styles.fileUploadContainer}>
          <FormLabel htmlFor='Instructions'>Instructions</FormLabel>
          <Textarea id='Instructions' placeholder='Instructions' ref={descInputRef} />
          <FormHelperText>Please enter detailed instructions.</FormHelperText>
        </FormControl>
        <FormControl className={styles.fileUploadContainer}>
          <FormLabel htmlFor='Instructions'>Upload Photo</FormLabel>
          {imgPreviewSrc && <img src={imgPreviewSrc} alt='Image Preview' style={{ height: '200px', margin: 'auto', padding: '10px' }} />}
          {!imgPreviewSrc && (
            <label className={styles.inputLabel}>
              <input type='file' onChange={handleFileUpload} />
            </label>
          )}
          {imgPreviewSrc && (
            <div className={styles.loadingBtnCtn}>
              <Button
                isLoading={isUploading}
                colorScheme='blue'
                className={styles.uploadBtn}
                type='button'
                leftIcon={<FaUpload />}
                onClick={uploadImage.bind({}, imgPreviewSrc)}>
                {uploadBtnText}
              </Button>
            </div>
          )}
        </FormControl>
        <button type='submit' className={styles.submitBtn}>
          Submit
        </button>
      </form>
    </>
  );
}
