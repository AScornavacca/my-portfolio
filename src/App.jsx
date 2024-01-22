
import { NavBar } from "./components/NavBar";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Banner} from "./components/Banner"
import { Skills } from "./components/Skills";
import logo from './assets/img/logo.svg'
import { Footer } from "./components/Footer";
import { Contact } from "./components/Contact";
import {Projects} from './components/Projects'


function App() {
  return <div className="App">
    <NavBar />
    <Banner />
    <Skills />
    <Projects/>
    <Contact/>
    <Footer />

  
  </div>;
}

export default App;
