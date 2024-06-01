import './App.css'
import React from 'react';
import Header from './components/Header';
import Home from './components/Home';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Home />
      </main>
    </div>
  );
};


export default App
