import React from 'react';
import './App.css';
import Login from './components/Login';
import useLocalStorage from './hooks/useLocalStorage';
import Dashboard from './components/Dashboard';

function App() {
  const [loginId, setId] = useLocalStorage("id");
  return (
    loginId ? <Dashboard id={loginId}/>  : <Login onIdSubmit={setId}/>
  );
}

export default App;
