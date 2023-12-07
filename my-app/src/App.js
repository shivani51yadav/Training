import './App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Name from './Name';
import Skills from './Skills';
import Projects from './Projects';
import P_info from './P_info';
import Marks from './Marks';
import { Routes,Route } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Registration from './Registration';
import Login from './Login';

function App() {
  return(
  <div>
    <Header/>

    <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/reg" element={<Registration/>} />
      <Route path="/login" element={<Login/>} />

    </Routes>

    {/* <Main/> */}
    {/* <Registration/> */}
    {/* <Login/> */}
    {/* <About/> */}

    <Footer/>
  </div>
  )
}

export default App;
