import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Templates from './components/Templates/Templates';
import NotFound from './pages/NotFound/Notfound';
import Planets from './pages/Planets/Planets';
import OurUniverseRoutes from './pages/Routes/OurUniverseRoutes';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/*' element= {<NotFound />} />
      <Route element={<Templates />}>
        <Route path='/' element={<Planets />} />
        <Route path='/ouruniverse/*' element={<OurUniverseRoutes/>} >
          </Route>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
