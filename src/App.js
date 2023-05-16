import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomeDash from './components/HomeDash';
import BlogForm from './components/BlogForm';
import SideNavBar from './components/SideNavBar';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Tooltip } from '@mui/material';
import { useState } from 'react';

function App() {
  const [sideDrawer, setSideDrawer] = useState(false);
  return (
    <div className="App">
      <Tooltip title="Menu"  arrow >
        <Button style={{ margin:1, color:'#1F1D2C' }} onClick={() => setSideDrawer(true)} >
          <MenuIcon fontSize='large' />
        </Button>
      </Tooltip>
        
    <SideNavBar open={sideDrawer} onclick={() => setSideDrawer(false)} />

    <Routes>
      <Route path='/' element={<HomeDash/>} ></Route>

      <Route path='/form' element={ <BlogForm/> } ></Route>
    </Routes>
    </div>
  );
}

export default App;
