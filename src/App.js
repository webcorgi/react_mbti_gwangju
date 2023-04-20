// import logo from './logo.svg';
import { useEffect, useState } from 'react';

import 'css/App.css';
import Home from 'home/Home';
import {
  Routes,
  Route,
  Link,
  BrowserRouter,
} from 'react-router-dom';
import ScrollTop from 'include/ScrollTop';


function App() {

  return (
    <BrowserRouter>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />} exact={true} />
        {/* <Route path="/test" element={<Test />} />  */}
        {/* <Route path="/intro" element={<Intro />} />  */}
        {/* <Route path="/trip" element={<Trip />} />  */}
        {/* <Route path="/trip" element={<Test />} />  */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;