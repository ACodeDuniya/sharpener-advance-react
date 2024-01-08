import React, {useState} from 'react';
import UserForm from './Components/Users/UserForm';
import UsersList from './Components/Users/UsersList';

function App() {
  const[usersList, setUsersList] = useState([]);
  const userDetailsHandler = (uName , uAge) => {
    setUsersList( (prevUsersList) => {
      return[...prevUsersList, {name : uName, age : uAge, id: Math.random().toString()}];
    });
  };

  return (
    <div>
      <UserForm onUserForm={userDetailsHandler} />
      <UsersList users= {usersList} />
    </div>
  );
}

export default App;
