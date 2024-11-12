import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/sobre';
import Footer from './components/Footer';
import Consultor from './pages/consultor';
import Parceiro from './pages/parceiro';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/consultor" element={<Consultor />} />
        <Route path="/Parceiro" element={<Parceiro />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
