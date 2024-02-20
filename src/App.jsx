import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Templates from './components/Templates/Templates';
import NotFound from './pages/NotFound/Notfound';
import Planets from './pages/Planets/Planets';
import OurUniverseRoutes from './pages/Routes/OurUniverseRoutes';
import PlanetQuiz from './pages/PlanetQuiz/PlanetQuiz';

function App() {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/*' element= {<NotFound />} />
      <Route element={<Templates handleInputChange={handleInputChange} />}>
        <Route path='/' element={<Planets searchValue={searchValue} />} />
        <Route path='/planets/:id' element={<PlanetQuiz />} />
        <Route path='/ouruniverse/*' element={<OurUniverseRoutes/>} />
        </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
