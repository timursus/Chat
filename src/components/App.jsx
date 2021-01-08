import React, { useState } from 'react';
import cookies from 'js-cookie';
import Chat from './Chat.jsx';
import UsernameForm from './UsernameForm.jsx';
import UsernameContext from '../app/context.js';

const App = () => {
  const [username, setUserName] = useState(cookies.get('username'));

  const saveUserName = (name, remember) => {
    const cookieAttributes = remember ? { expires: 42 } : {};
    cookies.set('username', name, cookieAttributes);
    setUserName(name);
  };

  if (username) {
    return (
      <UsernameContext.Provider value={username}>
        <Chat />
      </UsernameContext.Provider>
    );
  }
  return <UsernameForm saveUserName={saveUserName} />;
};

export default App;
