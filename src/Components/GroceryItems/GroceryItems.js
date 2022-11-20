import { useState } from 'react';
// import ExpensesFilter from '../ExpensesFilter';
import GroceryItemsList from './GroceryItemsList';
// import ExpensesChart from './ExpensesChart';

import Card from '../UI/Card';
import './GroceryItems.css';

const GroceryItems = (props) => {
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
      <Card className='grocery-items'>
{/*         <ExpensesFilter
          filterValue={filterValue}
          onUpdateFilter={handleFilterUpdate}
        />
        <ExpensesChart expenses={filteredExpenses} />
 */}        <GroceryItemsList filteredItems={props.groceryItems} />
      </Card>
    </div>
  );
};

export default GroceryItems;
