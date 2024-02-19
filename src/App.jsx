import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Templates from './components/Templates/Templates';
import NotFound from './pages/NotFound/Notfound';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/*' element= {<NotFound />} />
      <Route path='/' element={<Templates />} />
      <Route path='/quiz/new' element={<div>New Quiz logic</div>} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
