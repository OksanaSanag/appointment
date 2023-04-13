import React from 'react';
import { Routes, Route} from 'react-router-dom';
import './App.css'; 

//Components
import {
  Header,
  Footer
} from './components';

//pages
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import NotFound from './pages/NotFound';



function App() {
  return (
      <div>
        <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/doctors' element={<Doctors />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        <Footer />
      </div>
  );
}

export default App;
