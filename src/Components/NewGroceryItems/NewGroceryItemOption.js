import './NewGroceryItem.css';

const NewGroceryItemOption = (props) => {
  function toggle() {
    props.onToggle(!props.showAddGroceryItemForm);
  }

  return (
    <div className='new-grocery-item-option'>
      <button onClick={toggle}>Add a grocery item</button>
    </div>
  );
};

export default NewGroceryItemOption;
