import Item from './Item';
import styles from '../styles/ItemsList.module.css';

const ItemsList = (props) => {
  if (props.filteredItems.length === 0) {
    return <h2 className={styles.items_list__fallback}>No items found.</h2>;
  } else {
    return (
      <ul className={styles.items_list}>
        {props.filteredItems.map((item) => (
          <Item
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          ></Item>
        ))}
      </ul>
    );
  }
};

export default ItemsList;
