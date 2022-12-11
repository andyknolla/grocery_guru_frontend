import styles from '../styles/NewItem.module.css';

const NewItemOption = (props) => {
  function toggle() {
    props.onToggle(!props.showAddItemForm);
  }

  return (
    <div className={styles.new_item_option}>
      <button onClick={toggle}>Add an item</button>
    </div>
  );
};

export default NewItemOption;
