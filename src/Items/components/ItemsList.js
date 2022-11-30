import Item from './Item';
import './ItemsList.css';

const ItemsList = (props) => {
  if (props.filteredItems.length === 0) {
    return <h2 className='items-list__fallback'>No items found.</h2>;
  } else {
    return (
      <ul className='items-list'>
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
