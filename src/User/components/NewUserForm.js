import { useState } from 'react';
import Button from '../../Shared/UI/Button';

import styles from '../styles/NewUserForm.module.css';

const NewUserForm = (props) => {
  const [enteredName, setEnteredTitle] = useState('');
  const [enteredlocation, setEnteredAmount] = useState('');
  const [invalidInput, setInvalidInput] = useState(false);

  function nameChangeHandler(event) {
    setEnteredTitle(event.target.value);
  }
  function locationChangeHandler(event) {
    setEnteredAmount(event.target.value);
  }
  function toggleHandler() {
    // TODO: go back to home page?
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (enteredName.trim().length === 0 || enteredlocation.trim().length === 0) {
      setInvalidInput(true);
      return;
    }
    const itemData = {
      name: enteredName,
      location: enteredlocation,
    };
    props.onSaveUserData(itemData);

    setEnteredTitle('');
    setEnteredAmount('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.new_user__controls}>
        <div className={styles.new_user__control}>
          <label>Name</label>
          <input
            className={invalidInput ? styles.error : ''}
            type='text'
            onChange={nameChangeHandler}
            value={enteredName}
          ></input>
        </div>
        <div className={styles.new_user__control}>
          <label>Location</label>
          <input
            type='text'
            value={enteredlocation}
            onChange={locationChangeHandler}
          ></input>
        </div>
      </div>
      <div className={styles.new_user__actions}>
        <Button onClick={toggleHandler}>Cancel</Button>
        <Button type={'submit'}>Create User</Button>
      </div>
    </form>
  );
};

export default NewUserForm;
