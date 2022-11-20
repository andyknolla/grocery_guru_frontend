import GroceryItem from './GroceryItem';
import './GroceryItemsList.css';

const GroceryItemsList = (props) => {
  if (props.filteredItems.length === 0) {
    return <h2 className='grocery-items-list__fallback'>No items found.</h2>;
  } else {
    return (
      <ul className='grocery-items-list'>
        {props.filteredItems.map((item) => (
          <GroceryItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          ></GroceryItem>
        ))}
      </ul>
    );
  }
};

export default GroceryItemsList;
