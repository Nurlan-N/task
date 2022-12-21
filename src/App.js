import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HomePage } from './pages/HomePage';
import { About } from './pages/About';
import { Expensive } from './pages/Expensive';
import { useState, useEffect} from 'react';
import axios from 'axios'
import PrList from './components/PrList';





function App() {
  const [category, setCategory] = useState([])

   
    useEffect(() => {
        const getCategory = async () => {
            setCategory(await axios.get('https://fakestoreapi.com/products/categories'))
        }
        getCategory();
    }, [])


  return (
    <div className="App ">
      <BrowserRouter>
        <Header/>
        <PrList categories = {category.data} />
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/expensive' element={<Expensive />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
