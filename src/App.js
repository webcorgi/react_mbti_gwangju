// import logo from './logo.svg';
import './css/App.css';

import Home from './home/Home';
import { useEffect, useState } from 'react';
import {
  Routes,
  Route,
  Link,
  BrowserRouter,
} from 'react-router-dom';
import ScrollTop from './include/ScrollTop';


function App() {

  return (
    <BrowserRouter>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />} exact={true} />
        {/* <Route path="/login" element={<Login />} />  */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;