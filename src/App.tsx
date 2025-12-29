import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import WealthManagement from './pages/WealthManagement';
import PlatinumAccount from './pages/PlatinumAccount';
import DiamondAccount from './pages/DiamondAccount';
import GoldAccount from './pages/GoldAccount';
import GMANote from './pages/GMANote';
import FinancialAdvisory from './pages/FinancialAdvisory';
import Contact from './pages/Contact';
import GetStarted from './pages/GetStarted';
import BookConsultation from './pages/BookConsultation';
import Resources from './pages/Resources';
import './App.css';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/wealth-management" element={<WealthManagement />} />
        <Route path="/wealth-management/platinum" element={<PlatinumAccount />} />
        <Route path="/wealth-management/diamond" element={<DiamondAccount />} />
        <Route path="/wealth-management/gold" element={<GoldAccount />} />
        <Route path="/wealth-management/gma-note" element={<GMANote />} />
        <Route path="/financial-advisory" element={<FinancialAdvisory />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/book-consultation" element={<BookConsultation />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
