import About from './components/About';
import Header from './components/Header';
import Hero from './components/Hero';
import Skill from './components/Skill';
import Projetcs from './components/Projetcs';
import Contact from './components/Contact';
import './style/style.css';
import 'aos/dist/aos.css';
import "react-circular-progressbar/dist/styles.css";

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <main id='main'>
        <About/>
        <Skill/>
        <Projetcs/>
        <Contact/>
      </main>
    </div>
  );
}

export default App;
