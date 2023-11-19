import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import Profile from './components/Profile';
import Skill from './components/Skill'
import Portfolio from './components/Portfolio1';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
function App() {
  return (
    <>
    <Router>
       <Navbar />
       <Hero />
       <Profile />
       <Testimonials />
       <Skill />
       <Portfolio />
       <Contact />
       <Footer />
    </Router>
    
    </>
  );
}

export default App;
