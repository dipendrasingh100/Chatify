import React from 'react';
import './App.css';
import Login from './components/Login';
import useLocalStorage from './hooks/useLocalStorage';
import Dashboard from './components/Dashboard';
import { ContactsProvider } from './contexts/ContactsProvider';
import { ConversationProvider } from './contexts/ConversationProvider';

function App() {
  const [loginId, setId] = useLocalStorage("id");
  const dashboard = (
    <ContactsProvider>
      <ConversationProvider>
        <Dashboard id={loginId}/>
      </ConversationProvider>
    </ContactsProvider>
  )
  return (
    loginId ? dashboard  : <Login onIdSubmit={setId}/>
  );
}

export default App;
