import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Eventdetail from './Pages/Eventdetailpage';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/eventdetail/:id' element={<Eventdetail/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
