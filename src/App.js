import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Menu from './Pages/Menu';
import { Box } from '@mui/material';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';




function App() {
  return (
    <div>
      <BrowserRouter>
      <Box>
        <Navbar />
      </Box>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />}/>
        <Route exact path="/menu" element={<Menu />}/>
        </Routes>
        <Box>
        <Footer />
      </Box>
        </BrowserRouter>
    </div>
    );
  
}

export default App;
