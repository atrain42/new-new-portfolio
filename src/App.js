import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Home from './pages/Home'
import Footage from "./pages/Footage";
// import Footer from "./layout/footer/Footer";

import './App.css'

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className='App'>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='footage' element={<Footage />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  )
}

export default App;
