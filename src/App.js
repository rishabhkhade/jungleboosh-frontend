import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './component/header/Header';
import SellerHome from './pages/sellerHome/SellerHome';
import Footer from './component/footer/Footer';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Header />
        <Routes>
          <Route path='/' element={<SellerHome />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
