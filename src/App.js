import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HomePage } from './pages/HomePage';
import { About } from './pages/About';
import { Expensive } from './pages/Expensive';





function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <Header/>
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
