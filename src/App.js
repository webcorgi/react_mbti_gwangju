// import logo from './logo.svg';
import { useEffect, useState } from 'react';

import 'css/App.css';
import Home from 'pages/Home';
import {
  Routes,
  Route,
  Link,
  BrowserRouter,
} from 'react-router-dom';
import ScrollTop from 'include/ScrollTop';
import Footer from 'include/Footer';
import Test from 'pages/Test';
import Result from 'pages/Result';


function App() {

  return (
    <BrowserRouter>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />} exact={true} />
        <Route path="/test" element={<Test />} /> 
        <Route path="/result" element={<Result />} /> 
        {/* <Route path="/trip" element={<Trip />} />  */}
        {/* <Route path="/trip" element={<Test />} />  */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;