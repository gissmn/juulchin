import "./App.css";
import logo from "./logo.svg";

function App() {
  return (
    <div>
      <div className="navbar">
        <img src={logo} className="logo" alt="logo" />
        <div id="navMenu">
          <ul className="menu">
            <li>Tours</li>
            <li>Monthly Special tours</li>
            <li>Festival & Events</li>
            <li>Tailor Made</li>
            <li>Blog</li>
            <li>Log in</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
