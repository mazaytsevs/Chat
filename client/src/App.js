import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Registration from './components/Forms/SignUp/SignUp';
import Navbar from './components/Nav/Navbar';

function App() {
  return (

    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/signup" element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App;
