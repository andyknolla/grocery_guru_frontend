import Card from '../../Shared/UI/Card';

import styles from '../styles/Item.module.css';

const Item = (props) => (
  <li>
    <Card className={styles.item}>
      <div className={styles.item__description}>
        <h2>{props.title}</h2>
        <div className={styles.item__price}>{props.amount}</div>
      </div>
    </Card>
  </li>
);

export default Item;
