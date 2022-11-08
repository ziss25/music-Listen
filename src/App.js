import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <section className="parent px-16 py-5 ">
      <Header />
      <Content />
      <Footer />
    </section>
  );
}

export default App;
