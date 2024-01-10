import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName,uCollege, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, college : uCollege, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>

    // we can use fragments also :- Fragments are an empty wrapper components. It doesn't render any real Html element to the dom. But, it fulfills React's/JSX' requirement. Of having only one root element<> </>
    // or, like this <React.Fragment> or <Fragment>
  );
}

export default App;
