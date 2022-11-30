import { useState } from 'react';
import NewItemForm from './NewItemform';
import NewItemOption from './NewItemOption';

import '../styles/NewItem.css';

const NewItem = (props) => {
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
    <div className='new-item'>
      {showAddItemForm ? (
        <NewItemForm
          onSaveItemData={handleItemUpdate}
          showAddItemForm={showAddItemForm}
          onToggle={toggleFormHandler}
        />
      ) : (
        <NewItemOption
          showItemForm={showAddItemForm}
          onToggle={toggleFormHandler}
        />
      )}
    </div>
  );
};

export default NewItem;
