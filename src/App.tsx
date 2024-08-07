import { useEffect } from 'react';
import {Routes as Router, Route, useLocation} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import { Navigation } from './utils/navigation';
import Service from './pages/Service';
import About from './pages/About';
import Head from './components/Head';
import Faqs from './pages/Faqs';
import Whatsapp from './components/Whatsapp';
import { PHONE } from './helpers/constants';
import Posts from './pages/Posts';
import Post from './pages/Post';
import { initGA, logPageView } from './utils/analytics';

function App() {
  const location = useLocation()

  useEffect(() => {
    initGA();
  }, []);
  
  useEffect(() => {
    logPageView();
  }, [location]);

  return (
    <Head>
      <Navbar />
      <Router>
        <Route path={Navigation.home} element={<Home />}/>
        <Route path={`${Navigation.contact}/:id?`} element={<Contact />}/>
        <Route path={Navigation.about} element={<About />} />
        <Route path={`${Navigation.service}/:id`} element={<Service />} />
        <Route path={Navigation.faq} element={<Faqs />} />
        <Route path={Navigation.post} element={<Posts />} />
        <Route path={`${Navigation.post}/:id`} element={<Post />} />
      </Router>
      <div className="w-auto m-5 fixed right-0 bottom-0 flex justify-end">
        <Whatsapp tel={PHONE} />
      </div>
      <Footer />
    </Head>
  )
}

export default App;
