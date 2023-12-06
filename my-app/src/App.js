import './App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Name from './Name';
import Skills from './Skills';
import Projects from './Projects';
import P_info from './P_info';
import Marks from './Marks';

function App() {
  return(
  <div>
    <Name/>
    <Marks/>
    <Skills/>
    <Projects/>
    <P_info/>
  </div>
  )
}

export default App;
