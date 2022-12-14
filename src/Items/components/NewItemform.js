import { useState } from 'react';
import styles from '../styles/NewItemForm.module.css';

const NewItemForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value);
  }
  function amountChangeHandler(event) {
    setEnteredAmount(event.target.value);
  }
  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);
  }
  function toggleHandler() {
    props.onToggle(!props.showAddItemForm);
  }
  function handleSubmit(event) {
    event.preventDefault();
    const itemData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveItemData(itemData);
    props.onToggle(!props.showItemForm);

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.new_item__controls}>
        <div className={styles.new_item__control}>
          <label>Title</label>
          <input
            type='text'
            onChange={titleChangeHandler}
            value={enteredTitle}
          ></input>
        </div>
        <div className={styles.new_item__control}>
          <label>Amount</label>
          <input
            type='number'
            min='0.00'
            step='0.01'
            value={enteredAmount}
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className={styles.new_item__control}>
          <label>Date</label>
          <input
            type='date'
            onChange={dateChangeHandler}
            value={enteredDate}
          ></input>
        </div>
      </div>
      <div className={styles.new_item__actions}>
        <button onClick={toggleHandler}>Cancel</button>
        <button type='submit'>Enter Expense</button>
      </div>
    </form>
  );
};

export default NewItemForm;
