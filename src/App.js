import { useState } from 'react';
import GroceryItems from './Components/GroceryItems/GroceryItems';
import NewGroceryItem from "./Components/NewGroceryItems/NewGroceryItem";

const DUMMY_GROCERY_ITEMS = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [groceryItems, setGroceryItems] = useState(DUMMY_GROCERY_ITEMS);

  const handleAddGroceryItem = function (newExpense) {
    setGroceryItems((prevState) => {
      return [newExpense, ...prevState];
    });
  };

  return (
    <div>
      <NewGroceryItem onAddItem={handleAddGroceryItem} />
      <GroceryItems groceryItems={groceryItems} />
    </div>
  );
}

export default App;
