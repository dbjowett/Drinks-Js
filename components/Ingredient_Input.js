import { NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper } from '@chakra-ui/react';
import styles from '/styles/component/Ingredient_Input.module.css';
import { useEffect, useState } from 'react';
import Creatable from 'react-select/creatable';
import { ingredientOptions } from '../utils/SelectOptions/ingredientNames';

const IngredientInput = ({ store }) => {
  const [amount, setAmount] = useState();
  const [title, setTitle] = useState('');

  useEffect(() => {
    store(amount, title);
  }, [store, amount, title]);

  return (
    <div className={styles.numberInputContainer}>
      <NumberInput
        allowMouseWheel
        step={0.5}
        defaultValue={1}
        precision={2}
        size='md'
        maxW='24'
        max={24}
        min={0}
        onChange={(input) => setAmount(input)}
        value={amount}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <div className={styles.ingredientSearch}>
        <Creatable instanceId isClearable width={100} options={ingredientOptions} onChange={(e) => setTitle(e?.label)} isRequired />
      </div>
    </div>
  );
};

export default IngredientInput;
