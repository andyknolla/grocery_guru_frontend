import NewUserForm from '../components/NewUserForm';
import UserList from '../components/UserList';
import classes from '../styles/NewUser.module.css';

const NewUser = (props) => {
  return (
    <div>
      <div className={classes.new_user}>
        <NewUserForm onSaveUserData={props.onAddUser}/>
      </div>
      <UserList users={props.users} />
    </div>
  );
};

export default NewUser;
