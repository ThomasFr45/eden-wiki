import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Details from './components/Details';
import { HashRouter, Routes, Route } from "react-router-dom";
import Wiki from './components/Wiki';
import MyContext from "./context/MyContext";
import { useState } from 'react';

const App = () => {
  const [language, setLanguage] = useState(localStorage.getItem('language'));

  return (
    <>
    <MyContext.Provider
        value={{
          language: language,
        }}
      >
    <HashRouter >
        <Navbar setLanguage={setLanguage}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wiki" element={<Wiki />} />
          <Route path="/wiki/:boss" element={<Details />} />
        </Routes>
      </HashRouter>
      </MyContext.Provider>
    </>
  );
}

export default App;
