import Card from '../../Shared/UI/Card';
import classes from '../styles/UserList.module.css';

// TODO: make a User component for these list items
const UserList = (props) => {
  return (
    <Card>
      <ul className={classes.user_list}>
        {props.users.map((user) => {
          return (
            <li key={user.id}>
              {user.name}
              {user.location}
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UserList;
