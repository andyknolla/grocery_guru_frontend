import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { useState } from 'react';
import Items from './Items/components/Items';
import NewItem from './Items/components/NewItem';
import Users from './User/pages/Users';
import NewUser from './User/pages/NewUser';

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

const DUMMY_USERS = [
  {
    id: 1,
    name: 'Jeni',
    location: 'Boulder',
  },
  {
    id: 2,
    name: 'Jaimie',
    location: 'Denver',
  },
  {
    id: 3,
    name: 'Mike',
    location: 'Denver',
  },
];

function App() {
  const [items, setItems] = useState(DUMMY_ITEMS);
  const [users, setUsers] = useState(DUMMY_USERS);

  const handleAddItem = function (newExpense) {
    setItems((prevState) => {
      return [newExpense, ...prevState];
    });
  };

  const handleAddUser = function (newUser) {
    var uniqueId = Math.random().toString();
    newUser.id = uniqueId;

    setUsers((prevState) => {
      return [newUser, ...prevState];
    });
  };

  return (
    <Router>
      <Switch>
        <Route
          path='/users'
          exact
        >
          <Users users={users} />
        </Route>
        <Route path='/user/new'>
          <NewUser
            users={users}
            onAddUser={handleAddUser}
          />
        </Route>
        <Route
          path='/items'
          exact
        >
          <div>
            <NewItem onAddItem={handleAddItem} />
            <Items items={items} />
          </div>
        </Route>
        <Redirect to='/' />
      </Switch>
    </Router>
  );
}

export default App;
