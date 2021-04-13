import React from 'react';
import logo from './logo.svg';
import './App.css';
import Index from './components';
import { connect, Provider } from 'react-redux';
import { createStore } from 'redux'

function App() {
  return (
    <Index />
  );
}
export default App;
