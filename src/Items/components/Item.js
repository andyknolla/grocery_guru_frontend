import './Item.css';
import Card from '../../Shared/UI/Card';

const Item = (props) => (
  <li>
    <Card className='item'>
      <div className='item__description'>
        <h2>{props.title}</h2>
        <div className='item__price'>{props.amount}</div>
      </div>
    </Card>
  </li>
);

export default Item;
