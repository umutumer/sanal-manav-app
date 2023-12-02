import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AdminHome from './Pages/Admin/AdminHome';
import AdminFruits from './Pages/Admin/AdminFruits';
import AdminVegetables from './Pages/Admin/AdminVegetables';
import Home from './Pages/Site/Home';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/admin' element={<AdminHome />} />
      <Route path='/admin/fruits' element={<AdminFruits />} />
      <Route path='/admin/vegetables' element={<AdminVegetables />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
