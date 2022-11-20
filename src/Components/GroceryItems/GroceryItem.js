import './GroceryItem.css';
import Card from '../UI/Card';

const GroceryItem = (props) => (
  <li>
    <Card className='grocery-item'>
      <div className='grocery-item__description'>
        <h2>{props.title}</h2>
        <div className='grocery-item__price'>{props.amount}</div>
      </div>
    </Card>
  </li>
);

export default GroceryItem;
