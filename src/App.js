import React from 'react';
import Header from './components/layout/Header';
import BookShelf from './components/BookShelf';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <BookShelf />
    </div>
  );
}

export default App;
