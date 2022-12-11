import { useState } from 'react';
// import ExpensesFilter from '../ExpensesFilter';
import ItemsList from './ItemsList';
// import ExpensesChart from './ExpensesChart';

import Card from '../../Shared/UI/Card';
import styles from '../styles/Items.module.css';

const Items = (props) => {
  // const [filterValue, setFilterValue] = useState('all');

/*   function handleFilterUpdate(data) {
    setFilterValue(data);
  } */

/*   const filteredGroceryItems = props.expenses.filter((expense) => {
    return filterValue !== 'all'
      ? expense.date.getFullYear().toString() === filterValue
      : true;
  });
 */
  return (
    <div>
      <Card className={styles.items}>
{/*         <ExpensesFilter
          filterValue={filterValue}
          onUpdateFilter={handleFilterUpdate}
        />
        <ExpensesChart expenses={filteredExpenses} />
 */}        <ItemsList filteredItems={props.items} />
      </Card>
    </div>
  );
};

export default Items;
