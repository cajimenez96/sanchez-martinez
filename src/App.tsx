import {Routes as Router, Route} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Navbar />
      <Router>
        <Route path='/' element={<Home />}/>
      </Router>
      <Footer />
    </>
  )
}

export default App
