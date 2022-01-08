import "./App.css";

import NavBar from "./components/NavBar";
import Slide from "./components/Slide";
function App() {
  return (
    <div>
      <NavBar></NavBar>
      <div className="Main-container">
        <Slide></Slide>
      </div>
    </div>
  );
}

export default App;
