import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { HashRouter, Routes, Route } from "react-router-dom";
import Wiki from './components/Wiki';

function App() {
  return (
    <>
    <HashRouter >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wiki" element={<Wiki />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
