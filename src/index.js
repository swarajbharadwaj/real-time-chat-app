import React from 'react';
import { AuthProvider } from './components/Auth';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { EmailAuthProvider } from 'firebase/auth';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider> <App/></AuthProvider>

);



