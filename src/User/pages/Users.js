import UserList from '../components/UserList';

const Users = (props) => {
  return (
    <UserList users={props.users} />
  )
}

export default Users;