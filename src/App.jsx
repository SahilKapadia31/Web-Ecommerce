import './App.css'
import Header from './Componants/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import CategoryBar from './Componants/Header/CategoryBar';
import Listing from './Componants/Body/Listing';
import Home from './Componants/Home'
import Productpage from './Componants/Body/Productpage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Productpage/:id' element={<Productpage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
