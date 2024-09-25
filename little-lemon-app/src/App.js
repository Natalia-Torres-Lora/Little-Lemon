import './App.css';
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";

import Nav from './components/Navigation';
import Header from './components/Header';
import Footer from './components/Footer';

import ReservationPage from './pages/ReservationPage';
import PaymentPage from './pages/PaymentPage';
import ConfirmationPage from './pages/ConfirmationPage'
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <>
      <Nav/>
      {/* <Header/> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reservation" element={<ReservationPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
      <Footer/>
      </>
    </Router>

  );
}

export default App;
