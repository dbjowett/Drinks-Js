import { Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper } from '@chakra-ui/react';
import styles from '../styles/page/New_Item_Page.module.css';
import { useState } from 'react';

const IngredientInput = () => {
  const [amount, setAmount] = useState('10');

  return (
    <div className={styles.numberInputContainer}>
      <NumberInput size='md' maxW='24' defaultValue={0} min={0} onChange={(input) => setAmount(input)} value={amount}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>

      <Input id='ingredient' placeholder='Title' className={styles.numberInputTitle} />
    </div>
  );
};

export default IngredientInput;
