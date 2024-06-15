import {Routes as Router, Route, useLocation} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import { Navigation } from './utils/navigation';
import Service from './pages/Service';
import { useEffect } from 'react';
import About from './pages/About';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <Router>
        <Route path={Navigation.home} element={<Home />}/>
        <Route path={Navigation.contact} element={<Contact />}/>
        <Route path={Navigation.about} element={<About />} />
        <Route path={`${Navigation.service}/:id`} element={<Service />} />
      </Router>
      <Footer />
    </>
  )
}

export default App;
