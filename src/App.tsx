import {Routes as Router, Route} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import { Navigation } from './utils/navigation';

function App() {

  return (
    <>
      <Navbar />
      <Router>
        <Route path={Navigation.home} element={<Home />}/>
        <Route path={Navigation.contact} element={<Contact />}/>
      </Router>
      <Footer />
    </>
  )
}

export default App
