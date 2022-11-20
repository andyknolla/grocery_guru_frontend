import { useState } from 'react';
import NewGroceryItemForm from './NewGroceryItemform';
import NewGroceryItemOption from './NewGroceryItemOption';

import './NewGroceryItem.css';

const NewGroceryItem = (props) => {
  const [showAddItemForm, setShowAddItemForm] = useState(false);

  function toggleFormHandler(bool) {
    setShowAddItemForm(bool);
  }

  function handleItemUpdate(data) {
    const dataWithId = {
      ...data,
      id: Math.random().toString(),
    };
    props.onAddItem(dataWithId);
  }

  return (
    <div className='new-expense'>
      {showAddItemForm ? (
        <NewGroceryItemForm
          onSaveItemData={handleItemUpdate}
          showAddItemForm={showAddItemForm}
          onToggle={toggleFormHandler}
        />
      ) : (
        <NewGroceryItemOption
          showItemForm={showAddItemForm}
          onToggle={toggleFormHandler}
        />
      )}
    </div>
  );
};

export default NewGroceryItem;
