import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Templates from './components/Templates/Templates';
import NotFound from './pages/NotFound/Notfound';
import Favorite from './pages/Favorite/Favorite';
import Planets from './pages/Planets/Planets';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/*' element= {<NotFound />} />
      <Route element={<Templates />}>
        <Route path='/' element={<Planets />} />
        <Route path='/ouruniverse/favorite' element={<Favorite />} />
        </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
