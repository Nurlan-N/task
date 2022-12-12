import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HomePage } from './pages/HomePage';
import { About } from './pages/About';
import { Expensive } from './pages/Expensive';
import { useState, useEffect} from 'react';
import axios from 'axios'




function App() {
  const [pr,setPr] = useState([])

  useEffect(() => {
    const getPr = async() => {
      const respons = await axios.get('https://fakestoreapi.com/products')
      setPr(respons.data)
    }
    getPr();
  }, [])
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<HomePage products ={pr}/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/expensive' element={<Expensive products ={pr} />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
