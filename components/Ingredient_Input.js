import { Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper } from '@chakra-ui/react';
import styles from '../styles/page/New_Item_Page.module.css';
import { useEffect, useState } from 'react';

const IngredientInput = ({ store }) => {
  const [amount, setAmount] = useState(0);
  const [title, setTitle] = useState('');

  useEffect(() => {
    store(amount, title);
  }, [store, amount, title]);

  return (
    <div className={styles.numberInputContainer}>
      <NumberInput
        allowMouseWheel
        step={5}
        size='md'
        maxW='24'
        defaultValue={0}
        min={0}
        onChange={(input) => setAmount(parseInt(input))}
        value={amount}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>

      <Input
        id='ingredient'
        value={title}
        placeholder='Ingredient'
        className={styles.numberInputTitle}
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>
  );
};

export default IngredientInput;
