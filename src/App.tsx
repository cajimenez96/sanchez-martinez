import {Routes as Router, Route} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Home from './pages/Home';

function App() {

  return (
    <>
      <Navbar />
      <Router>
        <Route path='/' element={<Home />}/>
    </Router>
    </>
  )
}

export default App
