import React, { useContext } from 'react';
import { AuthContext, AuthProvider } from './components/Auth';
import { AuthenticatedApp } from './components/AuthenticatedApp';
import { UnAuthenticatedApp } from './components/UnAuthenticatedApp';

function App() {
  const { user } = useContext(AuthContext);

  return (
    <AuthProvider>
      <div className="container">
        <h1>💬 Chat Room</h1>
        {user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
      </div>
    </AuthProvider>
  );
}

export default App;