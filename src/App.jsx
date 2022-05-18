// import logo from './logo.svg';
// import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import {
  Box,
  Button,
  AppBar,
  Grid,
  Toolbar,
  Typography,
  IconButton
} from '@mui/material'
import Navbar from './components/Navbar';
import Option from './components/Option';
import Hutang from "./components/Hutang";
import PenjualanPembelian from "./components/PenjualanPembelian";
import KasBank from "./components/KasBank";

function App() {
  return (
    <Box>
      <Navbar/>
      <Box sx={{ mx: 2}}>
        <Option/>
        <Hutang/>
        <PenjualanPembelian/>
        <KasBank/>
      </Box>
    </Box>
  );
}

export default App;
