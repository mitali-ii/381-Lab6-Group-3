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
      <Home title="Home Page" description="Welcome to our website"></Home>
      <About title="About Us" description="We are passionate about delivering quality experiences" ></About>
      <Contacts title="Contact Us" description="Feel free to reach out to us via email or phone"></Contacts>
    </div>
  );
}

export default App;
