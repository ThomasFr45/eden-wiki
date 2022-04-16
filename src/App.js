import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wiki from './components/Wiki';

function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wiki" element={<Wiki />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
