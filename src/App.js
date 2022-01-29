import logo from './media/portrait.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Matteo Nunez
        </p>
        <p>
          Software Engineering student
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/matteo-nunez-a27918139/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn profile
        </a>
      </header>
    </div>
  );
}

export default App;
