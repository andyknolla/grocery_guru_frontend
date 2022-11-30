import '../styles/NewItem.css';

const NewItemOption = (props) => {
  function toggle() {
    props.onToggle(!props.showAddItemForm);
  }

  return (
    <div className='new-item-option'>
      <button onClick={toggle}>Add an item</button>
    </div>
  );
};

export default NewItemOption;
