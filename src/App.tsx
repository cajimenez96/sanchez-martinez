import {Routes as Router, Route} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import { Navigation } from './utils/navigation';
import Service from './pages/Service';
import About from './pages/About';
import Head from './components/Head';

function App() {
  return (
    <Head>
      <Navbar />
      <Router>
        <Route path={Navigation.home} element={<Home />}/>
        <Route path={`${Navigation.contact}/:id?`} element={<Contact />}/>
        <Route path={Navigation.about} element={<About />} />
        <Route path={`${Navigation.service}/:id`} element={<Service />} />
      </Router>
      <Footer />
    </Head>
  )
}

export default App;
