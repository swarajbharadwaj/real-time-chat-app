import { AuthContext } from './components/Auth';
import './App.css';
import React from 'react';
import {AuthenticatedApp} from './components/AuthenticatedApp'
import {UnAuthenticatedApp} from './components/UnAuthenticatedApp'
function App() {
  
  const user = React.useContext(AuthContext);
  return (
   
    <div className="container">
    <h1>💬 Chat Room</h1>
    {user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
</div>
  );
}

export default App;
