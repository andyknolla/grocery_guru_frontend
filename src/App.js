import { useState } from 'react';
import Items from './Items/components/Items';
import NewItem from "./Items/components/NewItem";

const DUMMY_ITEMS = [
  {
    id: 'e1',
    title: 'Bread',
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
  const [items, setItems] = useState(DUMMY_ITEMS);

  const handleAddItem = function (newExpense) {
    setItems((prevState) => {
      return [newExpense, ...prevState];
    });
  };

  return (
    <div>
      <NewItem onAddItem={handleAddItem} />
      <Items items={items} />
    </div>
  );
}

export default App;
