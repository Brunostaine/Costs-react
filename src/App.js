import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import NewProject from './components/pages/NewProject';
import Projects from './components/pages/Projects';

function App() {
  return (
    <Router>
        <Navbar />
            <Routes>
                    <Route exact path='/' element={<Home/>} />
                    <Route exact path='/projects' element={<Projects/>} />
                    <Route exact path='/company' element={<Company/>} />
                    <Route exact path='/contact' element={<Contact/>} />
                    <Route exact path='/newProject' element={<NewProject/>} />
            </Routes>
        <Footer />
    </Router>
  );
}

export default App;
