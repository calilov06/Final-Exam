import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import AddPage from './pages/AddPage';
import Error from './pages/Error';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import DetailPage from './pages/DetailPage';

function App() {

  return (
    <>
    <Header />
     <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route  path='/addpage' element={<AddPage />}/>
      <Route  path='/detailpage' element={<DetailPage/>}/>
      <Route  path='*' element={<Error />}/>
     </Routes>
     <Footer />
    </>
  )
}

export default App
