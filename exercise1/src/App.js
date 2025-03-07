import logo from './logo.svg';
import './App.css';
import About from'./About.js';
import Home from './Home.js';
import Contacts from './Contact.js';

function App() {
  var currentYear = new Date().getFullYear();
  var isLoggedIn = true;
  return (
    <div className="App">
      <h1>ENSF-381: Full Stack Web Development</h1>
      <p>React Components</p>
      <p>Current year: {currentYear}</p>
      <p>{isLoggedIn ? "Welcome back!" : "Please log in."}</p>
      <Home></Home>
      <About></About>
      <Contacts></Contacts>
    </div>
  );
}

export default App;
