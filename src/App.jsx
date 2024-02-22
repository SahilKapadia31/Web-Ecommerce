import './App.css'
import Header from './Componants/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import CategoryBar from './Componants/Header/CategoryBar';
import Listing from './Componants/Body/Listing';
import Home from './Componants/Home'
import Productpage from './Componants/Body/Productpage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Componants/Login & Signup/Login';
import Signup from './Componants/Login & Signup/Signup';



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/productpage/:id' element={<Productpage />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
